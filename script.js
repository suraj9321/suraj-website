// Hero trace: noise resolving into a clean signal, drawn once on load.
(function () {
  var path = document.getElementById('trace');
  if (!path) return;

  var W = 1200, H = 160, N = 240;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Deterministic pseudo-noise so the page looks the same every load.
  var noise = [];
  var seed = 7;
  for (var i = 0; i < N; i++) {
    seed = (seed * 16807) % 2147483647;
    noise.push((seed / 2147483647) * 2 - 1);
  }

  function clean(t) {
    // A pulse-like wave: a sine with a sharper beat every so often.
    return Math.sin(t * 6) * 0.45 + Math.sin(t * 15) * 0.1;
  }

  function build(mix) {
    var d = '';
    for (var i = 0; i < N; i++) {
      var x = (i / (N - 1)) * W;
      var t = i / (N - 1) * Math.PI * 2;
      var y = clean(t) * (1 - mix) + noise[i] * 0.9 * mix;
      var py = H / 2 + y * (H / 2 - 6);
      d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + py.toFixed(1);
    }
    return d;
  }

  if (reduce) {
    path.setAttribute('d', build(0));
    return;
  }

  var start = null, dur = 1800;
  function frame(ts) {
    if (!start) start = ts;
    var p = Math.min(1, (ts - start) / dur);
    var eased = 1 - Math.pow(1 - p, 3);
    path.setAttribute('d', build(1 - eased));
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

// Theme toggle (persisted per browser).
(function () {
  var btn = document.getElementById('theme');
  var root = document.documentElement;
  var saved = new URLSearchParams(location.search).get('theme');
  try { saved = saved || localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);

  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function label() { btn.textContent = current() === 'dark' ? 'Light mode' : 'Dark mode'; }
  label();

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
})();
