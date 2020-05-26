// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Argparse from "argparse";

function make(version, prog) {
  return new Argparse.ArgumentParser({
              version: version,
              prog: prog
            });
}

function addArgument(shortName, longName, dest, metavar, parser) {
  parser.addArgument([
        shortName,
        longName
      ], {
        dest: dest,
        metavar: metavar,
        required: true
      });
  
}

export {
  make ,
  addArgument ,
  
}
/* argparse Not a pure module */
