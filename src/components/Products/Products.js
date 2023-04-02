import axios from "axios";
import { useEffect, useState } from "react";
// import { Form } from "../Form/Form"
import { ListItem } from "../ListItem/ListItem";

export const Products = () => {
  // const [title , setTitle] = useState("");
  // const [price , setPrice] = useState(0);
  // const [discountedPrice , setdiscountedPrice] = useState(0);
  // const [thumbnail , setThumbnail] = useState("");

  const [items, setItems] = useState([]);

  useEffect(()=> {
    // const result = fetch(`https://reactjs-practice-2023-default-rtdb.firebaseio.com/products.json`)
    // .then(result => result.json())
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => {
    //   console.log(error);
    // })

    async function fetchItems(){
      try {
        const response = await axios.get('https://reactjs-practice-2023-default-rtdb.firebaseio.com/products.json')
        
        const products = response.data;
        setItems(products);      
        
      }
      catch (error) {
        console.log("Error" , error);
        alert("Something went wrong !");
      }
    }
    fetchItems();
  } , [])

  const updateItemTitle = async (itemId) => {
    console.log("Item with Id:" ,itemId);
    try {
      let title = `Update title #Item-${itemId}`
      await axios.patch(`https://reactjs-practice-2023-default-rtdb.firebaseio.com/products/${itemId}.json`,{
      title: title
    })
    let data = [...items];
    let index = data.findIndex(e => e.id === itemId)
    data[index]['title'] = title

    setItems(data);
      
    } 
    
    catch (error) {
      console.log("Error" , error);
    }   
     
  }

  // const handleInput = (event)=>{
  //     console.log(event.target.value , event.target.name);
  //     setItems({
  //         ...items,
  //         [event.target.name] : event.target.value
  //     })
  // }

  // const submitForm = (event)=>{
  //     event.preventDefault();
  // console.log({
  //     title: title,
  //     price,
  //     discountedPrice,
  //     thumbnail
  // })
  // console.log("price" , items.price);
  // console.log("discountprice" , items.discountedPrice);
  // console.log(discountedPrice>price);
  // if(items.discountedPrice > items.price){
  //     alert("Discounted price can't be greater than price");
  //     return;
  // }
  // setItems( {
  //     title: title,
  //     price,
  //     discountedPrice,
  //     thumbnail
  // })
  // }

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
    <div className="product-list">
      <div className={"product-list--wrapper"}>
        {
            items.map((item)=>{
                return(
                <ListItem key = {item.id} data = {item} updateItemTitle = {updateItemTitle}/>
                )
            })
        }
      </div>
    </div>

    // <div className="product-wrapper">
    /* <Form items = {items} onChangeInput = {handleInput} onFormSubmission = {submitForm} />
            <div>
                <div className>
                    <ListItem data = {items}></ListItem>
                </div>  
                {/* <div className={'product-list--wrapper'}>
                    <ListItem data = {items[0]}></ListItem>
                </div>             */
    /* </div> */
    /* </div> */
  );
};
