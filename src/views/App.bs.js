// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Nav from "./components/Nav.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Style from "./Style.bs.js";
import * as React from "react";
import * as Content from "./components/Content.bs.js";
import * as PageData from "../PageData.bs.js";
import * as AboutPage from "./pages/AboutPage.bs.js";
import * as EntryPage from "./pages/EntryPage.bs.js";
import * as IndexPage from "./pages/IndexPage.bs.js";
import * as NotFoundPage from "./pages/NotFoundPage.bs.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";
import * as TagSearchPage from "./pages/TagSearchPage.bs.js";

var className = Curry._1(Css.style, /* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.minHeight(Css.vh(100.0)),
          /* :: */[
            Css.backgroundColor(Style.backgroundColour),
            /* :: */[
              Css.color(Style.textColour),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

function App$Root(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: className
            }, children);
}

var Root = {
  className: className,
  make: App$Root
};

function App(Props) {
  var siteName = Props.siteName;
  var pageData = Props.pageData;
  var activeRoute = Relude_Option.map(PageData.toRoute, pageData);
  var page;
  if (pageData !== undefined) {
    switch (pageData.tag | 0) {
      case /* Index */0 :
          page = React.createElement(IndexPage.make, {
                data: pageData[0]
              });
          break;
      case /* TagSearch */1 :
          page = React.createElement(TagSearchPage.make, {
                data: pageData[0]
              });
          break;
      case /* About */2 :
          page = React.createElement(AboutPage.make, {
                data: pageData[0]
              });
          break;
      case /* Entry */3 :
          page = React.createElement(EntryPage.make, {
                data: pageData[0]
              });
          break;
      
    }
  } else {
    page = React.createElement(NotFoundPage.make, { });
  }
  return React.createElement(App$Root, {
              children: null
            }, React.createElement(Nav.make, {
                  siteName: siteName,
                  activeRoute: activeRoute
                }), React.createElement(Content.make, {
                  children: page
                }));
}

var make = App;

export {
  Root ,
  make ,
  
}
/* className Not a pure module */
