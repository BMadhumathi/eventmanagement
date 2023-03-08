package com.madhu.pro.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name="events")

public class Event {

@Id
@GeneratedValue(strategy=GenerationType.AUTO)

private int bookingId;

private String name;

private String eventName; 

private Date date;

private int duration;

private String starttime;

private long contact;

private String place;




public int getBookingId() {
	return bookingId;
}

public void setBookingId(int bookingId) {
	this.bookingId = bookingId;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getEventName() {
	return eventName;
}

public void setEventName(String eventName) {
	this.eventName = eventName;
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public int getDuration() {
	return duration;
}

public void setDuration(int duration) {
	this.duration = duration;
}



public String getStarttime() {
	return starttime;
}



public void setStarttime(String starttime) {
	this.starttime = starttime;
}



public long getContact() {
	return contact;
}



public void setContact(long contact) {
	this.contact = contact;
}



public String getPlace() {
	return place;
}



public void setPlace(String place) {
	this.place = place;
}



public Event() {
	
}



public Event(int bookingId, String name, String eventName, Date date, int duration, String starttime, long contact,
		String place) {
	super();
	this.bookingId = bookingId;
	this.name = name;
	this.eventName = eventName;
	this.date = date;
	this.duration = duration;
	this.starttime = starttime;
	this.contact = contact;
	this.place = place;
}
}