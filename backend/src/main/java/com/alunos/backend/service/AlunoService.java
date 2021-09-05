package com.alunos.backend.service;

import com.alunos.backend.dto.AlunoDTO;
import com.alunos.backend.mapper.AlunoMapper;
import com.alunos.backend.repository.AlunoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AlunoService {

    private final AlunoRepository repository;
    private final AlunoMapper mapper = AlunoMapper.INSTANCE;

    @Transactional(readOnly = true)
    public AlunoDTO getAluno(Long id) {
        return mapper.toDTO(repository.getById(id));
    }

    @Transactional(readOnly = true)
    public Page<AlunoDTO> getAlunos(){
        return new PageImpl<>(repository.findAll().stream().map(mapper::toDTO).collect(Collectors.toList()));
    }

    @Transactional
    public AlunoDTO createAluno(AlunoDTO alunoDTO) {
        return mapper.toDTO(repository.save(mapper.toEntity(alunoDTO)));
    }

    @Transactional
    public AlunoDTO updateAluno(AlunoDTO alunoDTO) {
        return mapper.toDTO(repository.save(mapper.toEntity(alunoDTO)));
    }
}
