// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Squel from "squel";

var Select = { };

var Block = { };

function makeInsertOrIgnore(param) {
  return Squel.insert(undefined, [
              new (Squel.cls.StringBlock)(undefined, "INSERT OR IGNORE"),
              new (Squel.cls.IntoTableBlock)(),
              new (Squel.cls.InsertFieldValueBlock)()
            ]);
}

var Insert = {
  makeInsertOrIgnore: makeInsertOrIgnore
};

export {
  Select ,
  Block ,
  Insert ,
  
}
/* squel Not a pure module */