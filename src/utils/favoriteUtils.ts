// utils/favoriteUtils.ts
import { toggleFavorite } from "@/app/actions/favoriteColors";
import { createClient } from "./supabase/client";

export const checkIfFavorite = async (
  currentPalette: string[],
  setIsFavorite: (state: boolean) => void
) => {
  const supabase = createClient();
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.user) return;

  const formattedColors = `{${currentPalette
    .map((color) => `"${color}"`)
    .join(",")}}`;
  const { data: palettes } = await supabase
    .from("palettes")
    .select("id")
    .eq("user_id", user.user.id)
    .contains("colors", formattedColors);

  setIsFavorite((palettes ?? []).length > 0);
};

export const handleFavorite = async (
  currentPalette: string[],
  isFavorite: boolean,
  setOptimisticFavorite: (state: boolean) => void,
  setIsFavorite: (state: boolean) => void,
  startTransition: (fn: () => void) => void
) => {
  const supabase = createClient();
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.user) {
    console.error("User not found or authentication failed:", userError);
    return;
  }

  const formattedColors = `{${currentPalette
    .map((color) => `"${color}"`)
    .join(",")}}`;
  const newState = !isFavorite;

  startTransition(async () => {
    setOptimisticFavorite(newState);
    try {
      const serverResponse = await toggleFavorite({
        userId: user.user.id,
        colors: formattedColors,
        currentState: isFavorite,
      });
      setIsFavorite(serverResponse);
    } catch (error) {
      console.error("Error during toggle:", error);
      setOptimisticFavorite(isFavorite);
    }
  });
};
