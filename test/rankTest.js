import {hasChina, rating, voyageRisk} from "../src/rank";

const rankTest = require('ava');

rankTest('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});

rankTest('should_return_true_when_call_hasChina_given_history_with_china', t => {
    //given
    const history = [
        {
            zone: 'china',
            profit: 5,
        }
    ];
    //when
    let result = hasChina(history);
    //then
    t.is(result, true)
});

rankTest('should_return_false_when_call_hasChina_given_history_without_china', t => {
    //given
    const history = [
        {
            zone: 'west-indies',
            profit: 5,
        }
    ];
    //when
    let result = hasChina(history);
    //then
    t.is(result, false)
});
rankTest('should_return_1_when_call_voyageRisk_given_voyage_length_1_zone_west-indies', t => {
    //given
    const voyage = {
        zone: 'west-indies',
        length: 1,
    };
    //when
    let result = voyageRisk(voyage);
    //then
    t.is(result, 1);
});

rankTest('should_return_5_when_call_voyageRisk_given_voyage_length_1_zone_east-indies', t => {
    //given
    const voyage = {
        zone: 'east-indies',
        length: 1,
    };
    //when
    let result = voyageRisk(voyage);
    //then
    t.is(result, 5);
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

rankTest('should_return_rank_B_when_rating_by_voyage_given_voyage_with_east-indies_zone_and_8_length', t => {
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




