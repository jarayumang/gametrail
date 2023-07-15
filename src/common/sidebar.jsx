import logo from "../assets/images/necrom-logo.png";
import {
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
  RectangleStackIcon,
  BuildingStorefrontIcon,
  NewspaperIcon,
  MoonIcon,
  SunIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export function Sidebar() {
  return (
    <div className="bg-background border-r-2 border-primary border-opacity-20 w-[5%]">
      <div className="h-full flex flex-col justify-between">
        <div className="w-full flex flex-col justify-center items-center">
          <img src={logo} className="w-14 py-7" alt="logo" />
          <button className="button-icon">
            <HomeIcon className="h-6 w-6 m-5 text-primary" />
          </button>
          <button className="button-icon">
            <BookOpenIcon className="h-6 w-6 m-5 text-primary" />
          </button>
          <button className="button-icon">
            <UsersIcon className="h-6 w-6 m-5 text-primary" />
          </button>
          <button className="button-icon">
            <RectangleStackIcon className="h-6 w-6 m-5 text-primary" />
          </button>
          <button className="button-icon">
            <BuildingStorefrontIcon className="h-6 w-6 m-5 text-primary" />
          </button>
          <button className="button-icon">
            <NewspaperIcon className="h-6 w-6 m-5 text-primary" />
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <button className="button-icon">
            <SunIcon className="h-6 w-6 m-5 text-primary" />
          </button>
          <button className="button-icon">
            <GlobeAltIcon className="h-6 w-6 m-5 text-primary" />
          </button>
          <button className="button-icon">
            <UserCircleIcon className="h-6 w-6 m-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}
