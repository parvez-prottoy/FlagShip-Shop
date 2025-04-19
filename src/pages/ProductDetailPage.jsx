import { useLoaderData, useNavigate, useParams } from "react-router";
import Button from "../components/shared/Button";
import { MdAddShoppingCart, MdBookmarkAdd } from "react-icons/md";
import { addFavorite } from "../utils/favorites";

export default function ProductDetailPage() {
  const data = useLoaderData();
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = data.find((product) => product.id === Number(productId));
  const {
    image,
    name,
    brand,
    model,
    storage,
    price,
    camera_info,
    description,
  } = product;
  const handleFavorite = () => {
    addFavorite(product.id);
  };
  return (
    <section className="w-full py-12">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-300 px-6 py-2 font-bold rounded-3xl cursor-pointer"
      >
        Back
      </button>
      <img src={image} className="w-full mx-auto md:w-auto  mb-8" alt="" />
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="space-x-2">
          <Button>
            <MdAddShoppingCart />
          </Button>
          <Button handleClick={handleFavorite}>
            <MdBookmarkAdd />
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-thin text-4xl">Details: </h2>
        <p>
          <span className="font-bold">Brand:</span> {brand}
        </p>
        <p>
          <span className="font-bold">Model:</span> {model}
        </p>
        {/* Storage Info */}
        <div className="flex gap-1">
          <p className="font-bold">Storage:</p>
          <div>
            {storage.map((item) => {
              return (
                <div key={item}>
                  <div>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Price info */}
        <div className="flex gap-1">
          <p className="font-bold">Price:</p>
          <div>
            {Object.entries(price).map(([storage, price]) => (
              <p key={storage} className="">
                <span>{storage}:</span> <span>{price}</span>
              </p>
            ))}
          </div>
        </div>
        <p>
          <span className="font-bold">Camera Info:</span> {camera_info}
        </p>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </section>
  );
}
