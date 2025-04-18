import { Outlet } from "react-router";
import Header from "../components/header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}
