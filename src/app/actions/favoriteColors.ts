"use server";

import { supabasePalettesProps } from "@/interfaces/Interfaces";
import { createClient } from "@/utils/supabase/server";

export const toggleFavorite = async ({
  userId,
  colors,
  currentState,
}: {
  userId: string;
  colors: string;
  currentState: boolean;
}): Promise<boolean> => {
  // console.log("Server action called with currentState:", currentState);
  const supabase = await createClient();

  if (currentState) {
    // console.log("サーバー: お気に入り削除処理");
    // 既にお気に入りの場合 → 削除
    const { error } = await supabase
      .from("palettes")
      .delete()
      .eq("user_id", userId)
      .contains("colors", colors);

    if (error) {
      console.error("Error removing favorite:", error);
      return currentState; // 失敗した場合、状態を変更しない
    }
    return false; // 削除成功 → お気に入り解除
  } else {
    // console.log("サーバー: お気に入り追加処理");
    // お気に入りでない場合 → 追加
    const { error } = await supabase.from("palettes").insert({
      user_id: userId,
      colors,
    });

    if (error) {
      console.error("Error adding favorite:", error);
      return currentState; // 失敗した場合、状態を変更しない
    }
    return true; // 追加成功 → お気に入り登録
  }
};

export const getFavoritePalettes = async (userId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("palettes")
    .select("id, colors, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch favorite palettes:", error);
    return [];
  }

  return data as supabasePalettesProps[];
};
