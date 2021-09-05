package com.alunos.backend.dto;

import com.alunos.backend.entity.Course;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class AlunoDTO {
    private Long id;
    private String name;
    private String email;
    private Integer age;
    private List<CourseDTO> courses = new ArrayList<>();
}
