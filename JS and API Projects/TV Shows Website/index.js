async function getTVshows() {
    let url = "http://api.tvmaze.com/search/shows?q=golden%20girls";
    try {
      let res = await fetch(url);
      data = await res.json();
      //console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  getTVshows();
  
  async function displayTVshows() {
    let shows = await getTVshows();
    console.log(shows);
    // `<h3>TV Show type : ${show[0].show.name}</h3>`
    let html = "";
  
    shows.forEach((showElement, index) => {
      console.log(showElement.show.image.medium);
      //console.log(showElement.show.url);
      //console.log(index);
      let htmlSegment = `<div class="col-lg-4 col-md-4 col-10 col-xxl-4 mx-auto">
  <div class="card mb-3" style="max-width: 540px;">
  <h4 class="text-capitalize text-center">${showElement.show.name}</h4>
  <img src="${showElement.show.image.medium}" class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text">Premier Date : ${showElement.show.premiered}</p>
  <p class="card-text">Show Type : ${showElement.show.type}</p>
  <p class="card-text">Show Status : ${showElement.show.status}</p>
  <p class="card-text">Show Language : ${showElement.show.language}</p>
  <p class="card-text">Show Genres : ${showElement.show.genres}</p>
  <p class="card-text">Show Summary : ${showElement.show.summary}</p>
  </div>
  </div>
  </div>`;
  
      html += htmlSegment;
    });
  
    let container4 = document.getElementById("card");
    container4.innerHTML = html;
  }
  
  displayTVshows();