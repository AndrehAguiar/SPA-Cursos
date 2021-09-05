package com.alunos.backend.service;

import com.alunos.backend.dto.CourseDTO;
import com.alunos.backend.dto.TeacherDTO;
import com.alunos.backend.mapper.CourseMapper;
import com.alunos.backend.mapper.TeacherMapper;
import com.alunos.backend.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeacherService {

    private final TeacherRepository repository;
    private final TeacherMapper mapper = TeacherMapper.INSTANCE;

    @Transactional(readOnly = true)
    public TeacherDTO getTeacher(Long id) {
        return mapper.toDTO(repository.getById(id));
    }

    @Transactional(readOnly = true)
    public Page<TeacherDTO> getTeachers() {
        return new PageImpl<>(repository.findAll().stream().map(mapper::toDTO).collect(Collectors.toList()));
    }

    @Transactional
    public TeacherDTO createTeacher(TeacherDTO teacherDTO) {
        return mapper.toDTO(repository.save(mapper.toEntity(teacherDTO)));
    }

    @Transactional
    public TeacherDTO updateTeacher(TeacherDTO teacherDTO) {
        return mapper.toDTO(repository.save(mapper.toEntity(teacherDTO)));
    }
}
