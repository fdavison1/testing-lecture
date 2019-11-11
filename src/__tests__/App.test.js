import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import App from '../App'
import {act, Simulate} from 'react-dom/test-utils'


let container = null


beforeEach(()=> {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(()=> {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it('Renders todos', ()=> {
    act(() => {
        render(<App />, container)
    })
        console.log(container.textContent)
        expect(container.textContent).toContain('Practice the Piano')
})

it('can change the input', ()=> {
    act(()=> {
        render(<App />, container)
    })
    const input = container.querySelector('input')
    act(()=> {
        Simulate.change(input, {target: {value: 'Practice some more'}})
    })
    expect(input.value).toBe('Practice some more')
})