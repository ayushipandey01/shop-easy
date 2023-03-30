import { useState } from "react"
import { ListItem } from "../ListItem/ListItem"
 
export const Products = ()=>{

    // const [title , setTitle] = useState("");
    // const [price , setPrice] = useState(0);
    // const [discountedPrice , setdiscountedPrice] = useState(0);
    // const [thumbnail , setThumbnail] = useState("");

    const [items , setItems] = useState(
        {
            id:0,
            price: 0,
            discountedPrice: 0,
            title: "title",
            thumbnail : "/assets/placeholder.jpg"
    }) 

    const handleInput = (event)=>{
        console.log(event.target.value , event.target.name);
        setItems({
            ...items,
            [event.target.name] : event.target.value
        })
    }
    
    const submitForm = (event)=>{
        event.preventDefault();
        // console.log({
        //     title: title,
        //     price,
        //     discountedPrice,
        //     thumbnail
        // })
        // console.log("price" , items.price);
        // console.log("discountprice" , items.discountedPrice);
        // console.log(discountedPrice>price);
        if(items.discountedPrice > items.price){
            alert("Discounted price can't be greater than price");
            return;
        }
        // setItems( {
        //     title: title,
        //     price,
        //     discountedPrice,
        //     thumbnail
        // })
    }
    
    // const handleTitle = (event)=>{
    //     // setTitle(event.target.value);
    //     setItems(
    //         {
    //             ...items,
    //             title: event.target.value
    //         }
    //     )
    // }
    // const handlePrice = (event)=>{
    //     // setPrice(event.target.value);
    //     setItems(
    //         {
    //             ...items,
    //             price: event.target.value
    //         }
    //     )
    // }
    // const handleDiscountedPrice = (event)=>{
    //     // setdiscountedPrice(event.target.value);
    //     setItems(
    //         {
    //             ...items,
    //             discountedPrice: event.target.value
    //         }
    //     )
    // }
    // const handleThumbnail = (event)=>{
    //     // setThumbnail(event.target.value);
    //     setItems(
    //         {
    //             ...items,
    //             thumbnail: event.target.value
    //         }
    //     )
    // }

    return (

        <div className="product-wrapper">
            <div className="form">
                <form onSubmit={submitForm}>
                    <h2>Title of the Form</h2>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input
                         name = "title" type="text" placeholder="type title" 
                         value = {items.title} onChange={handleInput} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="price">Price</label>
                        <input 
                         name = "price"
                         type="number" placeholder="enter price" 
                         value = {items.price} onChange={handleInput} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="discountedPrice">Discount Price</label>
                        <input 
                         name = "discountedPrice" type="number" placeholder="enter Discount price" value = {items.discountedPrice} onChange={handleInput} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Thumbnail">Thumbnail</label>
                        <input 
                         name = "thumbnail"
                         type="" placeholder="enter Thumbnail" value = {items.thumbnail} onChange={handleInput} required/>
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