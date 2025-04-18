import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-116px)] max-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
