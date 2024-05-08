import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const Home = ({ darkMode }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className={`Home h-screen ${darkMode ? "dark" : ""}`}>
      <div className="grid grid-col gap-4 place-content-center h-full">
        <div>
          <h1
            className={`text-9xl text-secondary ${
              darkMode ? "dark:text-darkSecondary" : "text-lightTextPrimary"
            }`}
          >
            Welcome.
          </h1>
        </div>
        <div>
          <div className="p-4 bg-secondary dark:bg-darkSecondary flex justify-between items-center h-12 rounded-xl">
            <div>
              <TypeAnimation
                sequence={[
                  "Get to know about your Environment...",
                  1000,
                  "Environment around you...",
                  1000,
                  "Have a Look Now...",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="font-light"
                style={{ fontSize: "1.5em", fontStyle: "italic" }}
              />
            </div>
            <div className="px-1 rounded-lg place-content-end hover:bg-darkSecondary hover:dark:bg-secondary">
              <FontAwesomeIcon icon={faArrowRight} size="2x" onClick={handleClick}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
