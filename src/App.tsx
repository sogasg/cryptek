import * as React from "react"
import { SFC } from "react"
import { Route, Switch } from "react-router"

import Layout from "./components/Layout"
import BuyBtc from "./components/BuyBtc"
import BuyEth from "./components/BuyEth"
import Home from "./components/Home"

const App: SFC = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bitcoin" component={BuyBtc} />
      <Route exact path="/ethereum" component={BuyEth} />
    </Switch>
  </Layout>
)

export default App
