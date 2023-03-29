import { ListItem } from "../ListItem/ListItem"
 
export const Products = ()=>{

    const items = [
        {
            id:1,
            price: 540,
            discountedPrice: 400,
            title: "Title of item-1",
            thumbnail : "/assets/placeholder.jpg"
        },
        {
            id:2,
            price: 550,
            discountedPrice: 460,
            title: "Title of item-2",
            thumbnail : "/assets/placeholder.jpg"
        }
    ]
    return (
        <div className={'product-list'}>
            <div className={'product-list--wrapper'}>
                <ListItem data = {items[0]}></ListItem>
                <ListItem data = {items[1]}></ListItem>
            </div>            
        </div>
    )
}