package com.madhu.pro.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.madhu.pro.entity.Event;
import com.madhu.pro.repository.EventRepo;
@Service
public class BookingService{
@Autowired
private EventRepo er;
	public String add(Event t) {
				er.save(t);
				return "value added";
				
	}
	public List<Event> get() {
		return er.findAll();
	}
	public Event updateDetails(Event booking) {
		 return er.saveAndFlush(booking);
	}

	public void deleteDetails(int bookingId) {

	er.deleteById(bookingId);

	}
public Optional<Event> getaDetail(int bookingId){
		
		return er.findById(bookingId);
	}
	
	
}


