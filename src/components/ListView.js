import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helper';
import { Link } from 'react-router-dom';

const ListView = ({ products }) => {
	return (
		<Wrapper>
			{products.map((product) => {
				const { id, image, name, price, description } = product;
				return (
					<article key={id}>
						<Link to={`/products/${id}`}>
							<img src={image} alt={name} />
						</Link>
						<div>
							<h4>{name}</h4>
							<h5 className='price'>{formatPrice(price)}</h5>
							<p>
								{description.substring(0, 200)}
								...
							</p>
							<Link to={`/products/${id}`} className='btn'>
								vào sản phầm
							</Link>
						</div>
					</article>
				);
			})}
		</Wrapper>
	);
};
const Wrapper = styled.section`
	display: grid;
	row-gap: 3rem;
	a {
		overflow: hidden;
	}
	a:hover {
		border: 2px solid var(--clr-primary-6);
	}

	a img {
		transition: transform 0.5s linear;
	}

	img {
		width: 100%;
		display: block;
		width: 300px;
		height: 250px;
		object-fit: cover;
		border-radius: var(--radius);
		margin-bottom: 1rem;
	}
	img:hover {
		opacity: 0.75;
		transform: scale(1.3);
	}
	h4 {
		margin-bottom: 0.5rem;
	}
	.price {
		color: var(--clr-primary-6);
		margin-bottom: 0.75rem;
	}
	p {
		max-width: 45em;
		margin-bottom: 1rem;
	}
	.btn {
		font-size: 0.5rem;
		padding: 0.25rem 0.5rem;
	}
	@media (min-width: 992px) {
		article {
			display: grid;
			grid-template-columns: auto 1fr;
			column-gap: 2rem;
			align-items: center;
		}
	}
`;
export default ListView;
