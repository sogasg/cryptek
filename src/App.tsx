import * as React from "react"
import { SFC } from "react"
import { Route, Switch } from "react-router"

import Layout from "./components/Layout"
import BuyBtcNo from "./components/no/BuyBtcNo"
import BuyEthNo from "./components/no/BuyEthNo"
import HomeNo from "./components/no/HomeNo"

import BuyBtcSe from "./components/se/BuyBtcSe"
import BuyEthSe from "./components/se/BuyEthSe"
import HomeSe from "./components/se/HomeSe"

import BuyBtcDk from "./components/dk/BuyBtcDk"
import BuyEthDk from "./components/dk/BuyEthDk"
import HomeDk from "./components/dk/HomeDk"

const { Home, BuyBtc, BuyEth } = getComponents()

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

function getCountry() {
  const country = window.location.hostname.split(".").reverse()[0]
  return country === "localhost" ? "no" : (country as any)
}

function getComponents() {
  const country = getCountry()
  let components = {
    Home: HomeNo, //FIXME
    BuyBtc: BuyBtcNo,
    BuyEth: BuyEthNo,
  }
  if (country === "dk") {
    components = {
      Home: HomeDk,
      BuyBtc: BuyBtcDk,
      BuyEth: BuyEthDk,
    }
  } else if (country === "se") {
    components = {
      Home: HomeSe,
      BuyBtc: BuyBtcSe,
      BuyEth: BuyEthSe,
    }
  }

  return components
}
