import {greet} from './greet'

jest.mock('./greet')

describe('first', () => { 

    it('mocks the file', ()=>{
        expect(greet("John")).toEqual("Hello Hello John")
    })
 })