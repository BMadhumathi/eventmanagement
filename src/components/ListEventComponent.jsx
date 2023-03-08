import React, { Component } from 'react'
import EventService from '../services/EventService';
import { Link } from 'react-router-dom';
class ListEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                events: []
        }
        this.addBooking = this.addBooking.bind(this);
        this.editBooking = this.editBooking.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
    }

    deleteBooking(bookingId){
        EventService.deleteEvent(bookingId).then( res => {
            this.setState({events: this.state.events.filter(booking => booking.bookingId !== bookingId)});
        });
    }
    viewBooking(bookingId){
        this.props.history.push(`/view-event/${bookingId}`);
    }
    editBooking(bookingId){
        this.props.history.push(`/add-event/${bookingId}`);
    }

    componentDidMount(){
        EventService.getEvent().then((res) => {
            this.setState({ events: res.data});
        });
    }

    addBooking(){
        this.props.history.push('/add-event/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Events List</h2>
                 <div className = "row">
                 <button> <Link to="/add_event">Add Event</Link></button> 
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Customer Name</th>
                                    <th> Event Name</th>
                                    <th> Duration</th>
                                    <th> Date</th>
                                    <th>Contact</th>
                                    <th>Starttime</th>
                                    <th> Place</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.events.map(
                                        booking => 
                                        <tr key = {booking.id}>
                                             <td> { booking.name} </td>   
                                             <td> { booking.eventName}</td>
                                             <td> { booking.duration}</td>
                                             <td> { booking.date}</td>
                                             <td> { booking.contact}</td>
                                             <td> { booking.starttime}</td>
                                             <td> { booking.place}</td>
                                             
                                             <td>
                                             <button> <Link to="/updateee">Update</Link></button> 
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBooking(booking.bookingId)} className="btn btn-danger">Delete </button>
                                             </td>
                                             </tr>
                                             //<button style={{marginLeft: "10px"}} onClick={ () => this.viewBooking(booking.bookingId)} className="btn btn-info">View </button>
                                             //<button onClick={ () => this.editBooking(booking.id)} className="btn btn-info">Update </button>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
} 

export default ListEventComponent
