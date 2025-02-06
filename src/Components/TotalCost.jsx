import React , {Component, useState } from "react";

const TotalCost = (props) => {
   const total = props.selector.reduce((total , item) => total + item.price * item.quantity , 0);

   return total;
}

export default TotalCost;