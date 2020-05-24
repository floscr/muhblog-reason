// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

var className = Curry._1(Css.style, /* :: */[
      Css.fontSize(Css.rem(0.875)),
      /* :: */[
        Css.userSelect(Css.none),
        /* [] */0
      ]
    ]);

function Arrow(Props) {
  var direction = Props.direction;
  var doubleOpt = Props.double;
  var $$double = doubleOpt !== undefined ? doubleOpt : false;
  var content = direction ? (
      $$double ? "▶▶" : "▶"
    ) : (
      $$double ? "◀◀" : "◀"
    );
  return React.createElement("span", {
              className: className
            }, content);
}

var make = Arrow;

export {
  className ,
  make ,
  
}
/* className Not a pure module */