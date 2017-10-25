import ReactDOM from "react-dom"
import { AppContainer } from 'react-hot-loader'

function renderApp(Component, props = {}) {
  const TheComponent = (
    <AppContainer>
      <Component {...props} />
    </AppContainer>
  )
  const container = document.getElementById('main')
  ReactDOM.render(TheComponent, container)
}

import App from './App/App.js'
renderApp(App)

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default
    renderApp(NextApp)
  })
}