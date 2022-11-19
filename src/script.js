/** @format */
function updateTime() {
  //Moskow
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowMoment = moment().tz("Europe/Moscow");
    moscowDateElement.innerHTML = moscowMoment.format("MMMM Do YYYY");
    moscowTimeElement.innerHTML = moscowMoment.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyMoment = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyMoment.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyMoment.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverMoment = moment().tz("America/Vancouver");
    vancouverDateElement.innerHTML = vancouverMoment.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverMoment.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinMoment = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinMoment.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinMoment.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/" class="back">Go Back</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
