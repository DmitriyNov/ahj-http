export default class TicketView {
    constructor() {
    }

    render(tikets) {
      let mark = "";
      for (let tiket of tikets) {
        let cheked = "";
        if(tiket.status) {
          cheked = "img/cheket.png";
        }
        mark += `
          <div class="ticket">
            <div class="chek">
              <image class="chek-image src="${cheked}""></image>
            </div>
            <div class="description-container">
              <div class="name">
                <p class="name-text">${tiket.name}</p>
              </div>
              <div class="description">
                <p class="description-text"></p>
              </div>
            </div>
            <div class="edit">
              <image class="edit-image src="img/edit.png""></image>
            </div>
            <div class="delete">
              <image class="delete-image src="img/delete.png""></image>
            </div>
          </div>
        `
      }
      return mark;
    }
  }