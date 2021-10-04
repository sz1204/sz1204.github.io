import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer>© {new Date().getFullYear()} - Created by Sarah Zhang
        <a href="mailto:sarahzhangwc@gmail.com">Email me here!</a>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div class="elfsight-app-b6d6bb43-9cf4-48ce-99e1-dfe1d53e11cf"></div>
      </footer>
    </div>
  );
};

export default Footer;
