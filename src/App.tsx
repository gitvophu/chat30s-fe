import './App.css';
import { Chat, Login, Register } from './screens';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'
function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/chat" exact>
              <Chat />
            </Route>
          </Switch>
        </div>
      </Router>
    </ToastProvider>

  );
}

export default App;
