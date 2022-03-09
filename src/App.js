import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import from project
import './App.css';
import Students from "./components/Students";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes> 
        <Route path="/" exact element={<Students/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;