import React from "react";
import Nested from "./Nested";
import NestedProperty from "./NestedProperty";
import ParentSelector from "./ParentSelector";
import Variable from "./Variable";
import Interpolation from "./Interpolation";
import MixinInclude from "./MixinInclude";
import Extend from "./Extend";
import IfElseStatement from "./IfElseStatement";
import LoopStatement from "./LoopStatement";

const options = [
  { name: "Nested", comp: Nested },
  { name: "Nested Property", comp: NestedProperty },
  { name: "Parent Selector", comp: ParentSelector },
  { name: "Variable", comp: Variable },
  { name: "Interpolation", comp: Interpolation },
  { name: "Mixin and Include", comp: MixinInclude },
  { name: "Extend", comp: Extend },
  { name: "If Else Statement", comp: IfElseStatement },
  { name: "Each-Map-For-While-loop", comp: LoopStatement },
];

export default function Main() {
  const [selected, setItem] = React.useState(null);
  const onClick = (index) => {
    const TagComponent = options[index].comp;
    setItem(TagComponent);
  };

  return (
    <div className="div-container">
      <div className="button-container">
        {options.map((item, index) => (
          <button onClick={onClick.bind(this, index)}>{item.name}</button>
        ))}
      </div>
      <div className="body">{selected}</div>
    </div>
  );
}
