-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 13, 2019 at 03:17 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dbsharent`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `creator` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` varchar(255) NOT NULL,
  `isRead` char(255) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `description`, `price`, `imagePath`, `createdAt`, `updatedAt`, `UserId`) VALUES
(10, 'Planche de Surf', ' La planche de surf pour débuter et progresser en toute sécurité. Livrée avec un leash et 3 ailerons non coupants. Mettre de la wax pour ne pas glisser.', '12.00', 'http://localhost:3000/images/planche-de-surf-1562718273678.jpg', '2019-07-10 00:24:33', '2019-07-10 00:24:33', 3),
(11, 'Assassin\'s Creed', 'Assassin\'s creed pour PS4', '7.00', 'http://localhost:3000/images/assassin\'s-creed-1562718506189.jpg', '2019-07-10 00:28:26', '2019-07-10 00:28:26', 3),
(12, 'Planche a Neige', 'Rien n\'est plus agréable que de trouver son rythme sur la montagne.', '8.00', 'http://localhost:3000/images/planche-a-neige-1562718604759.jpg', '2019-07-10 00:30:04', '2019-07-10 00:30:04', 3),
(13, 'Fifa 19 pour PS4', 'Excellent jeu video.', '5.00', 'http://localhost:3000/images/fifa-19-pour-ps4-1562718662954.jpg', '2019-07-10 00:31:02', '2019-07-10 00:31:02', 3),
(14, 'Vélo de route', 'Velo excellent pour la ville', '5.00', 'http://localhost:3000/images/vélo-de-route-1562718704323.jpg', '2019-07-10 00:31:44', '2019-07-10 00:31:44', 3),
(15, 'Manteau Rouge', 'Belissimo Manteau Rouge da Zara', '7.00', 'http://localhost:3000/images/manteau-rouge-1562718935529.jpg', '2019-07-10 00:35:35', '2019-07-10 00:35:35', 3),
(16, 'Balon de soccer', 'Balon de soccer', '5.00', 'http://localhost:3000/images/balon-de-soccer-1562719119318.jpg', '2019-07-10 00:38:39', '2019-07-10 00:38:39', 1),
(17, 'Tondeuse', 'Tondeuse', '8.00', 'http://localhost:3000/images/tondeuse-1562719158420.jpg', '2019-07-10 00:39:18', '2019-07-10 00:39:18', 1),
(18, 'Équipement de plongée', 'Equipement complet de plongée ', '30.00', 'http://localhost:3000/images/équipement-de-plongée-1562719364421.jpg', '2019-07-10 00:42:44', '2019-07-10 00:42:44', 1);

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
('20190711013713-create-product-evaluation.js');

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
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Paulo', 'Oliveira', 'paulo@mail.com', '$2b$10$oQE6UpwBABirs0hGXpNezO6ejbxPUE9UlvK3fwa3stDmoX1cM9GZe', '2019-07-06 19:58:35', '2019-07-06 19:58:35'),
(2, 'Edja', 'Andrade', 'edja@mail.com', '$2b$10$ps9Qxm1I.U/If2prg6M.oeEBEeGwJf0FnMLNf0jvddPbE5JJRtf4W', '2019-07-06 21:02:45', '2019-07-06 21:02:45'),
(3, 'Julien', 'Oullet', 'julien@hotmail.com', '$2b$10$Zk3LcGZtkb/xorPlc2vpa.Tgx8.DzQ4WM87EF8sZVWlBD/7l89F2e', '2019-07-10 00:08:26', '2019-07-10 00:08:26');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productevaluations`
--
ALTER TABLE `productevaluations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
