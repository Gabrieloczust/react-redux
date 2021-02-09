import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage, hideMessage } from '../../store/ducks/layout';
import { addCarFetch } from '../../store/ducks/cars/fetchActions';

export default function Add() {

	const formInitialValues = { name: '', url: '' };
	const [form, setForm] = useState(formInitialValues);
	const dispatch = useDispatch();
	const { isUpdating, error } = useSelector(state => state.cars);

	useEffect(() => {
		if (isUpdating) {
			const message = !error
				? {
					text: 'Carro cadastrado com sucesso!',
					color: 'success'
				}
				: {
					text: 'Infelizmente ocorreu um erro!',
					color: 'danger'
				};

			dispatch(showMessage(message));
			setTimeout(() => dispatch(hideMessage()), 4000);
		}

	}, [dispatch, isUpdating, error]);

	function formChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function onSubmit(e) {
		e.preventDefault();
		dispatch(addCarFetch(form));
		setForm(formInitialValues);
	}

	return (
		<div className="container">
			<form className="my-3" onSubmit={onSubmit}>
				<div className="form-group">
					<label>Nome</label>
					<input
						onChange={formChange}
						type="text"
						name="name"
						value={form.name}
						className="form-control"
						placeholder="Nome..."
						required
					/>
				</div>
				<div className="form-group">
					<label>URL:</label>
					<input
						onChange={formChange}
						type="text"
						name="url"
						value={form.url}
						className="form-control"
						placeholder="URL:https://cars"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary" disabled={isUpdating}>
					Adicionar
				</button>
			</form>
		</div>
	);
}
