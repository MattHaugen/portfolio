/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttonContainer = css`
  background-color: #dedfe0;
  color: #333;
  padding: 0.25rem 0.75rem;
  display: inline-block;
  text-decoration: none;
  margin-right: 0.5rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: bold;

  :hover {
    background-color: #d4d4d4;
  }
`;

const iconStyles = css`
  font-size: 1rem;
  margin-right: 0.25rem;
  vertical-align: bottom;
`;

const LinkButton = ({ icon, text, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      css={buttonContainer}
    >
      <FontAwesomeIcon icon={icon} css={iconStyles} />
      {text}
    </a>
  );
};

export default LinkButton;
