import React from "react";
import "./main.global.css";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { PersistGate } from "redux-persist/integration/react";

function AppComponent() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="*" element={<>Страница не найдена</>} />
            </Routes>
          </Layout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export const App = AppComponent;
