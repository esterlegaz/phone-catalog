import "./App.scss";
import PhoneList from './components/PhoneList/PhoneList';
import Form from './components/Form/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <header >
          <h1 className='header__title'>
            <Link to="/">
              Phone catalog
          </Link>
          </h1>
        </header>

        <Switch>
          <Route exact path="/" component={PhoneList} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;