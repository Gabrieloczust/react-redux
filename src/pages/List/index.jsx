import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/ducks/cars/fetchActions';
import Car from '../../components/Car';

export default function List() {
	const cars = useSelector(state => state.cars);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCars());
	}, [dispatch])

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
