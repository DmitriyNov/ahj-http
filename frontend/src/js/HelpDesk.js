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
      for (let ticket of data) {
        this.tickets.push(new Ticket(ticket));
      }
      this.container.innerHTML = `
      <div class="container">
          <div class="add-button-container">
            <button class="add-button">Добавить тикет</button>
          </div>
          <div class="tikets">
            ${this.TicetView.render(this.tickets)}
          </div>
        </div>
      `;
      const addButton = document.querySelector(".add-button");
      const tickets = document.querySelectorAll(".ticket");
      const chekButtons = document.querySelectorAll(".chek");
      const editButtons = document.querySelectorAll(".edit");
      const deleteButtons = document.querySelectorAll(".delete");

      addButton.addEventListener("click", () => {
        console.log("add");
        //Формы дурацкие, в последнюю очередь сделаю
      });

      for (let ticket of tickets) {
        ticket.addEventListener("click", (event) => {
          //Нужно доработать, наверное просто поставить исключения для текста и даты, но это костыли какие-то стрёмные
          if (event.target == event.currentTarget) {
            const ticketId = event.target.closest(".ticket").getAttribute("id");
            const currentTicketDescription = document.getElementById(ticketId).querySelector(".description-text");
            this.ticketService.get(ticketId, (data) => {
              currentTicketDescription.innerHTML = data.description;
            });
          };
        });
      };

      for (let chek of chekButtons) {
        chek.addEventListener("click", (event) => {
          const ticketId = event.target.closest(".ticket").getAttribute("id");
          let data;
          for (let ticket of this.tickets) {
            if (ticket.id == ticketId) {
              data = ticket;
              break;
            }
          };
          this.ticketService.update(ticketId, data, () => { 
            this.init();
            //Я вообще не уверен, что это будет работать. По хорошему здесь нужно вызывать только TicketView.render(), но тогда в этом методе нужно вешать все обрабтчики, но все функции связанные с запросами я не хочу туда закидывать. Если по-другому никак, то буду переделывать
          });
        });
      };

      for (let edit of editButtons) {
        edit.addEventListener("click", () => {
          console.log("edit");
        });
      };

      for (let deleteBtn of deleteButtons) {
        deleteBtn.addEventListener("click", (event) => {
          const ticketId = event.target.closest(".ticket").getAttribute("id");
          this.ticketService.delete(ticketId, data, () => {
            this.init();
            //Определённо это не работает, он не рендерит заново разметку(
          });
        });
      };
    });

  }
}