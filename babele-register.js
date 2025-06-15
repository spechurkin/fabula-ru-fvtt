Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'fabula-ru',
			lang: 'ru',
			dir: 'compendium'
		});
	}
});
