/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Trianglify from "trianglify";

const Header = ({ palette }) => {
  const pattern = Trianglify({
    width: 800,
    height: 800,
    x_colors: palette
  }).png();
  const pattern64 = pattern.substr(pattern.indexOf("base64") + 7);
  const patternUrl = `url(data:image/png;base64, ${pattern64})`;

  const header = css`
    height: 400px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: transparent ${patternUrl};

    .title {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-weight: bold;
      font-size: 3rem;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      margin-bottom: 1rem;
      padding: 0.5rem 2rem 0.5rem 1rem;
    }
  `;

  return (
    <div css={header}>
      <div className="title">Matthew</div>
      <div className="title">Haugen</div>
    </div>
  );
};

export default Header;
