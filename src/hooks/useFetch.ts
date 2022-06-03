import { useState, useEffect } from 'react'

type RequestPending = {
  state: 'pending'
}

type RequestError = {
  state: 'error'
  error: any
}

type RequestSuccess<T> = {
  state: 'ok'
  data: T
}

export type RequestState<T> = RequestPending | RequestError | RequestSuccess<T>

type UseFetch<T> = { request: RequestState<T>, fetchData(): Promise<void> }

export default function useFetch<T>(getResource: string | (() => Promise<T>)): UseFetch<T> {
  const [request, setRequest] = useState<RequestState<T>>({ state: 'pending' })

  useEffect(() => {
    (async () => {
      await fetchData()
    })()
  }, [getResource])

  async function fetchData() {
    setRequest({ state: 'pending' })
    try {
      const data = await (typeof getResource === 'string' ? _getDefaultResource(getResource) : getResource())
      setRequest({ state: 'ok', data })
    } catch (error) {
      setRequest({ state: 'error', error })
    }
  }

  return { request, fetchData }
}

async function _getDefaultResource(uri: string) {
  const res = await fetch(uri)
  return await res.json()
}
