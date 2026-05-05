package com.practice.interview_platform.repository;

import com.practice.interview_platform.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
}