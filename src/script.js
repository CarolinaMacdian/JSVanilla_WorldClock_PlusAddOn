/** @format */
function updateTime() {
  //NY
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkMoment = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkMoment.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyMoment = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyMoment.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Madrid
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridMoment = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = madridMoment.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonMoment = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonMoment.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoMoment = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoMoment.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
