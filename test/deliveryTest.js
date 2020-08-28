import {deliveryDate} from "../src/delivery";

const deliveryTest = require('ava');
deliveryTest('should_return_plusDays_2_when_deliveryDate_given_anOrder_with_MA_state_isRush_true', t => {
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

deliveryTest('should_return_plusDays_3_when_deliveryDate_given_anOrder_with_NY_state_isRush_true', t => {
    //given
    const isRush = true;
    const anOrder = {
        deliveryState : "NY",
        placedOn : {
            plusDays : (deliveryTime)=>{
                return deliveryTime
            }
        }
    };
    //when
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 3)
});

deliveryTest('should_return_plusDays_4_when_deliveryDate_given_anOrder_with_none_state_isRush_true', t => {
    //given
    const isRush = true;
    const anOrder = {
        deliveryState : "none",
        placedOn : {
            plusDays : (deliveryTime)=>{
                return deliveryTime
            }
        }
    };
    //when
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 4)
});

deliveryTest('should_return_plusDays_4_when_deliveryDate_given_anOrder_with_MA_state_isRush_false', t => {
    //given
    const isRush = false;
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
    t.is(result, 4)
});

deliveryTest('should_return_plusDays_5_when_deliveryDate_given_anOrder_with_ME_state_isRush_false', t => {
    //given
    const isRush = false;
    const anOrder = {
        deliveryState : "ME",
        placedOn : {
            plusDays : (deliveryTime)=>{
                return deliveryTime
            }
        }
    };
    //when
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 5)
});
