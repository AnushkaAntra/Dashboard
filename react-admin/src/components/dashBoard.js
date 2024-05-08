import Sidebar from "./Sidebar";
import Main from "./main";

export default function Dashboard({ darkMode, toggleDisplayMode }) {
  return (
    <div className={`Dashboard h-screen ${darkMode ? "dark" : ""}`}>
      <div className="flex bg-lightPrimary dark:bg-darkPrimary">
        <div className="w-1/5">
          <Sidebar darkMode={darkMode} />
        </div>
        <div className="w-4/5 ">
          <Main darkMode={darkMode} toggleDisplayMode={toggleDisplayMode} />
        </div>
      </div>
    </div>
  );
}
