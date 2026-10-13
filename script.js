$(document).ready(function () {
  /* MOBILE MENU */

  $("#menuToggle").on("click", function () {
    $("#navMenu").toggleClass("show");
  });

  /* DARK MODE */

  $("#themeBtn").on("click", function () {
    $("body").toggleClass("dark");
  });

  /* HIDE / SHOW */

  $("#hideBtn").on("click", function () {
    $("#details").slideToggle(250);
  });

  /* COUNTER */

  let count = 0;

  $("#plus").on("click", function () {
    count++;

    $("#count").text(count);
  });

  $("#minus").on("click", function () {
    count--;

    $("#count").text(count);
  });

  /* CONTACT FORM */

  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    let name = $("#name").val().trim();

    let email = $("#email").val().trim();

    let message = $("#message").val().trim();

    if (name !== "" && email !== "" && message !== "") {
      $("#formResult").text(
        "Thank you, " + name + "! Your message was submitted successfully.",
      );

      $("#contactForm")[0].reset();
    }
  });
});
