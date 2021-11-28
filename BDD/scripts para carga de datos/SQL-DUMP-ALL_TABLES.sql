-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: digitalbooking
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `caracteristicas`
--

INSERT INTO `caracteristicas` VALUES (1,'faStar','Estrellas');
INSERT INTO `caracteristicas` VALUES (2,'faMapMarked','Ubicacion');
INSERT INTO `caracteristicas` VALUES (3,'faWifi','Wi-Fi');
INSERT INTO `caracteristicas` VALUES (4,'faCar','Carro');
INSERT INTO `caracteristicas` VALUES (5,'faChevronLeft','Flecha');
INSERT INTO `caracteristicas` VALUES (6,'faHeart','Corazón');
INSERT INTO `caracteristicas` VALUES (7,'faShareAlt','Compartir');
INSERT INTO `caracteristicas` VALUES (8,'faChevronLeft','Flecha');
INSERT INTO `caracteristicas` VALUES (9,'faHeart','Corazón');
INSERT INTO `caracteristicas` VALUES (10,'faShareAlt','Compartir');

--
-- Dumping data for table `categorias`
--
--- https://img.digibook.link/

INSERT INTO `categorias` VALUES (1,'Autos deportivos','Deportivo','https://img.digibook.link/Categoria_1_deportivo_AUDI-Q5.jpg');
INSERT INTO `categorias` VALUES (2,'Autos Lujosos','Lujoso','https://img.digibook.link/Categoria_2_lujoso_AUDI-Q7.jpg');
INSERT INTO `categorias` VALUES (3,'Autos Economicos','Economico','https://img.digibook.link/Categoria_3_economico_AUDI-A4.jpg');
INSERT INTO `categorias` VALUES (4,'Autos Electricos','Electrico','https://img.digibook.link/Categoria_4_electrico_Q8.webp');

--
-- Dumping data for table `ciudades`
--

INSERT INTO `ciudades` VALUES (1,'Rosario','Argentina');
INSERT INTO `ciudades` VALUES (2,'Cordoba','Argentina');
INSERT INTO `ciudades` VALUES (3,'Buenos Aires','Argentina');
INSERT INTO `ciudades` VALUES (4,'Bariloche','Argentina');

--
-- Dumping data for table `imagenes`
--

