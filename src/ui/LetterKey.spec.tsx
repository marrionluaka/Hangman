import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'

import LetterKey from './LetterKey'

describe('LetterKey', () => {
  let sut: RenderResult

  it('renders a letter key', () => {
    sut = render(<LetterKey shouldDisable={jest.fn()} letter='A' onClick={jest.fn()} />)
    expect(sut.getByTestId('A').textContent).toBe('A')
  })

  it('renders a disabled button', () => {
    sut = render(<LetterKey shouldDisable={jest.fn().mockReturnValue(true)} letter='A' onClick={jest.fn()} />)
    expect(sut.getByTestId('A')).toBeDisabled()
  })

  it('notifies parent when pressed', () => {
    const onClickSpy = jest.fn()
    sut = render(<LetterKey shouldDisable={jest.fn()} letter='A' onClick={onClickSpy} />)

    fireEvent.click(sut.getByTestId('A'))
    expect(onClickSpy).toBeCalledWith('A', expect.anything())
  })
})
