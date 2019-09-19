// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const body = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const container = css`
  width: 80%;
  display: flex;
  margin-top: 1rem;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    width: 95%;
  }
`;

const gradients = ["YlGnBu", "PuBu", "BuPu", "RdPu", "PuBuGn", "PuRd"];

function App() {
  const [palette, setPalette] = useState(
    gradients[Math.floor(Math.random() * gradients.length)]
  );

  // Courtesy https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      setPalette(gradients[Math.floor(Math.random() * gradients.length)]);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div css={body}>
      <div css={container}>
        <Header palette={palette} />
        <Content palette={palette} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
