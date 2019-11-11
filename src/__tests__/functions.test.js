import {sum} from '../functions'
// const {sum} = require('../functions')

// most basic test
test('2 equals 2', () => {
    expect(2).toBe(2)
})

test('sum of 1 and 2 should be 3', ()=> {
    expect(sum(1,2)).toBe(3)
})

test('works with strings', ()=> {
    expect(sum('1', '5')).toBe(6)
})

test('object has id', () => {
    expect({id: 4}).toEqual({id: 4})
})

//not keyword
test('2 does not equal 4', ()=> {
    expect(2).not.toBe(4)
})

test('true equals true', ()=> {
    expect(true).toBeTruthy()
})

test('falsy values are falsy', ()=> {
    expect(null).toBeFalsy()
    expect(0).toBeFalsy()
    expect(false).toBeFalsy()
    expect('').toBeFalsy()
    expect(NaN).toBeFalsy()
    expect(undefined).toBeFalsy()
})

const wishList = ['Steinway', 'Bosendorfer', 'Yamaha', 'Faz']

test('wishlist contains Steinway', ()=> {
    expect(wishList).toContain('Steinway')
})