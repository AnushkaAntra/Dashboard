import {
  faMoon as faMoonRegular,
  faUser as faUserRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMoon as faMoonSolid,
  faUser as faUserSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ darkMode, toggleDisplayMode }) => {
  return (
    <div className={`Navbar ${darkMode ? "dark" : ""}`}>
      <div className="flex place-content-center bg-secondary dark:bg-darkSecondary p-4 h-20">
        <div className="flex justify-start items-center w-2/3 font-bold text-3xl text-lightTextPrimary dark:text-darkTextPrimary p-2">
          EnviroScope
        </div>
        <div className="flex justify-end items-center w-1/3 space-x-4">
          <button className="m-4 p-2" onClick={toggleDisplayMode}>
            <FontAwesomeIcon
              icon={darkMode ? faMoonRegular : faMoonSolid}
              size="2x"
            />
          </button>
          <button className="m-4 p-2">
            <FontAwesomeIcon
              icon={darkMode ? faUserRegular : faUserSolid}
              size="2x"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
