import React from "react";
import { Introduction } from "./Introduction";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";

export const Home = () => (
  <div>
    {/* Introduction */}
    <Introduction />
    {/* End of Introduction */}

    {/* Main Layout */}
    <Portfolio />
    {/* Main Layout */}

    {/* Footer */}
    <Footer />
    {/* Footer */}
  </div>
);
