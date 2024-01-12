import React from "react";
import styles from "./HelloWorld.module.css";
import classnames from "classnames";

const HelloWorld = () => {
  return <h2 className={classnames(styles.h2)}>Hello World</h2>;
};

export default HelloWorld;
