import Ticket from "./Ticket";
import TicketService from "./TicketService";
import TicetView from "./TicketView";
import TicetForm from "./TicketForm"

export default class HelpDesk {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("This is not HTML element!");
    }
    this.container = container;
    this.tickets = [];
    this.ticketService = new TicketService();
    this.TicetView = new TicetView();
    this.TicetForm = new TicetForm();
  }

  init() {
    this.ticketService.list((data) => {
      this.tickets = data;
      this.container.innerHTML = `
        <div class="add-button-container">
          <button class="add-button">Добавить тикет</button>
        </div>
        <div class="tikets">
          ${this.TicetView.render(data)}
        </div>
      `;
      const addButton = document.querySelector(".add-button");
      const tickets = document.querySelectorAll(".ticket");
      const chekButtons = document.querySelectorAll(".chek");
      const editButtons = document.querySelectorAll(".edit");
      const deleteButtons = document.querySelectorAll(".delete");

      addButton.addEventListener("click", () => {
        console.log("add");
      });

      for (let ticket of tickets) {
        ticket.addEventListener("click", (event) => {
          if (event.target == event.currentTarget) {
            console.log("ticket");
          }
        });
      };

      for (let chek of chekButtons) {
        chek.addEventListener("click", () => {
          console.log("chek");
        });
      };

      for (let edit of editButtons) {
        edit.addEventListener("click", () => {
          console.log("edit");
        });
      };

      for (let deleteBtn of deleteButtons) {
        deleteBtn.addEventListener("click", () => {
          console.log("delete");
        });
      };
    });

  }
}