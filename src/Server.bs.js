// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as HTTP from "./bindings/HTTP.bs.js";
import * as Http from "http";
import * as Render from "./Render.bs.js";
import * as Router from "./Router.bs.js";
import * as $$Response from "./Response.bs.js";
import * as Relude_IO from "relude/src/Relude_IO.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";
import * as AboutController from "./controllers/AboutController.bs.js";
import * as EntryController from "./controllers/EntryController.bs.js";
import * as IndexController from "./controllers/IndexController.bs.js";
import * as UploadsController from "./controllers/UploadsController.bs.js";
import * as TagSearchController from "./controllers/TagSearchController.bs.js";

function splitURLSegments(url) {
  return url.slice(1).split("/").map((function (segment) {
                  return decodeURIComponent(segment).trim();
                })).filter((function (segment) {
                return segment.length >= 1;
              }));
}

function makeResponse(param, uploadsDirectory, route) {
  var entries = param.entries;
  switch (route.tag | 0) {
    case /* Index */0 :
        return IndexController.makeResponse(entries, route[/* page */0]);
    case /* TagSearch */1 :
        return TagSearchController.makeResponse(entries, route[/* slug */0], route[/* page */1]);
    case /* About */2 :
        return AboutController.makeResponse(param.about);
    case /* Entry */3 :
        return EntryController.makeResponse(entries, route[/* year */0], route[/* month */1], route[/* day */2], route[/* slug */3]);
    case /* Uploads */4 :
        return UploadsController.makeResponse(uploadsDirectory, route[/* filename */0]);
    
  }
}

function make(siteName, uploadsDirectory, data) {
  var favicon = data.favicon;
  return Http.createServer((function (request, response) {
                var url = Relude_Option.getOrElse("/", Caml_option.undefined_to_opt(request.url));
                return Relude_IO.unsafeRunAsync((function (prim) {
                              
                            }), Relude_IO.tap((function (res) {
                                    var startTime = Date.now();
                                    response.on("close", (function (param) {
                                            var status = response.statusCode;
                                            var ms = Date.now() - startTime | 0;
                                            console.log("" + (String(status) + (" " + (String(url) + (" " + (String(ms) + "ms"))))));
                                            
                                          }));
                                    if (res.tag) {
                                      HTTP.$$Response.setStatusCode(200, response);
                                      HTTP.$$Response.setContentType(Relude_Option.getOrElse("application/octet-stream", res[/* type_ */1]))(response);
                                      HTTP.$$Response.setContentLength(res[/* length */2])(response);
                                      HTTP.$$Response.setLastModified(res[/* modified */3])(response);
                                      res[/* stream */0].pipe(response);
                                      return ;
                                    }
                                    var body = Render.render(siteName, favicon, res[/* data */0]);
                                    var length = Buffer.byteLength(body);
                                    HTTP.$$Response.setStatusCode(res[/* status */1], response);
                                    HTTP.$$Response.setContentType("text/html; charset=utf-8")(response);
                                    HTTP.$$Response.setContentLength(length)(response);
                                    response.end(body, "utf-8");
                                    
                                  }))(Relude_IO.handleError((function (param) {
                                      return $$Response.notFound;
                                    }), Relude_IO.flatMap((function (param) {
                                          return makeResponse(data, uploadsDirectory, param);
                                        }), Relude_IO.fromOption((function (prim) {
                                              
                                            }), Router.route(splitURLSegments(url)))))));
              }));
}

function listen(param) {
  param.listen(5000, "127.0.0.1", (function (param) {
          console.log("Listening");
          
        }));
  
}

export {
  splitURLSegments ,
  makeResponse ,
  make ,
  listen ,
  
}
/* http Not a pure module */
