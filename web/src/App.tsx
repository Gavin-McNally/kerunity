import React from "react";
import "./App.css";
import FirstLaunchFlow from "./components/FirstLaunchFlow";

type AppProps = {
  children?: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return (
    <>
      {children}
      <FirstLaunchFlow />
    </>
  );
}
