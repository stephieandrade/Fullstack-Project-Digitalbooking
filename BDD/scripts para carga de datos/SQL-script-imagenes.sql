 -- imagenes principales de cada producto (8)
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q5 - Imagen principal", "https://cdn.pixabay.com/photo/2018/09/22/14/30/wheel-3695434_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q5") -- insertará las imágenes en el producto con nombre Audi Q5
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q7 - Imagen principal", "https://cdn.pixabay.com/photo/2015/11/07/11/52/car-tire-1031579_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q7") -- insertará las imágenes en el producto con nombre Audi Q7
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Bmwl3 - Imagen principal", "https://cdn.pixabay.com/photo/2016/04/06/22/24/auto-1312998_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Bmwl3") -- insertará las imágenes en el producto con nombre Bmwl3
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Kia Sportage - Imagen principal", "https://cdn.pixabay.com/photo/2015/09/09/22/07/car-933704_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Kia Sportage") -- insertará las imágenes en el producto con nombre Kia Sportage
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Mazda Cx 30 - Imagen principal", "https://cdn.pixabay.com/photo/2016/12/16/17/54/bmw-1911913_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Mazda Cx 30") -- insertará las imágenes en el producto con nombre Mazda Cx 30
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Nissan March - Imagen principal", "https://cdn.pixabay.com/photo/2015/12/19/10/32/seat-cushion-1099624_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Nissan March") -- insertará las imágenes en el producto con nombre Nissan March
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Renault Logan - Imagen principal", "https://cdn.pixabay.com/photo/2021/07/01/14/31/car-6379534_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Renault Logan") -- insertará las imágenes en el producto con nombre Renault Logan
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Spark GT - Imagen principal", "https://cdn.pixabay.com/photo/2016/04/06/22/24/auto-1312998_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Spark GT") -- insertará las imágenes en el producto con nombre Spark GT
);


-- AUDI Q5
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q5 - auto completo", "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q5") -- insertará las imágenes en el producto con nombre Audi Q5
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q5 - volante de costado", "https://cdn.pixabay.com/photo/2015/09/09/22/07/car-933704__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q5") -- insertará las imágenes en el producto con nombre Audi Q5
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q5 - rueda trasera", "https://cdn.pixabay.com/photo/2015/11/07/11/52/car-tire-1031579__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q5") -- insertará las imágenes en el producto con nombre Audi Q5
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q5- volante de frente", "https://cdn.pixabay.com/photo/2017/02/24/18/07/audi-a3-2095801__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q5") -- insertará las imágenes en el producto con nombre Audi Q5
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q5 - caja de cambios", "https://cdn.pixabay.com/photo/2016/06/20/22/40/mercedes-benz-1470151__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q5") -- insertará las imágenes en el producto con nombre Audi Q5
);


-- audi q7
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q7 - auto completo", "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q7") -- insertará las imágenes en el producto con nombre Audi Q7
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q7 - parte trasera - ROTA", "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q7") -- insertará las imágenes en el producto con nombre Audi Q7
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q7 - volante", "https://cdn.pixabay.com/photo/2021/01/12/14/46/audi-5911624__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q7") -- insertará las imágenes en el producto con nombre Audi Q7
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q7 - volante y velocimetro", "https://cdn.pixabay.com/photo/2021/01/27/10/28/steering-wheel-5954529__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q7") -- insertará las imágenes en el producto con nombre Audi Q7
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Audi Q7 - logo de audi", "https://cdn.pixabay.com/photo/2020/04/10/08/33/audi-5024616__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Audi Q7") -- insertará las imágenes en el producto con nombre Audi Q7
);


-- bmwl3
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Bmwl3 - auto de frente", "https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768688__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Bmwl3") -- insertará las imágenes en el producto con nombre Bmwl3
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Bmwl3 - asiento del conductor", "https://cdn.pixabay.com/photo/2016/12/16/17/54/bmw-1911913_960_720.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Bmwl3") -- insertará las imágenes en el producto con nombre Bmwl3
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Bmwl3 - logo BMW", "https://cdn.pixabay.com/photo/2016/11/19/11/26/automotive-1838744__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Bmwl3") -- insertará las imágenes en el producto con nombre Bmwl3
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Bmwl3 - velocimetro", "https://cdn.pixabay.com/photo/2016/05/17/22/42/bmw-1399427__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Bmwl3") -- insertará las imágenes en el producto con nombre Bmwl3
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Bmwl3 - caja de cambios", "https://cdn.pixabay.com/photo/2016/05/17/22/42/bmw-1399430__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Bmwl3") -- insertará las imágenes en el producto con nombre Bmwl3
);


-- Kia Sportage
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Kia Sportage - auto de frente", "https://cdn.pixabay.com/photo/2017/06/08/00/15/kia-2382086__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Kia Sportage") -- insertará las imágenes en el producto con nombre Kia Sportage
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Kia Sportage - volante y airbag", "https://cdn.pixabay.com/photo/2017/06/08/00/15/kia-2382089__480.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Kia Sportage") -- insertará las imágenes en el producto con nombre Kia Sportage
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Kia Sportage - caja de cambios", "https://cdn.pixabay.com/photo/2021/05/28/20/37/transmission-6292021__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Kia Sportage") -- insertará las imágenes en el producto con nombre Kia Sportage
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Kia Sportage - luz y rueda delantera", "https://cdn.pixabay.com/photo/2017/10/15/18/09/kia-stinger-gt-2854653__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Kia Sportage") -- insertará las imágenes en el producto con nombre Kia Sportage
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Kia Sportage - luz y rueda delantera encendida", "https://cdn.pixabay.com/photo/2017/09/21/19/56/kia-sports-car-2773258__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Kia Sportage") -- insertará las imágenes en el producto con nombre Kia Sportage
);


