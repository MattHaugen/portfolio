// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
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

const gradients = ["YlGnBu", "PuBu", "BuPu", "RdPu"];

function App() {
  const palette = gradients[Math.floor(Math.random() * gradients.length)];

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
