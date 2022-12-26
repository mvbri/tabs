import { datos } from './datos.js';

const tabsItems = document.querySelector('.tabs-items');
const tabsButtons = document.querySelector('.tabs-buttons');

window.addEventListener('DOMContentLoaded', () => {
	showItems(datos);
	categorybuttons();
});

const showItems = (datos) => {
	let items = datos.map((d) => {
		return `<article class="item">
		<img src=${d.imgSrc} alt="" />
		<div class="item-info">
			<header>
				<h4>${d.title}</h4>
				<h4>$${d.price}</h4>
			</header>
			<p class="item-desc">${d.description}</p>
		</div>
	</article>
	`;
	});
	items = items.join('');
	tabsItems.innerHTML = items;
};

const categorybuttons = () => {
	const getCategories = (datos) => {
		let categoriesFilter = ['all'];
		datos.forEach((d) => {
			if (!categoriesFilter.includes(d.category)) {
				categoriesFilter.push(d.category);
			}
		}); // Falta aprender bien reduce.
		// Y revisar como lo hicieron en el curso.
		showButtons(categoriesFilter);
	};

	const showButtons = (categoriesFilter) => {
		const buttons = categoriesFilter
			.map((d) => {
				return `<button class="tab-button" data-id="${d}">${d}</button>`;
			})
			.join('');
		tabsButtons.innerHTML = buttons;
		const tabButton = document.querySelectorAll('.tab-button');

		const display = (e) => {
			const dataset = e.target.dataset.id;
			const actualTab = datos.filter((d) => d.category == dataset);

			if (dataset == 'all') {
				return showItems(datos);
			}

			showItems(actualTab);
		};

		tabButton.forEach((button) => {
			button.addEventListener('click', display);
		});
	};
	getCategories(datos);
};

/**
 * Ahora a hacerlo con "ALL"
 */
