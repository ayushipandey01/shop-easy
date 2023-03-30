import { useState } from "react"
import { ListItem } from "../ListItem/ListItem"
 
export const Products = ()=>{

    const [title , setTitle] = useState("");
    const [price , setPrice] = useState(0);
    const [discountedPrice , setdiscountedPrice] = useState(0);
    const [thumbnail , setThumbnail] = useState("");

    const [items , setItems] = useState(
        {
            id:0,
            price: 0,
            discountedPrice: 400,
            title: "Title of item-1",
            thumbnail : "/assets/placeholder.jpg"
    })        
    
    const handleInput = (event)=>{
        setTitle(event.target.value);
    }
    const handlePrice = (event)=>{
        setPrice(event.target.value);
    }
    const handleDiscountedPrice = (event)=>{
        setdiscountedPrice(event.target.value);
    }
    const handleThumbnail = (event)=>{
        setThumbnail(event.target.value);
    }

    const submitForm = event=>{
        event.preventDefault();

        if(discountedPrice > price){
            alert("Discounted price can't be greater than price")
        }
        setItems( {
            title: title,
            price,
            discountedPrice,
            thumbnail
        })
    }

    return (

        <div className="product-wrapper">
            <div className="form">
                <form onSubmit={submitForm}>
                    <h2>Title of the Form</h2>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="type title" value = {title} onChange={handleInput} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="price">Price</label>
                        <input type="number" placeholder="enter price" value = {price} onChange={handlePrice} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="discountedPrice">Discount Price</label>
                        <input type="number" placeholder="enter Discount price" value = {discountedPrice} onChange={handleDiscountedPrice} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Thumbnail">Thumbnail</label>
                        <input type="" placeholder="enter Thumbnail" value = {thumbnail} onChange={handleThumbnail} required/>
                    </div>
                    <div className="submit-wrap">
                        <button>Update</button>
                    </div>
                </form>
            </div>
            <div>
                <div className>
                    <ListItem data = {items}></ListItem>
                </div>  
                {/* <div className={'product-list--wrapper'}>
                    <ListItem data = {items[0]}></ListItem>
                </div>             */}
            </div>
        </div>
        
    )
}