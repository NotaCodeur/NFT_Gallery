import * as React from "react";
import { render } from "react-dom";
import { Frame, Page } from "framer";
import "./styles.css";
import images from "./images.tsx";

import Card from "./Card";

const imagess = images;

export function MyComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <>
      <button
        onClick={() => setCurrentIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
        style={{ transform: "translateY(-400px)" }}
      >
        Prev
      </button>
      <button
        onClick={() => setCurrentIndex(currentIndex + 1)}
        disabled={currentIndex === 4}
        style={{ transform: "translateY(-400px)" }}
      >
        Next
      </button>
      <Page
        currentPage={currentIndex}
        onChangePage={(page) => setCurrentIndex(page)}
        width="100%"
        height={450}
        radius={30}
        contentWidth={320}
        gap={50}
        defaultEffect="none"
      >
        <Card />
        {/* {colors.map((c, i) => (
          <Frame
            animate={{ height: currentIndex === i ? 450 : 300 }}
            radius={30}
            background={c}
          >
          <Card />
          </Frame>
        ))} */}
        {imagess.map((c, i, colors) => (
          <Frame
            animate={{ height: currentIndex === i ? 450 : 300 }}
            radius={30}
          >
            <Card image={c} index={i} />
          </Frame>
        ))}
        <Card />
        <Card />
      </Page>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<MyComponent />, rootElement);
