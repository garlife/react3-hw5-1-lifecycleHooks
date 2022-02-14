import React from "react";
import "./style.css";
import ClassComponent from "./ClassComponent"

export default function App() {
  return (
    <div>
      <h3>Class Component</h3>
      <ClassComponent arg={0} />
    </div>
  );
}
