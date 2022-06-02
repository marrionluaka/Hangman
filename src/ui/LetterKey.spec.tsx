import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'

import LetterKey from './LetterKey'

describe('LetterKey', () => {
  let sut: RenderResult

  it('renders a letter key', () => {
    sut = render(<LetterKey letter='A' onClick={jest.fn()} />)
    expect(sut.getByTestId('A').textContent).toBe('A')
  })

  it('notifies parent when pressed', () => {
    const onClickSpy = jest.fn()
    sut = render(<LetterKey letter='A' onClick={onClickSpy} />)

    fireEvent.click(sut.getByTestId('A'))
    expect(onClickSpy).toBeCalledWith('A', expect.anything())
  })
})
