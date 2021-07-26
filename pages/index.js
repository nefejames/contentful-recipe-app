import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import Head from "next/head";
import styled from "styled-components";
export default function Recipes({ recipes }) {
  return (
    <Container>
      <Head>
        <title>Contentful Recipe App</title>
      </Head>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .recipe-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 60px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries();

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1,
  };
}
