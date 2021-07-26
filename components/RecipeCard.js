import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, image } = recipe.fields;

  return (
    <Card>
      <div>
        <Image
          src={`https:${image.fields.file.url}`}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          placeholder="blur"
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link href={"/recipes/" + slug}>
            <a>Details &nbsp; &#8594;</a>
          </Link>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  transform: rotateZ(-1deg);

  .content {
    background: #fff;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    margin: 0;
    position: relative;
    top: -40px;
    left: -10px;
  }
  .info {
    padding: 16px;
  }
  .info h4 {
    font-size: 1.6rem;
    margin: 4px 0;
    text-transform: uppercase;
  }
  .info p {
    margin: 0;
    color: #777;
  }
  .actions {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  .actions a {
    color: #fff;
    background: #f01b29;
    padding: 16px 24px;
    text-decoration: none;
    font-size: 1.3rem;
  }
`;
