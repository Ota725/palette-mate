export const convertUpperTriangleToAdjacency = (
  matrix: (number | "-")[][]
): string[] => {
  const num_colors = matrix.length;
  const adjacency = new Array(num_colors * num_colors).fill("0"); // 初期値は文字列 "0"

  for (let i = 0; i < num_colors; i++) {
    for (let j = i + 1; j < num_colors; j++) {
      // 右上三角部分だけを処理
      if (matrix[i][j] !== "-") {
        adjacency[i * num_colors + j] = matrix[i][j].toString(); // 右上の値を設定
        adjacency[j * num_colors + i] = matrix[i][j].toString(); // 対称部分に値を設定
      }
    }
  }

  return adjacency;
};
