package com.alunos.backend.dto;

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
public class CourseDTO {
    private Long id;
    private String name;
    private Integer duration;
    private List<TeacherDTO> teachers = new ArrayList<>();
}
