/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const titleContainer = css`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.5rem;
  color: #fff;
  display: flex;

  .title-icon {
    background-color: #ff2d2d;
    padding: 0.5rem;
    margin-right: 0.25rem;
  }

  .title-text {
    background-color: #0078c3;
    padding: 0.5rem;
    flex-grow: 1;
  }
`;

const contentContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

const ContentBlock = ({ title, icon, children }) => {
  return (
    <div>
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
