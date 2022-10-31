import './App.css';
import HyfCPHRepos from './components/HyfCPHRepos';
import ReposProvider from './components/ReposContext';
import UserProvider from "./components/UserContext"
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserDetails />
      </UserProvider>

      <ReposProvider>
        <HyfCPHRepos />
      </ReposProvider>
    </div>
  );
}

export default App;