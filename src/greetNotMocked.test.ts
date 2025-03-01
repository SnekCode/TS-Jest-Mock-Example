import {greet} from './greet'

describe('first', () => { 

    it('mocks the file', ()=>{
        expect(greet("John")).toEqual("Hello, John")
    })
 })