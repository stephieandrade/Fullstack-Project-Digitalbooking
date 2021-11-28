package com.example.ProyectoIntegrador.service;

import com.example.ProyectoIntegrador.DTO.CategoriaDTO;
import com.example.ProyectoIntegrador.DTO.CiudadDTO;
import com.example.ProyectoIntegrador.DTO.ProductoDTO;
import com.example.ProyectoIntegrador.model.Categoria;
import com.example.ProyectoIntegrador.model.Ciudad;
import com.example.ProyectoIntegrador.model.Imagen;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.FixMethodOrder;
import org.apache.log4j.Logger;

import org.junit.jupiter.api.Test;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
//@RunWith(SpringRunner.class)
@SpringBootTest
public class ImagenServiceTest {



    final static Logger logger = Logger.getLogger(ImagenService.class);

    @Autowired
    ImagenService imagenService;

    @Autowired
    private ObjectMapper mapper;

   /**Agregar tests cuando sea necesario**/

    


}
