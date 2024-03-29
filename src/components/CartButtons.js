import React from 'react';
import {
	FaShoppingCart,
	FaUserMinus,
	FaUserPlus,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
	const { closeSidebar } = useSidebarContext();
	const { total_items } = useCartContext();
	const { loginWithRedirect, myUser, logout } = useUserContext();
	return (
		<Wrapper className='cart-btn-wrapper'>
			<Link to='/cart' className='cart-btn' onClick={closeSidebar}>
				Giỏ hàng
				<span className='cart-container'>
					<FaShoppingCart />
					<span className='cart-value'>{total_items}</span>
				</span>
			</Link>
			{myUser ? (
				<button
					type='button'
					className='auth-btn'
					onClick={() => logout({ returnTo: window.location.origin })}
				>
					thoát
					<FaUserMinus />
				</button>
			) : (
				<button
					type='button'
					className='auth-btn'
					onClick={loginWithRedirect}
				>
					login
					<FaUserPlus />
				</button>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	width: 225px;
	.cart-btn {
		color: var(--clr-grey-1);
		font-size: 1rem;
		letter-spacing: var(--spacing);
		display: flex;
		align-items: center;
	}
	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
		svg {
			height: 1.9rem;
			margin-left: 5px;
		}
	}
	.cart-value {
		position: absolute;
		top: -10px;
		right: -16px;
		background: var(--clr-primary-5);
		width: 16px;
		height: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 0.85rem;
		color: var(--clr-white);
		padding: 10px;
	}
	.auth-btn {
		display: flex;
		align-items: center;
		background: transparent;
		border-color: transparent;
		font-size: 1.1rem;
		cursor: pointer;
		color: var(--clr-grey-1);
		letter-spacing: var(--spacing);
		svg {
			margin-left: 5px;
		}
	}
`;

export default CartButtons;
