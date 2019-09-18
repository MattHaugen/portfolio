// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Header from "./components/Header";
import Content from "./components/Content";

const body = css`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
`;

const container = css`
  width: 80%;
  display: flex;
  margin-top: 1rem;
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
    </div>
  );
}

export default App;
