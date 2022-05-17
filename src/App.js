import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
      <Navbar about="About us"/>
      <Textarea heading="Enter text for the action" />
    </>
  );
}

export default App;
