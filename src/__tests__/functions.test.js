import {sum, bankAccount} from '../functions'
// const {sum} = require('../functions')

// most basic test
test('2 equals 2', () => {
    expect(2).toBe(2)
})


describe('sum function', ()=> {
    test('sum of 1 and 2 should be 3', ()=> {
        expect(sum(1,2)).toBe(3)
    })
    test('works with strings', ()=> {
        expect(sum('1', '5')).toBe(6)
    })
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

//not good practice to have multiple assertions...
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

//GROUPING
describe('bank account methods and properties', ()=> {
    afterEach(()=> {
        bankAccount.balance = 1000
    })
    test('initial balance is 1000', ()=> {
        expect(bankAccount.balance).toBe(1000)
    })
    test('deposit function will alter balance', ()=> {
        bankAccount.deposit(5000) //*****
        expect(bankAccount.balance).toBe(6000)
    })
    test('withdraw should correctly alter balance', ()=> {
        bankAccount.withdraw(5000)
        expect(bankAccount.balance).toBe(-4000)
    })
})