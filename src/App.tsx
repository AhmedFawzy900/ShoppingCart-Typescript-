import { useState } from "react";
import { useQuery } from "react-query";
// components
import Cart from "./Cart";
import Item from "./items/Item";
import  Drawer  from "@material-ui/core/Drawer";
import  LinearProgress  from "@material-ui/core/LinearProgress";
import  Grid  from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import  Badge  from "@material-ui/core/Badge";
import IconButton from '@material-ui/core/IconButton';
import styled  from "styled-components";
import Header from "./Header";
import Footer from "./Footer"
// types
export type CartItemType = {
  id:number,
  category:string,
  description:string,
  image:string,
  price:number,
  title:string,
  amount:number,
}


const getProducts = async (): Promise<CartItemType[]> =>
await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const [cartOpen,setCartOpen] =useState(false);
  const [cartItems,setCartItems] = useState([] as CartItemType[])
  const {data , isLoading , error} = useQuery<CartItemType[]>(
    'products',
    getProducts
  )
  console.log(data);
  
const getTotalItems = (items:CartItemType[]) => 
items.reduce((ack: number ,item) => ack + item.amount ,0);

const handleAddToCart = (clickedItem: CartItemType)=> {
  setCartItems(prev => {
    const isItemInCart = prev.find(item => item.id === clickedItem.id)
    if(isItemInCart){
      return prev.map(item => 
        item.id === clickedItem.id 
        ? {...item,amount: item.amount + 1}
        : item
      )
    }
    return [...prev, {...clickedItem, amount:1}]
  })
};

const handleRemoveFromCart = (id: number) => {
  setCartItems(
    prev =>
    prev.reduce((ack, item) => {
      if(item.id === id){
        if(item.amount === 1) return ack;
        return [...ack, {...item, amount:item.amount - 1}]
      } else {
        return [...ack,item]
      }
      
    }, [] as CartItemType[])
  )
};

if (isLoading) return <LinearProgress />;
if (error) return <div>some thing went wrong</div>;
  
  return (
 <>
  <Header />
  <Wrapper>
  
      <Drawer anchor="right"  open={cartOpen} onClose={()=>setCartOpen(false)} >
        <Cart cartItems={cartItems}  addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}  />
      </Drawer>
      <SyleButton onClick={()=>setCartOpen(true)} >

      <Badge badgeContent={getTotalItems(cartItems)} color='error' >
        <AddShoppingCartIcon />
      </Badge>
      </SyleButton>

        <Grid container spacing={4}>
      {    
        data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4} >
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
      ))
      
      }
    </Grid>
    </Wrapper>
    <Footer />
  </>
  );
}

export default App;
const Wrapper = styled.div`
margin:40px;
 `

 const SyleButton = styled.button`
 position: fixed;
 z-index: 100;
 right: 10px;
 bottom: 18px;
 width: 50px;
 height: 50px;
 background: 0;
 border-radius: 50%;
 border: 0;
 background: rgb(197 128 249 / 1);
 color: #eee;
 `
 const Nav = styled.div``