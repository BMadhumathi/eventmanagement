import React, { Component } from 'react'
import EventService from '../services/EventService';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UpdateEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // bookingId: this.props.match.params.bookingId,
            name: '',
            eventName: '',
            date: '',
            duration:'',
            starttime:'',
            contact:'',
            place:''
           
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEventNameHandler = this.changeEventNameHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeDurationHandler = this.changeDurationHandler.bind(this);
        this.changeStarttimeHandler = this.changeStarttimeHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changePlaceHandler = this.changePlaceHandler.bind(this);

        this.updateBooking=this.updateBooking.bind(this);

    }

    componentDidMount(){

            EventService.getEventById(this.state.bookingId).then( (res) =>{
                let booking = res.data;
                this.setState({name: booking.name,
                    eventName: booking.eventName,
                    date : booking.date,
                    duration:booking.duration,
                    starttime:booking.starttime,
                    contact:booking.contact,
                    place:booking.place
                });
            });
        }        
    

    updateBooking = (e) => {
        e.preventDefault();
        let booking = {bookingId:1,name: this.state.name, eventName: this.state.eventName, date: this.state.date,duration:this.state.duration,starttime:this.state.starttime,contact:this.state.contact,place:this.state.place}
        console.log('booking => ' + JSON.stringify(booking));
        //console.log('bookingId => ' + JSON.stringify(this.state.bookingId));
        EventService.updateBooking(booking).then( res => {
            this.props.history.push('/');
        });
        axios.put('http://localhost:8080',booking);
        alert("updated");
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEventNameHandler= (event) => {
        this.setState({eventName: event.target.value});
    }
    
    changeDurationHandler=(event)=>{
        this.setState({duration:event.target.value});
    }
    changeDateHandler=(event)=>{
        this.setState({date:event.target.value});
    }
    changeContactHandler=(event)=>{
        this.setState({contact:event.target.value});
    }
    changeStarttimeHandler=(event)=>{
        this.setState({starttime:event.target.value});
    }
    changePlaceHandler=(event)=>{
        this.setState({place:event.target.value});
    }

    cancel(){
        this.props.history.push('/events');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Event</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                    <label> Name: </label>
                                    <input placeholder="Name" name="Name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> EventName: </label>
                                    <input placeholder="EventName" name="EventName" className="form-control" 
                                        value={this.state.eventName} onChange={this.changeEventNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Date: </label>
                                    <input placeholder="date" name="date" className="form-control" 
                                        value={this.state.date} onChange={this.changeDateHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Duration: </label>
                                    <input placeholder="duration" name="duration" className="form-control" 
                                        value={this.state.duration} onChange={this.changeDurationHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Contact: </label>
                                    <input placeholder="contact" name="contact" className="form-control" 
                                        value={this.state.contact} onChange={this.changeContactHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> starttime: </label>
                                    <input placeholder="starttime" name="starttime" className="form-control" 
                                        value={this.state.starttime} onChange={this.changeStarttimeHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Place: </label>
                                    <input placeholder="place" name="place" className="form-control" 
                                        value={this.state.place} onChange={this.changePlaceHandler}/>
                                </div>


                                        <button className="btn btn-success" onClick={this.updateBooking}><Link to={'/'}>Save</Link></button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEventComponent
