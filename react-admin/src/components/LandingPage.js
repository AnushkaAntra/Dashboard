import Home from "./Home";
import Navbar from "./Navbar";

export default function LandingPage({ darkMode, toggleDisplayMode }) {
  return (
    <div className={`LandingPage ${darkMode ? "dark" : ""}`}>
      <div>
        <div className="flex flex-col gap-4 w-full h-screen py-2 bg-no-repeat bg-cover bg-[url('https://muffingroup.com/blog/wp-content/uploads/2021/03/gr.jpg')] ">
          <Navbar darkMode={darkMode} toggleDisplayMode={toggleDisplayMode} />
          <Home darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
