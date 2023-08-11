import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  // const [user, setUser] = useState();
  {
    /*context={[user, setUser]} */
  }
  return <Outlet />;
}
