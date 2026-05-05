package com.practice.interview_platform.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "feedbacks")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating;
    private String comments;
    private String strengths;
    private String improvements;

    @OneToOne
    @JoinColumn(name = "session_id")
    private Session session;
}