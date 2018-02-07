"use strict";

$(function () {
  $(".video").click(function () {
    var modal = $(this).data("target");
    var videoSrc = $(this).attr("data-video");

    // Set additional params for youtube video + autoplay
    var videoSrcParams = videoSrc + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(modal).on("shown.bs.modal", function () {
      $(modal + " iframe").attr("src", videoSrcParams);
    });

    // On modal close stop video
    $(modal).on("hide.bs.modal", function () {
      $(modal + " iframe").attr("src", videoSrc);
    });
  });

  $(document).on("click", "[data-toggle=\"lightbox\"]", function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-out'
  });
});
//# sourceMappingURL=index.js.map