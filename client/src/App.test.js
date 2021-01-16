import { render, screen } from '@testing-library/react';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Enzyme, {  mount } from 'enzyme';
import PhoneList from './components/PhoneList/PhoneList';
import Form from './components/Form/Form';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('Clicking link will render component associated with path', () => {
  const wrapper = mount(
    <Router>
      <header >
        <h1 className='header__title'>
          <Link id= "formLink" to="/">
            Phone catalog
      </Link>
        </h1>
      </header>

      <Switch>
        <Route exact path="/" component={PhoneList} />
        <Route path="/form" component={Form} />
      </Switch>
    </Router>
  );
  wrapper.find('#formLink').at(0).simulate('click', { button: 0 });
});