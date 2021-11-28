package com.example.ProyectoIntegrador.service;

import com.example.ProyectoIntegrador.model.Imagen;

import com.example.ProyectoIntegrador.repository.ImagenRepository;
import com.example.ProyectoIntegrador.repository.ProductoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ImagenService implements IGenericaService<Imagen, Long>{


    final static Logger logger = Logger.getLogger(ImagenService.class);

    @Autowired
    private ImagenRepository imagenRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public Imagen buscar(Long aLong) {
        return null;
    }

    //todo MULTIPART
    //agregar imagenes como ADMINISTRADOR
    //https://www.youtube.com/watch?v=-Xf_fbKQit8
    @Override
    public Imagen agregar(Imagen Imagen) {
      /*  if(Imagen == null || Imagen.getTitulo() == null){
            logger.error("Los datos ingresados son nulos");
        }
        else{

            Imagen imagenNuevo = mapper.convertValue(Imagen, Imagen.class);
            imagenRepository.save(imagenNuevo);


            logger.info("Se agregó una nueva imagen al sistema");
        }*/
        return null;
    }



    //todo NO CREO QUE SE USE
    @Override
    public List<Imagen> listarTodas() {
        List<Imagen> imagenesList = imagenRepository.findAll();
                logger.info("Devolviendo el listado de imagenes existentes");
        return imagenesList;
    }

    //todo MULTIPART
    //editar imagenes como ADMINISTRADOR
    //https://www.youtube.com/watch?v=-Xf_fbKQit8
    @Override
    public Imagen editar(Imagen Imagen, Long id) {
        /*Optional<Imagen> imagen1 = imagenRepository.findById(id);
        if(imagen1.isPresent()){
            imagen1.get().setTitulo(Imagen.getTitulo());
            imagen1.get().setUrlImagen(Imagen.getUrlImagen());
            imagenRepository.save(imagen1.get());
            logger.info("Se actualizó correctamente la imagen");
            return Imagen;
        }else {
            logger.error("no se pudo encontrar la imagen buscada o no existe");*/
            return null;

    }

    //todo MULTIPART
    //eliminar imagenes como ADMINISTRADOR
    //https://www.youtube.com/watch?v=-Xf_fbKQit8
    @Override
    public Boolean eliminar(Long id) {
        imagenRepository.deleteById(id);
        logger.info("Eliminando una imagen");
        return (this.buscar(id) == null); //si la imagen encontrada fue eliminada es igual a null y devuelve TRUE
    }
}
