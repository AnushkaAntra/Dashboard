import {
  faBell,
  faDownload,
  faMagnifyingGlass,
  faMoon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ darkMode, toggleDisplayMode }) => {
  return (
    <div>
      <div className="flex place-content-center bg-lighestPrimary dark:bg-darkPrimary p-5 h-16">
        <div className="flex justify-start items-center w-2/3 font-bold text-2xl text-lightTextPrimary dark:text-darkTextPrimary">
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name=""
              id=""
              class="block w-full rounded-md border-0 py-2 px-2 pr-20 text-gray-900 ring-1 dark:bg-darkestPrimary dark:text-black dark:border-white placeholder:dark:text-[#C6EBC5] sm:text-sm sm:leading-6"
              placeholder="search"
            />
            <div class="absolute inset-y-0 right-0 flex pr-4 items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={darkMode ? { color: "#C6EBC5" } : { color: "gray" }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center w-1/3 text-2xl">
          <button className="m-4 p-2" onClick={toggleDisplayMode}>
            <FontAwesomeIcon
              icon={faMoon}
              style={darkMode ? { color: "#AFC8AD" } : { color: "#1A4D2E" }}
            />
          </button>
          <button className="m-4 p-2">
            <FontAwesomeIcon
              icon={faBell}
              style={darkMode ? { color: "#AFC8AD" } : { color: "#1A4D2E" }}
            />
          </button>
          <button className="m-4 p-2">
            <FontAwesomeIcon
              icon={faUser}
              style={darkMode ? { color: "#AFC8AD" } : { color: "#1A4D2E" }}
            />
          </button>
        </div>
      </div>
      <div className="flex place-content-center bg-lighestPrimary dark:bg-darkPrimary p-5 h-16">
        <div className="flex justify-start items-center w-2/3 font-bold text-4xl text-darkPrimary dark:text-lightPrimary">
          <div className="grid grid-col">
            EnviroScope
            <p className="text-lg dark:text-[#B5C0D0]">
              Welcome to your Environment
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center w-1/3 font-bold p-3 text-white">
          <button className="bg-[#1679AB] p-2 px-3 rounded-lg dark:text-darkTextPrimary">
            <FontAwesomeIcon icon={faDownload} style={{ paddingRight: 10 }} />
            Download Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
