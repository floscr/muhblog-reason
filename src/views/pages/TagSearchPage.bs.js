// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Style from "../Style.bs.js";
import * as Utils from "../../Utils.bs.js";
import * as React from "react";
import * as EntriesList from "../components/EntriesList.bs.js";

var className = Curry._1(Css.merge, /* :: */[
      Style.smallCapsClassName,
      /* :: */[
        Curry._1(Css.style, /* :: */[
              Css.fontSize(Css.rem(1.25)),
              /* :: */[
                Css.marginBottom(Css.rem(1.6)),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

function TagSearchPage$Label(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: className
            }, children);
}

var Label = {
  className: className,
  make: TagSearchPage$Label
};

function TagSearchPage(Props) {
  var activeRoute = Props.activeRoute;
  var param = Props.data;
  var total = param.total;
  var tag = param.tag;
  var buildPageRoute = function (page) {
    return /* TagSearch */Block.__(1, [
              /* slug */Utils.slug(tag),
              /* page */page
            ]);
  };
  var plural = total === 1 ? "entry" : "entries";
  return React.createElement(React.Fragment, undefined, React.createElement(TagSearchPage$Label, {
                  children: "" + (String(total) + (" " + (String(plural) + (" tagged \"" + (String(tag) + "\"")))))
                }), React.createElement(EntriesList.make, {
                  buildPageRoute: buildPageRoute,
                  activeRoute: activeRoute,
                  page: param.page,
                  total: total,
                  entries: param.entries
                }));
}

var make = TagSearchPage;

export {
  Label ,
  make ,
  
}
/* className Not a pure module */
