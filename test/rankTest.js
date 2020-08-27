import {rating} from "../src/rank";

const rankTest = require('ava');

rankTest('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});

rankTest('should_return_rank_B_when_rating_by_voyage_given_voyage_with_east-indies_zone_and_4_length', t => {
    //given
    const voyage = {
        zone: 'west-indies',
        length: 4,
    };
    //when
    let result = rating(voyage, []);
    //then
    t.is(result, "B")
});

rankTest('should_return_rank_A_when_rating_by_voyage_given_voyage_with_east-indies_zone_and_8_length', t => {
    //given
    const voyage = {
        zone: 'west-indies',
        length: 8,
    };
    //when
    let result = rating(voyage, []);
    //then
    t.is(result, "B")
});

rankTest('should_return_rank_A_when_rating_by_voyage_given_voyage_with_east-indies_zone_and_15_length', t => {
    //given
    const voyage = {
        zone: 'west-indies',
        length: 15,
    };
    //when
    let result = rating(voyage, []);
    //then
    t.is(result, "B")
});




