import clsx from "clsx";

export default function Product({ name, imgUrl, price }) {
 return (
 <div className={clsx("product-container")}>
 <h2>{name}</h2>
          <img src={imgUrl} alt="props.name" width="640" />
	  <p>Price: {price} credits</p>
 </div> );
};
