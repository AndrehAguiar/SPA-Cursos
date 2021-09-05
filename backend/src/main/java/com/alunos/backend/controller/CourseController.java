package com.alunos.backend.controller;

import com.alunos.backend.dto.CourseDTO;
import com.alunos.backend.service.CourseService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/course")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService service;

    @GetMapping("/{id}")
    public ResponseEntity<CourseDTO> getCourse(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.getCourse(id));
    }

    @GetMapping("/")
    public ResponseEntity<Page<CourseDTO>> getCourses() {
        return ResponseEntity.ok().body(service.getCourses());
    }

    @PostMapping("/")
    public ResponseEntity<CourseDTO> createCourse(@Valid @RequestBody CourseDTO courseDTO) {
        return ResponseEntity.ok().body(service.createCourse(courseDTO));
    }

    @PutMapping("/")
    public ResponseEntity<CourseDTO> updateCourse(@Valid @RequestBody CourseDTO courseDTO) {
        return ResponseEntity.ok().body(service.updateCourse(courseDTO));
    }
}
