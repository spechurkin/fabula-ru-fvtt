Hooks.once('init', () => {
    if (typeof Babele === 'undefined') return;

    // Регистрируем переводы
    game.babele.register({
        module: 'fabula-ru',
        lang: 'ru',
        dir: 'compendium'
    });
})