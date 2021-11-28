package com.example.ProyectoIntegrador.DTO;

import com.example.ProyectoIntegrador.model.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductoDTO {

    private Long productos_id;
    private String nombre;
    private String descripcion;

    private Categoria categoria;
    private Ciudad ciudad;

    private List<Puntuacion> puntuaciones;
    private List<Imagen> listadeimagenes;
    private List<Reserva> listadereservas;

    public ProductoDTO(Producto producto) {
    }
}

