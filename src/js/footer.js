export const showStore = () => {
	const select = document.querySelector('.form-select');
	const vars = document.querySelectorAll('.form-option');
	const address = document.getElementById('footerAddress');
	const tel = document.getElementById('footerTel');


	const getStoreInfo = () => {
		vars.forEach(item => {
			if(item.selected) replaceAddress(item.value);
		})
	}	

	const replaceAddress = (value) => {
		if(value == 1) {
			address.innerHTML = `<p>г.Самара, ул. Красноармейская, 131</p>
			<p>ТЦ "Гудок", цокольный этаж</p>
			<p>напротив гипермаркета "Лента"</p>`;
			tel.innerHTML = `+7 (964) 987-16-44`;
		} else if (value == 2) {
			address.innerHTML = `<p>г.Самара, Московское шоссе, 106</p>
			<p>ТЦ "Мост", 1-й этаж </p>
			<p>гипермаркет мебели "Хофф"</p>`;
			tel.innerHTML = `+7 (906) 341-11-21`;
		}
	}


	select.addEventListener('change', getStoreInfo);
}