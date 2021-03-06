// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Route from "../Route.bs.js";
import * as State from "../State.bs.js";
import * as Style from "./Style.bs.js";
import * as React from "react";
import * as AboutPage from "./pages/AboutPage.bs.js";
import * as EntryPage from "./pages/EntryPage.bs.js";
import * as IndexPage from "./pages/IndexPage.bs.js";
import * as RouteLink from "./components/RouteLink.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as NotFoundPage from "./pages/NotFoundPage.bs.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";
import * as TagSearchPage from "./pages/TagSearchPage.bs.js";

var className = Curry._1(Css.style, {
      hd: Css.display(Css.flexBox),
      tl: {
        hd: Css.flexDirection(Css.column),
        tl: {
          hd: Css.minHeight(Css.vh(100.0)),
          tl: {
            hd: Css.backgroundColor(Style.backgroundColour),
            tl: {
              hd: Css.color(Style.textColour),
              tl: {
                hd: Css.fontSize(Css.rem(0.875)),
                tl: /* [] */0
              }
            }
          }
        }
      }
    });

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

var className$1 = Curry._1(Css.style, {
      hd: Css.display(Css.flexBox),
      tl: {
        hd: Css.flexGrow(1.0),
        tl: {
          hd: Css.justifyContent(Css.center),
          tl: {
            hd: Css.margin2(Css.zero, Css.rem(0.5)),
            tl: {
              hd: Style.desktopMediaQuery({
                    hd: Css.margin(Css.zero),
                    tl: /* [] */0
                  }),
              tl: /* [] */0
            }
          }
        }
      }
    });

function App$MainContainer(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: className$1
            }, children);
}

var MainContainer = {
  className: className$1,
  make: App$MainContainer
};

var className$2 = Curry._1(Css.merge, {
      hd: Style.centredColumnClassName,
      tl: {
        hd: Curry._1(Css.style, {
              hd: Css.flexDirection(Css.column),
              tl: /* [] */0
            }),
        tl: /* [] */0
      }
    });

function App$Main(Props) {
  var children = Props.children;
  return React.createElement("main", {
              className: className$2
            }, children);
}

var Main = {
  className: className$2,
  make: App$Main
};

var className$3 = Curry._1(Css.style, {
      hd: Css.marginRight(Css.auto),
      tl: {
        hd: Css.fontSize(Css.rem(1.125)),
        tl: {
          hd: Css.color(Style.linkHoverColour),
          tl: /* [] */0
        }
      }
    });

function App$HomeLink(Props) {
  var children = Props.children;
  return React.createElement(RouteLink.make, {
              route: Route.index(undefined, undefined),
              className: className$3,
              children: children
            });
}

var HomeLink = {
  className: className$3,
  make: App$HomeLink
};

var className$4 = Curry._1(Css.merge, {
      hd: Style.centredColumnClassName,
      tl: {
        hd: Curry._1(Css.style, {
              hd: Css.alignItems(Css.center),
              tl: /* [] */0
            }),
        tl: /* [] */0
      }
    });

function App$NavLinks(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: className$4
            }, children);
}

var NavLinks = {
  className: className$4,
  make: App$NavLinks
};

var className$5 = Curry._1(Css.merge, {
      hd: Style.smallCapsClassName,
      tl: {
        hd: Style.bottomBorderClassName,
        tl: {
          hd: Curry._1(Css.style, {
                hd: Css.display(Css.flexBox),
                tl: {
                  hd: Css.justifyContent(Css.center),
                  tl: {
                    hd: Css.marginBottom(Css.rem(1.5)),
                    tl: {
                      hd: Css.padding(Css.rem(0.5)),
                      tl: /* [] */0
                    }
                  }
                }
              }),
          tl: /* [] */0
        }
      }
    });

function App$Nav(Props) {
  var children = Props.children;
  return React.createElement("nav", {
              className: className$5
            }, children);
}

var Nav = {
  className: className$5,
  make: App$Nav
};

function App(Props) {
  var siteName = Props.siteName;
  var state = Props.state;
  var activeRoute = Relude_Option.map(State.toRoute, state);
  var page;
  if (state !== undefined) {
    switch (state.TAG | 0) {
      case /* Index */0 :
          page = React.createElement(IndexPage.make, {
                activeRoute: activeRoute,
                data: state._0
              });
          break;
      case /* TagSearch */1 :
          page = React.createElement(TagSearchPage.make, {
                activeRoute: activeRoute,
                data: state._0
              });
          break;
      case /* About */2 :
          page = React.createElement(AboutPage.make, {
                data: state._0
              });
          break;
      case /* Entry */3 :
          page = React.createElement(EntryPage.make, {
                data: state._0
              });
          break;
      
    }
  } else {
    page = React.createElement(NotFoundPage.make, {});
  }
  var tmp = {
    route: Route.about(undefined, undefined),
    children: "About"
  };
  if (activeRoute !== undefined) {
    tmp.activeRoute = Caml_option.valFromOption(activeRoute);
  }
  return React.createElement(App$Root, {
              children: null
            }, React.createElement(App$Nav, {
                  children: React.createElement(App$NavLinks, {
                        children: null
                      }, React.createElement(App$HomeLink, {
                            children: siteName
                          }), React.createElement(RouteLink.make, tmp))
                }), React.createElement(App$MainContainer, {
                  children: React.createElement(App$Main, {
                        children: page
                      })
                }));
}

var make = App;

export {
  Root ,
  MainContainer ,
  Main ,
  HomeLink ,
  NavLinks ,
  Nav ,
  make ,
  
}
/* className Not a pure module */
