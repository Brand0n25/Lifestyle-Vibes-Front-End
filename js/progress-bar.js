window.addEventListener("scroll", function () {
  const scrollPosition = document.documentElement.scrollTop;
  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;

  document.getElementById("progressBar").style.width = scrollPercentage + "%";
});
