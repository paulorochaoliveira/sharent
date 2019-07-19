-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 19, 2019 at 05:27 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dbsharent`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `civicNumber` int(11) DEFAULT NULL,
  `streetName` varchar(255) DEFAULT NULL,
  `apto` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `civicNumber`, `streetName`, `apto`, `city`, `province`, `postalCode`, `latitude`, `longitude`, `createdAt`, `updatedAt`, `UserId`) VALUES
(1, 5080, 'WestHill', NULL, 'Montreal', 'Quebec', 'H4V2W5', NULL, NULL, '2019-07-18 00:00:00', '2019-07-18 00:00:00', 1),
(2, 5080, 'WestHill', NULL, 'Montreal', 'Quebec', 'H4V2W5', NULL, NULL, '2019-07-18 00:00:00', '2019-07-18 00:00:00', 2),
(3, 11, 'Pie-IX', '', 'Montreal', 'Quebec', 'H1M1B1', NULL, NULL, '2019-07-19 04:47:41', '2019-07-19 04:47:41', 3),
(4, 123, 'Pabufe', '', 'Olinda', 'Pernambuco', 'H4S2W5', '45.49072300', '-73.74387100', '2019-07-19 05:05:19', '2019-07-19 05:05:19', 4);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Jardinage', '2019-07-17 01:03:38', '2019-07-17 01:03:38'),
(2, 'Art', '2019-07-17 01:04:32', '2019-07-17 01:04:32'),
(3, 'Cuisine', '2019-07-17 01:06:44', '2019-07-17 01:06:44'),
(4, 'Sport', '2019-07-17 01:07:35', '2019-07-17 01:07:35'),
(5, 'Loisir', '2019-07-17 01:07:57', '2019-07-17 01:07:57'),
(6, 'Rénovation', '2019-07-17 01:08:13', '2019-07-17 01:08:13'),
(7, 'Vêtements', '2019-07-17 01:08:21', '2019-07-17 01:08:21'),
(8, 'Électroniques', '2019-07-17 01:08:42', '2019-07-17 01:08:42'),
(9, 'Bricolage', '2019-07-17 01:08:54', '2019-07-17 01:08:54'),
(10, 'Meubles', '2019-07-17 01:09:06', '2019-07-17 01:09:06'),
(11, 'Automobile', '2019-07-17 01:09:14', '2019-07-17 01:09:14'),
(12, 'Divers', '2019-07-17 01:09:21', '2019-07-17 01:09:21');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` varchar(255) NOT NULL,
  `isRead` char(255) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `receiver`, `title`, `content`, `isRead`, `createdAt`, `updatedAt`, `UserId`) VALUES
