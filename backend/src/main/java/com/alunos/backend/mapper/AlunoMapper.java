package com.alunos.backend.mapper;

import com.alunos.backend.dto.AlunoDTO;
import com.alunos.backend.entity.Aluno;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AlunoMapper {

    AlunoMapper INSTANCE = Mappers.getMapper(AlunoMapper.class);

    Aluno toEntity(AlunoDTO alunoDTO);

    AlunoDTO toDTO(Aluno aluno);

}
