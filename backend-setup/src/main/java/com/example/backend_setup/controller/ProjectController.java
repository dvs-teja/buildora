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

    @PostMapping(consumes = { "multipart/form-data" })
    public Project addProject(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("techStack") String techStack,
            @RequestParam("features") String features,
            @RequestParam("price") Double price,
            @RequestParam("coverImage") String coverImage,
            @RequestParam("whatIncluded") String whatIncluded,
            @RequestParam("demoLink") String demoLink,
            @RequestParam("category") String category,
            @RequestParam("level") String level,
            @RequestParam("license") String license,
            @RequestParam("setupTime") String setupTime,
            @RequestParam("videoDemo") String videoDemo,
            @RequestParam("sellerNotes") String sellerNotes,
            @RequestParam(value = "screenshot", required = false) MultipartFile screenshot) throws Exception {
        Project project = new Project();
        project.setTitle(title);
        project.setDescription(description);
        project.setTechStack(techStack);
        project.setFeatures(features);
        project.setPrice(price);
        project.setCoverImage(coverImage);
        project.setWhatIncluded(whatIncluded);
        project.setDemoLink(demoLink);
        project.setCategory(category);
        project.setLevel(level);
        project.setLicense(license);
        project.setSetupTime(setupTime);
        project.setVideoDemo(videoDemo);
        project.setSellerNotes(sellerNotes);

        if (screenshot != null && !screenshot.isEmpty()) {
            String uploadDir = "uploads/";
            Files.createDirectories(Paths.get(uploadDir));
            String fileName = System.currentTimeMillis() + "_" + screenshot.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            Files.copy(screenshot.getInputStream(), filePath);
            project.setScreenshots(fileName); // Save file name or path in DB
        }

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
