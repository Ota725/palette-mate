// app/page.tsx (サーバーコンポーネントとして記述)
// import ColorPaletteGenerator from "@/components/ColorPaletteGenerator";
import Header from "@/components/Header";
// import { fetchColorPalettes } from "./api/color-palette/route";
// import { ColorPaletteRequest } from "@/interfaces/Interfaces";

const Home = async () => {
  // サーバーコンポーネントで直接生成したカラーパレットをフロントに渡す
  // const colors = generateNewPalette(); // サーバーサイドで生成されたカラーパレット
  // const json_data: ColorPaletteRequest = {
  //   mode: "random",
  //   num_colors: 3,
  //   temperature: "1.2",
  //   num_results: 5,
  //   adjacency: ["0", "10", "20", "10", "0", "30", "20", "30", "0"],
  //   palette: ["#ffffff", "-", "-"],
  // };

  // const data = await fetchColorPalettes(json_data);

  return (
    <div className="font-zenkaku text-lg">
      <Header />
      {/* <div style={{ display: "flex", marginBottom: "20px" }}>
        {data?.map((palette: string[], index: number) => (
          <div key={index}>
            <h3>Palette {index + 1}</h3>
            <div style={{ display: "flex" }}>
              {palette.map((color: string, colorIndex: number) => (
                <div
                  key={colorIndex}
                  style={{
                    backgroundColor: color,
                    width: "100px",
                    height: "100px",
                    margin: "5px",
                    border: "1px solid black",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
