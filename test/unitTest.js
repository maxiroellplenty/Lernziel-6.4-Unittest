const assert = require('chai').assert;

function checkSqrtEqualsExpectedValue(square,root)
{
    it(`result of sqrt(${square}) === ${root} `,function()
    {
        assert.equal(Math.sqrt(square),root);
    })
}

describe('sqrt function',function()
{
    it(`result of sqrt(-1) === NaN`,function()
    {
        assert.isNaN(Math.sqrt(-1));
    })
    checkSqrtEqualsExpectedValue(0,0);
    checkSqrtEqualsExpectedValue(4,2);
    checkSqrtEqualsExpectedValue(16,4);
})