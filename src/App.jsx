import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Style } from "./pages/style";
import { Sidebar } from "./common/sidebar";

export default function App() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <Home />
    </div>
  );
}
