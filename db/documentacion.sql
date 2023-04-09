-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 08-04-2023 a las 17:22:29
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `documentacion`
--
CREATE DATABASE IF NOT EXISTS `documentacion` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `documentacion`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documento`
--

CREATE TABLE `documento` (
  `documentoId` int(11) NOT NULL,
  `paqueteId` int(11) NOT NULL,
  `tipoDocumentoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modeloformulario`
--

CREATE TABLE `modeloformulario` (
  `modeloFormularioId` int(11) NOT NULL,
  `tipoDocumentoId` int(11) NOT NULL,
  `campo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquete`
--

CREATE TABLE `paquete` (
  `paqueteId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quienentrega`
--

CREATE TABLE `quienentrega` (
  `quienEntregaId` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `dni` varchar(30) DEFAULT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quienentregapaquete`
--

CREATE TABLE `quienentregapaquete` (
  `quienEntregaPaqueteId` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `quienEntregaId` int(11) NOT NULL,
  `paqueteId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quienrecibe`
--

CREATE TABLE `quienrecibe` (
  `quienRecibeId` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `dni` varchar(30) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `correo` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quienrecibepaquete`
--

CREATE TABLE `quienrecibepaquete` (
  `quienRecibePaqueteId` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `quienRecibeId` int(11) NOT NULL,
  `paqueteId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodocumento`
--

CREATE TABLE `tipodocumento` (
  `tipoDocumentoId` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `documento`
--
ALTER TABLE `documento`
  ADD PRIMARY KEY (`documentoId`),
  ADD KEY `paqueteId` (`paqueteId`),
  ADD KEY `tipoDocumentoId` (`tipoDocumentoId`);

--
-- Indices de la tabla `modeloformulario`
--
ALTER TABLE `modeloformulario`
  ADD PRIMARY KEY (`modeloFormularioId`),
  ADD KEY `tipoDocumentoId` (`tipoDocumentoId`);

--
-- Indices de la tabla `paquete`
--
ALTER TABLE `paquete`
  ADD PRIMARY KEY (`paqueteId`);

--
-- Indices de la tabla `quienentrega`
--
ALTER TABLE `quienentrega`
  ADD PRIMARY KEY (`quienEntregaId`);

--
-- Indices de la tabla `quienentregapaquete`
--
ALTER TABLE `quienentregapaquete`
  ADD PRIMARY KEY (`quienEntregaPaqueteId`),
  ADD KEY `quienEntregaId` (`quienEntregaId`,`paqueteId`),
  ADD KEY `paqueteId` (`paqueteId`);

--
-- Indices de la tabla `quienrecibe`
--
ALTER TABLE `quienrecibe`
  ADD PRIMARY KEY (`quienRecibeId`);

--
-- Indices de la tabla `quienrecibepaquete`
--
ALTER TABLE `quienrecibepaquete`
  ADD PRIMARY KEY (`quienRecibePaqueteId`),
  ADD KEY `quienRecibeId` (`quienRecibeId`,`paqueteId`),
  ADD KEY `paqueteId` (`paqueteId`);

--
-- Indices de la tabla `tipodocumento`
--
ALTER TABLE `tipodocumento`
  ADD PRIMARY KEY (`tipoDocumentoId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `documento`
--
ALTER TABLE `documento`
  MODIFY `documentoId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `modeloformulario`
--
ALTER TABLE `modeloformulario`
  MODIFY `modeloFormularioId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paquete`
--
ALTER TABLE `paquete`
  MODIFY `paqueteId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `quienentrega`
--
ALTER TABLE `quienentrega`
  MODIFY `quienEntregaId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `quienentregapaquete`
--
ALTER TABLE `quienentregapaquete`
  MODIFY `quienEntregaPaqueteId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `quienrecibe`
--
ALTER TABLE `quienrecibe`
  MODIFY `quienRecibeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `quienrecibepaquete`
--
ALTER TABLE `quienrecibepaquete`
  MODIFY `quienRecibePaqueteId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipodocumento`
--
ALTER TABLE `tipodocumento`
  MODIFY `tipoDocumentoId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `documento`
--
ALTER TABLE `documento`
  ADD CONSTRAINT `documento_ibfk_1` FOREIGN KEY (`paqueteId`) REFERENCES `paquete` (`paqueteId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `documento_ibfk_2` FOREIGN KEY (`tipoDocumentoId`) REFERENCES `tipodocumento` (`tipoDocumentoId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `modeloformulario`
--
ALTER TABLE `modeloformulario`
  ADD CONSTRAINT `modeloformulario_ibfk_1` FOREIGN KEY (`tipoDocumentoId`) REFERENCES `tipodocumento` (`tipoDocumentoId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `quienentregapaquete`
--
ALTER TABLE `quienentregapaquete`
  ADD CONSTRAINT `quienentregapaquete_ibfk_1` FOREIGN KEY (`quienEntregaId`) REFERENCES `quienentrega` (`quienEntregaId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quienentregapaquete_ibfk_2` FOREIGN KEY (`paqueteId`) REFERENCES `paquete` (`paqueteId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `quienrecibepaquete`
--
ALTER TABLE `quienrecibepaquete`
  ADD CONSTRAINT `quienrecibepaquete_ibfk_1` FOREIGN KEY (`quienRecibeId`) REFERENCES `quienrecibe` (`quienRecibeId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quienrecibepaquete_ibfk_2` FOREIGN KEY (`paqueteId`) REFERENCES `paquete` (`paqueteId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
