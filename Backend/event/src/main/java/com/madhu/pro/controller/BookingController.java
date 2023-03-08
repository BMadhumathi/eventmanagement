package com.madhu.pro.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.madhu.pro.entity.Event;
import com.madhu.pro.service.BookingService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
//@RequestMapping("/")
public class BookingController {
@Autowired
private BookingService service;

@PostMapping("/events")
public String create(@RequestBody Event booking) {
return service.add(booking);
}

@GetMapping("/events")
public List<Event> getall(){
return service.get();
}

@GetMapping("/products/{productId}")

public Optional<Event> getById(@PathVariable("bookingId") int bookingId){

return service.getaDetail(bookingId);
}
@PutMapping("/events")
public String updateDet(@RequestBody Event booking){
 service.updateDetails(booking);
 return "valueupdated";
}
@DeleteMapping("/events/{bookingId}")
public String deleteInfo(@PathVariable("bookingId") int bookingId)
{
	service.deleteDetails(bookingId);
return "Deleted details";

}


}



