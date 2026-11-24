(function () {
    var botao = document.getElementById('btnMenu');
    var menu = document.getElementById('menuSecoes');
    if (!botao || !menu) return;

    function abrir(aberto) {
        menu.classList.toggle('show', aberto);
        botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    }

    botao.addEventListener('click', function (e) {
        e.stopPropagation();
        abrir(!menu.classList.contains('show'));
    });

    menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) abrir(false);
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { abrir(false); botao.focus(); }
    });
})();