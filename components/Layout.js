import Link from "next/link";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <Container>
      <header>
        <Link href="/">
          <a>
            <h1>CONTENTFUL RECIPE APP</h1>
          </a>
        </Link>
      </header>

      <main className="page-content">{children}</main>

      <footer>
        <p>Always eat good food 🍲 </p>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    text-align: center;
    margin: 60px 0;
  }

  header a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    display: inline-block;
  }

  header h1 {
    font-size: 2.5rem;
  }

  .page-content {
    max-width: 1200px;
    margin: 20px auto 80px;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
  }

  footer {
    background: #111;
    color: #bbb;
    padding: 40px;
    text-align: center;
    margin-top: auto;
  }
`;
