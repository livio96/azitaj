/* Azita J — small enhancements. The site works without this file. */
(function () {
  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // "Inquire" buttons pre-select the interest in the form
  document.querySelectorAll("[data-interest]").forEach(function (el) {
    el.addEventListener("click", function () {
      var sel = document.getElementById("f-interest");
      if (sel) sel.value = el.getAttribute("data-interest");
    });
  });

  // Highlight the nav link for the section in view
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && targets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("is-current", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach(function (t) { io.observe(t); });
  }

  // Inquiry form
  var form = document.getElementById("inquiry-form");
  var status = document.getElementById("form-status");
  if (!form || !status) return;

  function say(msg, isError) {
    status.textContent = msg;
    status.classList.toggle("is-error", !!isError);
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();

    var name = form.elements.name, email = form.elements.email;
    var ok = true;
    [name, email].forEach(function (f) {
      var bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
      f.setAttribute("aria-invalid", bad ? "true" : "false");
      if (bad) ok = false;
    });
    if (!ok) { say("Please add your name and a valid email address.", true); return; }

    if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
      say("The form isn't connected yet. Please email Azita@azitaj.com or call 516-660-9100.", true);
      return;
    }

    say("Sending…");
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (r) {
      if (r.ok) {
        form.reset();
        say("Thank you. Your inquiry has been sent and Azita will be in touch.");
      } else {
        say("The message didn't go through. Please email Azita@azitaj.com directly.", true);
      }
    }).catch(function () {
      say("The message didn't go through. Please check your connection or email Azita@azitaj.com.", true);
    });
  });
})();
