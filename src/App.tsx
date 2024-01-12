import './App.css'

import { Provider } from 'jotai'
import { Suspense } from 'react'

import AsyncDataView from './DataView'

const App = () => (
  <Provider>
    <Suspense fallback={<p>Loading data...</p>}>
      <AsyncDataView />
    </Suspense>
  </Provider>
)

export default App
