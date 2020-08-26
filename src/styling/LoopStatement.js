import React from "react";

export default function LoopStatement() {
  return (
    <div className="list-each">
      <span>Each</span>
      <div className="div-20">20%</div>
      <div className="div-50">50%</div>
      <div className="div-70">70%</div>
      <div className="div-100">100%</div>
      <span>Map</span>
      <div className="div-m-20">20%</div>
      <div className="div-m-50">50%</div>
      <div className="div-m-70">70%</div>
      <div className="div-m-100">100%</div>
      <span>For loop</span>
      <p className="for-1">opacity 90%</p>
      <p className="for-2">opacity 80%</p>
      <p className="for-3">opacity 70%</p>
      <p className="for-4">opacity 60%</p>
      <span>While loop</span>
      <p className="while-10">opacity 0%</p>
      <p className="while-9">opacity 10%</p>
      <p className="while-8">opacity 20%</p>
      <p className="while-7">opacity 30%</p>
    </div>
  );
}
