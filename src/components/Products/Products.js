import axios from "axios";
import { useEffect, useState } from "react";
// import { Form } from "../Form/Form"
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";

export const Products = ({ onAddItem , onRemoveItem , eventState }) => {
  // const [title , setTitle] = useState("");
  // const [price , setPrice] = useState(0);
  // const [discountedPrice , setdiscountedPrice] = useState(0);
  // const [thumbnail , setThumbnail] = useState("");

  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  // const [presentItems , setPresentItems] = useState([]);

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
        const transformedData = products.map((items)=>{
          return {
            ...items,
            quantity : 0
          }
        })
        setLoader(false);
        setItems(transformedData);      
        
      }
      catch (error) {
        console.log("Error" , error);
        setLoader(false);
        alert("Something went wrong !");
      }
      finally{
        setLoader(false);
      }
    }
    fetchItems();
  } , [])

  useEffect(()=>{
    if(eventState.id > -1){
      if(eventState.type === 1) {
        handleAddItem(eventState.id);
      }
      else if (eventState.type === -1){
        handleRemoveItem(eventState.id)
      }
    }
  },[eventState])

  const handleAddItem = (id)=>{
    // if(presentItems.indexOf(id) > -1){
    //   return;
    // }
    // setPresentItems([...presentItems , id])
    // onAddItem();
    let data = [...items];
    let index = data.findIndex(i => i.id === id);
    data[index].quantity += 1;
    setItems([...data]);
    console.log(data[index]);
    onAddItem(data[index]);
  }

  const handleRemoveItem = (id)=>{
    // let index = presentItems.indexOf(id);
    // if(index > -1){
    //   let items = [...presentItems];
    //   items.splice(index , 1);
    //   setPresentItems([...items]);
    //   onRemoveItem();
    // }  
    let data = [...items];
    let index = data.findIndex(i => i.id === id);
    if(data[index].quantity !== 0) {
      data[index].quantity -= 1;
      setItems([...data]);
      onRemoveItem(data[index]);
    }    
  }

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
    <>    
      <div className="product-list">
        <div className={"product-list--wrapper"}>
          {
              items.map((item)=>{
                  return(
                  <ListItem onAdd ={handleAddItem} onRemove = {handleRemoveItem} key = {item.id} data = {item} updateItemTitle = {updateItemTitle}/>
                  )
              })
          }
        </div>
      </div>
      {loader && <Loader />}
    </>

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
