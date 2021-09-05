package com.alunos.backend.mapper;

import com.alunos.backend.dto.TeacherDTO;
import com.alunos.backend.entity.Teacher;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TeacherMapper {

    TeacherMapper INSTANCE = Mappers.getMapper(TeacherMapper.class);

    Teacher toEntity(TeacherDTO teacherDTO);

    TeacherDTO toDTO(Teacher teacher);

}
