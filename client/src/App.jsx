import React from "react";
import { connect } from 'react-redux';
import "./App.scss";
import PhoneList from './components/PhoneList/PhoneList';
import Loading from './components/Loading/Loading';
import Form from './components/Form/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        {this.props.isLoading &&
          <Loading />
        }
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
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const isLoading = state.global.isLoading;

  return {
    isLoading
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);