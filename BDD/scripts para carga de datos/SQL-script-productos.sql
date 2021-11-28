 -- productos
INSERT INTO productos (nombre, descripcion, categorias_id, ciudades_id)
    VALUES ("Audi Q5", "descripcion producto Rosario - Deportivo",  
           (SELECT categorias_id FROM categorias WHERE titulo ="Deportivo"),
           (SELECT ciudades_id FROM ciudades WHERE nombre ='Rosario')
);
INSERT INTO productos (nombre, descripcion, categorias_id, ciudades_id)
    VALUES ("Audi Q7", "descripcion producto Cordoba - Deportivo",  
           (SELECT categorias_id FROM categorias WHERE titulo ="Deportivo"),
           (SELECT ciudades_id FROM ciudades WHERE nombre ='Cordoba')
);
INSERT INTO productos (nombre, descripcion, categorias_id, ciudades_id)
    VALUES ("Bmwl3", "descripcion producto Buenos Aires - Lujoso",  
           (SELECT categorias_id FROM categorias WHERE titulo ="Lujoso"),
           (SELECT ciudades_id FROM ciudades WHERE nombre ='Buenos Aires')
);
INSERT INTO productos (nombre, descripcion, categorias_id, ciudades_id)
    VALUES ("Kia Sportage", "descripcion producto Bariloche - Lujoso",  
           (SELECT categorias_id FROM categorias WHERE titulo ="Lujoso"),
           (SELECT ciudades_id FROM ciudades WHERE nombre ='Bariloche')
);
INSERT INTO productos (nombre, descripcion, categorias_id, ciudades_id)
    VALUES ("Mazda Cx 30", "descripcion producto Cordoba - Economico",  
           (SELECT categorias_id FROM categorias WHERE titulo ="Economico"),
           (SELECT ciudades_id FROM ciudades WHERE nombre ='Cordoba')
);
INSERT INTO productos (nombre, descripcion, categorias_id, ciudades_id)
    VALUES ("Nissan March", "descripcion producto Buenos Aires - Economico",  
           (SELECT categorias_id FROM categorias WHERE titulo ="Economico"),
           (SELECT ciudades_id FROM ciudades WHERE nombre ='Buenos Aires')
);
INSERT INTO productos (nombre, descripcion, categorias_id, ciudades_id)
    VALUES ("Renault Logan", "descripcion producto Rosario - Electrico",  
           (SELECT categorias_id FROM categorias WHERE titulo ="Electrico"),
           (SELECT ciudades_id FROM ciudades WHERE nombre ='Rosario')
);
INSERT INTO productos (nombre, descripcion, categorias_id, ciudades_id)
    VALUES ("Spark GT", "descripcion producto Bariloche - Electrico",  
           (SELECT categorias_id FROM categorias WHERE titulo ="Electrico"),
           (SELECT ciudades_id FROM ciudades WHERE nombre ='Bariloche')
);

select * from productos;