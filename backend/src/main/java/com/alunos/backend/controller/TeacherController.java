package com.alunos.backend.controller;

import com.alunos.backend.dto.TeacherDTO;
import com.alunos.backend.service.TeacherService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/teacher")
public class TeacherController {

    private final TeacherService service;

    @GetMapping("/{id}")
    public ResponseEntity<TeacherDTO> getTeacher(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.getTeacher(id));
    }

    @GetMapping("/")
    public ResponseEntity<Page<TeacherDTO>> getTeachers() {
        return ResponseEntity.ok().body(service.getTeachers());
    }

    @PostMapping("/")
    public ResponseEntity<TeacherDTO> createTeacher(@Valid @RequestBody TeacherDTO teacherDTO) {
        return ResponseEntity.ok().body(service.createTeacher(teacherDTO));
    }

    @PutMapping("/")
    public ResponseEntity<TeacherDTO> updateTeacher(@Valid @RequestBody TeacherDTO teacherDTO) {
        return ResponseEntity.ok().body(service.updateTeacher(teacherDTO));
    }
}
