fat arrow:
() => {} --------------

<div>{ state.firstname }</div> -------------> state binding/model binding/ view binding

render() ------------ class component

retrun ------- function/pure ------->

this.state = {
 clientList: [],
 clientName: ""
} -----------------------------> class component


Function component
import React, {useState} from "react";
useState, useReducer ------------------ hooks
const [clientList, setClientList] = useState([{name: "testing", lname: "teaching", age: 20}])