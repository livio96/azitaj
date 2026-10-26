/* Azita J — small enhancements. The site works without this file. */
(function () {
  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ?interest=residences|viewing on the contact page pre-selects the dropdown
  var sel = document.getElementById("f-interest");
  var want = new URLSearchParams(location.search).get("interest");
  if (sel && want) {
    Array.prototype.forEach.call(sel.options, function (o) {
      if (o.text.toLowerCase().indexOf(want.toLowerCase()) !== -1) sel.value = o.value;
    });
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
