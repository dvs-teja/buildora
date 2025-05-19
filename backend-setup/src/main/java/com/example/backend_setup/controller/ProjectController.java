package com.example.backend_setup.controller;

import com.example.backend_setup.model.Project;
import com.example.backend_setup.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173") // Allow your frontend origin

public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping(consumes = "application/json")
    public Project addProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Integer id) {
        projectRepository.deleteById(id);
    }
}
