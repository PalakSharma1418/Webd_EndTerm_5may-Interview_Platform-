package com.practice.interview_platform.repository;

import com.practice.interview_platform.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session, Long> {
}