package com.alunos.backend.mapper;

import com.alunos.backend.dto.CourseDTO;
import com.alunos.backend.entity.Course;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CourseMapper {

    CourseMapper INSTANCE = Mappers.getMapper(CourseMapper.class);

    Course toEntity(CourseDTO courseDTO);

    CourseDTO toDTO(Course course);
}
