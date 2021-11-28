package com.example.ProyectoIntegrador.DTO;

import com.example.ProyectoIntegrador.model.Producto;
import com.example.ProyectoIntegrador.model.Usuario;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservaDTO {
    private Long reservas_id;

    private Double horaDeReserva;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;

    private Long productosId;
    private Long usuarios_id;

}
