import image from './pictures/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignUp from './component/signUp';
import Login from './component/login';
import Task from './component/task';
import { initialState } from "./redux/reducers/taske";
import ShowAllTasks from './component/showAllTasks';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/showAllTasks" element={<ShowAllTasks />} />
          <Route path="/task" element={<Task />} />
        </Routes>
        {/* <Task /> */}
      </Provider>
    </div>
  );
}

export default App;
