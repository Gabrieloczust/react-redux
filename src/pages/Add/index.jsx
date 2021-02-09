import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import CreatorsLayout from '../../store/layout/actions';
import CreatorsCar from '../../store/cars/actions';

export default function Add() {

	const formInitialValues = { name: '', url: '' };
	const [form, setForm] = useState(formInitialValues);
	const dispatch = useDispatch();

	function formChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function onSubmit(e) {
		e.preventDefault();

		const { showMessage, hideMessage } = CreatorsLayout;
		const { addCar } = CreatorsCar;

		dispatch(addCar(form));
		setForm(formInitialValues);

		dispatch(showMessage('Carro cadastrado com sucesso!'));
		setTimeout(() => dispatch(hideMessage()), 4000);
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
				<button type="submit" className="btn btn-primary">
					Adicionar
			</button>
			</form>
		</div>
	);
}
