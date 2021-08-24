let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0"
    document.querySelector(".navbar").style.boxShadow =
      "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
  } else {
    document.querySelector(".navbar").style.top = "-80px"
  }
  prevScrollpos = currentScrollPos
}
$(document).ready(function () {
  var url = $("#Geeks3").attr("src")
  $("#Geeks2").on("hide.bs.modal", function () {
    $("#Geeks3").attr("src", "")
  })
  $("#Geeks2").on("show.bs.modal", function () {
    $("#Geeks3").attr("src", url)
  })
})
