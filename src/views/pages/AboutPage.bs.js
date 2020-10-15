// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Route from "../../Route.bs.js";
import * as React from "react";
import * as Markdown from "../components/Markdown.bs.js";

function AboutPage(Props) {
  var param = Props.data;
  return React.createElement(Markdown.make, {
              buildHeadingRoute: Route.about,
              text: param.text
            });
}

var make = AboutPage;

export {
  make ,
  
}
/* Route Not a pure module */
