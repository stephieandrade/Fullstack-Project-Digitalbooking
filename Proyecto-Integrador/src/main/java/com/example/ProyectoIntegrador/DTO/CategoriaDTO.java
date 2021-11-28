package com.example.ProyectoIntegrador.DTO;

import com.example.ProyectoIntegrador.model.Categoria;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonIgnoreProperties(ignoreUnknown = true) //ignora cualquier propiedad no reconocida (osea que no este determinada en el DTO) durante la deserialización
@Data //genera getter, setter, es automatico de lombok
@NoArgsConstructor // agrega constructor vacio(que usa hibernate)
@AllArgsConstructor //genera un constructor con todos los atributos (automatico de lombok)
public class CategoriaDTO {

    private Long categorias_id;
    private String titulo;
    private String descripcion;
    private String url_imagen;


    public CategoriaDTO(Categoria categoria) {
    }
}
