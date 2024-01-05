import './App.css'

import { Provider } from 'jotai'
import { Suspense } from 'react'

import AsyncDataView from './DataView'

export default function App() {
  return (
    <Provider>
      <Suspense fallback={<p>Loading data...</p>}>
        <AsyncDataView />
      </Suspense>
    </Provider>
  )
}
