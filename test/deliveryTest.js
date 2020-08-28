import {deliveryDate} from "../src/delivery";

const deliveryTest = require('ava');
deliveryTest('should_return_plusDays_1_when_deliveryDate_given_anOrder_with_MA_state_isRush_true', t => {
    //given
    const isRush = true;
    const anOrder = {
        deliveryState : "MA",
        placedOn : {
            plusDays : (deliveryTime)=>{
                return deliveryTime
            }
        }
    };
    //when
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 2)
});
