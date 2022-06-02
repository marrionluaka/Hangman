import useFetch from './useFetch'
import { renderHook } from '@testing-library/react-hooks'

(global as any).fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ key: 'value' })
}))

describe('useFetch', () => {
  it('returns the ok state of a request', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch<Record<string, string>>('http://example.com'))
    
    await waitForNextUpdate()

    expect(result.current.request.state).toBe('ok')
    expect((result.current.request as any).data).toEqual({ key: 'value' })
  })

  it('returns the error state of a request', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Invalid response."))
    const { result, waitForNextUpdate } = renderHook(() => useFetch<Record<string, string>>('http://example.com'))

    await waitForNextUpdate()

    expect(result.current.request.state).toBe('error')
    expect((result.current.request as any).error).toEqual(new Error("Invalid response."))
  })
})
