import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/ducks/cars/fetchActions';
import Car from '../../components/Car';

export default function List() {
	const { cars, isLoading } = useSelector(state => state.cars);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCars());
	}, [dispatch]);

	if (isLoading) {
		return (
			<div className="h-100 d-flex align-items-center justify-content-center">
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		)
	}

	return (
		<div className="container">
			<div className="row">
				{cars.map(
					(car, index) =>
						<Car
							key={index}
							car={car}
						/>
				)}
			</div>
		</div>
	);
}
