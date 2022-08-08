import { JetProvider } from "./Context/JetContext";
import Navbar from "./Components/Navbar";
import AddJet from "./Components/AddJet";
import JetList from "./Components/JetList";
import './App.css'
function App() {
  return (
    <div className="App">
      <JetProvider>
        <Navbar></Navbar>
        <AddJet></AddJet>
        <JetList></JetList>
      </JetProvider>
    </div>
  );
}

export default App;
