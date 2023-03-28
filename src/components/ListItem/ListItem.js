import './ListItem.css';
import addToCart from '../../assets/cart.png';

export const ListItem = ()=>{
    return(
        <div className={'item-card'}>
            <img className = {"img-fluid"} src= "/assets/placeholder.jpg" alt ="product"/>
            <div className={'item-card__information'}>
                <div className={'pricing'}>
                    <span>₹400</span>
                    <strike>₹600</strike>
                </div>
                <div className={'title'}>
                    <h3>Title of item</h3>
                </div>
            </div>
            <button className={'cart-add'}>
                <span>Add to cart</span>
                <img className = "cart-icon" src ={addToCart} alt="cart-icon" />
            </button>
        </div>
    )
}