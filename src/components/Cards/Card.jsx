import "../../styles/Card.css";
import "../../styles/utils.css";
import arrowImg from "../../assets/Rectangle 61.png";

function Card({ product }) {
  const { title, image_url, price, compare_at } = product;
  const discountPercentage = Math.round(
    ((compare_at - price[0]) / compare_at) * 100
  );
  return (
    <div className="card-container">
      {compare_at && (
        <>
          <div className="discount-container">
            <div className="discount-arrow">
              <img src={arrowImg} alt="right blue arrow" />
              <span className="discount-text">{`${discountPercentage} % OFF`}</span>
            </div>
          </div>
          <div className="sale-container">
            <div className="sale">SALE</div>
          </div>
        </>
      )}
      <div className="image-imageinfo-contaner">
        <img src={image_url} alt={title} className="product-img" />

        <h1 className="title-text">{title}</h1>
        <div className="cut-price">
          {compare_at && <span className="old-price">$ {compare_at}</span>}
          <span className="price">$ {Math.floor(price)}</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
