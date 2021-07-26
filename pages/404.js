import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <Container>
      <h1>404</h1>
      <h2>Oops! That page cannot be found :(</h2>
      <p>
        Redirecting to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
      </p>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  background: #fff;
  padding: 30px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  transform: rotateZ(-1deg);

  h1 {
    font-size: 3em;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;
