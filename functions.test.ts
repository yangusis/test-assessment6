const {shuffleArray} = require('./utils')

const testArr = [1, 2, 3, 4]
const shuffArr = shuffleArray(testArr)

describe('shuffleArray should', () => {
    test('have an equal length to original', () => {
        expect(shuffArr.length).toEqual(testArr.length)
    })

    test('return an array', () => {
        expect(Array.isArray(shuffArr)).toEqual(true)
    }
    )
})