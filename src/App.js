import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage"
import NavBar from "./components/NavBar"
import "./style/App.css"

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
