import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import Head from "next/head";
export default function Recipes({ recipes }) {
  return (
    <>
      <Head>
        <title>Contentful Recipe App</title>
      </Head>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}

        <style jsx>{`
          .recipe-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
        `}</style>
      </div>
    </>
  );
}

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