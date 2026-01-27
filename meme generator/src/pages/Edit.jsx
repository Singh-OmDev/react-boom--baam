import { useSearchParams } from "react-router-dom";

const EditPage = () => {
  const [searchParams] = useSearchParams();
  const imageUrl = searchParams.get("url");

  return (
    <div>
      <h1>meme generator</h1>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt="meme"
          style={{ maxWidth: "400px" }}
        />
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
};

export default EditPage;
