import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Search.scss";
import { useLazySearchProductsQuery } from "../../store/apis/products-apis";
import { useDispatch } from "react-redux";
import { productsActions } from "../../store/products-slice";
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [search, searchResponse] = useLazySearchProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      search(searchValue)
        .unwrap()
        .then((response) => {
          dispatch(
            productsActions.filterProducts({ products: response.products })
          );
        });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const onChangeSearchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search">
      <Input
        className={"search__input"}
        onChange={onChangeSearchHandler}
        placeholder={"Search"}
        autoFocus={true}
      />
    </div>
  );
};

export default Search;
