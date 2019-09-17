/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Trianglify from "trianglify";

const pattern = Trianglify({
  width: 800,
  height: 800
}).png();
const pattern64 = pattern.substr(pattern.indexOf("base64") + 7);
const patternUrl = `url(data:image/png;base64, ${pattern64})`;

const header = css`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
  background: transparent ${patternUrl};

  .title {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 3rem;
    background-color: #fff;
    margin-bottom: 1rem;
    padding: 0.5rem 2rem 0.5rem 1rem;
  }
`;

const Header = () => {
  return (
    <div css={header}>
      <div className="title">Matthew</div>
      <div className="title">Haugen</div>
    </div>
  );
};

export default Header;
