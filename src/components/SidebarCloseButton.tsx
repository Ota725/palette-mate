"use client";
import { useSidebar } from "@/context/SidebarContext";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const SidebarCloseButton = () => {
  const { isBarOpen, closeSidebar } = useSidebar();

  useEffect(() => {
    console.log("isOpen:", isBarOpen);
  }, [isBarOpen]);
  return (
    <>
      <IoMdClose size={20} className="text-gray-500" onClick={closeSidebar} />
    </>
  );
};

export default SidebarCloseButton;
