const assert = require('chai').assert;                            
//http://chaijs.com/ is a BDD & TDD language which runs at NodeJS and can be combined with testing frameworks like "mocha" 

//This function uses a "chai" method named "assert.equal" to check if the method "Math.sqrt" returns the expected value  
function checkSqrtEqualsExpectedValue(square,root)
{
    it(`result of sqrt(${square}) === ${root} `,function()
    {
        assert.equal(Math.sqrt(square),root);
    })
}

describe('sqrt function Unittest',function()
{
    /*I was forced to make an exeption to test the value of -1 because the root of it was NaN(not a number)
    This function is used to check if the root of -1 does equal NaN */

    it(`result of sqrt(-1) === NaN`,function()
    {
        assert.isNaN(Math.sqrt(-1));
    })

    //The function gets called with different parameters to check if the result matches the expected one
    checkSqrtEqualsExpectedValue(0,0);
    checkSqrtEqualsExpectedValue(4,2);
    checkSqrtEqualsExpectedValue(16,4);
})