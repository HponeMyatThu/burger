import React, { Component } from "react";

import Auxilitary from "../../hoc/Auxilitary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.4,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseStatus(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    this.setState({purchaseable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const priceAddition = INGREDIENT_PRICE[type];
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseStatus(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const priceDeduction = INGREDIENT_PRICE[type];
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseStatus(updatedIngredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
      console.log(disableInfo[key] <= 0);
    }
    return (
      <Auxilitary>
        <div>BurgerBuilder</div>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdd={this.addIngredientHandler}
          ingredientsRemove={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          ordered={this.purchasingHandler}
          purchaseable={this.state.purchaseable}
        />
      </Auxilitary>
    );
  }
}

export default BurgerBuilder;
