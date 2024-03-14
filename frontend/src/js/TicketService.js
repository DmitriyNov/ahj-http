import createRequest from "./api/createRequest";

export default class TicketService {
    list(callback) {
      createRequest({
        method: "GET",
        info: {method: "allTickets"},
        callback: callback,
      });
    }
    
    get(id, callback) {}
  
    create(data, callback) {}
  
    update(id, data, callback) {}
  
    delete(id, callback) {}
  }