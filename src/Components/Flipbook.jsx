import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import pdfURL from "../assets/AWT-Corporate-Profile.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFFlipbook = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(0);

  const bookRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setPageWidth(Math.min(width * 0.9, 1000));
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    // Add keyboard event listener
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        bookRef.current.pageFlip().flipNext();
      } else if (event.key === "ArrowLeft") {
        bookRef.current.pageFlip().flipPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Container>
      <Document
        file={pdfURL}
        onLoadSuccess={onDocumentLoadSuccess}
        error="An error occurred while loading the PDF."
      >
        {numPages && (
          <HTMLFlipBook
            width={pageWidth}
            height={750}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            ref={bookRef}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div key={index} className="demoPage">
                <Page
                  pageNumber={index + 1}
                  width={550}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  scale={2}
                  renderMode="svg"
                  devicePixelRatio={2}
                />
              </div>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </Container>
  );
};

export default PDFFlipbook;
