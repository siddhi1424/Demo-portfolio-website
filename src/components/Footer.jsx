import React from "react";

const Footer = () => {
  return (
    <div id="contact">
      <footer>
        {/*using "mailto" is important for sending mail directly opens gmail */}
        <p style={{ textAlign: "center", color: "rgba(22, 145, 190, 1)" }}>
          contact me:
          <a
            href="mailto:jadhavsiddhi870@gmail.com"
            style={{ color: "rgba(10, 51, 66, 1)" }}
          >
            jadhavsiddhi870@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
