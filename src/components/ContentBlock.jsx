/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trianglify from "trianglify";

const ContentBlock = ({ title, icon, palette, children }) => {
  const pattern = Trianglify({
    width: 1000,
    height: 100,
    cell_size: 15,
    x_colors: palette
  }).png();
  const pattern64 = pattern.substr(pattern.indexOf("base64") + 7);
  const patternUrl = `url(data:image/png;base64, ${pattern64})`;

  const wrapper = css`
    margin-bottom: 1rem;
  `;

  const titleContainer = css`
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 1.5rem;
    display: flex;

    .title-icon {
      background-color: #333;
      padding: 0.5rem;
      margin-right: 0.25rem;
      color: #fff;
    }

    .title-text {
      background: transparent ${patternUrl};
      padding: 0.5rem;
      flex-grow: 1;
    }
  `;

  const contentContainer = css`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <div css={wrapper}>
      <div css={titleContainer}>
        <div className="title-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="title-text">{title}</div>
      </div>
      <div css={contentContainer}>{children}</div>
    </div>
  );
};

export default ContentBlock;
