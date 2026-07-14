// Design version switcher (V1 dark / V2 light). Persists the choice locally.
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-theme-btn]');

  function setTheme(version) {
    root.setAttribute('data-theme', version);
    try { localStorage.setItem('pac-theme', version); } catch (e) {}
    buttons.forEach(function (b) {
      var active = b.getAttribute('data-theme-btn') === version;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  var saved = 'v1';
  try { saved = localStorage.getItem('pac-theme') || 'v1'; } catch (e) {}
  setTheme(saved);

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      setTheme(b.getAttribute('data-theme-btn'));
    });
  });
})();
