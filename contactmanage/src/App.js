import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layout/Header";
import About from "./components/pages/about";
import NotFound from "./components/pages/Notfound";
import Test from "./components/test/Test";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header Heading="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
