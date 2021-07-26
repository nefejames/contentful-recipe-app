import Image from "next/image";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../../lib/contentful";
import Skeleton from "../../components/Skeleton";
import styled from "styled-components";

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />;

  const { image, title, cookingTime, ingredients, method } = recipe.fields;

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="banner">
        <Image
          src={"https:" + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
        <h2>{title}</h2>
      </div>

      <div className="info">
        <p>Takes about {cookingTime} mins to cook.</p>

        <div className="ingredients">
          <h3>Ingredients:</h3>

          {ingredients.map((ing) => (
            <span key={ing}>{ing}</span>
          ))}
        </div>
      </div>

      <div className="method">
        <h3>Recipe Details:</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  h2,
  h3 {
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  .banner h2 {
    margin: 0;
    background: #fff;
    display: inline-block;
    padding: 20px;
    position: relative;
    top: -60px;
    left: -10px;
    transform: rotateZ(-1deg);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }

  .info {
    margin-bottom: 2rem;

    .ingredients {
      margin-top: 2rem;
    }

    p {
      margin: 0;
    }

    span::after {
      content: ", ";
    }

    span:last-child::after {
      content: ".";
    }
  }
`;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "posts",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "posts",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { recipe: items[0] },
    revalidate: 1,
  };
};
