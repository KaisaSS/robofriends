import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
import "./App.css";
import { setSearchField } from "../actions";

const App = () => {
  const [robots, setRobots] = useState([]);
  const dispatch = useDispatch();
  const { searchField } = useSelector((state) => state);

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filreredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (!robots.length) {
    return <h1>Loading...</h1>;
  } else {
    return (
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
  }
};

export default App;
