import { redirect } from "next/navigation";

// src/app/page.tsx
const HomePage = async () => {
  redirect("/brand/2");
};
export default HomePage;
