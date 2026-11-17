(function () {
  var mq = window.matchMedia('(max-width:900px)');
  var toggle = document.querySelector('.navtoggle');
  var menu = document.getElementById('navlinks');
  if (!toggle || !menu) return;
  function setOpen(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.style.overflow = open && mq.matches ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setOpen(!menu.classList.contains('open')); });
  var subs = menu.querySelectorAll(':scope > li > button');
  Array.prototype.forEach.call(subs, function (b) {
    b.addEventListener('click', function () {
      if (!mq.matches) return;
      b.parentNode.classList.toggle('sub-open');
    });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  function onChange() { if (!mq.matches) { setOpen(false); } }
  if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
})();
