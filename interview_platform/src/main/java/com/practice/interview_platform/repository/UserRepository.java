package com.practice.interview_platform.repository;

import com.practice.interview_platform.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}