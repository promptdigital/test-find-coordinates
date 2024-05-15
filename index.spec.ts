import { findCoordinate } from "./index";

describe('Find 2D coordinates', () => {
    const TEST_COORDINATES = [{
        x: 0,
        y: 0
    },
    {
        x: 2,
        y: 0
    },
    {
        x: 2,
        y: 4
    },
    {
        x: 6,
        y: 4
    }];

    const tests = [
        {
            name: 'Location at 5 minutes with total duration 10 minutes',
            input: TEST_COORDINATES,
            totalDuration: 10,
            atDuration: 5,
            output: [{x: 2, y: 3}]
        },
        {
            name: 'Location at 6 minutes with total duration 10 minutes',
            input: TEST_COORDINATES,
            totalDuration: 10,
            atDuration: 6,
            output: [{x: 2, y: 4}]
        },
        {
            name: 'Location at 4 minutes with total duration 8 minutes',
            input: TEST_COORDINATES,
            totalDuration: 6,
            atDuration: 3,
            output: [{x: 2, y: 3}]
        },
        {
            name: 'Location at 4 minutes with total duration 6 minutes',
            input: TEST_COORDINATES,
            totalDuration: 6,
            atDuration: 4,
            output: [{x: 2, y: 4}, {x: 3, y: 4}]
        }
    ]

    tests.forEach(test => {
        it(test.name, () => {
            expect(findCoordinate(test.input, test.totalDuration, test.atDuration)).toEqual(test.output);
        });
    })
})