import Search from "./search";
import Pages from "./pages";
import Chart from "./chart";

const Main = ({ darkMode, toggleDisplayMode }) => {
  return (
    <div>
      <Search darkMode={darkMode} toggleDisplayMode={toggleDisplayMode}/>
      <Pages darkMode={darkMode} toggleDisplayMode={toggleDisplayMode}/>
      <Chart darkMode={darkMode} toggleDisplayMode={toggleDisplayMode}/>
    </div>
  );
};

export default Main;
