import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Jumbotron } from './components/Jumbotron'

//Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NoMatch } from './pages/NoMatch';

//Navigation Bar
import { NavBar } from './components/NavBar'

//Footer
import { Footer } from './components/Footer'

//Layout
import { Layout } from './components/Layout';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default App;
