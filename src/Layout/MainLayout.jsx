import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <main
        className="
      container d-flex justify-content-center flex-column py-5">
        <Outlet />
      </main>

      <footer>this is footer</footer>
    </div>
  );
}
