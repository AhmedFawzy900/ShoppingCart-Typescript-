import styled from 'styled-components'
import CartItem from './cartitem/CartItem'
import { CartItemType } from './App'

type Props={
    cartItems:CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart : (id: number) => void;
}
const Cart: React.FC<Props> =({cartItems , addToCart ,removeFromCart }) => {
    console.log(cartItems);
const calculateTotal = (items:CartItemType[]) =>
items.reduce((ack:number , item) => ack + item.amount * item.price, 0 );


  return (
    <Wrapper>
     <h2>Your shopping Cart</h2>
    {cartItems.length === 0 ? <p>No Items in cart</p> : null}
    {cartItems.map(item => (
        <CartItem 
        key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        />
    ))}
    
    <h2><div className='total'>Total:</div> ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}
export default Cart

const Wrapper = styled.div`
font-family:Arial;
width:36vw;
padding:20px;
h2{
  margin: 10px 0;
  font-weight:normal;
}
.total{
  display:inline-block;
  font-weight:bold;
}

`