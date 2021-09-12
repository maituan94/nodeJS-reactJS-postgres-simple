import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Routes } from './router'
import Home from './containers/Home'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Home>
            <Routes />
          </Home>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
