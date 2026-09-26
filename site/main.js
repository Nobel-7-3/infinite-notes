(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var src = document.getElementById(btn.getAttribute("data-copy"));
      var text = src ? src.childNodes[0].textContent.trim() : "";
      var done = function () { btn.textContent = "Copied ✓"; setTimeout(function () { btn.textContent = "Copy"; }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { btn.textContent = "Select & copy"; });
      } else {
        btn.textContent = "Select & copy";
      }
    });
  });

  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  var stage = document.querySelector(".stage");
  var world = document.querySelector(".world");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (stage && world && !reduce && window.matchMedia("(pointer: fine)").matches) {
    stage.addEventListener("pointermove", function (e) {
      var r = stage.getBoundingClientRect();
      var dx = (e.clientX - r.left) / r.width - 0.5;
      var dy = (e.clientY - r.top) / r.height - 0.5;
      world.style.translate = (dx * -18).toFixed(1) + "px " + (dy * -12).toFixed(1) + "px";
    });
    stage.addEventListener("pointerleave", function () { world.style.translate = "0 0"; });
  }

  // The tour plays, muted, while it is on screen, and stops when you scroll past or pause it.
  var promo = document.getElementById("promo");
  if (promo && !reduce && "IntersectionObserver" in window) {
    var userPaused = false, ours = false;
    promo.addEventListener("pause", function () { if (!ours) userPaused = true; ours = false; });
    promo.addEventListener("play", function () { userPaused = false; });
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !userPaused) {
          var p = promo.play();
          if (p && p.catch) p.catch(function () {});
        } else if (!e.isIntersecting && !promo.paused) {
          ours = true;
          promo.pause();
        }
      });
    }, { threshold: 0.5 }).observe(promo);
  }
})();
