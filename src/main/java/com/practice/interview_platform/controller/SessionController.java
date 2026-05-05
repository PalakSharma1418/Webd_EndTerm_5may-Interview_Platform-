package com.practice.interview_platform.controller;

import com.practice.interview_platform.model.Session;
import com.practice.interview_platform.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/session")
public class SessionController {

    @Autowired
    private SessionRepository sessionRepository;

    @PostMapping("/book")
    public Session bookSession(@RequestBody Session session) {
        session.setStatus("BOOKED");
        return sessionRepository.save(session);
    }
}