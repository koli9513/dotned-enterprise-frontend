import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventList from "./components/EventList";
import DetailedEvent from "./components/DetailedEvent";

function App() {
  return (
    <Router>
      <div className="App">
        <div>Navbar</div>
        <Switch>
          <Route exact path="/">
            <EventList />
          </Route>
          <Route path="/events">
            <EventList />
          </Route>
          <Route path="/favorites">
            <div>Favorites</div>
          </Route>
          <Route path="/event/:eventId">
            <DetailedEvent />
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
