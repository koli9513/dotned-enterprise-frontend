import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventList from "../elements/EventList";
import FavoriteList from "../elements/FavoriteList";
import DetailedEvent from "../elements/DetailedEvent";
import Navbar from "../elements/Navbar";
import AddEvent from "../AddEvent";
import SearchList from "../search/SearchList";
import EditEvent from "../EditEvent";
import FilteredList from "../elements/FilteredList";


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
          <Route exact path="/filter/:filterType/:keyword">
            <FilteredList />
          </Route>
          <Route path="/events/add">
            <AddEvent />
          </Route>
          <Route path="/events/edit/:eventId">
            <EditEvent />
          </Route>
          <Route path="/favorites">
            <FavoriteList />
          </Route>
          <Route path="/event/:eventId">
            <DetailedEvent />
          </Route>
          <Route path="/search/:searchTerm">
            <SearchList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
