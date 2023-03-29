import addToCart from '../../assets/cart.png';

export const ListItem = (props)=>{

    const { data } = props; //object destructuring

    return(
        <div className={'item-card'}>
            <img className = {"img-fluid"} src= {data.thumbnail} alt ="product"/>
            <div className={'item-card__information'}>
                <div className={'pricing'}>
                    <span>₹{data.discountedPrice}</span>
                    <strike>₹ {data.price} </strike>
                </div>
                <div className={'title'}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            <button className={'cart-add'}>
                <span>Add to cart</span>
                <img className = "cart-icon" src ={addToCart} alt="cart-icon" />
            </button>
        </div>
    )
}