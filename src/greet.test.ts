import {greet} from './greet'

jest.mock('./greet')

describe('executes the greet function from ./greet', () => { 

    it('mocks the file', ()=>{
        expect(greet("John")).toEqual("Hello Hello John")
    })
 })