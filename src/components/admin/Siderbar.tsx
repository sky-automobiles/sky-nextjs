import React from "react";
import { HiMenu } from "react-icons/hi"; // Example of another icon
import SidebarMenuItem from "./SidebarMenuItem";
import { BiWindows } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import Image from "next/image";
import { SiSuzuki } from "react-icons/si";
import Cookies from "js-cookie";

import { HiMiniHome } from "react-icons/hi2";
import { GiCheckMark } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  pathname: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  toggleSidebar,
  pathname,
}) => {
  // Get current route

    const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("driverId");
    Cookies.remove("isAdmin");

    toast.success("Logout Successfully");
    // window.location.href = "/admin/login";
     router.push("/admin/login");
  };
  return (
    <div
      className={`fixed min-h-[95vh] h-[calc(100vh-24px)] ${
        isCollapsed ? "w-[80px]" : "w-[250px]"
      } bg-white flex flex-col transition-all duration-300 rounded-xl my-3 mx-3 justify-between`}
    >
      <section>
        <div
          className={`flex ${
            isCollapsed ? "justify-center" : "justify-between"
          } items-center pt-10`}
        >
          <div className={`px-4 w-3/4 ${isCollapsed && "hidden"}`}>
            <Image
              src="/images/other/logo.png"
              alt="logo"
              width={300}
              height={300}
              className={`w-auto h-12 rounded-lg md:h-14 duration-500 mb-1   `}
            />
          </div>

          <div
            className={`px-4 cursor-pointer  ${
              isCollapsed ? "w-full flex justify-center" : "w-1/4"
            } flex items-center `}
            onClick={toggleSidebar}
          >
            <div className="w-full h-10 text-black flex items-center justify-center">
              <HiMenu className="text-3xl" />
            </div>

            {/* <BiWindows className="h-8 w-8 text-black bg-red-500 " /> */}
          </div>
        </div>
        <div className={`flex flex-col mt-7 `}>
          {/* <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Home"
            to="/admin/home"
            icon={HiMiniHome} // Use a specific icon
            active={pathname === "/admin/home"}
          /> */}
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Arena"
            to="/admin/arena"
            icon={SiSuzuki} // Another icon
            active={pathname === "/admin/arena"}
          />
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Nexa"
            to="/admin/nexa"
            icon={SiSuzuki} // Another icon
            active={pathname === "/admin/nexa"}
          />
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Truevalue"
            to="/admin/truevalue"
            icon={GiCheckMark} // Another icon
            active={pathname === "/admin/truevalue"}
          />
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Services"
            to="/admin/services"
            icon={FaWpforms} // Another icon
            active={pathname === "/admin/services"}
          />
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Other"
            to="/admin/others"
            icon={BiWindows} // Another icon
            active={pathname === "/admin/others"}
          />
        </div>
      </section>

      <div
        className={`w-full text-black flex items-center mb-6 cursor-pointer overflow-hidden ${
          isCollapsed ? "justify-center" : "ml-11 "
        }`}
        onClick={handleLogout}
      >
        <FiLogOut className={`text-xl `} />
        {!isCollapsed && <span className="whitespace-nowrap pl-4">Logout</span>}
      </div>

      {/* <BiWindows className="h-8 w-8 text-black bg-red-500 " /> */}
    </div>
  );
};

export default Sidebar;
