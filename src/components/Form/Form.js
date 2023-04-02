export const Form = (props)=>{

    console.log("props" , props);

    const handleInput = (event)=>{
        props.onChangeInput(event);
    }

    const submitForm = event =>{
        props.onFormSubmission(event);
    }

    return (
        <div className="form">
                <form onSubmit={submitForm}>
                    <h2>Title of the Form</h2>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input
                         name = "title" type="text" placeholder="type title" 
                         value = {props.items.title} onChange={handleInput} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="price">Price</label>
                        <input 
                         name = "price"
                         type="number" placeholder="enter price" 
                         value = {props.items.price} onChange={handleInput} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="discountedPrice">Discount Price</label>
                        <input 
                         name = "discountedPrice" type="number" placeholder="enter Discount price" value = {props.items.discountedPrice} onChange={handleInput} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Thumbnail">Thumbnail</label>
                        <input 
                         name = "thumbnail"
                         type="" placeholder="enter Thumbnail" value = {props.items.thumbnail} onChange={handleInput} required/>
                    </div>
                    <div className="submit-wrap">
                        <button>Update</button>
                    </div>
                </form>
            </div>
    )
}