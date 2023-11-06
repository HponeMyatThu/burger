import React from "react";

import Auxilitary from "../../hoc/Auxilitary";
import classes from "../Layout/Layout.module.css";

const Layout = (props) => (
  <Auxilitary>
    <main className={classes.Content}>{props.children}</main>
  </Auxilitary>
);

export default Layout;
