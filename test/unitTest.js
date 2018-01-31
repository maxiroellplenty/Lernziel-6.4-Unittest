const assert = require('chai').assert;                            
//http://chaijs.com/ is a BDD & TDD language which runs at NodeJS and can be combined with testing frameworks like "mocha" 
// While you write a Unittest you dont need to reduce code the important thing is to write tests which are easy to read and independent.

// The function "describe()" is used to give your test a naming
describe('squareRoot Unit tests', function()
{
    //The function "it()" runs single Unit test.
    //The "assert" class gives you methods to test values.
    //I used "Math.sqrt" to simulate a function that gets the root of a square.
    //I wrote the Unit tests to cover 3 different cases.


    it(`sqrt of -1 return NaN`, function() //This Unit test checks if the result of -1 equals NaN
    {
        result = Math.sqrt(-1);

        assert.isNaN(result);
    })

    it(`sqrt of 0 return 0 `, function() //This Unit test checks if the result of 0 equals 0
    {
        result = Math.sqrt(0);

        assert.equal(result, 0);
    })

    it(`sqrt of 4 return 2`, function() //This Unit test checks if the result of 4 equals 2
    {
        result = Math.sqrt(4);

        assert.equal(result, 2);
    })

    it(`sqrt of 16 return 4`, function() //This Unit test checks if the result of 16 equals 4
    {
        result = Math.sqrt(16);

        assert.equal(result, 4);
    })
})
