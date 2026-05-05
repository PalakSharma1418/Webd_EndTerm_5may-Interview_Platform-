package com.practice.interview_platform.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String skills;
    private int experience;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}