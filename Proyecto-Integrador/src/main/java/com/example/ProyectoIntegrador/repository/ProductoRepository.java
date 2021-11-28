package com.example.ProyectoIntegrador.repository;

import com.example.ProyectoIntegrador.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    @Query(value = "SELECT p.*FROM productos p inner join ciudades c on c.ciudades_id = p.ciudades_id \n" +
            "WHERE c.ciudades_id like :id", nativeQuery = true)
    List<Producto> findProductsByCity(@Param("id") Long id);

    @Query(value = "SELECT p.* FROM productos p inner join categorias c on c.categorias_id = p.categorias_id \n" +
            "WHERE c.categorias_id like :id", nativeQuery = true)
    List<Producto> findProductsByCategory(@Param("id") Long id);

    @Query(value = "SELECT p.* FROM productos p \n" +
            "   left join reservas r on r.productos_id = p.productos_id  \n" +
            "   WHERE ((:fechaInicial < r.fecha_inicial AND :fechaFinal < r.fecha_inicial  \n" +
            "   OR  :fechaInicial > r.fecha_final AND :fechaFinal > r.fecha_final)" +
            "   OR (r.fecha_inicial is null and r.fecha_final is null))", nativeQuery = true)
    List<Producto> filterProductsByDates(@Param("fechaInicial") LocalDate fechaInicial, @Param("fechaFinal") LocalDate fechaFinal);

    @Query(value = "SELECT p.* FROM productos p \n" +
            "    left join reservas r on r.productos_id = p.productos_id \n" +
            "    inner join ciudades c on c.ciudades_id = p.ciudades_id \n" +
            "    WHERE (p.ciudades_id = :id) \n" +
            "    AND ((:fechaInicial < r.fecha_inicial AND :fechaFinal < r.fecha_inicial \n" +
            "    OR  :fechaInicial > r.fecha_final AND :fechaFinal > r.fecha_final)" +
            "    OR (r.fecha_inicial is null and r.fecha_final is null));", nativeQuery = true)
    List<Producto> filterProductsByCityAndDates(@Param("id") Long id, @Param("fechaInicial") LocalDate fechaInicial, @Param("fechaFinal") LocalDate fechaFinal);

}
