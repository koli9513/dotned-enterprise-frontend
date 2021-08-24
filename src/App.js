import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>Navbar</div>
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/events">
            <div>Events</div>
          </Route>
          <Route path="/favorites">
            <div>Favorites</div>
          </Route>
          <Route path="/events/:id">
            <div>Event details</div>
          </Route>
          <Route path="/events/:category/:date">
            <div>Events by category and date</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
