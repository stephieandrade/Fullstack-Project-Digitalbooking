package com.example.ProyectoIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "ciudades")
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long ciudades_id;

    @Getter @Setter
    @Column(length = 50, nullable = false, unique = true)
    private String nombre;

    @Getter @Setter
    @Column(length = 50, nullable = false)
    private String nombre_pais;

    @JsonIgnore
    @OneToMany(mappedBy = "ciudad", cascade = CascadeType.ALL) //el valor de mappedBy es el nombre del atributo de mapeo de asociación puesto en el lado propietario
    private Set<Producto> productos;

    public Ciudad(){

    }

    public Ciudad(String nombre, String nombre_pais) {
        this.nombre = nombre;
        this.nombre_pais = nombre_pais;
    }

    @Override
    public String toString() {
        return "Ciudad{" +
                "ciudades_id=" + ciudades_id +
                ", nombre='" + nombre + '\'' +
                ", nombre_pais='" + nombre_pais + '\'' +
                '}';
    }
}
