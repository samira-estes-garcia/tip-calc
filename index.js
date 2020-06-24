console.log("is connected");

//calculate the tip
function calculateTip() {
  origTotal = $("#orig-total").val;
  tipPercent = $("#tip-percent").val;
  peopleNum = $("#people-num").val;
}

//hide total tip div

//calculate tip on submit
$(".submit").onclick = function () {
  calculateTip();
};
