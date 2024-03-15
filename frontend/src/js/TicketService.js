import createRequest from "./api/createRequest";

export default class TicketService {
    list(callback) {
      createRequest({
        method: "GET",
        info: {method: "allTickets"},
        callback: callback,
      });
    }
    
    get(id, callback) {
      createRequest({
        method: "GET",
        info: {method: "ticketById", id: id},
        callback: callback,
      });
    }
  
    create(data, callback) {
      createRequest({
        method: "POST",
        info: {method: "createTicket"},
        data: data,
        callback: callback,
      });
    }
  
    update(id, data, callback) {
      createRequest({
        method: "POST",
        info: {method: "updateById", id: id},
        data: data,
        callback: callback,
      });
    }
  
    delete(id, callback) {
      createRequest({
        method: "GET",
        info: {method: "deleteById", id: id},
        callback: callback,
      });
    }
  }