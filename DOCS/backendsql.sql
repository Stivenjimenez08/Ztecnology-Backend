-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.31 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para ztechnology
DROP DATABASE IF EXISTS `ztechnology`;
CREATE DATABASE IF NOT EXISTS `ztechnology` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ztechnology`;

-- Volcando estructura para tabla ztechnology.customers
DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `names` varchar(60) NOT NULL,
  `nit` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `state` bit(1) DEFAULT b'1',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla ztechnology.customers: 5 rows
DELETE FROM `customers`;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `names`, `nit`, `email`, `address`, `state`, `createdAt`, `updatedAt`) VALUES
	(4, 'Facilisimo', '62834835', 'Redservicio38@gmail.com', 'Cra. 14 #23-07', b'1', '2023-10-26 21:36:57', '2023-10-26 21:36:57'),
	(5, 'red', '6283483235', 'Redso38@gmail.com', 'Cra. 14 #23-07', b'1', '2023-11-27 22:03:43', '2023-11-27 22:03:43'),
	(6, 'Red de servicios del Quindio', '1243441231', 'stivenjimenez37@gmail.com', 'La Adiela Mz. 12 Casa 1b', b'1', '2023-11-27 22:05:56', '2023-11-27 22:05:56'),
	(9, '12312312', '2221', '121212@ema.com', '121212', b'1', '2023-11-29 15:14:33', '2023-11-29 15:14:33'),
	(8, 'super mega pan', '1094977594', 'megapan@gmail.com', 'cll 50 barrio manantiales', b'1', '2023-11-27 23:05:30', '2023-11-27 23:05:30');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Volcando estructura para tabla ztechnology.products
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `description` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `stock` int NOT NULL,
  `price` int NOT NULL,
  `state` bit(1) DEFAULT b'1',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla ztechnology.products: 5 rows
DELETE FROM `products`;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `description`, `stock`, `price`, `state`, `createdAt`, `updatedAt`) VALUES
	(1, 'llantas', 'llantas moto pulsar ns200', 100, 500000, b'1', '2023-10-27 02:44:28', '2023-10-27 02:44:28'),
	(2, 'tapa', 'tapa lateral izquierda y lateral derecha del carenaje de ns200', 20, 65000, b'1', '2023-10-27 02:48:37', '2023-10-27 02:54:46'),
	(3, 'tapa-cola', 'tapa completa de cola para carenaje de ns200', 3, 200000, b'1', '2023-10-27 02:57:41', '2023-10-28 00:26:45'),
	(4, 'aceite de 1L', 'aceite 20w50', 100, 35900, b'1', '2023-10-29 17:39:06', '2023-10-29 17:39:06'),
	(5, 'moto 120cc', '', 3, 7000000, b'1', '2023-11-29 15:18:11', '2023-11-29 15:18:11');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando estructura para tabla ztechnology.quotes
DROP TABLE IF EXISTS `quotes`;
CREATE TABLE IF NOT EXISTS `quotes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `idCustomer` int NOT NULL,
  `serial` int NOT NULL,
  `idProduct` int NOT NULL,
  `quantity` int NOT NULL,
  `discount` int DEFAULT NULL,
  `idUser` int NOT NULL,
  `subTotal` int DEFAULT NULL,
  `total` int NOT NULL,
  `state` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idCustomer` (`idCustomer`),
  KEY `idProduct` (`idProduct`),
  KEY `idUser` (`idUser`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla ztechnology.quotes: 1 rows
DELETE FROM `quotes`;
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
INSERT INTO `quotes` (`id`, `date`, `idCustomer`, `serial`, `idProduct`, `quantity`, `discount`, `idUser`, `subTotal`, `total`, `state`, `createdAt`, `updatedAt`) VALUES
	(1, '2023-01-01', 4, 323423, 3, 3, 60, 2, 3454534, 23451, b'0', '2023-11-28 19:48:06', '2023-12-04 15:33:29');
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;

-- Volcando estructura para tabla ztechnology.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `state` bit(1) DEFAULT b'1',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla ztechnology.roles: 2 rows
DELETE FROM `roles`;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `name`, `description`, `state`, `createdAt`, `updatedAt`) VALUES
	(1, 'Administrador', 'Encargado de crear y modificar usuarios y clientes', b'1', '2023-10-26 16:21:29', '2023-10-26 16:21:29'),
	(2, 'Gestor', 'Encargado de generar las cotizaciones', b'1', '2023-10-26 16:22:02', '2023-10-26 16:24:12');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando estructura para tabla ztechnology.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `names` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastName` varchar(30) DEFAULT NULL,
  `email` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `photo` varchar(50) DEFAULT NULL,
  `idRol` int NOT NULL,
  `state` bit(1) DEFAULT b'1',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `idRol` (`idRol`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla ztechnology.users: 21 rows
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `names`, `lastName`, `email`, `password`, `photo`, `idRol`, `state`, `createdAt`, `updatedAt`) VALUES
	(20, 'BRAHIAM STEVEEN', 'JIMENEZ ZULUAGA', 'stivenjimenez35@gmail.com', '$2a$10$5t.6aILv0SrWv/R45V0kU.6NmFJgGqyerW58bgpHEfT0fvom.NQf6', NULL, 1, b'1', '2023-11-24 01:15:19', '2023-11-24 01:15:19'),
	(2, 'diana M', ' yepes', 'DMyepes@gmail.com', '$2a$10$knuwhpBCWQ2yVsYL.ZRpc.8wvWosOYaVUvG7SRUdgU1tdnTZdPzpW', '23sd', 1, b'1', '2023-10-26 16:27:59', '2023-10-26 16:27:59'),
	(27, 'claudia milena', 'zuluaga', 'clau@gmial.com', '$2a$10$l.wH7MnldttXZmTjnVm8W.WCj360wTiZosBmseqnkoziA2.rqlLHm', NULL, 1, b'1', '2023-11-27 16:30:42', '2023-11-27 16:30:42'),
	(24, 'stefania ', 'robles', 'stef@gmail.com', '$2a$10$H6yVymPJv/CJC6di2nkELutDsFCvvGtQP8Ks4Vh80OGi9p4mtpl7y', NULL, 1, b'1', '2023-11-25 17:17:51', '2023-11-25 17:17:51'),
	(9, 'jorge Es', ' Jimeneza', 'jorg2e112@gmail.com', '$2a$10$PiBsw9FAe9si.PWGuwXxqe9MU2WWCFPcedE48hfRm0iaUDI6pnFQa', 'fdsfghja', 1, b'1', '2023-11-01 21:31:01', '2023-11-01 21:31:01'),
	(10, 'camila', ' cadavid', 'mcamila@gmail.com', '$2a$10$FK5iCNoN0cumJpdCEkn2OuNT/bN8.OSuSaaQ5Hsi7zcTzgKEcnvp.', '', 2, b'1', '2023-11-02 21:44:26', '2023-11-02 21:44:26'),
	(11, 'carlos', 'romana', 'carlos@gmail.com', '$2a$10$8wUadkwpTwdlbe4tEjFs7u8nFWN3lEDZHTTb01ls833eFuTD07W6K', NULL, 1, b'1', '2023-11-16 02:08:15', '2023-11-16 02:08:15'),
	(12, 'carlos sa', 'romanaf', 'carlo21s@gmail.com', '$2a$10$Xl/stV8W6NB3khgeQ5DWpeNIQwFTcVCeHIwOV/C8un8RgFbQtAKYS', NULL, 1, b'1', '2023-11-16 02:09:30', '2023-11-16 02:09:30'),
	(13, 'BRAHIAM STEVEEN', 'JIMENEZ ZULUAGA', 'stivenjimenez37@gmail.com', '$2a$10$fe/TLoAyuzH/PxiMzzk5Me1.wQuzI6Ahk4l4VFwpUSmca.T6eug4K', NULL, 1, b'1', '2023-11-16 02:09:39', '2023-11-16 02:09:39'),
	(14, 'carl', 'figuero', 'carlf@gmail.com', '$2a$10$b3NZ0xJuRiHf2fRvZg5/a.6FHm.idfO33qQ/teYglvSanmbjOW.k.', NULL, 1, b'1', '2023-11-22 00:25:18', '2023-11-22 00:25:18'),
	(22, 'camilasad', ' cadavidsad', 'mcamilaaa@gmail.com', '$2a$10$Nv0YOI9XPOkm.dL.ylwPNeIAy90zG30F/MQ8IytpNeYElU0Pw1uje', '', 1, b'1', '2023-11-25 02:36:57', '2023-11-25 02:36:57'),
	(23, 'julian', 'godoy', 'julgod@gmail.com', '$2a$10$YSOhrzBMjQOV.Xm/H7A1J.EEwZNOtr6rmQVXPzflD15a5xXaYDpoy', NULL, 1, b'1', '2023-11-25 03:00:40', '2023-11-25 03:00:40'),
	(17, 'BRAHIAM', 'JIMENEZ ', 'stivenjimenez32@gmail.com', '$2a$10$ngA4aHd/cJDMZTyzl20t4OgGe6NZOTe9xuLtYZYth8B3vLcEgHe.e', NULL, 1, b'1', '2023-11-22 00:54:57', '2023-11-22 00:54:57'),
	(21, 'camilass', ' cadavisd', 'mcamila2@gmail.com', '$2a$10$AnGITamhW5e3tGw3i9XI3uDcpg7hNgIm8XSfAthazQ4c4ksIE.Omq', '', 1, b'1', '2023-11-25 02:36:16', '2023-11-25 02:36:16'),
	(19, 'camila', 'as', 'cami@gmail.com', '$2a$10$l4Ptu.7nfRPFdlFa6zzlMOVvJC/M4N9uW6yYkpWSWPlv.Up6DtVOa', NULL, 1, b'1', '2023-11-22 00:57:09', '2023-11-22 00:57:09'),
	(25, 'BRAYAN', 'AGUDELO', 'ba32@gmail.com', '$2a$10$rJALqqms7VBrguTnCfaT9OVGEDOeVN1UcWnQhO7HrIcKlWDqGWPGe', NULL, 1, b'1', '2023-11-27 14:54:35', '2023-11-27 14:54:35'),
	(26, 'diego', 'cortes', 'diego@emasi.com', '$2a$10$319fBUDnlue1A64qMR.BIuq/q29NNN0mwEFtgcwun30UzNuGroTya', NULL, 1, b'1', '2023-11-27 15:00:30', '2023-11-27 15:00:30'),
	(28, 'lulu', '', 'lulu@gmail.com', '$2a$10$7xMw.jXj6pRZf7INY6R/iuqJT6bysf18B7..ZO9YUTNtbrgZ2bQwe', NULL, 1, b'1', '2023-11-27 22:16:51', '2023-11-27 22:16:51'),
	(29, 'anaur', 'ocampo', 'anuar@gmail.com', '$2a$10$jF46xHM4bY8LnNudf8iM6.vztkqpv5R8fOOL5oQf.7wsSNgiGIHyi', NULL, 1, b'1', '2023-11-27 23:04:56', '2023-11-27 23:04:56'),
	(30, 'angelica', 'zuluaga', 'angelica@gmail.com', '$2a$10$pK/0xpKMrwTMoUWFWeZ7K.QSNE2ytiW.DC9eGDEBQTzM4MBiPx956', NULL, 1, b'1', '2023-11-30 22:21:19', '2023-11-30 22:21:19'),
	(1, 'angelica m', 'zuluaga s', 'angel@gmail.com', '$2a$10$OszTzIUEaKQr6PsvftUa5u4JGMHCl//zwjf10iv4cGooKgMN8T8m2', NULL, 2, b'1', '2023-11-30 22:21:44', '2023-12-04 14:58:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
