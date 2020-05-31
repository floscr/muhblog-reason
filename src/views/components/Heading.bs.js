// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Style from "../Style.bs.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function Heading(Props) {
  var levelOpt = Props.level;
  var className = Props.className;
  var id = Props.id;
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
  var tmp = {
    className: className$1
  };
  if (id !== undefined) {
    tmp.id = Caml_option.valFromOption(id);
  }
  return React.createElement(tag, tmp, children);
}

var make = Heading;

export {
  make ,
  
}
/* Style Not a pure module */
