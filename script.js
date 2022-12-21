import { datos } from './datos.js';

const tabsItems = document.querySelector('.tabs-items');
const tabButton = document.querySelectorAll('.tab-button');

window.addEventListener('DOMContentLoaded', () => {
	const showItems = (datos) => {
		let items = [];
		datos.forEach((d) => {
			items.push(`<article class="item">
            <img src=${d.imgSrc} alt="" />
            <div class="item-info">
                <header>
                    <h4>${d.title}</h4>
                    <h4>$${d.price}</h4>
                </header>
                <p class="item-desc">${d.description}</p>
            </div>
        </article>
        `);
		});
		items = items.join('');
		tabsItems.innerHTML = items;
	};

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

	showItems(datos);
});
