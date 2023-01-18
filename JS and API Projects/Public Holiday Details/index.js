async function getHolidayData() {
    try {
      let res = await fetch(
        "https://date.nager.at/api/v2/publicholidays/2020/US"
      );
  
      console.log("First : ");
      console.log(res);
  
      console.log("2nd : ");
      data = await res.json();
      console.log(data);
  
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  getHolidayData();
  
  async function displayHolidayData() {
    let holidays = await getHolidayData();
  
    console.log("Holidays data : ");
    console.log(holidays);
  
    let html = "";
  
    holidays.forEach((holiday, index) => {
      console.log("Holiday value");
      console.log(holiday);
      console.log(index);
  
      let htmlElement = `&#128071; <h2> <u> Holiday Date </u> - ${holiday.date} </h2>
          <h3> Holiday Name : ${holiday.localName} </h3>
          <h3> Holiday Type : ${holiday.type} </h3>
          <h3> Country Code : ${holiday.countryCode} </h3>`;
  
      //html = html + htmlElement;
      html += htmlElement;
    });
  
    let container = document.getElementById("container");
    container.innerHTML = html;
  }
  
  displayHolidayData();