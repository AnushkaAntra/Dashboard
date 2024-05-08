import {
  faBars,
  faCalendar,
  faChartLine,
  faChartPie,
  faChartSimple,
  faCloud,
  faEarthAmericas,
  faGlobe,
  faNoteSticky,
  faSeedling,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ darkMode }) => {
  return (
    <div className={`Sidebar h-screen ${darkMode ? "dark" : ""}`}>
      <div className="p-6 h-screen flex flex-col justify-center items-center bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
        <div className="flex justify-between w-full dark:text-darkTextPrimary mt-4">
          <p className="text-2xl font-semibold mb-5">SideBar</p>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="flex flex-col items-center dark:text-darkTextPrimary">
          <div className="border border-4 rounded-full w-20 h-20 flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
          <p className="text-xl font-semibold mt-2">Anushka Antra</p>
          <p className="text-[#AF2655] dark:text-[#A3D8FF] ">
            antraanushka31@gmail.com
          </p>
        </div>
        <div className="m-3 flex flex-col w-full">
          <div className="flex flex-col text-[#5C5470]">
            <p className="dark:text-darkTextPrimary">Data</p>
            <div className="p-2 text-lightTextPrimary dark:text-darkTextPrimary mb-2">
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faCloud} />
                <p>Climate Change</p>
              </div>
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faSeedling} />
                <p>Pollution</p>
              </div>
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faEarthAmericas} />
                <p>Biodiversity Loss</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[#5C5470]">
            <p className="dark:text-darkTextPrimary">Pages</p>
            <div className="p-2 text-lightTextPrimary dark:text-darkTextPrimary">
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faCloud} />
                <p>Weather</p>
              </div>
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faCalendar} />
                <p>Calendar</p>
              </div>
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faNoteSticky} />
                <p>Notes</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[#5C5470]">
            <p className="dark:text-darkTextPrimary">Charts</p>
            <div className="p-2 text-lightTextPrimary dark:text-darkTextPrimary">
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faChartLine} />
                <p>Line Chart</p>
              </div>
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faChartSimple} />
                <p>Bar Chart</p>
              </div>
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faChartPie} />
                <p>Pie Chart</p>
              </div>
              <div className="flex justify-start gap-3 p-2 hover:bg-[#7F9F80] dark:hover:bg-opacity-40">
                <FontAwesomeIcon icon={faGlobe} />
                <p>geography Chart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
