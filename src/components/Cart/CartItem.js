export const CartItem = ({ data ,onEmitDecreaseItem , onEmitIncreaseItem }) => {
  return (
    <div className="checkout-modal_list-item">
      <div className="img-wrap">
        <img
          className="img-cart-modal"
          src={data.thumbnail}
          alt={data.title}
        />
      </div>
      <div className="information">
        <div>
          <h3>{data.title}</h3>
          <div className={"pricing"}>
            <span>₹{data.discountedPrice}</span>
            <small>
              <strike>₹{data.price}</strike>
            </small>
          </div>
        </div>
        <div className="cart-addon cart-addon__modal">
          <button onClick={()=>onEmitDecreaseItem(data.id)}> - </button>
          <span className="counter">{data.quantity}</span>
          <button onClick={()=>onEmitIncreaseItem(data.id)}> + </button>
        </div>
      </div>
    </div>
  );
};
