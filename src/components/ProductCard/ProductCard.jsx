import { MAX_PARAGRAPH_DESCRIPTION_LENGTH } from "../../constants/typography";
import Tag from "../Tag/Tag";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={classes.product}>
      <div className={classes["product__image"]}>
        <img
          src={product.thumbnail}
          className={`${classes["product__img"]} "img-fluid"`}
        />
      </div>
      <div className={classes["product__info"]}>
        <div className="flex justify-content-between align-items-center">
          <h3 className={classes["product__title"]}>{product.title}</h3>
          <h3 className={classes["product__category"]}>{product.category}</h3>
        </div>
        <p className="paragraph mt-1">
          {product.description.substring(0, MAX_PARAGRAPH_DESCRIPTION_LENGTH) +
            "..."}
        </p>
        <div className={`${classes["product__sub"]} `}>
          <ul
            className={`${classes["product__list"]} flex justify-content-between align-items-center`}
          >
            <Tag label={"price"} value={product.price} />
            <Tag label={"stock"} value={product.stock} />
            <Tag label={"rating"} value={product.rating} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
