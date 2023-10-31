import React from 'react';
import './filterSection.scss';
import {BsCupHot} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {
	getActiveRegionFilter,
	getActiveFlavourFilter, 
	getActiveStrengthsFilter 
} from '../../../redux/features/products-filters/productsFiltersSlice'; 

const FilterSection = ({products}) => {
	const dispatch = useDispatch();

	return (
		<section className='filter-section'>
			<BsCupHot className='filter-section-cup'/>
			<p className='filter-section-p'>Showing {products.length} Coffees from</p>

			<select className='filter-section-select' onChange={(e) => dispatch(getActiveRegionFilter(e.target.value))}>
			<option className='filter-section-select-option' value='all'>All regions</option>
			<option className='filter-section-select-option' value='brazil'>Brazil</option>
			<option className='filter-section-select-option' value='burundi'>Burundi</option>
			<option className='filter-section-select-option' value='guatemala'>Guatemala</option>
			</select>

			<p className='filter-section-p'>with notes of</p>

			<select className='filter-section-select' onChange={(e) => dispatch(getActiveFlavourFilter(e.target.value))}>
			<option className='filter-section-select-option' value='all'>All flavour groups</option>
			<option className='filter-section-select-option' value='chocolate'>Chocolate & Caramels</option>
			<option className='filter-section-select-option' value='citrus'>Citrus & Floral</option>
			<option className='filter-section-select-option' value='fruit'>Fruit & Berry</option>
			<option className='filter-section-select-option' value='nut'>Nut & Spice</option>
			<option className='filter-section-select-option' value='strong'>Strong & Dark</option>
			</select>

			<p className='filter-section-p'>with strength</p>
			
			<select className='filter-section-select' onChange={(e) => dispatch(getActiveStrengthsFilter(e.target.value))}>
			<option className='filter-section-select-option' value='all'>All strengths</option>
			<option className='filter-section-select-option' value='3'>3</option>
			<option className='filter-section-select-option' value='4'>4</option>
			<option className='filter-section-select-option' value='5'>5</option>
			</select>
		</section>
	)
}

export default FilterSection