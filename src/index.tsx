import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./not_found";
import { Overview } from "./overview";
import * as Part1 from "./part1";

import "./sass/style.scss"

const App = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Overview />} />
          <Route path="/part1" element={<Part1.Overview />} />
          <Route path="/part1/chapter1" element={<Part1.Chapter1 />} />
          <Route path="/part1/chapter2" element={<Part1.Chapter2 />} />
          <Route path="/part1/chapter3" element={<Part1.Chapter3 />} />
          <Route path="/part1/chapter4" element={<Part1.Chapter4 />} />
          <Route path="/part1/chapter5" element={<Part1.Chapter5 />} />
          <Route path="/part1/chapter6" element={<Part1.Chapter6 />} />
          <Route path="/part1/chapter7" element={<Part1.Chapter7 />} />
          <Route path="/part1/chapter8" element={<Part1.Chapter8 />} />
          <Route path="/part1/chapter9" element={<Part1.Chapter9 />} />
          <Route path="/part1/chapter10" element={<Part1.Chapter10 />} />
          <Route path="/part1/chapter11" element={<Part1.Chapter11 />} />
          <Route path="/part1/chapter12" element={<Part1.Chapter12 />} />
          <Route path="/part1/chapter13" element={<Part1.Chapter13 />} />
          <Route path="/part1/chapter14" element={<Part1.Chapter14 />} />
          <Route path="/part1/chapter15" element={<Part1.Chapter15 />} />
          <Route path="/part1/chapter16" element={<Part1.Chapter16 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.getElementById("app");
if(container != null) {
  const root = createRoot(container);
  root.render(<App />);
}
