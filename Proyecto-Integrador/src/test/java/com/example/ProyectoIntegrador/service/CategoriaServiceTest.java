package com.example.ProyectoIntegrador.service;

import com.example.ProyectoIntegrador.DTO.CategoriaDTO;
import com.example.ProyectoIntegrador.exceptions.BadRequestException;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
class CategoriaServiceTest {

    @Autowired
    CategoriaService categoriaService;

    CategoriaDTO categoriaDTO = new CategoriaDTO();
    CategoriaDTO otraCategoriaDTO = new CategoriaDTO();


    @Test

    public void test1() throws BadRequestException {
        //crear y listar categorias

        try {
            categoriaDTO.setTitulo("deportivo");
            categoriaDTO.setDescripcion("descapotable negro");
            categoriaDTO.setUrl_imagen("una url");

            categoriaService.agregar(categoriaDTO);

            List<CategoriaDTO> categoriaDTOList = categoriaService.listarTodas();
            assertTrue(categoriaDTOList.size() > 0);

        } catch (BadRequestException e) {
            e.printStackTrace();
        }
    }

    @Test

    public void test2() throws BadRequestException {
        //editar y buscar categoria por id

        try {
            otraCategoriaDTO.setTitulo("ya no es deportivo");
            otraCategoriaDTO.setDescripcion("ya no es descapotable negro");
            otraCategoriaDTO.setUrl_imagen("ahora es otra una url");

            categoriaService.editar(otraCategoriaDTO, 1L);
            CategoriaDTO categoriaEncontradaDTO = categoriaService.buscar(1L);

            assertEquals(otraCategoriaDTO.getTitulo(), categoriaEncontradaDTO.getTitulo());

        } catch (BadRequestException e) {
            e.printStackTrace();
        }
    }

    @Test

    public void test3() throws BadRequestException{
        //eliminar categoria

        try {
            categoriaService.eliminar(1L);

            CategoriaDTO categoriaEncontradaDTO = categoriaService.buscar(1L);
            assertEquals(categoriaEncontradaDTO, null);

        }catch(Exception e) {
            e.printStackTrace();
        }
    }

}