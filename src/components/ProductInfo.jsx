import React from 'react';
import Image from 'next/image';
import addToCart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';

const ProductInfo = ({ product }) => {
	return (
		<>
			<Image src={product.image} alt={product.title} />
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button">
					<Image src={addToCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfo;