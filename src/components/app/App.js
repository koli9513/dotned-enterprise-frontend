import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventList from "../elements/EventList";
import FavoriteList from "../elements/FavoriteList";
import DetailedEvent from "../elements/DetailedEvent";
import Navbar from "../elements/Navbar";
import AddEvent from "../AddEvent";
import EditEvent from "../EditEvent";
import FilteredList from "../elements/CategoryList";
import CategoryList from "../elements/CategoryList";
import CityList from "../elements/CityList";

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
          <Route exact path="/category/:category">
            <CategoryList />
          </Route>
          <Route exact path="/city/:city">
            <CityList />
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
          {/*<Route path="/events/:category/:date">*/}
          {/*  <div>Events by category and date</div>*/}
          {/*</Route>*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
