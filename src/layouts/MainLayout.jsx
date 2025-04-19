import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayout() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />
      <main className="min-h-[calc(100vh-116px)] max-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
