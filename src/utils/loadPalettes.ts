// import { generateColorPalettes } from "@/app/actions/generateColorPalettes";
// import { ColorPaletteRequest } from "@/interfaces/Interfaces";

// const loadPalettes = async () => {
//     const jsonData: ColorPaletteRequest = {
//       mode: "transformer",
//       num_colors: 3,
//       temperature: "1.2",
//       num_results: 50,
//       adjacency: ["0", "75", "55", "75", "0", "0", "55", "0", "0"],
//       palette: ["-", "-", "-"],
//     };

//     try {
//       const palettes = await generateColorPalettes(jsonData);

//       setPalettes(palettes);
//     } catch (err) {
//       setError((err as Error).message);
//     }

//     if (palettes.length > 0) {
//       setPalettes(palettes);
//       setCurrentIndex(0);
//     }
//   };
