// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { createClient } from "@/utils/supabase/client";

// const UserContext = createContext(null);

// export function UserProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const supabase = createClient();
//     async function fetchUser() {
//       const { data, error } = await supabase.auth.getUser();
//       if (!error) setUser(data?.user);
//     }
//     fetchUser();
//   }, []);

//   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
// }

// export function useUser() {
//   return useContext(UserContext);
// }
