import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Cards/Card";
import "../../styles/cardList.css";
import "../../styles/utils.css";

function CardList({ filterdProducts }) {
  useEffect(() => {}, [filterdProducts]);

  return (
    <div className="cardlist-container">
      {filterdProducts.map((product, idx) => (
        <Link key={idx} to={product.product_url} target="_blank">
          <Card product={product} />
        </Link>
      ))}
    </div>
  );
}

export default CardList;
