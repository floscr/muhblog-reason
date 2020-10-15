// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Arrow from "./Arrow.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Route from "../../Route.bs.js";
import * as Style from "../Style.bs.js";
import * as Utils from "../../Utils.bs.js";
import * as React from "react";
import * as Heading from "./Heading.bs.js";
import * as Js_math from "bs-platform/lib/es6/js_math.js";
import * as Markdown from "./Markdown.bs.js";
import * as Constants from "../../Constants.bs.js";
import * as RouteLink from "./RouteLink.bs.js";
import * as Timestamp from "./Timestamp.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Relude_List from "relude/src/Relude_List.bs.js";
import * as Relude_Array from "relude/src/Relude_Array.bs.js";
import * as Relude_Float from "relude/src/Relude_Float.bs.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";

var className = Curry._1(Css.style, {
      hd: Css.fontSize(Css.rem(1.5)),
      tl: {
        hd: Css.marginBottom(Css.zero),
        tl: /* [] */0
      }
    });

function EntriesList$StyledHeading(Props) {
  var children = Props.children;
  return React.createElement(Heading.make, {
              className: className,
              children: children
            });
}

var StyledHeading = {
  className: className,
  make: EntriesList$StyledHeading
};

var className$1 = Curry._1(Css.merge, {
      hd: Style.bottomBorderClassName,
      tl: {
        hd: Curry._1(Css.style, {
              hd: Css.paddingBottom(Css.rem(1.6)),
              tl: {
                hd: Css.margin2(Css.rem(0.5), Css.zero),
                tl: {
                  hd: Style.desktopMediaQuery({
                        hd: Css.margin2(Css.rem(0.8), Css.zero),
                        tl: /* [] */0
                      }),
                  tl: {
                    hd: Css.firstOfType({
                          hd: Css.marginTop(Css.zero),
                          tl: /* [] */0
                        }),
                    tl: {
                      hd: Css.lastOfType({
                            hd: Css.marginBottom(Css.zero),
                            tl: /* [] */0
                          }),
                      tl: /* [] */0
                    }
                  }
                }
              }
            }),
        tl: /* [] */0
      }
    });

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

var className$2 = Curry._1(Css.style, {
      hd: Css.marginBottom(Css.rem(1.0)),
      tl: /* [] */0
    });

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

var className$3 = Curry._1(Css.style, {
      hd: Css.display(Css.flexBox),
      tl: {
        hd: Css.margin2(Css.auto, Css.rem(0.375)),
        tl: {
          hd: Style.desktopMediaQuery({
                hd: Css.margin2(Css.auto, Css.rem(0.5)),
                tl: /* [] */0
              }),
          tl: /* [] */0
        }
      }
    });

function EntriesList$PageItem(Props) {
  var children = Props.children;
  return React.createElement("span", {
              className: className$3
            }, children);
}

var PageItem = {
  className: className$3,
  make: EntriesList$PageItem
};

function EntriesList$PageLink(Props) {
  var buildPageRoute = Props.buildPageRoute;
  var activeRoute = Props.activeRoute;
  var page = Props.page;
  var children = Props.children;
  var tmp = {
    route: Curry._1(buildPageRoute, page),
    className: className$3,
    children: children
  };
  if (activeRoute !== undefined) {
    tmp.activeRoute = Caml_option.valFromOption(activeRoute);
  }
  return React.createElement(RouteLink.make, tmp);
}

var PageLink = {
  className: className$3,
  make: EntriesList$PageLink
};

function EntriesList$PreviousPageLinks(Props) {
  var buildPageRoute = Props.buildPageRoute;
  var activeRoute = Props.activeRoute;
  var page = Props.page;
  var firstArrow = React.createElement(Arrow.make, {
        direction: /* Left */0,
        double: true
      });
  var previousArrow = React.createElement(Arrow.make, {
        direction: /* Left */0
      });
  if (page === 1) {
    return React.createElement(React.Fragment, undefined, React.createElement(EntriesList$PageItem, {
                    children: firstArrow
                  }), React.createElement(EntriesList$PageItem, {
                    children: previousArrow
                  }));
  } else {
    return React.createElement(React.Fragment, undefined, React.createElement(EntriesList$PageLink, {
                    buildPageRoute: buildPageRoute,
                    activeRoute: activeRoute,
                    page: 1,
                    children: firstArrow
                  }), React.createElement(EntriesList$PageLink, {
                    buildPageRoute: buildPageRoute,
                    activeRoute: activeRoute,
                    page: page - 1 | 0,
                    children: previousArrow
                  }));
  }
}

var PreviousPageLinks = {
  make: EntriesList$PreviousPageLinks
};

function EntriesList$NextPageLinks(Props) {
  var buildPageRoute = Props.buildPageRoute;
  var activeRoute = Props.activeRoute;
  var totalPages = Props.totalPages;
  var page = Props.page;
  var nextArrow = React.createElement(Arrow.make, {
        direction: /* Right */1
      });
  var lastArrow = React.createElement(Arrow.make, {
        direction: /* Right */1,
        double: true
      });
  if (page === totalPages) {
    return React.createElement(React.Fragment, undefined, React.createElement(EntriesList$PageItem, {
                    children: nextArrow
                  }), React.createElement(EntriesList$PageItem, {
                    children: lastArrow
                  }));
  } else {
    return React.createElement(React.Fragment, undefined, React.createElement(EntriesList$PageLink, {
                    buildPageRoute: buildPageRoute,
                    activeRoute: activeRoute,
                    page: page + 1 | 0,
                    children: nextArrow
                  }), React.createElement(EntriesList$PageLink, {
                    buildPageRoute: buildPageRoute,
                    activeRoute: activeRoute,
                    page: totalPages,
                    children: lastArrow
                  }));
  }
}

