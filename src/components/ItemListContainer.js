import React, { useState } from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = () => {

    const product = {
        id: 1,
        name: "Peanut",
        totalStock: 10,
    }

    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(product.totalStock);

    const countIncrease = (e) => {
        if(count < stock){
            setCount(count+1);
        }
    }

    const countDecrease = (e) => {
        if(count > 0){
            setCount(count-1);
        }
    }


    return (
        <div className="w-screen ml-10 mt-36">
            <h4>{product.name}</h4>
            <p>{product.stock}</p>
            <ItemCount
                        key={product.id}
                        count={count}
                        stock={stock}
                        itemName={product.name}
                        countIncrease={countIncrease}
                        countDecrease={countDecrease}
                        addCartHandler={(e)=>{
                            if(stock > 0){
                                alert(`¡ 🎉"(${count}) ${product.name}"🎉 added to the shopping cart 🛒 🛒!`);
                                setStock(stock - count);
                                setCount(0);
                            }}}
            />        
        </div>
        
    )
}

export default ItemListContainer