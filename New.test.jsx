import { render } from '@testing-library/react'
import {Guess} from './New'
import { EnzymeAdapter, shallow } from 'enzyme'
import { expect } from 'jest'
import Adapter from 'enzyme-adapter-react-16'

// EnzymeAdapter.configure({ adapter: new Adapter() })

const mockUser = [
    {
        username: "user",
        score: 0
    }
]

describe('testing Guess function', () => {
    test('renders', () => {
        const wrapper = shallow(<Guess />);
        expect(wrapper.exists()).toBe(true);
    })
    
    test('renders header', () => {
        const wrapper = shallow(<Guess />);
        expect(wrapper.find('h1')).toHaveLength(1);
    })
    
     
    

})