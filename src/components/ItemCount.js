import React from 'react'


const ItemCount = (props) => {

    return (
        <div>
            <div className="flex-col text-center w-1/6 border-2 rounded bg-gray-200 p-4">
                <div className="flex justify-between mb-2 border-2 border-solid border-gray-300 rounded border-b-gray-400 border-r-gray-400 bg-white">
                    <button onClick={props.countDecrease} className="text-cyan-500 mx-3">-</button>
                    <div className="text-white text-shadow-h1 ">
                        {props.count}
                    </div>
                    <button onClick={props.countIncrease} className="text-cyan-500 mx-3">+</button>
                </div>
                {(props.stock > 0 
                    ? <span className="text-green-400 text-shadow-h1">Stock: {props.stock}</span>
                    :<span className="text-red-400 text-shadow-h1">Stock: {props.stock}</span>
                )}  
                <button 
                    onClick={props.addCartHandler} 
                    disabled={props.count === 0 || props.stock === 0}
                    className={props.count === 0 || props.stock === 0 ? "w-full text-white text-shadow-h1 bg-gray-500 border-2 border-solid border-gray-400 rounded":"w-full text-white text-shadow-h1 bg-cyan-100 border-2 border-solid border-cyan-400 rounded border-b-cyan-500 border-r-cyan-500"}
                >
                    Add to Cart
                </button>
            </div>
            
        </div>
    )
}

export default ItemCount