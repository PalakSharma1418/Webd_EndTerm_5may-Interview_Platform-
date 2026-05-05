package com.practice.interview_platform.controller;

import com.practice.interview_platform.model.Profile;
import com.practice.interview_platform.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/match")
public class MatchingController {

    @Autowired
    private MatchingService matchingService;

    @GetMapping
    public List<Profile> match(@RequestParam String skill) {
        return matchingService.findMatchingInterviewers(skill);
    }
}