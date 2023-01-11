import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/LogoTrans.png';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<nav className={styles.Nav}>
			{/* <Image src={menuIcon} alt="menu" className={styles.menu} /> */}
			<div className={styles['navbar-left']}>
				<Link href="/" passHref>
				<Image src={logo} alt="logo" className={styles['nav-logo']} />
				</Link>
				<ul>
					<li>
						<Link href="/" passHref>All</Link>
					</li>
					<li>
						<Link href="/" passHref>Pines</Link>
					</li>
					<li>
						<Link href="/" passHref>Protectores</Link>
					</li>
					<li>
						<Link href="/" passHref>Forros</Link>
					</li>
					<li>
						<Link href="/" passHref>Combos</Link>
					</li>
					<li>
						<Link href="/" passHref>Others</Link>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<button className={styles['navbar-email']} onClick={handleToggle}>
						barrigui@example.com
					</button>
					<button
						className={styles['navbar-shopping-cart']}
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<Image src={shoppingCart} alt="shopping cart" width="30" height="30"/>
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</button>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
};

export default Header;