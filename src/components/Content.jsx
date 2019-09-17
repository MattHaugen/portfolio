/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ContentBlock from "./ContentBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const content = css`
  flex-grow: 1;
  margin-left: 2rem;
`;

const contentRow = css`
  width: 100%;
`;

const bullets = css`
  ul {
    border-left: 10px solid #b3b3b3;
    list-style-type: none;
    padding-inline-start: 10px;
    margin-right: 2rem;

    li {
      padding-top: 3px;
      padding-bottom: 3px;
    }
  }
`;

const Content = () => {
  return (
    <div css={content}>
      <ContentBlock title="Full Stack Web Developer" icon={faCode}>
        <div css={bullets}>
          <ul>
            <li>React/Redux</li>
            <li>ES5/ES6</li>
            <li>Node.js/Express</li>
            <li>HTML/CSS/SASS</li>
            <li>Jasmine/Jest/Mocha/Chai/Sinon</li>
          </ul>
        </div>
        <div css={bullets}>
          <ul>
            <li>MongoDB</li>
            <li>Elasticsearch</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div css={contentRow}>
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </ContentBlock>
      <ContentBlock title="Author" icon={faBookOpen}>
        Stuff here
      </ContentBlock>
    </div>
  );
};

export default Content;
