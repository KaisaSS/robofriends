import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";

const App = () => {
  const dispatch = useDispatch();
  const { searchField } = useSelector((state) => state.searchRobots);
  const { robots, isPending } = useSelector((state) => state.requestRobots);

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  const onRequestRobots = () => {
    dispatch(requestRobots());
  };

  useEffect(() => {
    onRequestRobots();
  }, []);

  const filreredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <div className="title-container">
        <h1 className="title logo">
          <i className="fas fa-robot"></i>
        </h1>
        <h1 className="title">RoboFriends</h1>
      </div>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filreredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};
export default App;
