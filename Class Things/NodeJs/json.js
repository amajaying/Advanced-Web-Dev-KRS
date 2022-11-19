const { SourceMap } = require("module");

var obj = {
    prop1: "val1",
    prop2: "val2"
}

// converting object to string for easier transfer of data from interface to the server

var s = JSON.stringify(obj);
var r = JSON.parse(s);
console.log(r);

// REST(Representational State Transfer) API
// POST = create something
// GET = get something
// DELETE = delete something