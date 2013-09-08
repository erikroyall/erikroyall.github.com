$(function () {

  $(".back").attr("title", $(".back").attr("ui-content"));
  $(".next").attr("title", $(".next").attr("ui-content"));

  function responsify () {
    console.log("Responsifying");

    if ($(window).width() < 481) {
      $(".back").html("<");
      $(".next").html(">");
    } else {
      $(".back").html($(".back").attr("ui-content"));
      $(".next").html($(".next").attr("ui-content"));
    }
  }

  responsify();

  $(window).on("resize", responsify);
});