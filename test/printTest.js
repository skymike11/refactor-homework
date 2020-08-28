import {printOwing} from "../src/print";

const printTest = require('ava');
printTest('should_return_detail_when_printOwing_given_invoice', t => {
    //given
    const invoice = {
        borderSpacing: [
            {
                amount: 1
            }
        ],
        customer: 'Sam'
    };
    //when
    let result = printOwing(invoice);
    let expect = "***********************\n"
        + "**** Customer Owes ****\n"
        + "***********************\n"
        + "name: Sam\n"
        + "amount: 1\n"
        + "amount: 9/27/2020\n";
    t.is(result, expect)
});