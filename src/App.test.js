import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    fetch: jest.fn(),
    author: 'Marcus Aurelius',
    text: 'The best answer to anger is silence'
  }

  const wrapper = shallow(<App {...props} />)

  return {
    props,
    wrapper
  }
}

describe('App Component', () => {
  test('renders self', () => {
    const { wrapper } = setup()

    expect(wrapper.find('button').hasClass('outline')).toBe(true)
    expect(wrapper.find('p').length).toBe(2)
    expect(wrapper.find('#tweet-quote').text()).toBe('Tweet Quote')

    expect(wrapper.find('#author').text()).toBe('Marcus Aurelius')
    expect(wrapper.find('#text').text()).toBe('The best answer to anger is silence')
  })

  test('fires click event', () => {
    const { wrapper, props } = setup()
    const button = wrapper.find('#new-quote')
    expect(props.fetch.mock.calls.length).toBe(0)
    button.simulate('click')
    expect(props.fetch.mock.calls.length).toBe(1)
  })
})
