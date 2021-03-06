/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const wrapper = css`
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #777;

  a {
    color: #777;
  }
`;

const Footer = () => {
  return (
    <div css={wrapper}>
      Patterns generated by{" "}
      <a
        href="https://github.com/qrohlf/trianglify"
        target="_blank"
        rel="noopener noreferrer"
      >
        trianglify
      </a>
    </div>
  );
};

export default Footer;
