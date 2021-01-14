import "./App.scss";
import PhoneList from './components/PhoneList/PhoneList';

function App() {
  return (
    <div className='App'>
      <header >
        <h1 className='header__title'>Phone catalog</h1>
      </header>
      <PhoneList />
    </div>
  );
}

export default App;