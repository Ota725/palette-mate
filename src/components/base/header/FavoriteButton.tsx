"use client";

import { useColorPalette } from "@/context/ColorPaletteContext";
import { useEffect, useOptimistic, useState, useTransition } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { checkIfFavorite, handleFavorite } from "@/utils/favoriteUtils";

const FavoriteButton = () => {
  const { currentPalette } = useColorPalette();
  const [isPending, startTransition] = useTransition();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [optimisticFavorite, setOptimisticFavorite] = useOptimistic(
    isFavorite,
    (_, newValue: boolean) => newValue
  );

  useEffect(() => {
    checkIfFavorite(currentPalette, setIsFavorite);
  }, [currentPalette]);

  return (
    <form
      action={() =>
        handleFavorite(
          currentPalette,
          isFavorite,
          setOptimisticFavorite,
          setIsFavorite,
          startTransition
        )
      }
    >
      <button
        type="submit"
        className="z-10 ml-4 mr-2 p-1 flex justify-center items-center cursor-pointer"
        disabled={isPending}
      >
        {optimisticFavorite ? (
          <MdFavorite size={24} />
        ) : (
          <MdFavoriteBorder size={24} />
        )}
      </button>
    </form>
  );
};

export default FavoriteButton;
