// "use client";
// import { createContext, useContext, useState } from "react";

// // `isLocked` の状態を管理するコンテキスト
// interface LockedColorsContextType {
//   isLockedList: boolean[];
//   setIsLockedList: (newLocked: boolean[]) => void;
// }

// // コンテキストの作成
// const LockedColorsContext = createContext<LockedColorsContextType | undefined>(
//   undefined
// );

// // プロバイダの作成
// export const LockedColorsProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [isLockedList, setIsLockedList] = useState<boolean[]>([]);

//   return (
//     <LockedColorsContext.Provider value={{ isLockedList, setIsLockedList }}>
//       {children}
//     </LockedColorsContext.Provider>
//   );
// };

// // カスタムフック
// export const useLockedColors = () => {
//   const context = useContext(LockedColorsContext);
//   if (!context) {
//     throw new Error(
//       "useLockedColors must be used within a LockedColorsProvider"
//     );
//   }
//   return context;
// };
