// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as $$Date from "./bindings/Date.bs.js";
import * as Path from "path";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as MimeTypes from "./bindings/MimeTypes.bs.js";
import * as Relude_IO from "relude/src/Relude_IO.bs.js";
import * as Relude_Int from "relude/src/Relude_Int.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Relude_List from "relude/src/Relude_List.bs.js";
import * as Relude_Array from "relude/src/Relude_Array.bs.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";
import * as Relude_Result from "relude/src/Relude_Result.bs.js";
import * as NodeFS__ReadDir from "node-fs-bs/src/NodeFS__ReadDir.bs.js";
import * as NodeFS__ReadFile from "node-fs-bs/src/NodeFS__ReadFile.bs.js";
import * as MarkdownMetadata from "markdown-metadata";

function parseTitle(metadata) {
  return Curry._2(Relude_Option.flatMap, (function (param) {
                return Relude_Array.at(0, param);
              }), Js_dict.get(metadata, "title"));
}

var partial_arg = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2})$/;

function matchDate(param) {
  return Caml_option.null_to_opt(partial_arg.exec(param));
}

function parseTimestamp(metadata) {
  return Relude_Result.flatMap((function (match_) {
                var captures = match_.slice(1).map((function (capture) {
                        return Curry._2(Relude_Option.flatMap, Relude_Int.fromString, (capture == null) ? undefined : Caml_option.some(capture));
                      }));
                if (captures.length !== 5) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var year = captures[0];
                if (year === undefined) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var month = captures[1];
                if (month === undefined) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var day = captures[2];
                if (day === undefined) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var hour = captures[3];
                if (hour === undefined) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var minute = captures[4];
                if (minute !== undefined) {
                  return /* Ok */Block.__(0, [$$Date.make(year, month, day, hour, minute, undefined)]);
                } else {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
              }), Relude_Result.flatMap((function (date) {
                    return Relude_Result.fromOption(/* Malformed */1, matchDate(date));
                  }), Relude_Result.fromOption(/* Missing */0, Curry._2(Relude_Option.flatMap, (function (param) {
                            return Relude_Array.at(0, param);
                          }), Js_dict.get(metadata, "date")))));
}

function parseTags(metadata) {
  return Relude_Option.map(Relude_List.fromArray, Relude_Option.filter((function (array) {
                      return array.length > 0;
                    }))(Js_dict.get(metadata, "tags")));
}

function parseEntry(markdown) {
  var match = MarkdownMetadata.parseMetadata(markdown);
  var metadata = match[0];
  var match$1 = parseTitle(metadata);
  var match$2 = parseTimestamp(metadata);
  var match$3 = parseTags(metadata);
  if (match$1 !== undefined) {
    if (match$2.tag) {
      if (match$3 !== undefined) {
        return /* Error */Block.__(1, [/* TimestampError */[match$2[0]]]);
      } else {
        return /* Error */Block.__(1, [/* BadMetadata */2]);
      }
    } else if (match$3 !== undefined) {
      return /* Ok */Block.__(0, [{
                  title: match$1,
                  date: match$2[0],
                  tags: match$3,
                  text: match[1]
                }]);
    } else {
      return /* Error */Block.__(1, [/* TagsMissing */1]);
    }
  } else if (match$2.tag || match$3 === undefined) {
    return /* Error */Block.__(1, [/* BadMetadata */2]);
  } else {
    return /* Error */Block.__(1, [/* TitleMissing */0]);
  }
}

function readAndParseEntriesDirectory(directory) {
  return Relude_IO.flatMap((function (entries) {
                return entries.filter((function (entry) {
                                  if (entry.name.toLowerCase().endsWith(".md")) {
                                    return !entry.isDirectory();
                                  } else {
                                    return false;
                                  }
                                })).map((function (param) {
                                var name = param.name;
                                var path = Path.join(directory, name);
                                return Relude_IO.flatMap((function (text) {
                                              return Relude_IO.fromResult(Curry._2(Relude_Result.mapError, (function (error) {
                                                                return /* ParseError */Block.__(2, [
                                                                          /* name */name,
                                                                          /* error */error
                                                                        ]);
                                                              }), parseEntry(text)));
                                            }), Curry._2(Relude_IO.mapError, (function (error) {
                                                  return /* ReadEntryError */Block.__(1, [
                                                            /* name */name,
                                                            /* error */error
                                                          ]);
                                                }), Relude_IO.flatMap((function (param) {
                                                      return NodeFS__ReadFile.readText(undefined, path);
                                                    }), /* Suspend */Block.__(2, [(function (param) {
                                                          console.log("Reading entry from \"" + (String(path) + "\""));
                                                          
                                                        })]))));
                              })).reduce((function (accumulator, current) {
                              return Relude_IO.flatMap((function (entries) {
                                            return Relude_IO.map((function (entry) {
                                                          return /* :: */[
                                                                  entry,
                                                                  entries
                                                                ];
                                                        }), current);
                                          }), accumulator);
                            }), /* Pure */Block.__(0, [/* [] */0]));
              }), Curry._2(Relude_IO.mapError, (function (error) {
                    return /* ReadDirectoryError */Block.__(0, [error]);
                  }), Relude_IO.flatMap((function (param) {
                        return NodeFS__ReadDir.readDir(undefined, directory);
                      }), /* Suspend */Block.__(2, [(function (param) {
                            console.log("Reading from entries directory \"" + (String(directory) + "\""));
                            
                          })]))));
}

function readAndParseAboutPath(path) {
  return Relude_IO.flatMap((function (param) {
                return NodeFS__ReadFile.readText(undefined, path);
              }), /* Suspend */Block.__(2, [(function (param) {
                    console.log("Reading about text from \"" + (String(path) + "\""));
                    
                  })]));
}

function readAndEncodeFaviconPath(path) {
  return Relude_IO.flatMap((function (mimeType) {
                return Relude_IO.bimap((function (buffer) {
                              var base64 = buffer.toString("base64");
                              return {
                                      uri: "data:" + (String(mimeType) + (";base64," + (String(base64) + ""))),
                                      mimeType: mimeType
                                    };
                            }), (function (error) {
                              return /* ReadError */[error];
                            }), NodeFS__ReadFile.readBuffer(path));
              }), Relude_IO.flatMap((function (param) {
                    return Relude_IO.fromOption((function (param) {
                                  return /* MimeTypeNotFound */0;
                                }), MimeTypes.contentType(Path.basename(path)));
                  }), /* Suspend */Block.__(2, [(function (param) {
                        console.log("Reading favicon from \"" + (String(path) + "\""));
                        
                      })])));
}

function checkUploadsDirectoryExistence(path) {
  return Relude_IO.map((function (prim) {
                
              }), Relude_IO.flatMap((function (param) {
                    return NodeFS__ReadDir.readDir(undefined, path);
                  }), /* Suspend */Block.__(2, [(function (param) {
                        console.log("Checking existence of uploads directory \"" + (String(path) + "\""));
                        
                      })])));
}

function readAndParseAll(aboutPath, entriesDirectory, faviconPath, uploadsDirectory) {
  return Relude_IO.flatMap((function (parsed) {
                return Relude_IO.bimap((function (param) {
                              return parsed;
                            }), (function (error) {
                              return /* UploadsDirectoryError */Block.__(3, [error]);
                            }), checkUploadsDirectoryExistence(uploadsDirectory));
              }), Relude_IO.flatMap((function (param) {
                    var entries = param[1];
                    var about = param[0];
                    return Relude_IO.bimap((function (favicon) {
                                  return {
                                          about: about,
                                          entries: entries,
                                          favicon: favicon
                                        };
                                }), (function (error) {
                                  return /* FaviconError */Block.__(2, [error]);
                                }), readAndEncodeFaviconPath(faviconPath));
                  }), Relude_IO.flatMap((function (entries) {
                        return Relude_IO.bimap((function (about) {
                                      return /* tuple */[
                                              about,
                                              entries
                                            ];
                                    }), (function (error) {
                                      return /* AboutFileError */Block.__(0, [error]);
                                    }), readAndParseAboutPath(aboutPath));
                      }), Curry._2(Relude_IO.mapError, (function (error) {
                            return /* EntriesDirectoryError */Block.__(1, [error]);
                          }), readAndParseEntriesDirectory(entriesDirectory)))));
}

export {
  parseTitle ,
  matchDate ,
  parseTimestamp ,
  parseTags ,
  parseEntry ,
  readAndParseEntriesDirectory ,
  readAndParseAboutPath ,
  readAndEncodeFaviconPath ,
  checkUploadsDirectoryExistence ,
  readAndParseAll ,
  
}
/* path Not a pure module */
