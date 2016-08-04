var express = require('express');
var _ = require('underscore');
var pegjs = require('pegjs');
var Parser = require('./src/Parser');
var Escodegen = require('escodegen');
var app = express();

app.listen(3000, function () {

    var str = Parser.parse('var a es 1, b es 2, d es 4; var c es 3; c es 6; si (a igual 2 y c distinto 3) { } sino si(c == 6) { console.log(getEdad(1,2))} sino { console.log("afa"); } getEdad(a, b) { devolver a+b; }');
    var str2 = Parser.parse('var array es [1,2,3]; por cada(a en array){ imprimir(array[a]); } imprimir(e) { console.log(e); }');
    var result = Escodegen.generate(str);
    var result2 = Escodegen.generate(str2);
    console.log(result2);
    eval(result2);
});

