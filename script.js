window.onload = function() {
  init();
};

function init() {
  let httpRequest;

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert("SOS!");
    }

    httpRequest.onreadystatechange = processContents;
    httpRequest.open(
      "GET",
      "https://api.breezometer.com/pollen/v2/current-conditions?lat=48.857456&lon=2.354611&key=b5a85587da95498d8cc591beb2ba1e3c"
    );
    httpRequest.send();
    //   console.log(httpRequest.responseText)
  }

  function processContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        let data = httpRequest.responseText;

        if (data) {
          data = JSON.parse(data);

          if (data.data) createData(data.data.types);
        }
      } else {
        alert("Bad Request!");
      }
    }
  }

  function createData(items) {
    console.log(items);
    let openSpace = document.querySelector(".cover");
    let data = ``;
    for (let item in items) {
      if (items.hasOwnProperty(item)) {
        // data += `<h1>${items[item]}</h1>
        `;

      }
    }
    openSpace.innerHTML = data;
  }

  makeRequest();
}
