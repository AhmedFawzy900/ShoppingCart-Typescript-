import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { CartItemType } from "../App";

type Props = {
    item : CartItemType;
    handleAddToCart :(clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item , handleAddToCart}) => (
    <Wrapper>
     <img src={item.image} alt={item.title} />
     <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>Price: ${item.price}</h3>
     </div>
     <button onClick={()=> handleAddToCart(item)}>Add to cart</button>
    </Wrapper>
)
export default Item;
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
width:100%;
box-shadow:0 12px 20px 0 rgb(0 0 0 / 13%),0 2px 4px rgb(0 0 0 / 12%);
border-radius:20px;
height:100%;
overflow:hidden;
background: #fff;
h3,p{
  margin-bottom:12px;
}
button{
  border-radius: 0 0 20px 20px;
  BACKGROUND: #2196f3;
  color: #eee;
  border: 0;
  height: 40px;
  font-size: 17px;
  cursor: pointer;
}
button:hover{
  opacity:.8;
}
img{
  height: 250px;
  max-height:250px;
  object-fit: contain;
  padding: 10px;
  border-radius:20px 20px 0 0;
}
div{
  font-family:Arial;
  padding:1rem;
  p{
    max-height: 110px;
    overflow: hidden;
    font-size: 14px;
    color: #888;

  }
}
`