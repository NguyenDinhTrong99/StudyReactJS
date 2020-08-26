import React from "react";
import main from "./scss/main.scss";

export default function Nested() {
  return (
    <div className="nested-parent">
      <div className="box-1">
        <div className="box-1-nested" />
      </div>
      <div className="box-2" />
    </div>
  );
}
