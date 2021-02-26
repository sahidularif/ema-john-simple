import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    //console.log(props);
    const {img, name, seller, key, price, stock, features} = props.product;
    
    return (
        <div className="product">
           
            <div>
                <img src={img} alt={key} />
            </div>
            <div className="product-details">
                <h4>{name}</h4><br/>
                <p><small>by: {seller}</small></p>
                <div className="item-description">
                    <div>
                        <p>$ {price}</p>
                        <p>Only {stock}  left in stock - order soon</p>
                        <button onClick={() => props.addToCartBtn(props.product)}>
                            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                            </button>
                    </div>
                    <div className="features">
                        {
                            features.map( feature =><li>{feature.description}: {feature.value} </li> )                                              
                        }
                    </div>
                </div>
              
                
        
            </div>
        </div>
    );
};

export default Product;