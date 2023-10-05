import { useParams, useRouter } from "next/navigation";

const ProductId = () => {
  const params = useParams();
  const navigate = useRouter();

  return (
    <div>
      <p>Page {params?.id}</p>
      <p onClick={() => navigate.push("/")}>go home</p>
    </div>
  );
};
export default ProductId;
