import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import FullInfo from './components/FullInfo'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/:id" component={FullInfo} />
        <Route component={Products} />
      </Switch>
    </div>
  )
}

export default App
