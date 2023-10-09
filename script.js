async function getweather(url, options, city, date1) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result.error) {
      throw new error("name not found");
    }
    let imga = document.getElementsByTagName("img")[0];
    imga.style.display = "block";
    document.body.style.background = "linear-gradient(90deg, #a16fa9, #dce296)";
    let container = document.getElementsByClassName("container")[0];
    container.style.background = "linear-gradient(120deg, #a16fa9, #dce296)";
    let a = document.getElementById("date");
    let c = document.getElementById("cityname");
    let t = document.getElementById("temp");
    let cl = document.getElementById("clouds");
    a.innerText = " ";
    c.innerText = "";
    t.innerText = "";
    cl.innerText = "";
    a.innerText += date1;
    c.innerText = c.innerText + city + " ,IN";
    t.innerText = t.innerText + result.temp + "°C";
    cl.innerText += "Clouds";
  } catch (error) {
    alert("no such city found");
  }
}

async function fetchweather() {
  let city = t1.value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ca696efa8bmsh2011dd4e871a892p16465ejsn4f64ec1871ca",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  let d = new Date();
  let date = d.toDateString();
  getweather(url, options, city, date);
}
