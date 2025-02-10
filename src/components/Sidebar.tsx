"use client";

import MenuSection from "./MenuSection";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-56 h-screen bg-gray-50 border-r">
      <h1 className="text-2xl font-viga py-4 px-2">PaletteMate</h1>

      {/* Brand メニュー */}
      <MenuSection
        title="Brand"
        links={[
          { href: "/brand/1", label: "1 Color" },
          { href: "/brand/2", label: "2 Colors" },
          { href: "/brand/3", label: "3 Colors" },
        ]}
      />

      {/* Website メニュー */}
      <MenuSection
        title="Website"
        links={[
          { href: "/website/1", label: "1 Accent" },
          { href: "/website/2", label: "2 Accents" },
          { href: "/website/3", label: "3 Accents" },
        ]}
      />
    </div>
  );
};

export default Sidebar;
