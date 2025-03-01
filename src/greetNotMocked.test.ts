import {greet} from './greet'

describe('first', () => { 

    it('does not mock the file', ()=>{
        expect(greet("John")).toEqual("Hello, John")
    })
 })