package com.practice.interview_platform.repository;

import com.practice.interview_platform.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}