-- Mazda Cx 30
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Mazda Cx 30 - auto de costado", "https://cdn.pixabay.com/photo/2021/03/25/07/00/car-6122175__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Mazda Cx 30") -- insertará las imágenes en el producto con nombre Mazda Cx 30
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Mazda Cx 30 - volante", "https://cdn.pixabay.com/photo/2018/03/08/18/45/auto-3209449__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Mazda Cx 30") -- insertará las imágenes en el producto con nombre Mazda Cx 30
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Mazda Cx 30 - caja de cambios", "https://cdn.pixabay.com/photo/2021/07/01/14/31/car-6379534__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Mazda Cx 30") -- insertará las imágenes en el producto con nombre Mazda Cx 30
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Mazda Cx 30 - freno de mano", "https://cdn.pixabay.com/photo/2018/03/08/18/43/auto-3209443__340.jpg" ,  
           (SELECT productos_id FROM productos WHERE nombre = "Mazda Cx 30") -- insertará las imágenes en el producto con nombre Mazda Cx 30
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Mazda Cx 30 - motor", "https://cdn.pixabay.com/photo/2021/07/01/14/31/car-6379541__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Mazda Cx 30") -- insertará las imágenes en el producto con nombre Mazda Cx 30
);


-- Nissan March
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Nissan March - auto de frente", "https://cdn.pixabay.com/photo/2018/04/15/09/29/car-3321213__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Nissan March") -- insertará las imágenes en el producto con nombre Nissan March
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Nissan March - rueda", "https://cdn.pixabay.com/photo/2018/02/22/22/27/nissan-gtr-3174157__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Nissan March") -- insertará las imágenes en el producto con nombre Nissan March
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Nissan March - lado conductor por dentro", "https://cdn.pixabay.com/photo/2015/08/11/22/33/nissan-885310__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Nissan March") -- insertará las imágenes en el producto con nombre Nissan March
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Nissan March - auto de atrás", "https://cdn.pixabay.com/photo/2018/04/15/09/29/car-3321212__340.jpg" ,  
           (SELECT productos_id FROM productos WHERE nombre = "Nissan March") -- insertará las imágenes en el producto con nombre Nissan March
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Nissan March - lado acompañante por dentro", "https://cdn.pixabay.com/photo/2018/04/15/09/29/car-3321211__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Nissan March") -- insertará las imágenes en el producto con nombre Nissan March
);


-- Renault Logan
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Renault Logan - auto de frente", "https://cdn.pixabay.com/photo/2017/11/12/09/58/renault-2942017__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Renault Logan") -- insertará las imágenes en el producto con nombre Renault Logan
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Renault Logan - falta la imagen", "https://cdn.pixabay.com/photo/2017/04/20/22/06/car-2247146__340.jpg", 
           (SELECT productos_id FROM productos WHERE nombre = "Renault Logan") -- insertará las imágenes en el producto con nombre Renault Logan
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Renault Logan - boton", "https://cdn.pixabay.com/photo/2016/01/26/17/45/dashboard-1162965__340.jpg",
           (SELECT productos_id FROM productos WHERE nombre = "Renault Logan") -- insertará las imágenes en el producto con nombre Renault Logan
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Renault Logan - motor", "https://cdn.pixabay.com/photo/2016/07/28/16/50/car-engine-1548434__340.jpg" ,  
           (SELECT productos_id FROM productos WHERE nombre = "Renault Logan") -- insertará las imágenes en el producto con nombre Renault Logan
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Renault Logan - llanta", "https://cdn.pixabay.com/photo/2017/04/01/20/09/wheel-rim-2194373__340.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Renault Logan") -- insertará las imágenes en el producto con nombre Renault Logan
);


-- Spark GT
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Spark GT - auto de frente de lado derecho", "https://www.elcarrocolombiano.com/wp-content/uploads/2018/11/20181107-Spark-Gt-Activ-2019.png",  
           (SELECT productos_id FROM productos WHERE nombre = "Spark GT") -- insertará las imágenes en el producto con nombre Spark GT
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Spark GT - auto de su lado derecho", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbT1o3rLWYoXNaaYrqFX1adEXBV38WMmvIffSuggmNLflWkR92FrCRcnVg-mgDwC9Ses&usqp=CAU",  
           (SELECT productos_id FROM productos WHERE nombre = "Spark GT") -- insertará las imágenes en el producto con nombre Spark GT
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Spark GT - auto de frente de lado izquierdo", "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_8ec8cfe1989e465ca2d8c1067ecb25bc.jpg",  
           (SELECT productos_id FROM productos WHERE nombre = "Spark GT") -- insertará las imágenes en el producto con nombre Spark GT
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Spark GT - auto de parte trasera", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOWt4Qc3WvV8uwCC0aPg0nDuJUH84GOnzWvkcfGu_0W36LV0mRSX_KSTo0GJhbVpV-Ig&usqp=CAU" ,  
           (SELECT productos_id FROM productos WHERE nombre = "Spark GT") -- insertará las imágenes en el producto con nombre Spark GT
);
INSERT INTO imagenes (titulo, url_imagen, productos_id)
    VALUES ("Spark GT  - auto de frente de lado derecho - bosque", "https://i1.wp.com/wtfonline.mx/wp-content/uploads/2019/03/2019-spark-activ-01.jpg?ssl=1",  
           (SELECT productos_id FROM productos WHERE nombre = "Spark GT") -- insertará las imágenes en el producto con nombre Spark GT
);

select * from imagenes;