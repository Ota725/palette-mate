"use client";
import { useSidebar } from "@/context/SidebarContext";
import { IoMdClose } from "react-icons/io";

const SidebarCloseButton = () => {
  const { closeSidebar } = useSidebar();

  return (
    <>
      <IoMdClose size={24} className="text-gray-400" onClick={closeSidebar} />
    </>
  );
};

export default SidebarCloseButton;
