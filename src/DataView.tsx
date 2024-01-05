import { useAtom } from 'jotai'
import { useEffect } from 'react'

import { dataAtom } from './store'
import { fetchData } from './utils'

export default function AsyncDataView() {
  console.log('Render AsyncDataView')

  const [data, setData] = useAtom(dataAtom)
  useEffect(() => {
    const fetchDataAsync = async () => {
      setData(fetchData())
    }
    fetchDataAsync()
  }, [])

  return <h1>{`Pools: ${data?.pools?.length}`}</h1>
}
