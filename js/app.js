$shareBtn = $(".icon-container");
$activeShare = $(".active-share");
$closeBtn = $(".close-btn");

$displayActiveShare = $closeBtn.click(function () {
  $activeShare.toggle();
  $closeBtn.hide();
  $shareBtn.show();
});

$shareBtn.click(function () {
  $activeShare.toggle();

  if (
    $activeShare.css("background", "$very-dark-grayish-blue") &&
    $(window).width() < 750
  ) {
    $shareBtn.hide();
    $closeBtn.show();
    $displayActiveShare();
  }
   else if ($activeShare.css("background", "$very-dark-grayish-blue") &&
  $(window).width() > 750) {
    $shareBtn.hide();
    $closeBtn.show();
    $displayActiveShare();
  }
});


