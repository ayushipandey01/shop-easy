import { useState } from 'react';
import addToCart from '../../assets/cart.png';

export const ListItem = (props)=>{

    const { data } = props; //object destructuring

    // const [showMessage , setShowMessage] = useState("Not added to cart yet");

    // const clickHandler = (()=>{
    //     setShowMessage("Item added to Cart !");
    // })

    const [counter , setCounter] = useState(0);

    const descreaseCounterByOne = ()=>{
        if(counter <= 0){
            return;
        }
        setCounter(counter => counter - 1);
    }

    const increaseCounterByOne = ()=>{
        setCounter(counter => counter + 1);
    }

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
            {/* <small className='cart-message'>{showMessage}</small> */}
            {/* <button onClick={clickHandler} className={'cart-add'}>
                <span>Add to cart</span>
                <img className = "cart-icon" src ={addToCart} alt="cart-icon" />
            </button> */}
            <div className={"cart-addon"}>
                <button onClick={descreaseCounterByOne}><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>
        </div>
    )
}