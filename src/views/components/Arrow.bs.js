// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

var className = Curry._1(Css.style, {
      hd: Css.fontSize(Css.rem(0.875)),
      tl: {
        hd: Css.userSelect(Css.none),
        tl: /* [] */0
      }
    });

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
