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
  width: 70%;
  display: flex;
  margin-top: 1rem;
`;

function App() {
  return (
    <div css={body}>
      <div css={container}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
