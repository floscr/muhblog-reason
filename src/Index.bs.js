// Generated by ReScript, PLEASE EDIT WITH CARE

import * as CLI from "./CLI.bs.js";
import * as Parse from "./Parse.bs.js";
import * as Server from "./Server.bs.js";
import * as Relude_IO from "relude/src/Relude_IO.bs.js";

((require('source-map-support/register')));

function printError(error) {
  var message;
  switch (error.TAG | 0) {
    case /* AboutFileError */0 :
        switch (error._0.TAG | 0) {
          case /* IsADirectory */5 :
              message = "About path is a directory";
              break;
          case /* NoSuchFileOrDirectory */7 :
              message = "About path does not exist";
              break;
          default:
            message = "Error reading about path";
        }
        break;
    case /* EntriesDirectoryError */1 :
        var match = error._0;
        switch (match.TAG | 0) {
          case /* ReadDirectoryError */0 :
              switch (match._0.TAG | 0) {
                case /* NoSuchFileOrDirectory */7 :
                    message = "Entries path does not exist";
                    break;
                case /* NotADirectory */8 :
                    message = "Entries path is not a directory";
                    break;
                default:
                  message = "Error reading entries directory";
              }
              break;
          case /* ReadEntryError */1 :
              message = "Error reading entry: " + match.name;
              break;
          case /* ParseError */2 :
              message = "Error parsing entry: " + match.name;
              break;
          
        }
        break;
    case /* FaviconError */2 :
        var match$1 = error._0;
        if (match$1) {
          switch (match$1._0.TAG | 0) {
            case /* IsADirectory */5 :
                message = "Favicon path is a directory";
                break;
            case /* NoSuchFileOrDirectory */7 :
                message = "Favicon path does not exist";
                break;
            default:
              message = "Error reading favicon path";
          }
        } else {
          message = "Error identifying favicon mimetype";
        }
        break;
    case /* UploadsDirectoryError */3 :
        switch (error._0.TAG | 0) {
          case /* NoSuchFileOrDirectory */7 :
              message = "Uploads directory does not exist";
              break;
          case /* NotADirectory */8 :
              message = "Uploads path is not a directory";
              break;
          default:
            message = "Error checking existence of uploads directory";
        }
        break;
    
  }
  console.error(message);
  
}

function main(param) {
  var match = CLI.parseArguments(undefined);
  var uploadsDirectory = match.uploadsDirectory;
  var siteName = match.siteName;
  return Relude_IO.unsafeRunAsync((function (prim) {
                
              }), Relude_IO.bitap(Server.listen(match.host, match.port), printError, Relude_IO.map((function (data) {
                        return Server.make(siteName, uploadsDirectory, data);
                      }), Parse.readAndParseAll(match.aboutPath, match.entriesDirectory, match.faviconPath, uploadsDirectory))));
}

main(undefined);

export {
  printError ,
  main ,
  
}
/*  Not a pure module */
