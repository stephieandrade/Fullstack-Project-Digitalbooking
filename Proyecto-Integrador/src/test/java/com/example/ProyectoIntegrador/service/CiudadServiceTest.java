package com.example.ProyectoIntegrador.service;

import com.example.ProyectoIntegrador.DTO.CiudadDTO;
import com.example.ProyectoIntegrador.exceptions.BadRequestException;
import com.example.ProyectoIntegrador.model.Ciudad;
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
class CiudadServiceTest {

    @Autowired
    CiudadService ciudadService;

    CiudadDTO ciudadDTO = new CiudadDTO();
    CiudadDTO ciudadDTO2 = new CiudadDTO();

    @Test
    public void test1() throws BadRequestException {
        //test método agregar y buscar por id

        ciudadDTO.setNombre("rosario");
        ciudadDTO.setNombre_pais("arg");

        try {
            CiudadDTO ciudadAgregada = ciudadService.agregar(ciudadDTO);
            assertNotNull(ciudadAgregada);

            CiudadDTO ciudadEncontrada = ciudadService.buscar(ciudadDTO.getCiudades_id());
            assertNotNull(ciudadEncontrada);

        } catch (BadRequestException e) {
            e.printStackTrace();
        }

    }

    @Test
    public void test2(){
        //test método listar ciudades

        List<CiudadDTO> ciudades = ciudadService.listarTodas();
        assertTrue(ciudades.size() >0);
    }

    @Test
    public void test3() throws BadRequestException {
        //test método editar ciudad

        ciudadDTO2.setCiudades_id(1L);
        ciudadDTO2.setNombre("nuevo nombre de ciudad con id 1");
        ciudadDTO2.setNombre_pais("nuevo nombre de pais a la ciudad con id 1");

        try {
            CiudadDTO ciudadActualizada = ciudadService.editarSinId(ciudadDTO2);
            assertEquals(ciudadActualizada.getNombre(), ciudadDTO2.getNombre());

        } catch (Exception e) {
            e.printStackTrace();
        }


    }

    @Test
    public void test4() throws BadRequestException{
        //test método eliminar ciudad
        try {
            assertTrue(ciudadService.eliminar(1L));
        } catch (BadRequestException e) {
            e.printStackTrace();
        }

    }


}