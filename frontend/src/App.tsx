import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { useUserContext } from "hooks";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  const { user } = useUserContext();
  return (
    <BrowserRouter>
      <div className="App">{user ? <MainLayout /> : <LoginPage />}</div>
    </BrowserRouter>
  );
}

export default App;
