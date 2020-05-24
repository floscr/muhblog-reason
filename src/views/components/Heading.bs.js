// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Style from "../Style.bs.js";
import * as React from "react";

function Heading(Props) {
  var levelOpt = Props.level;
  var className = Props.className;
  var children = Props.children;
  var level = levelOpt !== undefined ? levelOpt : 1;
  var className$1 = Style.combineClassNames(/* :: */[
        Style.smallCapsClassName,
        /* :: */[
          className,
          /* [] */0
        ]
      ]);
  var tag = "h" + String(level > 6 ? 6 : level);
  return React.createElement(tag, {
              className: className$1
            }, children);
}

var make = Heading;

export {
  make ,
  
}
/* Style Not a pure module */
