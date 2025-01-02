import { createRoot } from 'react-dom/client'
import App from './Components/App'
import React from 'react'
import store from './Slices/store'
import { Provider } from 'react-redux'

const root=createRoot(document.getElementById('root'))
root.render(
    <>
    <Provider store={store}>
<App/>
</Provider>
</>
)
