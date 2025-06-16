Hooks.once('init', () => {
    if (typeof Babele !== 'undefined') {
        game.babele.register({
            module: 'fabula-ru', lang: 'ru', dir: 'compendium'
        });
    }
});
