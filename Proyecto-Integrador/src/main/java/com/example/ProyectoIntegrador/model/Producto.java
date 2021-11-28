package com.example.ProyectoIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long productos_id;

    @Getter @Setter
    @Column(length = 50, nullable = false)
    private String nombre;

    @Getter @Setter
    @Column(nullable = false)
    private String descripcion;

    @Getter
    @ManyToOne
    @JoinColumn(name = "categorias_id", nullable = false) //tendra una FK con referencia al id de la entidad Ciudad; y una columna llamada ciudades_id
    private Categoria categoria; //nombre del atributo de mapeo

    @Getter
    @ManyToOne
    @JoinColumn(name = "ciudades_id", nullable = false) //significa q tendra una FK con referencia al id de la entidad Ciudad; y una columna llamada ciudad_id
    private Ciudad ciudad; //nombre del atributo de mapeo

    @Getter @Setter
    @ManyToMany
    @JoinTable(name ="productos_has_caracteristicas", joinColumns = @JoinColumn(name = "productos_id"),
            inverseJoinColumns = @JoinColumn(name ="caracteristicas_id"))    //bidireccional
    @JsonIgnore            //sino entra en un bucle infinito
    private List <Caracteristica> caracteristicas;

    @Setter @Getter
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "productos_id")
    private List<Puntuacion> puntuaciones;     //unidireccional

    @Setter @Getter
    @OneToMany(mappedBy="producto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Imagen> listadeimagenes;

    @Setter @Getter
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "productos_id")
    private List<Reserva> listadereservas;

    public Producto(){

    }

    public Producto(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

}
