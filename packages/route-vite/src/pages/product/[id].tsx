import { useNavigate, useParams } from "react-router";

const ProductId = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <p>Page {id}</p>
      <p onClick={() => navigate("/")}>go home</p>
    </div>
  );
};
export default ProductId;
