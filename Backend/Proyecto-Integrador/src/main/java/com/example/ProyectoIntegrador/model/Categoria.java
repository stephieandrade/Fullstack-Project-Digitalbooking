package com.example.ProyectoIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long categorias_id;

    @Getter @Setter
    @Column(length = 50, nullable = false, unique = true)
    private String titulo;

    @Getter @Setter
    @Column(nullable = false)
    private String descripcion;

    @Getter @Setter
    private String url_imagen;

    @JsonIgnore //para que no entre en un bucle infinito
    @OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)//el valor de mappedBy es el nombre del atributo de mapeo de asociación puesto en el lado propietario
    private Set<Producto> productos;  //bidireccional

    public Categoria(){

    }

    public Categoria(String titulo, String descripcion, String url_imagen) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
    }
}
