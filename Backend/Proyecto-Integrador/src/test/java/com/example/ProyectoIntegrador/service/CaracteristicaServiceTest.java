package com.example.ProyectoIntegrador.service;

import com.example.ProyectoIntegrador.DTO.CaracteristicaDTO;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class CaracteristicaServiceTest {

    @Autowired
    private CaracteristicaService caracteristicaService;


    CaracteristicaDTO caracteristicaDTO = new CaracteristicaDTO();

    @Test
    public void NuevaPuntuacion(){
        try {
            caracteristicaDTO.setNombre("Wifi");
            caracteristicaDTO.setIcono("fa-solid fa-wifi");
            CaracteristicaDTO caracteristicaNueva= caracteristicaService.agregar(caracteristicaDTO);
            assertEquals(caracteristicaDTO.getNombre(), caracteristicaNueva.getNombre());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void eliminar(){
        try {
            caracteristicaService.eliminar(1L);

            CaracteristicaDTO caracteristicaEncontradaDTO = caracteristicaService.buscar(1L);
            assertEquals(caracteristicaEncontradaDTO, null);

        }catch(Exception e) {
            e.printStackTrace();
        }
    }
}
