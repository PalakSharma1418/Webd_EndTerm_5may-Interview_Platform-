package com.practice.interview_platform.service;

import com.practice.interview_platform.model.Profile;
import com.practice.interview_platform.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchingService {

    @Autowired
    private ProfileRepository profileRepository;

    public List<Profile> findMatchingInterviewers(String skill) {
        return profileRepository.findAll()
                .stream()
                .filter(p -> p.getSkills() != null &&
                        p.getSkills().toLowerCase().contains(skill.toLowerCase()))
                .toList();
    }
}