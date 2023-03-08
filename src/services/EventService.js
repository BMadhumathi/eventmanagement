import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/events";

class EventService {

    getEvent(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEvent(booking){
        return axios.post(EMPLOYEE_API_BASE_URL, booking);
    }

    getEventById(bookingId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + bookingId);
    }

    updateBooking(booking){
        return axios.put(EMPLOYEE_API_BASE_URL , booking);
    }

    deleteEvent(bookingId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + bookingId);
    }
}

export default new EventService()