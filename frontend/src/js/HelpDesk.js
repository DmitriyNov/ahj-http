import TicketService from "./TicketService";
import TicetView from "./TicketView";

export default class HelpDesk {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("This is not HTML element!");
    }
    this.container = container;
    this.ticketService = new TicketService();
  }

  init() {
    this.ticketService.list((data) => {
      console.log(data);
    });
  }
}