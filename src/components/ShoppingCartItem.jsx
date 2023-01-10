import React from 'react';
import Image from 'next/image';
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = ({ product }) => {
	return (
		<div className={styles.ShoppingCartItem}>
			<figure>
				<Image src={product.images} alt={product.title}  />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
		</div>
	);
};

export default ShoppingCartItem;