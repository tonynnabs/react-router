import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <h1>This are my products.</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Phone</Link>
        </li>
        <li>
          <Link to="/products/p3">A House</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Products;
