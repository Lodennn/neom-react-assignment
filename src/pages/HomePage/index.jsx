import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import { useGetProductsQuery } from "../../store/apis/products-apis";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/products-slice";
import Alert from "../../components/Alert/Alert";
import { userActions } from "../../store/user-slice";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(productsActions.setProducts({ products: data.products }));
    }
  }, [isSuccess]);

  const products = useSelector((store) => store.products);

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  return (
    <div className="container">
      <div className="flex justify-content-end p-2">
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
      <Search />
      <div className="grid">
        {!isLoading &&
          products.filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {products.filteredProducts.length === 0 && (
          <Alert message={"No data !"} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
