package com.madhu.pro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.madhu.pro.entity.Event;

public interface EventRepo extends JpaRepository<Event, Integer> {

}
