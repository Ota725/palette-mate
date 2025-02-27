"use client";
import { useSidebar } from "@/context/SidebarContext";
import { useEffect } from "react";
import { IoMenu } from "react-icons/io5";

const SidebarOpenButton = () => {
  const { isBarOpen, openSidebar } = useSidebar();

  useEffect(() => {
    console.log("isOpen:", isBarOpen);
  }, [isBarOpen]);
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
