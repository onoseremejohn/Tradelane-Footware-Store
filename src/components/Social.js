import styled from "styled-components";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Social = ({ sidebar }) => {
  return (
    <Wrapper sidebar={sidebar} className='social'>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/onosereme-emuemhonjie-5a5454161/'
            target='_blank'
          >
            <button>
              <FaLinkedin />
            </button>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/onoseremejohn' target='_blank'>
            <button>
              <FaTwitter />
            </button>
          </a>
        </li>
        <li>
          <a href='https://github.com/onoseremejohn' target='_blank'>
            <button>
              <FaGithub />
            </button>
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  top: 50%;
  right: 7.5%;
  transform: translateY(-50%);
  display: inline-block;
  margin: 0 auto;
  ul {
    display: flex;
    gap: 25px;
    button {
      background: none;
      border: none;
      svg {
        font-size: 2em;
        color: ${({ sidebar }) =>
          sidebar ? "var(--clr-grey-1)" : "var(--clr-primary-5)"};
        cursor: pointer;
        transition: var(--transition);
        &:hover {
          rotate: 180deg;
          scale: 1.2;
        }
      }
    }
    @media (max-width: 600px) {
      li:nth-child(2) {
        display: ${({ sidebar }) => (sidebar ? "list-item" : "none")};
      }
    }
    @media (min-width: 1180px) {
      right: 20%;
    }
  }
`;

export default Social;
