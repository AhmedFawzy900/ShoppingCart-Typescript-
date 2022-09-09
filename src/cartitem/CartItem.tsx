import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { CartItemType } from '../App'

type Props ={
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item , addToCart , removeFromCart}) => (

    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <Infromation>
             <p className="price">Price: ${item.price}</p>
             <p className="price">Total: ${(item.amount * item.price).toFixed(2)}</p>
            </Infromation>
            <Buttons>
                <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => removeFromCart(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                
                <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => addToCart(item)}
                >
                    +
                </Button>
            </Buttons>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>

    )

export default CartItem

const Wrapper =styled.div`
display:flex;
justify-content:space-between;
border-bottom:1px solid lightblue;
padding-bottom:20px;
img{
    max-width:80px;
    object-fit: contain;
    margin-left:40px;
}
div{
    flex: 1;
}
.price{
    margin:10px 0;
}
`
const Infromation =styled.div`
display:flex;
justify-content:space-between;

`
const Buttons =styled.div`
display:flex;
justify-content:space-between;
`