(1, 3, 'Alo', 'Testando', '0', '2019-07-13 00:00:00', '2019-07-13 00:00:00', 1),
(2, 1, 'Alo', 'Testando', '0', '2019-07-13 00:00:00', '2019-07-13 00:00:00', 3),
(3, 3, 'Outro teste', 'Teste', '0', '2019-07-13 00:00:00', '2019-07-13 00:00:00', 1),
(4, 1, 'Alo', 'Quero alugar essa parada!', '0', '2019-07-14 00:00:00', '2019-07-14 00:00:00', 4),
(5, 1, 'Alo', 'Quero alugar essa parada!', '0', '2019-07-14 00:00:00', '2019-07-14 00:00:00', 5),
(6, 1, 'Bora', 'Quero isso!!', '0', '2019-07-14 00:00:00', '2019-07-14 00:00:00', 2),
(7, 3, 'Bora', 'Quero isso!!', '0', '2019-07-14 00:00:00', '2019-07-14 00:00:00', 2),
(8, 3, 'Test', 'Testando essas mensagens', '0', '2019-07-14 00:00:00', '2019-07-14 00:00:00', 7),
(9, 3, 'Test', 'Testando essas mensagens', '0', '2019-07-14 00:00:00', '2019-07-14 00:00:00', 9),
(10, 1, 'Oui', 'OUI OUI OUI', '0', '2019-07-14 00:00:00', '2019-07-14 00:00:00', 3),
(11, 2, 'Title', 'Pra que data??', '0', '2019-07-14 20:48:15', '2019-07-14 20:48:15', 1),
(12, 4, 'Title', 'Ja ta alugado!', '0', '2019-07-14 20:49:18', '2019-07-14 20:49:18', 1),
(13, 5, 'Title', 'Ele vai ta disponivel no final de semana.', '0', '2019-07-14 20:50:45', '2019-07-14 20:50:45', 1),
(14, 3, 'Title', 'Ça va bien?', '0', '2019-07-14 21:54:54', '2019-07-14 21:54:54', 1),
(15, 3, 'Title', 'Allo', '0', '2019-07-14 21:56:29', '2019-07-14 21:56:29', 1),
(16, 1, 'Title', 'Allo', '0', '2019-07-14 21:57:07', '2019-07-14 21:57:07', 3),
(17, 3, 'Title', 'Testando socket!!', '0', '2019-07-14 22:10:36', '2019-07-14 22:10:36', 1),
(18, 1, 'Title', 'Allo Paulo', '0', '2019-07-14 22:21:34', '2019-07-14 22:21:34', 3),
(19, 1, 'Title', 'allo', '0', '2019-07-14 22:32:22', '2019-07-14 22:32:22', 3),
(20, 3, 'Title', 'Desole!!', '0', '2019-07-14 22:39:47', '2019-07-14 22:39:47', 1),
(21, 1, 'Title', 'C\'Est pas grave!!', '0', '2019-07-14 22:48:25', '2019-07-14 22:48:25', 3),
(22, 3, 'Title', 'What can I do?', '0', '2019-07-14 22:51:17', '2019-07-14 22:51:17', 1),
(23, 1, 'Title', 'It\'s alright', '0', '2019-07-14 22:56:56', '2019-07-14 22:56:56', 3),
(24, 3, 'Title', 'Let me try!', '0', '2019-07-14 23:02:06', '2019-07-14 23:02:06', 1),
(25, 3, 'Title', 'Trying again', '0', '2019-07-14 23:11:03', '2019-07-14 23:11:03', 1),
(26, 1, 'Title', 'Trying one more time!', '0', '2019-07-14 23:14:35', '2019-07-14 23:14:35', 3),
(27, 3, 'Title', 'Whatever!!', '0', '2019-07-14 23:17:31', '2019-07-14 23:17:31', 1),
(28, 1, 'Title', 'alo', '0', '2019-07-14 23:23:03', '2019-07-14 23:23:03', 3),
(29, 3, 'Title', 'Last try', '0', '2019-07-14 23:37:18', '2019-07-14 23:37:18', 1),
(30, 1, 'Title', 'Vamos tentar novamente', '0', '2019-07-14 23:50:47', '2019-07-14 23:50:47', 3),
(31, 1, 'Title', 'Mais uma vez', '0', '2019-07-14 23:51:20', '2019-07-14 23:51:20', 3),
(32, 2, 'Title', 'Alo!', '0', '2019-07-14 23:57:57', '2019-07-14 23:57:57', 1),
(33, 3, 'Title', 'Vamos la', '0', '2019-07-14 23:58:24', '2019-07-14 23:58:24', 1),
(34, 1, 'Title', 'Tentantiva numero 50', '0', '2019-07-15 00:02:11', '2019-07-15 00:02:11', 3),
(35, 3, 'Title', 'Alo Julien', '0', '2019-07-15 00:02:50', '2019-07-15 00:02:50', 1),
(36, 1, 'Title', 'te amo\r\n', '0', '2019-07-15 00:08:33', '2019-07-15 00:08:33', 2),
(37, 3, 'Title', 'Allo!!', '0', '2019-07-18 19:07:17', '2019-07-18 19:07:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `productevaluations`
--

CREATE TABLE `productevaluations` (
  `id` int(11) NOT NULL,
  `rate` int(11) DEFAULT NULL,
  `evaluation` text,
  `ProductId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productevaluations`
--

INSERT INTO `productevaluations` (`id`, `rate`, `evaluation`, `ProductId`, `UserId`, `createdAt`, `updatedAt`) VALUES
(1, 4, 'Excellent planche. At first I only wanted the beanie, then since I found this I said why not? lol.. so the beanie material is just ok, I don\'t want to say that is extremely warm but get its job done. The headphones aren\'t the greatest, I will just consider that as the secondary add-on feature instead of the main. Audio quality is not amazing, so don\'t expect much from it.', 10, 1, '2019-07-11 00:00:00', '2019-07-11 00:00:00'),
(2, 5, 'Vraiment bonne!. I bought this beanie as a gift for my husband. I wanted to test it before wrapping it up, and it refused to pair with my iPhone. I took it over to my neighbor, and it wouldn\'t pair with his phone either. Nothing we tried would work. Thinking it was defective, I ordered a new one of a different brand, but showed this one to my husband anyway. It turns out he was able to pair it with his iPhone with no problems at all. He liked this beanie so much, we kept it and returned the other one! Not sure what the issues were, but it\'s working great for him and he\'s very happy with it. The sound is great, and the hat itself is wonderful quality. It\'s so sturdy and thick, it doesn\'t slouch quite as much as he\'d like, but eventually I expect it\'ll get worked in.', 10, 2, '2019-07-11 00:00:00', '2019-07-11 00:00:00'),
(3, NULL, NULL, NULL, NULL, '2019-07-13 02:55:49', '2019-07-13 02:55:49'),
(4, 4, 'Let me put it this way, if you are over the age of 16 and play at a fairly competitive level, this is NOT the right ball for you. It\'s easy to get tricked with the fancy pictures and product description, but this ball is extremely light and feels cheap/rubbery. This is good for boy/girls that are just getting started. If you\'re looking for that smooth, high-quality ball that you can actually use in a game, I would suggest you invest an additional $10-$20 and buy something that will last you a long time.', 16, 3, '2019-07-13 03:43:34', '2019-07-13 03:43:34'),
(5, 4, 'Overall, this product is lovely. It smells great and gets the job. I have sensitive and dry skin but I never had an issues with this. I do find that the bottle doesn’t last very long though. I had to open a new one a few weeks later.', 18, 3, '2019-07-13 03:58:22', '2019-07-13 03:58:22'),
(6, 5, 'Best equipment ever! Totally recommended!', 18, 2, '2019-07-13 04:02:29', '2019-07-13 04:02:29'),
(7, 5, 'Best equipment ever! Totally recommended!', 18, 2, '2019-07-13 04:03:01', '2019-07-13 04:03:01'),
(8, 5, 'Lovelly!!!', 12, 2, '2019-07-13 04:04:55', '2019-07-13 04:04:55'),
(9, 1, 'Terrible!!', 17, 2, '2019-07-13 04:05:56', '2019-07-13 04:05:56');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  `CategoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `description`, `price`, `imagePath`, `createdAt`, `updatedAt`, `UserId`, `CategoryId`) VALUES
(10, 'Planche de Surf', ' La planche de surf pour débuter et progresser en toute sécurité. Livrée avec un leash et 3 ailerons non coupants. Mettre de la wax pour ne pas glisser.', '12.00', 'http://localhost:3000/images/planche-de-surf-1562718273678.jpg', '2019-07-10 00:24:33', '2019-07-10 00:24:33', 3, 4),
(11, 'Assassin\'s Creed', 'Assassin\'s creed pour PS4', '7.00', 'http://localhost:3000/images/assassin\'s-creed-1562718506189.jpg', '2019-07-10 00:28:26', '2019-07-10 00:28:26', 3, 12),
(12, 'Planche a Neige', 'Rien n\'est plus agréable que de trouver son rythme sur la montagne.', '8.00', 'http://localhost:3000/images/planche-a-neige-1562718604759.jpg', '2019-07-10 00:30:04', '2019-07-10 00:30:04', 3, 4),
(13, 'Fifa 19 pour PS4', 'Excellent jeu video.', '5.00', 'http://localhost:3000/images/fifa-19-pour-ps4-1562718662954.jpg', '2019-07-10 00:31:02', '2019-07-10 00:31:02', 3, 12),
(14, 'Vélo de route', 'Velo excellent pour la ville', '5.00', 'http://localhost:3000/images/vélo-de-route-1562718704323.jpg', '2019-07-10 00:31:44', '2019-07-10 00:31:44', 3, 4),
(15, 'Manteau Rouge', 'Belissimo Manteau Rouge da Zara', '7.00', 'http://localhost:3000/images/manteau-rouge-1562718935529.jpg', '2019-07-10 00:35:35', '2019-07-10 00:35:35', 3, 7),
(16, 'Balon de soccer', 'Balon de soccer', '5.00', 'http://localhost:3000/images/balon-de-soccer-1562719119318.jpg', '2019-07-10 00:38:39', '2019-07-10 00:38:39', 1, 4),
(17, 'Tondeuse', 'Tondeuse', '8.00', 'http://localhost:3000/images/tondeuse-1562719158420.jpg', '2019-07-10 00:39:18', '2019-07-10 00:39:18', 1, 1),
(18, 'Équipement de plongée', 'Equipement complet de plongée ', '30.00', 'http://localhost:3000/images/équipement-de-plongée-1562719364421.jpg', '2019-07-10 00:42:44', '2019-07-10 00:42:44', 1, 4),
(19, 'Casque Bose', 'Réduction de bruit ultra performante Bluetooth et NFC avec invites vocales, Assistant Google intégré, Son équilibré, quel que soit le volume, Double microphone avec réduction de bruit pour un son plus clair durant vos appels.', '9.00', 'http://localhost:3000/images/casque-bose-1563329165317.jpg', '2019-07-17 02:06:05', '2019-07-17 02:06:05', 2, 8),
(20, 'Raquette Tennis', 'Excellente raquette de tennis pour debutante.', '5.00', 'http://localhost:3000/images/raquette-tennis-1563330188234.jpg', '2019-07-17 02:23:08', '2019-07-17 02:23:08', 2, 4),
(21, 'Raquettea de Ping-Pong', 'Excellentes raquettes.', '5.00', 'http://localhost:3000/images/raquettea-de-ping-pong-1563330311518.jpg', '2019-07-17 02:25:11', '2019-07-17 02:25:11', 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20190706144513-create-user.js'),
('20190706145145-create-product.js'),
('20190706190254-create-message.js'),
('20190711013713-create-product-evaluation.js'),
('20190717001516-create-category.js'),
('20190718225130-create-address.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `imagePath` varchar(255) DEFAULT 'http://localhost:3000/images/default-user.png',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `imagePath`, `createdAt`, `updatedAt`) VALUES
(1, 'Paulo', 'Oliveira', 'paulo@mail.com', '$2b$10$oQE6UpwBABirs0hGXpNezO6ejbxPUE9UlvK3fwa3stDmoX1cM9GZe', 'http://localhost:3000/images/paulo.jpg', '2019-07-06 19:58:35', '2019-07-06 19:58:35'),
(2, 'Edja', 'Andrade', 'edja@mail.com', '$2b$10$ps9Qxm1I.U/If2prg6M.oeEBEeGwJf0FnMLNf0jvddPbE5JJRtf4W', 'http://localhost:3000/images/edja.jpg', '2019-07-06 21:02:45', '2019-07-19 03:51:19'),
(3, 'Julien', 'Oullet', 'julien@hotmail.com', '$2b$10$Zk3LcGZtkb/xorPlc2vpa.Tgx8.DzQ4WM87EF8sZVWlBD/7l89F2e', 'http://localhost:3000/images/julien.jpg', '2019-07-10 00:08:26', '2019-07-10 00:08:26'),
(4, 'Maria', 'Oliveira', 'maria@mail', '$2b$10$K9w0ehhiq6XDq2cbPBxmRO4yX4fSiaY8z0M4ZGVw9GsjKgWEU9Yqy', 'http://localhost:3000/images/maria.jpg', '2019-07-13 15:30:21', '2019-07-13 15:30:21'),
(5, 'Mana', 'Athayde', 'mana@mail.com', '$2b$10$/ZbvLzUYnSs5y1mqRhL2M.mScdjd5kIA4B0fW9CjtOxWSB3EC1fHa', 'http://localhost:3000/images/default-user.png', '2019-07-14 14:54:19', '2019-07-14 14:54:19'),
(6, 'Toinho', 'Andrade', 'toinho@mail.com', '$2b$10$wdtXR.QTWWbo/ao.vVzG5epQl7Gv9p2dQ8KTwzD7yyzJQ8tyeJKMu', 'http://localhost:3000/images/default-user.png', '2019-07-14 14:54:43', '2019-07-14 14:54:43'),
(7, 'Andrea', 'Mello', 'andrea@mail.com', '$2b$10$KWlYU31Lr0jQVfA.0vmOHOTFL3yYua4e3AZ2TTUG56.mx6NbKJVla', 'http://localhost:3000/images/default-user.png', '2019-07-14 14:55:02', '2019-07-14 14:55:02'),
(8, 'Paulo', 'Boniek', 'boniek@mail.com', '$2b$10$CoVQUFJYoTxlxVo4jAshluLHIuSoUjd.990L.pm0FptRvSf61o8ne', 'http://localhost:3000/images/default-user.png', '2019-07-14 14:55:24', '2019-07-14 14:55:24'),
(9, 'Andre', 'Mello', 'dede@mail.com', '$2b$10$hy8AVRWobQdxZVATcGuxo.6aMRAaVCrdwhwX3HyGHIZKszp3Of2E.', 'http://localhost:3000/images/default-user.png', '2019-07-14 14:55:44', '2019-07-14 14:55:44'),
(10, 'Marcela', 'Mello', 'marcela@mail.com', '$2b$10$0q44LeBAnPzuCyDVTLbCTurj6J4WIYtrkiY4xV95ZLNENPE1sw5F2', 'http://localhost:3000/images/default-user.png', '2019-07-14 14:56:01', '2019-07-14 14:56:01'),
(11, 'Filipe', 'Santos', 'filipe@mail.com', '$2b$10$HedfVtbwuiDI2gkD0RvG1..ThaHjKTQ/A.hxiX3L68BoEvzYKUdTu', 'http://localhost:3000/images/default-user.png', '2019-07-15 02:09:27', '2019-07-15 02:09:27'),
(12, 'Antonio', 'Tavares', 'antonio@mail.com', '$2b$10$Hwcis7GddKDzN9sjlBPcU.a61vXhce/a1GzXM8XMBhQ1kRlYo6dmK', 'http://localhost:3000/images/default-user.png', '2019-07-15 02:14:23', '2019-07-15 02:14:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productevaluations`
--
ALTER TABLE `productevaluations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `productevaluations`
--
ALTER TABLE `productevaluations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
