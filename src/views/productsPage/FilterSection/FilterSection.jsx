import React from 'react';
import './filterSection.scss';
import {BsCupHot} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { getActiveRegionFilter } from '../../../redux/features/products-filters/regionFilterSlice';


const FilterSection = ({products}) => {
	const dispatch = useDispatch();


	return (
		<section className='filter-section'>
			<BsCupHot className='filter-section-cup'/>
			<p className='filter-section-p'>Showing {products.length} Coffees from</p>

			<select className='filter-section-select' onChange={(e) => dispatch(getActiveRegionFilter(e.target.value))}>
			<option className='filter-section-select-option' value='all'>All regions</option>
			<option className='filter-section-select-option' value='africa'>Africa</option>
			<option className='filter-section-select-option' value='salvador'>El Salvador Black Honey</option>
			<option className='filter-section-select-option' value='indonesia'>Indonesia & Asia</option>
			<option className='filter-section-select-option' value='new'>New Coffee</option>
			<option className='filter-section-select-option' value='amerika'>South America</option>
			</select>

			<p className='filter-section-p'>with notes of</p>

			<select className='filter-section-select'>
			<option className='filter-section-select-option'>All flavour groups</option>
			<option className='filter-section-select-option'>Chocolate & Caramels</option>
			<option className='filter-section-select-option'>Citrus & Floral</option>
			<option className='filter-section-select-option'>Fruit & Berry</option>
			<option className='filter-section-select-option'>Nut & Spice</option>
			<option className='filter-section-select-option'>Strong & Dark</option>
			</select>

			<p className='filter-section-p'>with strength</p>
			
			<select className='filter-section-select'>
			<option className='filter-section-select-option'>All strengths</option>
			<option className='filter-section-select-option'>3</option>
			<option className='filter-section-select-option'>4</option>
			<option className='filter-section-select-option'>5</option>
			</select>
		</section>
	)
}

export default FilterSection