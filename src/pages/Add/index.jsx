import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCar } from '../../store/cars';

export default function Add() {

	const formInitialValues = { name: '', url: '' };
	const [form, setForm] = useState(formInitialValues);
	const dispatch = useDispatch();

	function formChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function onSubmit(e) {
		e.preventDefault();
		dispatch(addCar(form));
		setForm(formInitialValues);
	}

	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input
					onChange={formChange}
					type="text"
					name="name"
					value={form.name}
					className="form-control"
					placeholder="Nome..."
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
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
