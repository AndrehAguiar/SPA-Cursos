package com.alunos.backend.controller;

import com.alunos.backend.dto.AlunoDTO;
import com.alunos.backend.service.AlunoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/aluno")
@RequiredArgsConstructor
public class AlunoController {

    private final AlunoService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<AlunoDTO> getAluno(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.getAluno(id));
    }

    @GetMapping("/")
    public ResponseEntity<Page<AlunoDTO>> getAlunos() {
        return ResponseEntity.ok().body(service.getAlunos());
    }

    @PostMapping("/")
    public ResponseEntity<AlunoDTO> createAluno(@Valid @RequestBody AlunoDTO alunoDTO) {
        return ResponseEntity.ok().body(service.createAluno(alunoDTO));
    }

    @PutMapping("/")
    public ResponseEntity<AlunoDTO> updateAluno(@Valid @RequestBody AlunoDTO alunoDTO) {
        return ResponseEntity.ok().body(service.updateAluno(alunoDTO));
    }
}
