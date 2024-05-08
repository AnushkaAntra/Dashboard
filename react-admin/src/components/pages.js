import {
  faCalendar,
  faCloud,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pages = () => {
  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="flex p-3 w-1/3 m-3 bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
          <div className="flex-grow grid grid-col justify-start items-center">
            <div className="flex">
              <p className="flex font-medium text-xl dark:text-darkTextPrimary">
                Weather
              </p>
              <FontAwesomeIcon
                icon={faCloud}
                className="pt-1.5 pl-5 dark:text-darkTextPrimary"
              />
            </div>
            <div className="grid grid-col p-2 dark:text-darkTextPrimary">
              <p className="text-3xl">42°C</p>
              <p className="text-lg dark:text-[#B5C0D0]">Haze</p>
            </div>
          </div>
          <div className="w-20">
            <img
              src="https://i.pinimg.com/originals/9b/67/b4/9b67b4e5299c980b2d6beaf7dc6958b4.gif"
              alt=""
            />
          </div>
        </div>
        <div className="flex p-3 w-1/3 m-3 bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
          <div className="flex-grow grid grid-col justify-start items-center">
            <div className="flex">
              <p className="flex font-medium text-xl dark:text-darkTextPrimary">
                Notes
              </p>
              <FontAwesomeIcon
                icon={faNoteSticky}
                className="pt-1.5 pl-5 dark:text-darkTextPrimary"
              />
            </div>
            <div className="grid grid-col p-2 dark:text-darkTextPrimary">
              <p className="text-3xl">10</p>
              <p className="text-lg dark:text-[#B5C0D0]">Things to do</p>
            </div>
          </div>
          <div className="w-20">
            <img
              src="https://i.pinimg.com/originals/9b/67/b4/9b67b4e5299c980b2d6beaf7dc6958b4.gif"
              alt=""
            />
          </div>
        </div>
        {/* <div className="m-2 w-24 h-24 bg-[#F6E9B2] tracking-[0.25em] font-bold text-3xl pl-0.5 rounded-br-3xl">
                ......
              </div> */}
        <div className="flex p-3 w-1/3 m-3 bg-lightestPrimary dark:bg-darkestPrimary dark:bg-opacity-70">
          <div className="flex-grow grid grid-col justify-start items-center">
            <div className="flex">
              <p className="flex font-medium text-xl dark:text-darkTextPrimary">
                Calendar
              </p>
              <FontAwesomeIcon
                icon={faCalendar}
                className="pt-1.5 pl-5 dark:text-darkTextPrimary"
              />
            </div>
            <div className="grid grid-col p-2 dark:text-darkTextPrimary">
              <p className="text-2xl">25 Jun 2023</p>
              <p className="text-lg dark:text-[#B5C0D0]">Sunday</p>
            </div>
          </div>
          <div className="w-20">
            <img
              src="https://i.pinimg.com/originals/9b/67/b4/9b67b4e5299c980b2d6beaf7dc6958b4.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
