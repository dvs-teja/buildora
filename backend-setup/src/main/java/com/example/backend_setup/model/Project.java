package com.example.backend_setup.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "projects")
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String techStack;

    @Column(columnDefinition = "TEXT")
    private String features;

    private Double price;

    private String coverImage;

    @Column(columnDefinition = "TEXT")
    private String whatIncluded;

    private String demoLink;

    @Column(columnDefinition = "TEXT")
    private String screenshots; // Store file name or path

    private String category;
    private String level;
    private String license;
    private String setupTime;
    private String videoDemo;

    @Column(columnDefinition = "TEXT")
    private String sellerNotes;
}