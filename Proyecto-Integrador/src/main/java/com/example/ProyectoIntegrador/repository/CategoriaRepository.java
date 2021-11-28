package com.example.ProyectoIntegrador.repository;

import com.example.ProyectoIntegrador.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    @Query(value = "SELECT * FROM categorias where categorias_id = :id", nativeQuery = true)
    Categoria findCategoryById(@Param("id") Long id);

}
