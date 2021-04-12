/*sticky navigation menu start*/

let nav_offset_top = $(".main-nav").height() + 50;

function navbarFixed() {
  if ($(".main-nav").length) {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll >= nav_offset_top) {
        $(" .main-nav").addClass("sticky");
      } else {
        $(" .main-nav").removeClass("sticky");
      }
    });
  }
}

navbarFixed();

/*sticky navigation menu End*/

/* Animate On Scroll Start */
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1300,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

/* Animate On Scroll End */
