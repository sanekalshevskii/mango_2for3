/*mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
    mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
    mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
    mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free*/

function mango(quantity, price){
    let summ = 0;
    for(let i = 0; i < quantity; i++){

        if(i % 3 !== 0)
            summ += price

    }
    return(summ);
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
        assert.strictEqual(mango(3, 3), 6)
        assert.strictEqual(mango(9, 5), 30)
    });
});
