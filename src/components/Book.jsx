/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LinkButton from "./LinkButton";

function createMarkup(text) {
  return { __html: text };
}

const bookWrapper = css`
  display: flex;
  margin-top: 1rem;
`;

const bookContent = css`
  width: calc(70% - 0.75rem);
  display: flex;
`;

const borderBar = css`
  border-left: 0.5rem solid #b3b3b3;
  margin-right: 0.5rem;
`;

const bookTitle = css`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bolder;
`;

const bookDescription = css`
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

const bookLink = css`
  margin-bottom: 0.5rem;
`;

const bookImage = css`
  width: 30%;

  img {
    width: 100%;
    border: 5px solid #000;
  }
`;

const Book = ({ title, description, imageUrl, links }) => {
  const renderedLinks = links.map(link => (
    <LinkButton
      extraCss={bookLink}
      key={link.url}
      icon={link.icon}
      text={link.text}
      url={link.url}
    />
  ));

  return (
    <div css={bookWrapper}>
      <div css={bookContent}>
        <div css={borderBar}></div>
        <div>
          <h2 css={bookTitle}>{title}</h2>
          <div
            css={bookDescription}
            dangerouslySetInnerHTML={createMarkup(description)}
          ></div>
          {renderedLinks}
        </div>
      </div>
      <div css={bookImage}>
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default Book;
