import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import { useGetProductsQuery } from "../../store/apis/products-apis";

const HomePage = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <div className="container">
      <Search />
      <div className="grid">
        {!isLoading &&
          data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
