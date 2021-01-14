-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 14, 2021 at 11:02 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `GropomaniaDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE `Comments` (
  `id` int(11) NOT NULL,
  `comment` longtext,
  `publish_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author_id` int(11) NOT NULL,
  `Posts_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Comments`
--

INSERT INTO `Comments` (`id`, `comment`, `publish_date`, `author_id`, `Posts_id`) VALUES
(1, 'c\'est magique ce systéme', '2021-01-14 18:02:03', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `id` int(11) NOT NULL,
  `title` varchar(160) DEFAULT 'Null',
  `image_url` varchar(255) DEFAULT NULL,
  `content` longtext,
  `publish_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`id`, `title`, `image_url`, `content`, `publish_date`, `author_id`) VALUES
(1, 'S500', NULL, 'Ce système utilisera le principe de traitement séparé de la tâche, qui consiste à détruire aussi bien des cibles balistiques qu\'aérodynamiques.\r\nConformément à ce principe, des missiles différents seront installés dans des conteneurs d\'aspect identique, ce qui permettra à un seul complexe, selon ses promoteurs, d\'éliminer tout type de cible : non seulement les avions et les drones quelle que soit leur vitesse ou altitude, mais également des missiles à moyenne portée, des missiles de croisière hypersoniques volant à plus de cinq fois la vitesse du son et même les ogives des missiles intercontinentaux. Le S-500 serait capable de détecter et d’engager simultanément jusqu\'à 10 cibles hypersoniques balistiques volant à une vitesse de 5 km/s (18 000 km/h) jusqu\'à une limite de 7 km/s (Mach20). L’altitude de la cible peut être aussi élevée que 180 à 200 km.\r\nLe principe de traitement séparé avait déjà été appliqué avec le S-400 Triumph (complexe de la génération précédente) mais les capacités du S-500 seront encore plus poussées.\r\nIl est prévu d\'entrer en service en 2020.', '2021-01-14 17:58:20', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(4) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `surname`, `name`, `email`, `password`, `isAdmin`, `create_time`) VALUES
(1, 'SLIMANI', 'Abdennour', 'abdennour.slimani@outlook.fr', '$2b$10$5qfQGocdNQ5meymKz4oYvu4zAe4fw4agUZPJ6w772fIauSk0lPneC', 0, '2021-01-14 16:53:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Comments_Users1_idx` (`author_id`),
  ADD KEY `fk_Comments_Posts1_idx` (`Posts_id`);

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Posts_Users_idx` (`author_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Comments`
--
ALTER TABLE `Comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `fk_Comments_Posts1` FOREIGN KEY (`Posts_id`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Comments_Users1` FOREIGN KEY (`author_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `fk_Posts_Users` FOREIGN KEY (`author_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;