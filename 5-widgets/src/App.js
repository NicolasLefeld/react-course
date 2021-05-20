import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
const items = [
  {
    title: "First title",
    content: "First content",
  },
  {
    title: "Second title",
    content: "Second content",
  },
  {
    title: "Tercero title",
    content: "Tercero content",
  },
];

const options = [
  {
    label: "color red",
    value: "red",
  },
  {
    label: "color green",
    value: "green",
  },
  {
    label: "color blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
