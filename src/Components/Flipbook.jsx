import React from "react";
import { Container } from "react-bootstrap";

const PDFFlipbook = () => {
  return (
    <Container>
      <div
        style={{
          position: "relative",
          paddingTop: "max(60%, 324px)",
          width: "100%",
          height: "0",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            border: "none",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
          title="flipbook"
          src="https://online.fliphtml5.com/gzija/dqtx/"
          seamless="seamless"
          allowTransparency="true"
          allowFullScreen="true"
        ></iframe>
      </div>
    </Container>
  );
};

export default PDFFlipbook;
