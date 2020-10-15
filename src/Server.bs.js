// Generated by ReScript, PLEASE EDIT WITH CARE

import * as HTTP from "./bindings/HTTP.bs.js";
import * as Http from "http";
import * as Route from "./Route.bs.js";
import * as Render from "./Render.bs.js";
import * as $$Response from "./Response.bs.js";
import * as Relude_IO from "relude/src/Relude_IO.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";
import * as AboutController from "./controllers/AboutController.bs.js";
import * as EntryController from "./controllers/EntryController.bs.js";
import * as IndexController from "./controllers/IndexController.bs.js";
import * as UploadsController from "./controllers/UploadsController.bs.js";
import * as TagSearchController from "./controllers/TagSearchController.bs.js";

function makeResponse(param, uploadsDirectory, route) {
  var entries = param.entries;
  switch (route.TAG | 0) {
    case /* Index */0 :
        return IndexController.makeResponse(entries, route.page);
    case /* TagSearch */1 :
        return TagSearchController.makeResponse(entries, route.slug, route.page);
    case /* About */2 :
        return AboutController.makeResponse(param.about);
    case /* Entry */3 :
        return EntryController.makeResponse(entries, route.year, route.month, route.day, route.slug);
    case /* Uploads */4 :
        return UploadsController.makeResponse(uploadsDirectory, route.filename);
    
  }
}

function make(siteName, uploadsDirectory, data) {
  var favicon = data.favicon;
  return Http.createServer(function (request, response) {
              var url = Relude_Option.getOrElse("/", Caml_option.undefined_to_opt(request.url));
              return Relude_IO.unsafeRunAsync((function (prim) {
                            
                          }), Relude_IO.tap(function (res) {
                                var startTime = Date.now();
                                response.on("close", (function (param) {
                                        var status = response.statusCode;
                                        var ms = Date.now() - startTime;
                                        console.log("" + status + " " + url + " " + ms + "ms");
                                        
                                      }));
                                if (res.TAG) {
                                  HTTP.$$Response.setStatusCode(200, response);
                                  HTTP.$$Response.setContentType(Relude_Option.getOrElse("application/octet-stream", res.type_))(response);
                                  HTTP.$$Response.setContentLength(res.length)(response);
                                  HTTP.$$Response.setLastModified(res.modified)(response);
                                  res.stream.pipe(response);
                                  return ;
                                }
                                var body = Render.render(siteName, favicon, res.state);
                                var length = Buffer.byteLength(body);
                                HTTP.$$Response.setStatusCode(res.status, response);
                                HTTP.$$Response.setContentType("text/html; charset=utf-8")(response);
                                HTTP.$$Response.setContentLength(length)(response);
                                response.end(body, "utf-8");
                                
                              })(Relude_IO.handleError((function (param) {
                                    return $$Response.notFound;
                                  }), Relude_IO.flatMap((function (param) {
                                        return makeResponse(data, uploadsDirectory, param);
                                      }), Relude_IO.fromOption((function (prim) {
                                            
                                          }), Route.fromURL(url))))));
            });
}

function listen(host, port) {
  return function (param) {
    param.listen(port, host, (function (param) {
            console.log("Listening on " + host + ":" + port);
            
          }));
    
  };
}

export {
  makeResponse ,
  make ,
  listen ,
  
}
/* http Not a pure module */
