import React from "react";
import { useTitle } from "./hooks/use_title";

export const NotFound = () => {
  useTitle("404 Not Found");
  return <main>ページが見つかりません。</main>;
};
