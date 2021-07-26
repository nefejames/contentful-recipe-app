import styled from "styled-components";

export default function Skeleton() {
  return (
    <Container>
      <div className="s-banner"></div>
      <div className="s-header"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;

  & > div {
    background: #dbcc1a;
    border-radius: 4px;
    margin: 20px 0;
  }

  .s-banner {
    padding: 12% 0;
  }
  .s-header {
    padding: 15px 0;
    max-width: 500px;
  }
  .s-content {
    padding: 8px 0;
    max-width: 1000px;
  }
`;
