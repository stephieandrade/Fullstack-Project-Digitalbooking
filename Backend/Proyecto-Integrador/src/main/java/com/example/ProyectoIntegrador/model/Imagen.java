package com.example.ProyectoIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "imagenes")
public class Imagen{

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "imagenes_id")
    private Long imagenes_id;

    @Getter @Setter
    @Column(length = 100, nullable = false)
    private String titulo;

    @Getter @Setter
    @Column(length = 300, nullable = false)
    private String urlImagen;

    @Getter @Setter
    @ManyToOne(optional = false)
    @JoinColumn(name = "productos_id")
    @JsonIgnore
    private Producto producto;


    public Imagen() {
    }

    public Imagen(String titulo, String urlImagen) {
        this.titulo = titulo;
        this.urlImagen = urlImagen;
    }

    @Override
    public String toString() {
        return "Imagen{" +
                "id=" + imagenes_id +

                ", titulo='" + titulo + '\'' +
                ", urlImagen='" + urlImagen + '\'' +
                '}';
    }
}