var NextPageLinks = {
  make: EntriesList$NextPageLinks
};

function EntriesList$PageNumberLinks(Props) {
  var buildPageRoute = Props.buildPageRoute;
  var activeRoute = Props.activeRoute;
  var totalPages = Props.totalPages;
  var page = Props.page;
  var padding = Constants.paginationSize / 2 | 0;
  var startPage = page - padding | 0;
  var endPage = page + padding | 0;
  if (startPage < 1 && endPage > totalPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    var difference = 0;
    if (startPage < 1) {
      difference = 1 - startPage | 0;
      startPage = startPage + difference | 0;
      endPage = endPage + difference | 0;
    }
    if (endPage > totalPages) {
      difference = endPage - totalPages | 0;
      endPage = endPage - difference | 0;
      startPage = startPage - difference | 0;
      startPage = startPage < 1 ? 1 : startPage;
    }
    
  }
  return Utils.range(startPage, endPage, undefined, undefined).map(function (p) {
              if (p === page) {
                return React.createElement(EntriesList$PageItem, {
                            children: p
                          });
              } else {
                return React.createElement(EntriesList$PageLink, {
                            buildPageRoute: buildPageRoute,
                            activeRoute: activeRoute,
                            page: p,
                            children: p
                          });
              }
            });
}

var PageNumberLinks = {
  make: EntriesList$PageNumberLinks
};

var className$4 = Curry._1(Css.merge, {
      hd: Style.smallCapsClassName,
      tl: {
        hd: Curry._1(Css.style, {
              hd: Css.display(Css.flexBox),
              tl: {
                hd: Css.fontSize(Css.rem(1.125)),
                tl: {
                  hd: Css.margin2(Css.rem(2.4), Css.auto),
                  tl: /* [] */0
                }
              }
            }),
        tl: /* [] */0
      }
    });

function EntriesList$Pagination(Props) {
  var buildPageRoute = Props.buildPageRoute;
  var activeRoute = Props.activeRoute;
  var total = Props.total;
  var page = Props.page;
  var totalPages = Js_math.ceil(Relude_Float.fromInt(total) / Relude_Float.fromInt(Constants.entriesPerPage));
  return React.createElement("div", {
              className: className$4
            }, React.createElement(EntriesList$PreviousPageLinks, {
                  buildPageRoute: buildPageRoute,
                  activeRoute: activeRoute,
                  page: page
                }), React.createElement(EntriesList$PageNumberLinks, {
                  buildPageRoute: buildPageRoute,
                  activeRoute: activeRoute,
                  totalPages: totalPages,
                  page: page
                }), React.createElement(EntriesList$NextPageLinks, {
                  buildPageRoute: buildPageRoute,
                  activeRoute: activeRoute,
                  totalPages: totalPages,
                  page: page
                }));
}

var Pagination = {
  className: className$4,
  make: EntriesList$Pagination
};

var className$5 = Curry._1(Css.style, {
      hd: Css.marginBottom(Css.zero),
      tl: /* [] */0
    });

function EntriesList$Paragraph(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: className$5
            }, children);
}

var Paragraph = {
  className: className$5,
  make: EntriesList$Paragraph
};

function EntriesList(Props) {
  var buildPageRoute = Props.buildPageRoute;
  var activeRoute = Props.activeRoute;
  var page = Props.page;
  var total = Props.total;
  var entries = Props.entries;
  return Utils.reactList(Relude_List.append(React.createElement(EntriesList$Pagination, {
                      buildPageRoute: buildPageRoute,
                      activeRoute: activeRoute,
                      total: total,
                      page: page
                    }), Relude_List.map(function (param) {
                        var text = param.text;
                        var date = param.date;
                        var title = param.title;
                        var route = Route.entry(date, title, undefined, undefined);
                        var preview = Relude_Option.getOrElse(text, Curry._2(Relude_Option.flatMap, (function (prim) {
                                    if (prim == null) {
                                      return ;
                                    } else {
                                      return Caml_option.some(prim);
                                    }
                                  }), Curry._2(Relude_Option.flatMap, (function (param) {
                                        return Relude_Array.at(1, param);
                                      }), Relude_Option.map((function (prim) {
                                            return prim;
                                          }), Caml_option.null_to_opt(/^(.+?)\n\n/.exec(text))))));
                        var buildHeadingRoute = function (param, param$1) {
                          return Route.entry(date, title, param, param$1);
                        };
                        return React.createElement(EntriesList$Article, {
                                    children: null,
                                    key: date.toISOString() + title
                                  }, React.createElement(EntriesList$Header, {
                                        children: null
                                      }, React.createElement(EntriesList$StyledHeading, {
                                            children: React.createElement(RouteLink.make, {
                                                  route: route,
                                                  children: title
                                                })
                                          }), React.createElement(Timestamp.make, {
                                            date: date
                                          })), React.createElement("section", undefined, React.createElement(Markdown.make, {
                                            buildHeadingRoute: buildHeadingRoute,
                                            renderParagraph: EntriesList$Paragraph,
                                            text: preview
                                          })));
                      })(entries)));
}

var make = EntriesList;

export {
  StyledHeading ,
  Article ,
  Header ,
  PageItem ,
  PageLink ,
  PreviousPageLinks ,
  NextPageLinks ,
  PageNumberLinks ,
  Pagination ,
  Paragraph ,
  make ,
  
}
/* className Not a pure module */
