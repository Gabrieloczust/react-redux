import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Car({ car }) {
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
			<div className="card rounded h-100 overflow-hidden">
				<img src={car.url} className="card-img-top" alt={car.name} />
				<div className="card-body d-flex align-items-center justify-content-between">
					<h5 className="card-title mr-2 mb-0">{car.name}</h5>
					<Link to="/cart" className="btn btn-primary">
						<i className="fa fa-cart-plus" aria-hidden="true" />
					</Link>
				</div>
			</div>
		</div>
	);
}
