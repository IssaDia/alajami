
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import EditExercise from "./components/EditExercise";
import ThemeList from "./components/ThemesList";
import Search from "./components/Search";
import CreateForm from './components/CreateForm';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <br/>
      <Route path="/" component={Home} />
      <Route path="/create" component={CreateForm} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/themes" component={ThemeList} />
      <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;