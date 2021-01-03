-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 27, 2020 at 10:31 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `DB_PROJECT7`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE `Comments` (
  `id` int(11) NOT NULL,
  `publish_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` longtext,
  `author_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Comments`
--

INSERT INTO `Comments` (`id`, `publish_date`, `comment`, `author_id`, `post_id`) VALUES
(8, '2020-11-26 17:17:01', 'my second  comment of the day', 1, 7),
(9, '2020-12-21 00:59:30', 'second comment', 6, 8),
(10, '2020-12-21 00:59:30', 'third comment', 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `id` int(11) NOT NULL,
  `title` varchar(160) DEFAULT NULL,
  `content` longtext,
  `publish_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`id`, `title`, `content`, `publish_date`, `author_id`) VALUES
(7, 'sixth', 'content of my sixthcontent', '2020-11-26 16:34:45', 1),
(8, '7', 'content of my sixthcontent', '2020-11-26 16:35:06', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `surname`, `email`, `password`, `create_time`) VALUES
(1, 'slimani', 'abdnenour', 'slimani.abdennour@test.com', '$2b$05$lLwPMdr0TS.2W5xgv4HpsOeA4bK7A5Ys78ecMIWGAykT.sh.kmXSW', '2020-11-23 16:39:24'),
(2, 'firstname', 'name', 'mytest@test.com', '$2b$10$qTgvQt0zL8AXN7.f2sUqneaPc2o8uO9aeevqpkglcN8NoKfgQ2iUy', '2020-11-23 23:52:14'),
(3, 'first', 'user', 'first.user@test.com', '$2b$10$HiuHbGhVQI5X3dR4l.88Xu1LZOlp.DLw9yajxQOsvGrLD/iLrIFGy', '2020-11-24 09:46:48'),
(4, 'je susi un test', 'testeur', 'testeur.api@test.com', '$2b$10$Jm5AepWuBE/ktc00M8RpCOStdi4ao4Edpj5dTJFOOPdxz2kqsjhay', '2020-11-26 08:43:26'),
(5, 'je susi un test', 'testeur', 'testeur.api@test.com', '$2b$10$EKfhPRJNxAcH9sTqtWd68eJblE8N5G0L2uVunZ2mOVQ4fB8kiIzM2', '2020-11-26 08:48:29'),
(6, 'abdennour', 'slimani', 'test@test.fr', '$2b$10$inOYSerLDjLf97j55Wcl5.DwHQFfAzeRUscklDOXxYfD4EoJo6bB6', '2020-12-20 16:11:15'),
(7, 'slimani', 'abdennour', 'test@test.fr', '$2b$10$q66yE7tNaSP3uT36OI5cRe6ZllsUgkK//RcnkL4BOGjtEv9bwRdkG', '2020-12-20 16:26:12'),
(8, 'adinou', 'adinou', 'adinou@test.fr', '$2b$10$ofhNCc4iY4VGnqms/UkiyuAnrS6xZgtL/siY0BTOjMT2J3xQJW4D2', '2020-12-20 16:47:56'),
(9, 'test', 'test', 'test@test.fr', '$2b$10$j8ElhjYOL6cLdq3zroxYi.1UmlVp3UlIO/qdDflRZzVkXr9vbBQge', '2020-12-20 23:23:10'),
(10, 'Abdennour', 'SLIMANI', 'abdou.slm@test.fr', '$2b$10$P1CQyM6NPvSe4j/9tp/pdOeVsXCu0OE.YIwJjoxoBlqur9WETIRYi', '2020-12-27 15:59:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Comments_Users_idx` (`author_id`),
  ADD KEY `fk_Comments_Posts1_idx` (`post_id`);

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Posts_Users1_idx` (`author_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `fk_Comments_Posts1` FOREIGN KEY (`post_id`) REFERENCES `Posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Comments_Users` FOREIGN KEY (`author_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `fk_Posts_Users1` FOREIGN KEY (`author_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
