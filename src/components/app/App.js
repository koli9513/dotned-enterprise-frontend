import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventList from "../elements/EventList";
import DetailedEvent from "../elements/DetailedEvent";
import Navbar from "../elements/Navbar";
import AddEvent from "./components/AddEvent";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <EventList />
          </Route>
          <Route exact path="/events">
            <EventList />
          </Route>
          <Route path="/events/add">
            <AddEvent />
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