INSERT INTO `imagenes` VALUES (1,'Joy Sedan - Imagen principal','https://img.digibook.link/Recomendacion_1_joy-sedan.jpg',1);
INSERT INTO `imagenes` VALUES (2,'Tracker Turbo - Imagen principal','https://img.digibook.link/Recomendacion_2_tracker-turbo.jpg',2);
INSERT INTO `imagenes` VALUES (3,'Onix Turbo Gt - Imagen principal','https://img.digibook.link/Recomendacion_3_onix-turbo.jpg',3);
INSERT INTO `imagenes` VALUES (4,'Audi A6 - Imagen principal','https://img.digibook.link/Recomendacion_4_audi_A6.jpg',4);
INSERT INTO `imagenes` VALUES (5,'Onix Turbo - Imagen principal','https://img.digibook.link/Recomendacion_5_onix-turbo.jpg',5);
INSERT INTO `imagenes` VALUES (6,'Captiva - Imagen principal','https://img.digibook.link/Recomendacion_6_captiva.jpg',6);
INSERT INTO `imagenes` VALUES (7,'Beat - Imagen principal','https://img.digibook.link/Recomendacion_7_beat.png',7);
INSERT INTO `imagenes` VALUES (8,'Onix RS - Imagen principal','https://img.digibook.link/Recomendacion_8_onix-RS.png',8);
INSERT INTO `imagenes` VALUES (9,'Audi Q5 - auto completo','https://img.digibook.link/car-604019__340.webp',1);
INSERT INTO `imagenes` VALUES (10,'Audi Q5 - volante de costado','https://img.digibook.link/car-933704__340.webp',1);
INSERT INTO `imagenes` VALUES (11,'Audi Q5 - rueda trasera','https://img.digibook.link/car-tire-1031579__340.webp',1);
INSERT INTO `imagenes` VALUES (12,'Audi Q5- volante de frente','https://img.digibook.link/audi-a3-2095801__340.webp',1);
INSERT INTO `imagenes` VALUES (13,'Audi Q5 - caja de cambios','https://img.digibook.link/mercedes-benz-1470151__340.webp',1);
INSERT INTO `imagenes` VALUES (14,'Audi Q7 - auto completo','https://img.digibook.link/car-1890494__340.webp',2);
INSERT INTO `imagenes` VALUES (15,'Audi Q7 - parte trasera - ROTA','https://img.digibook.link/car-1890494__340.webp',2);
INSERT INTO `imagenes` VALUES (16,'Audi Q7 - volante','https://img.digibook.link/audi-5911624__340.webp',2);
INSERT INTO `imagenes` VALUES (17,'Audi Q7 - volante y velocimetro','https://img.digibook.link/steering-wheel-5954529__340.webp',2);
INSERT INTO `imagenes` VALUES (18,'Audi Q7 - logo de audi','https://img.digibook.link/audi-5024616__340.webp',2);
INSERT INTO `imagenes` VALUES (19,'Bmwl3 - auto de frente','https://img.digibook.link/bmw-768688__340.jpg',3);
INSERT INTO `imagenes` VALUES (20,'Bmwl3 - asiento del conductor','https://img.digibook.link/bmw-1911913_960_720.jpg',3);
INSERT INTO `imagenes` VALUES (21,'Bmwl3 - logo BMW','https://img.digibook.link/automotive-1838744__340.webp',3);
INSERT INTO `imagenes` VALUES (22,'Bmwl3 - velocimetro','https://img.digibook.link/bmw-1399427__340.webp',3);
INSERT INTO `imagenes` VALUES (23,'Bmwl3 - caja de cambios','https://img.digibook.link/bmw-1399430__340.jpg',3);
INSERT INTO `imagenes` VALUES (24,'Kia Sportage - auto de frente','https://img.digibook.link/kia-2382086__340.jpg',4);
INSERT INTO `imagenes` VALUES (25,'Kia Sportage - volante y airbag','https://img.digibook.link/kia-2382089__480.jpg',4);
INSERT INTO `imagenes` VALUES (26,'Kia Sportage - caja de cambios','https://img.digibook.link/transmission-6292021__340.webp',4);
INSERT INTO `imagenes` VALUES (27,'Kia Sportage - luz y rueda delantera','https://img.digibook.link/kia-stinger-gt-2854653__340.jpg',4);
INSERT INTO `imagenes` VALUES (28,'Kia Sportage - luz y rueda delantera encendida','https://img.digibook.link/kia-sports-car-2773258__340.jpg',4);
INSERT INTO `imagenes` VALUES (29,'Mazda Cx 30 - auto de costado','https://img.digibook.link/car-6122175__340.jpg',5);
INSERT INTO `imagenes` VALUES (30,'Mazda Cx 30 - volante','https://img.digibook.link/auto-3209449__340.webp',5);
INSERT INTO `imagenes` VALUES (31,'Mazda Cx 30 - caja de cambios','https://img.digibook.link/car-6379534__340.jpg',5);
INSERT INTO `imagenes` VALUES (32,'Mazda Cx 30 - freno de mano','https://img.digibook.link/auto-3209443__340.webp',5);
INSERT INTO `imagenes` VALUES (33,'Mazda Cx 30 - motor','https://img.digibook.link/car-6379541__340.jpg',5);
INSERT INTO `imagenes` VALUES (34,'Nissan March - auto de frente','https://img.digibook.link/car-3321213__340.jpg',6);
INSERT INTO `imagenes` VALUES (35,'Nissan March - rueda','https://img.digibook.link/nissan-gtr-3174157__340.jpg',6);
INSERT INTO `imagenes` VALUES (36,'Nissan March - lado conductor por dentro','https://img.digibook.link/nissan-885310__340.jpg',6);
INSERT INTO `imagenes` VALUES (37,'Nissan March - auto de atrás','https://img.digibook.link/car-3321212__340.jpg',6);
INSERT INTO `imagenes` VALUES (38,'Nissan March - lado acompañante por dentro','https://img.digibook.link/car-3321211__340.jpg',6);
INSERT INTO `imagenes` VALUES (39,'Renault Logan - auto de frente','https://img.digibook.link/renault-2942017__340.jpg',7);
INSERT INTO `imagenes` VALUES (40,'Renault Logan - falta la imagen','https://img.digibook.link/car-2247146__340.webp',7);
INSERT INTO `imagenes` VALUES (41,'Renault Logan - boton','https://img.digibook.link/dashboard-1162965__340.webp',7);
INSERT INTO `imagenes` VALUES (42,'Renault Logan - motor','https://img.digibook.link/car-engine-1548434__340.webp',7);
INSERT INTO `imagenes` VALUES (43,'Renault Logan - llanta','https://img.digibook.link/wheel-rim-2194373__340.jpg',7);
INSERT INTO `imagenes` VALUES (44,'Spark GT - auto de frente de lado derecho','https://img.digibook.link/20181107-Spark-Gt-Activ-2019.png',8);
INSERT INTO `imagenes` VALUES (45,'Spark GT - auto de su lado derecho','https://img.digibook.link/images1.jpg',8);
INSERT INTO `imagenes` VALUES (46,'Spark GT - auto de frente de lado izquierdo','https://img.digibook.link/RT_V_8ec8cfe1989e465ca2d8c1067ecb25bc.jpg',8);
INSERT INTO `imagenes` VALUES (47,'Spark GT - auto de parte trasera','https://img.digibook.link/images.jpg',8);
INSERT INTO `imagenes` VALUES (48,'Spark GT  - auto de frente de lado derecho - bosque','https://img.digibook.link/2019-spark-activ-01.jpg',8);

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` VALUES (1,'descripcion producto Rosario - Deportivo','Joy Sedán',1,1);
INSERT INTO `productos` VALUES (2,'descripcion producto Cordoba - Deportivo','Tracker Turbo',1,2);
INSERT INTO `productos` VALUES (3,'descripcion producto Buenos Aires - Lujoso','Onix Turbo Gt',2,3);
INSERT INTO `productos` VALUES (4,'descripcion producto Bariloche - Lujoso','Audi A6',2,4);
INSERT INTO `productos` VALUES (5,'descripcion producto Cordoba - Economico','Onix Turbo',3,2);
INSERT INTO `productos` VALUES (6,'descripcion producto Buenos Aires - Economico','Captiva',3,3);
INSERT INTO `productos` VALUES (7,'descripcion producto Rosario - Electrico','Beat',4,1);
INSERT INTO `productos` VALUES (8,'descripcion producto Bariloche - Electrico','Onix RS',4,4);

--
-- Dumping data for table `productos_has_caracteristicas`
--


--
-- Dumping data for table `puntuaciones`
--


--
-- Dumping data for table `reservas`
--


--
-- Dumping data for table `roles`
--


--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` VALUES (1,'Díaz','diego@mail.com','Diego','$2a$10$4W6MUqJ6oYg9Gyn3hCwemO1SlndwkeWh98iiJfrLz1AIbSp6MLpNu',NULL);
INSERT INTO `usuarios` VALUES (2,'Acosta','brenda@mail.com','Brenda','$2a$10$2iZS4qvnM.QBy2WnHdDGueX/jESqcO3YeLUExtm/Bc.Y59GTbpNkC',NULL);
INSERT INTO `usuarios` VALUES (3,'Andrade','ayelen@mail.com','Ayelén','$2a$10$fhFr/.mNV8DVhIU0cesPg.Skd8Pr3L3CR85JRDdBdiCGFdB.TVC5.',NULL);
INSERT INTO `usuarios` VALUES (4,'Amaya','lara@mail.com','Lara','$2a$10$OSd1O.v5BvddzE97P6lxEeOG.8hzRgYKTjpjunJ5QqGz17f6w3Ame',NULL);
INSERT INTO `usuarios` VALUES (5,'Ocampo','jesus@mail.com','Jesus','$2a$10$dR2RhG2vK1yVcEiempurs.2WkwBXZ/UH5I3khfthRVcno.J8k.znq',NULL);
INSERT INTO `usuarios` VALUES (6,'Orozco','andrea@mail.com','Andrea','$2a$10$paEehYfaSFNPl2ZwZLhRCuX0QBmlsmnEJQ2.Lz4ESleetURWhSIX6',NULL);
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
