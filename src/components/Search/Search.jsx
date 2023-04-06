import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Search.scss";
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log("searchValue: ", searchValue);
      // API CALL
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const onChangeSearchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitHandler = (e) => {};

  return (
    <div className="search">
      {/* <form onSubmit={onSubmitHandler}> */}
      <Input className={"search__input"} onChange={onChangeSearchHandler} />
      {/* <Button type="submit">Search</Button> */}
      {/* </form> */}
    </div>
  );
};

export default Search;
