var Escodegen = require('escodegen');
var Parser = require('../../src/parser');

describe("Variable declaration", function () {

	var pseudoCode, javascriptExpected, javascriptGenerated; 

    it("should return 'var a = 1' ", function () {

        pseudoCode = Parser.parse("var a es 1;");
        javascriptExpected = "var a = 1;"
        javascriptGenerated = Escodegen.generate(pseudoCode);

        expect(javascriptGenerated).toEqual(javascriptExpected);
    });

    it("should return 'var a=1, b=2, c=3;'", function() {

        pseudoCode = Parser.parse("var a es 1, b es 2, c es 3;");
        javascriptExpected = "var a = 1, b = 2, c = 3;"
        javascriptGenerated = Escodegen.generate(pseudoCode);

    	expect(javascriptGenerated).toBe(javascriptExpected);
    })
});