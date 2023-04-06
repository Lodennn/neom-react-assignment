import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import { useGetProductsQuery } from "../../store/apis/products-apis";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/products-slice";

const HomePage = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(productsActions.setProducts({ products: data.products }));
    }
  }, [isSuccess]);

  const products = useSelector((store) => store.products);

  console.log("products: ", products);

  return (
    <div className="container">
      <Search />
      <div className="grid">
        {!isLoading &&
          products.filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
