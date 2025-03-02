"use client";
import { useSidebar } from "@/context/SidebarContext";
import { IoMenu } from "react-icons/io5";

const SidebarOpenButton = () => {
  const { openSidebar } = useSidebar();

  return (
    <>
      <IoMenu
        size={28}
        className="h-10 flex justify-center items-center"
        onClick={openSidebar}
      />
    </>
  );
};

export default SidebarOpenButton;
