package com.example.ProyectoIntegrador.service;

import com.example.ProyectoIntegrador.DTO.CaracteristicaDTO;
import com.example.ProyectoIntegrador.model.Caracteristica;
import com.example.ProyectoIntegrador.repository.CaracteristicaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaracteristicaService implements IGenericaService<CaracteristicaDTO, Long>{

    final static Logger logger = Logger.getLogger(CaracteristicaService.class);

    @Autowired(required = true)
    private CaracteristicaRepository caracteristicaRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public CaracteristicaDTO buscar(Long id) {
        Caracteristica caracteristicaA = caracteristicaRepository.findById(id).orElse(null);
        logger.info("Caracteristica encontrada");
        return mapper.convertValue(caracteristicaA,CaracteristicaDTO.class);
    }

    @Override
    public CaracteristicaDTO agregar(CaracteristicaDTO caracteristicaDTO) {
        Caracteristica caracteristicaNueva = new Caracteristica();
        caracteristicaNueva.setNombre(caracteristicaDTO.getNombre());
        caracteristicaNueva.setIcono(caracteristicaDTO.getIcono());
        logger.info("Caracteristica agregada");
        return mapper.convertValue(caracteristicaRepository.save(caracteristicaNueva),CaracteristicaDTO.class);
    }

    @Override
    public List<CaracteristicaDTO> listarTodas() {
        List<CaracteristicaDTO> listaCaracteristicas = mapper.convertValue(caracteristicaRepository.findAll(), List.class);
        logger.info("Listado de caracteristicas existentes");
        return listaCaracteristicas;
    }

    @Override
    public CaracteristicaDTO editar(CaracteristicaDTO caracteristicaDTO, Long id) {
        Caracteristica caracteristica= mapper.convertValue(this.buscar(id),Caracteristica.class);
        if (caracteristica!= null){
            caracteristica.setNombre(caracteristicaDTO.getNombre());
            caracteristica.setIcono(caracteristicaDTO.getIcono());
            logger.info("Caracteristica actualizada correctamente");
            return mapper.convertValue(caracteristicaRepository.save(caracteristica),CaracteristicaDTO .class);
        }else{
            logger.error("la caracteristica buscada no existe");
            return null;
        }
    }


    @Override
    public Boolean eliminar(Long id) {
        caracteristicaRepository.deleteById(id);
        logger.info("Eliminando caracteristica");
        return (this.buscar(id)== null);
        }
}
