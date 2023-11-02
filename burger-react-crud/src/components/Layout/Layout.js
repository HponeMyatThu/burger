import React from "react";

import Auxilitary from "../../hoc/Auxilitary";
import classes from "../Layout/Layout.module.css";

const Layout = (props) => (
  <Auxilitary>
    <h1 className={classes.Content}>Hello</h1>
    <main className={classes.Content}>{props.children}</main>
  </Auxilitary>
);

export default Layout;
