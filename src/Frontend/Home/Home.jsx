import React from "react";
import Header from "../Layout/Header";
import NavBar from "../Layout/NavBar";
import {
  Users,
  LayoutDashboard,
  BookOpenText,
  GraduationCap,
  BadgePlus,
  BellPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  const profileHandler = () => {
    Navigate("/userProfile/:id");
  };

  const dashboardHandler = () => {
    Navigate("/dashboard");
  };

  return (
    <>
      {/* <Header /> */}
      {/* <NavBar /> */}

      <header className="flex h-[7rem] bg-gray-700 items-center gap-3 px-4">
        <div className=" h-[5rem] w-[5rem]">
          <img
            src="/fav-icon-1.PNG"
            alt="logo"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex justify-end  flex-grow">
          <Users
            size={30}
            strokeWidth={0.5}
            color="white"
            onClick={profileHandler}
          />
        </div>
      </header>

      <nav className="flex flex-col items-center gap-[3rem] pt-[2rem] w-[8rem] h-screen-minus-header bg-blue-300">
        <div className="flex gap-1  w-[7rem]" onClick={dashboardHandler}>
          <LayoutDashboard />
          Dashboard
        </div>
        <div className="flex gap-1  w-[7rem]">
          <BookOpenText /> Courses
        </div>
        <div className="flex gap-1 w-[7rem]">
          <BadgePlus /> Admission
        </div>
        <div className="flex gap-1  w-[7rem]">
          <BellPlus /> Notifications
        </div>
        <div className="flex gap-1  w-[7rem]">
          <GraduationCap />
          Leaderboard
        </div>
      </nav>
    </>
  );
}

export default Home;
