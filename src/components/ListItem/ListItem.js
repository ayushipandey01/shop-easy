import { useState } from 'react';
import addToCart from '../../assets/cart.png';
import { Fragment } from 'react';
import { Modal } from '../Modal/Modal';

export const ListItem = (props)=>{

    const { data , updateItemTitle , onAdd , onRemove} = props; //object destructuring

    // const [showMessage , setShowMessage] = useState("Not added to cart yet");
    // const [counter , setCounter] = useState(0);

    const [showModal , setShowModal] = useState(false);

    const clickHandler = (event =>{
        event.stopPropagation()
        // setShowMessage("Item added to Cart !");
        onAdd(data.id);
        // setCounter(counter+1);
    })  

    const descreaseCounterByOne = event =>{
        event.stopPropagation();
        onRemove(data.id);
        // if(counter <= 0){
        //     return;
        // }
        // if(counter == 1){
        //     onRemove(data.id);
        // }
        // setCounter(counter - 1);
    }

    const increaseCounterByOne = event =>{
        event.stopPropagation()
        onAdd(data.id);
        // setCounter(counter + 1);
    }

    const handleModal = ()=> {
        setShowModal(previousValue => !previousValue);
    }

    return(
        <Fragment>
            <div onClick = {handleModal} className={'item-card'}>
                <img src= {data.thumbnail} alt ="product"/>
                <div className={'item-card__information'}>
                    <div className={'pricing'}>
                        <span>₹{data.discountedPrice}</span>
                        <strike>₹ {data.price} </strike>
                    </div>
                    <div className={'title'}>
                        <h3>{data.title}</h3>
                    </div>
                </div>
                {/* <button onClick={()=> updateItemTitle (data.id)}>Update Title</button> */}
                {
                    data.quantity < 1 ?
                    <div>
                        {/* <small className='cart-message'>{showMessage}</small> */}
                        <button onClick={clickHandler} className={'cart-add'}>
                            <span>Add to cart</span>
                            <img className = "cart-icon" src ={addToCart} alt="cart-icon" />
                        </button>
                    </div>
                    :
                    <div>
                    <div className={"cart-addon"}>
                        <button onClick={descreaseCounterByOne}><span>-</span></button>
                        <span className={"counter"}>{data.quantity}</span>
                        <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div> 
                    </div>
                }
            </div>
            {showModal && 
                <Modal onClose = {handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className='modal-image' src= {data.thumbnail} alt ="product"/>
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={'pricing'}>
                            <span>₹{data.discountedPrice}</span>
                            <small>
                                <strike>₹ {data.price} </strike>
                            </small>
                        </div>
                        <p>{data.description}</p>
                        {
                    data.quantity < 1 ?
                    <div>
                        {/* <small className='cart-message'>{showMessage}</small> */}
                        <button onClick={clickHandler} className={'cart-add cart-add__modal'}>
                            <span>Add to cart</span>
                            <img className = "cart-icon" src ={addToCart} alt="cart-icon" />
                        </button>
                    </div>
                    :
                    <div>
                    <div className={"cart-addon cart-addon__modal"}>
                        <button onClick={descreaseCounterByOne}><span>-</span></button>
                        <span className={"counter"}>{data.quantity}</span>
                        <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div> 
                    </div>
                }
                        </div>
                        
                    </div>
                </Modal> 
            }
        </Fragment>
    )
}