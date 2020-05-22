// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Constants = require("../Constants.bs.js");
var Relude_IO = require("relude/src/Relude_IO.bs.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Relude_Int = require("relude/src/Relude_Int.bs.js");
var Relude_List = require("relude/src/Relude_List.bs.js");
var Relude_Option = require("relude/src/Relude_Option.bs.js");

function makeResponse(entries, page) {
  return Relude_IO.fromOption((function (prim) {
                
              }), Curry._2(Relude_Option.flatMap, (function (param) {
                    return Relude_Option.map((function (pageEntries) {
                                  return /* Page */Block.__(0, [
                                            /* data *//* Index */Block.__(0, [{
                                                  page: page,
                                                  total: Curry._1(Relude_List.length, entries),
                                                  entries: Relude_List.map((function (entry) {
                                                            return {
                                                                    title: entry.title,
                                                                    date: entry.date,
                                                                    text: entry.text
                                                                  };
                                                          }))(pageEntries)
                                                }]),
                                            /* status */200
                                          ]);
                                }), Relude_Option.filter((function (pageEntries) {
                                        return Curry._1(Relude_List.length, pageEntries) !== 0;
                                      }))(Relude_List.take(Constants.entriesPerPage, param[1])));
                  }), Relude_List.splitAt(Caml_int32.imul(page - 1 | 0, Constants.entriesPerPage), Relude_List.sortBy((function (a, b) {
                            return Curry._2(Relude_Int.compare, b.date.getTime(), a.date.getTime());
                          }), entries))));
}

exports.makeResponse = makeResponse;
/* Relude_IO Not a pure module */
