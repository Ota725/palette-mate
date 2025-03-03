"use server";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { getFavoritePalettes } from "../actions/favoriteColors";
import Sidebar from "@/components/base/sidebar/Sidebar";
import FavoritesHeader from "@/components/favorites/FavoritesHeader";
import Switcher from "@/components/layouts/Switcher";
import FavoritesPalettes from "@/components/favorites/FavoritesPalettes";

const FavoritesPage = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const palettes = (await getFavoritePalettes(data.user.id)) || [];

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Switcher sp={<FavoritesHeader />} />
        <FavoritesPalettes palettes={palettes} />
      </div>
    </div>
  );
};

export default FavoritesPage;
