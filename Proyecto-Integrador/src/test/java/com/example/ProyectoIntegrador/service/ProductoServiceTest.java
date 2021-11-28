package com.example.ProyectoIntegrador.service;

import com.example.ProyectoIntegrador.DTO.CategoriaDTO;
import com.example.ProyectoIntegrador.DTO.CiudadDTO;
import com.example.ProyectoIntegrador.DTO.ProductoDTO;
import com.example.ProyectoIntegrador.exceptions.BadRequestException;
import com.example.ProyectoIntegrador.model.Categoria;
import com.example.ProyectoIntegrador.model.Ciudad;
import com.example.ProyectoIntegrador.model.Imagen;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
class ProductoServiceTest {

    private static Categoria categoria;
    private static CategoriaService categoriaService;
    private static Ciudad ciudad;
    private static CiudadService ciudadService;
    private static ProductoDTO productoDTO;
    private static ProductoService productoService;
    private static final ObjectMapper mapper = new ObjectMapper();

    ImagenService imagenService;

    ProductoDTO productoDTO2 = new ProductoDTO();
    Imagen imagen1 = new Imagen();

    @BeforeAll
    public static void crear() throws BadRequestException {
        try {
            //creo y agrego categoria
            Categoria categoria = new Categoria();
            CategoriaService categoriaService = new CategoriaService();
            categoria.setTitulo("Lujoso");
            categoria.setDescripcion("Un hotel");
            categoria.setUrl_imagen("urlimagen");
            CategoriaDTO categoriaDTO = mapper.convertValue(categoria, CategoriaDTO.class);

            CategoriaDTO categoriaAgregada = categoriaService.agregar(categoriaDTO);

            //creo y agrego ciudad
            Ciudad ciudad = new Ciudad();
            CiudadService ciudadService = new CiudadService();
            ciudad.setNombre("Mendoza");
            ciudad.setNombre_pais("arg");
            CiudadDTO ciudadDTO = mapper.convertValue(ciudad, CiudadDTO.class);

            CiudadDTO ciudadAgregada = ciudadService.agregar(ciudadDTO);

            //creo y agrego producto
            ProductoDTO productoDTO = new ProductoDTO();
            ProductoService productoService = new ProductoService();
            productoDTO.setNombre("auto lujoso");
            productoDTO.setDescripcion("descripcion auto lujoso");
            Categoria categoria1 = mapper.convertValue(categoriaAgregada, Categoria.class);
            Ciudad ciudad1 = mapper.convertValue(ciudadAgregada, Ciudad.class);
            productoDTO.setCategoria(categoria1);
            productoDTO.setCiudad(ciudad1);
            productoDTO.setListadeimagenes(new ArrayList<>());
            productoDTO.setPuntuaciones(new ArrayList<>());

            productoService.agregar(productoDTO);

        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void test1() {
        //test de que se agregó el producto
        try {
            assertNotNull(productoDTO);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test2() throws BadRequestException {
        //editar y buscar productos por id
        try {
            productoDTO.setNombre("no es un auto lujoso");
            productoDTO.setDescripcion("no es descripcion auto lujoso");

            productoService.editarSinId(productoDTO);
            ProductoDTO productoEditado = productoService.buscar(productoDTO.getProductos_id());

            assertEquals(productoDTO.getNombre(), "no es un auto lujoso");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3() {
        //listar todos los productos
        try {
            List<ProductoDTO> productoDTOList = productoService.listarTodas();
            assertTrue(productoDTOList.size() > 0);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4() throws BadRequestException {
        //listar productos por ciudad
        try {
            List<ProductoDTO> productos = productoService.buscarProductoPorCiudad(ciudad.getCiudades_id());
            assertTrue(productos.size() > 0);

        } catch (BadRequestException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test5() throws BadRequestException {
        //listar productos por categoria
        try {
            List<ProductoDTO> productos = productoService.buscarProductoPorCategoria(categoria.getCategorias_id());
            assertTrue(productos.size() > 0);

        } catch (BadRequestException e) {
            e.printStackTrace();
        }
    }


    @Test
    public void test6(){
        //listarImagenesSegunProducto

        productoDTO2.setNombre("auto");
        productoDTO2.setDescripcion("buenisimo");
        imagen1.setUrlImagen("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
        imagen1.setTitulo("Autazo negro");

        imagenService.agregar(imagen1);
        List<Imagen> listaimagenes = new ArrayList<>();

        listaimagenes.add(imagen1);
        productoDTO.setListadeimagenes(listaimagenes);
        assertTrue(productoDTO.getListadeimagenes().size() > 0);

        /* JSONAssert.assertEquals("{titulo:\"Autazo negro\"}", "Autazo negro", false);
        JSONAssert.assertEquals("{urlImagen:\"https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80\"}", listaimagenes, false);
        */
    }

    @Test
    public void test7() throws BadRequestException {
        //eliminar producto
        try {
            assertTrue(productoService.eliminar(productoDTO.getProductos_id()));
        } catch (BadRequestException e) {
            e.printStackTrace();
        }
    }


}





    

