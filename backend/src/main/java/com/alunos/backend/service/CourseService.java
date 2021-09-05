package com.alunos.backend.service;

import com.alunos.backend.dto.CourseDTO;
import com.alunos.backend.mapper.CourseMapper;
import com.alunos.backend.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository repository;
    private final CourseMapper mapper = CourseMapper.INSTANCE;

    @Transactional(readOnly = true)
    public CourseDTO getCourse(Long id) {
        return mapper.toDTO(repository.getById(id));
    }

    @Transactional(readOnly = true)
    public Page<CourseDTO> getCourses() {
        return new PageImpl<>(repository.findAll().stream().map(mapper::toDTO).collect(Collectors.toList()));
    }

    @Transactional
    public CourseDTO createCourse(CourseDTO courseDTO) {
        return mapper.toDTO(repository.save(mapper.toEntity(courseDTO)));
    }

    @Transactional
    public CourseDTO updateCourse(CourseDTO courseDTO) {
        return mapper.toDTO(repository.save(mapper.toEntity(courseDTO)));
    }
}
