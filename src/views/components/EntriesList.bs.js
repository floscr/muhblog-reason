// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as $$Date from "../../bindings/Date.bs.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Style from "../Style.bs.js";
import * as Utils from "../../Utils.bs.js";
import * as React from "react";
import * as Heading from "./Heading.bs.js";
import * as Markdown from "./Markdown.bs.js";
import * as RouteLink from "./RouteLink.bs.js";
import * as Timestamp from "./Timestamp.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Relude_List from "relude/src/Relude_List.bs.js";
import * as Relude_Array from "relude/src/Relude_Array.bs.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";
import * as Relude_Function from "relude/src/Relude_Function.bs.js";

var className = Curry._1(Css.style, /* :: */[
      Css.fontSize(Css.rem(1.5)),
      /* :: */[
        Css.marginBottom(Css.zero),
        /* [] */0
      ]
    ]);

function EntriesList$IndexHeading(Props) {
  var children = Props.children;
  return React.createElement(Heading.make, {
              className: className,
              children: children
            });
}

var IndexHeading = {
  className: className,
  make: EntriesList$IndexHeading
};

var className$1 = Curry._1(Css.style, /* :: */[
      Relude_Function.uncurry3(Css.borderBottom, Style.border),
      /* :: */[
        Css.paddingBottom(Css.rem(1.6)),
        /* :: */[
          Css.margin2(Css.rem(0.5), Css.zero),
          /* :: */[
            Style.desktopMediaQuery(/* :: */[
                  Css.margin2(Css.rem(0.8), Css.zero),
                  /* [] */0
                ]),
            /* :: */[
              Css.firstOfType(/* :: */[
                    Css.marginTop(Css.zero),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

function EntriesList$Article(Props) {
  var children = Props.children;
  return React.createElement("article", {
              className: className$1
            }, children);
}

var Article = {
  className: className$1,
  make: EntriesList$Article
};

var className$2 = Curry._1(Css.style, /* :: */[
      Css.marginBottom(Css.rem(1.0)),
      /* [] */0
    ]);

function EntriesList$Header(Props) {
  var children = Props.children;
  return React.createElement("header", {
              className: className$2
            }, children);
}

var Header = {
  className: className$2,
  make: EntriesList$Header
};

function EntriesList(Props) {
  Props.page;
  Props.total;
  var entries = Props.entries;
  return Relude_List.toArray(Relude_List.map((function (entry) {
                      var route_000 = /* year */entry.date.getFullYear();
                      var route_001 = /* month */$$Date.getMonth(entry.date);
                      var route_002 = /* day */entry.date.getDate();
                      var route_003 = /* slug */Curry._1(Utils.slug(undefined), entry.title);
                      var route = /* Entry */Block.__(2, [
                          route_000,
                          route_001,
                          route_002,
                          route_003
                        ]);
                      var preview = Relude_Option.getOrElse(entry.text, Curry._2(Relude_Option.flatMap, (function (prim) {
                                  if (prim == null) {
                                    return ;
                                  } else {
                                    return Caml_option.some(prim);
                                  }
                                }), Curry._2(Relude_Option.flatMap, (function (param) {
                                      return Relude_Array.at(1, param);
                                    }), Relude_Option.map((function (prim) {
                                          return prim;
                                        }), Caml_option.null_to_opt(/^(.+?)\n\n/.exec(entry.text))))));
                      return React.createElement(EntriesList$Article, {
                                  children: null,
                                  key: entry.date.toISOString() + entry.title
                                }, React.createElement(EntriesList$Header, {
                                      children: null
                                    }, React.createElement(EntriesList$IndexHeading, {
                                          children: React.createElement(RouteLink.make, {
                                                route: route,
                                                children: entry.title
                                              })
                                        }), React.createElement(Timestamp.make, {
                                          date: entry.date
                                        })), React.createElement("section", undefined, React.createElement(Markdown.make, {
                                          text: preview
                                        })));
                    }))(entries));
}

var make = EntriesList;

export {
  IndexHeading ,
  Article ,
  Header ,
  make ,
  
}
/* className Not a pure module */
