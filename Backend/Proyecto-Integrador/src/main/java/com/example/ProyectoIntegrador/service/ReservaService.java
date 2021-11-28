package com.example.ProyectoIntegrador.service;

import com.example.ProyectoIntegrador.DTO.ProductoDTO;
import com.example.ProyectoIntegrador.DTO.ReservaDTO;
import com.example.ProyectoIntegrador.exceptions.BadRequestException;
import com.example.ProyectoIntegrador.model.Producto;
import com.example.ProyectoIntegrador.model.Reserva;
import com.example.ProyectoIntegrador.repository.ReservaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaService implements IGenericaService<ReservaDTO, Long> {

    final static Logger logger = Logger.getLogger(ReservaService.class);

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private ObjectMapper mapper;

    /**no pidieron esto todavia**/
    @Override
    public ReservaDTO buscar(Long id) throws BadRequestException {
        Optional<Reserva> reservaEncontrada= reservaRepository.findById(id);
        logger.info("Reserva encontrada");
        ReservaDTO reservaEncontradaDTO= mapper.convertValue(reservaEncontrada,ReservaDTO.class);
        if(reservaEncontradaDTO == null){
            throw new BadRequestException("No existe reserva con ese id");
        } else{
            return reservaEncontradaDTO;
        }
    }
    /****/

    @Override
    public ReservaDTO agregar(ReservaDTO reservaDTO) throws BadRequestException {
        if(reservaDTO == null){
            logger.error("La reserva ingresada no existe");
            throw new BadRequestException("La reserva ingresada no existe");
        }
        else{
            Reserva reservaNueva = mapper.convertValue(reservaDTO, Reserva.class);
            logger.info("Se agregó una nueva reserva al sistema "+ reservaNueva);
            reservaRepository.save(reservaNueva);
            return mapper.convertValue(reservaNueva, ReservaDTO.class);
        }
    }


    // Consultar reservas por id de producto.
    public List<ReservaDTO> buscarReservaPorIdProducto(Long id) throws BadRequestException {
        List<ReservaDTO> reservaDTOList = new ArrayList<>();
        List<Reserva> reservaEncontradas = reservaRepository.findByProductosId(id);
        if(reservaEncontradas.isEmpty()){
            logger.error("no existe producto reservado con ese id");
            throw new BadRequestException("no existe producto reservado con ese id");
        }
        for (Reserva reserva : reservaEncontradas) {
            ReservaDTO reservaDTO = mapper.convertValue(reserva, ReservaDTO .class);
            reservaDTOList.add(reservaDTO);
        }
        return reservaDTOList;
    }

    @Override
    public List<ReservaDTO> listarTodas() {
        List<ReservaDTO> reservaDTOList = new ArrayList<>();
        List<Reserva> reservaList = reservaRepository.findAll();
        for (Reserva reserva : reservaList) {

            ReservaDTO reservaDTO = mapper.convertValue(reserva, ReservaDTO.class);
            reservaDTOList.add(reservaDTO);
        }
        logger.info("Devolviendo el listado de reservas existentes");
        return reservaDTOList;
    }

    @Override
    public ReservaDTO editar(ReservaDTO reservaDTO, Long aLong) throws BadRequestException {
        return null;
    }

    @Override
    public Boolean eliminar(Long aLong) throws BadRequestException {
        return null;
    }
}
