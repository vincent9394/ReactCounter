// import logo from './logo.svg';
import "./App.css";
import MultiCounter from "./components/MultiCounter";
import {createStore} from 'redux';
import counterReducer from "./reducers/counterReducer";
import {Provider} from 'react-redux';

function App() {
  const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
  return (
    <div className="App">
      <Provider store ={store}> 
        <MultiCounter />
      </Provider>
    </div>
  );
}

export default App;
