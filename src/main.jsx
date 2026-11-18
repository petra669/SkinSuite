
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="app">
      <nav className="navbar">
        <h2>SkinSuite<span>.</span></h2>
        <span>Smarter skincare. Better consultations.</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">YOUR SKINCARE WORKSPACE</p>
        <h1>Skincare deserves a smarter approach.</h1>
        <p>
          A better way to understand your skin, organise routines
          and deliver personalised skincare consultations.
        </p>
        <div className="choices">
          <article>
            <h2>Personal Suite</h2>
            <p>Your personal space for understanding and tracking your skin.</p>
            <button>Explore Personal Suite</button>
          </article>
          <article>
            <h2>Professional Suite</h2>
            <p>A workspace for skincare professionals and their clients.</p>
            <button>Explore Professional Suite</button>
          </article>
        </div>
      </section>
      <footer>SkinSuite © 2026</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
