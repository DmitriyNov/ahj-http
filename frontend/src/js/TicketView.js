export default class TicketView {
    constructor() {
    }

    render(tikets) {
      let mark = "";
      for (let tiket of tikets) {
        let cheked = "";
        let date = new Date(tiket.created);
        if(tiket.status) {
          cheked = "img/cheked.png";
        }
        mark += `
          <div class="ticket" id="${tiket.id}">
            <div class="chek">
              <image class="chek-image" src="${cheked}"></image>
            </div>
            <div class="description-container">
              <div class="name">
                <p class="name-text">${tiket.name}</p>
              </div>
              <div class="description">
                <p class="description-text"></p>
              </div>
            </div>
            <div class="date-container">
              <p class="date">${date.getDay() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + "." + date.getMinutes()}</p>
            </div>
            <div class="edit">
              <image class="edit-image" src="img/edit.png"></image>
            </div>
            <div class="delete">
              <image class="delete-image" src="img/delete.png"></image>
            </div>
          </div>
        `
      }
      //Пока не делал корректное отобажение даты и почему-то вебпак не подтаскивает фото, возможно стоит взять настройки из старых дз
      return mark;
    }
  }