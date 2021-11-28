package com.example.ProyectoIntegrador.DTO;

import com.example.ProyectoIntegrador.model.Producto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImagenDTO {

    private String titulo;
    private String urlImagen;
    private Producto producto;

}
