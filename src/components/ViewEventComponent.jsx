import React, { Component } from 'react'
import EventService from '../services/EventService'


class ViewEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            booking: {}
        }
    }

    componentDidMount(){
        EventService.getEventById(this.state.id).then( res => {
            this.setState({booking: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Event Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Name: </label>
                            <div> { this.state.booking.name }</div>
                        </div>
                        <div className = "row">
                            <label> eventName: </label>
                            <div> { this.state.booking.eventName }</div>
                        </div>
                        <div className = "row">
                            <label> Duration: </label>
                            <div> { this.state.booking.duration }</div>
                        </div>
                        <div className = "row">
                            <label> Date: </label>
                            <div> { this.state.booking.date }</div>
                        </div>
                        <div className = "row">
                            <label> starttime: </label>
                            <div> { this.state.booking.starttime }</div>
                        </div>
                        <div className = "row">
                            <label> place: </label>
                            <div> { this.state.booking.place }</div>
                        </div>
                        <div className = "row">
                            <label>Contact: </label>
                            <div> { this.state.booking.contact }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEventComponent
