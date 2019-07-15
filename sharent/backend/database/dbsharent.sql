-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 15, 2019 at 02:25 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `bdauteurs`
--
CREATE DATABASE IF NOT EXISTS `bdauteurs` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdauteurs`;

-- --------------------------------------------------------

--
-- Table structure for table `auteurs`
--

CREATE TABLE `auteurs` (
  `idAuteur` int(11) NOT NULL,
  `nom` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `pays` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `naissance` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `auteurs`
--

INSERT INTO `auteurs` (`idAuteur`, `nom`, `pays`, `naissance`) VALUES
(1, 'Arlette Cousture', 'Canada', 1948),
(2, 'Chrystine Brouillet', 'Canada', 1958),
(3, 'Gaetan Soucy', 'Canada', 1958),
(4, 'Danielle Steel', 'Canada', 1949),
(5, 'Francine Ouellette', 'Canada', 1947),
(6, 'Mary Higgins Clark', 'Etats-Unis', 1930),
(7, 'Catherine Cookson', 'Angleterre', 1906),
(8, 'Yann Queffelec', 'France', 1949),
(9, 'Henri Troyat', 'Russie', 1911),
(10, 'Michael Crichton', 'Etats-Unis', 1942),
(11, 'Rene Goscinny', 'France', 1926);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auteurs`
--
ALTER TABLE `auteurs`
  ADD PRIMARY KEY (`idAuteur`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auteurs`
--
ALTER TABLE `auteurs`
  MODIFY `idAuteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Database: `bdclients`
--
CREATE DATABASE IF NOT EXISTS `bdclients` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdclients`;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `idClient` int(11) NOT NULL,
  `nom` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `adresse` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) DEFAULT NULL,
  `sexe` char(1) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`idClient`, `nom`, `adresse`, `age`, `sexe`) VALUES
(1, 'Paulo', '5080 WestHill', 37, 'M'),
(2, 'Edja', '5080 WestHill', 38, 'F'),
(5, 'Maria Cecilia', 'Pabufe 200', 19, 'F'),
(6, 'Pepa', '123 aksdjh', 34, 'F'),
(11, 'Maria do Rosario', '123 Parnaiba', 64, 'F');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`idClient`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `idClient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Database: `bdfilms`
--
CREATE DATABASE IF NOT EXISTS `bdfilms` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdfilms`;

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `idCategorie` int(11) NOT NULL,
  `titreCategorie` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`idCategorie`, `titreCategorie`) VALUES
(1, 'Comédie'),
(2, 'Science Fiction'),
(3, 'Horreur'),
(4, 'Romance'),
(5, 'Action'),
(6, 'Thriller'),
(7, 'Drame'),
(8, 'Mystere'),
(9, 'Crime'),
(10, 'Animation'),
(11, 'Aventure'),
(12, 'Fantastique');

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `idfilm` int(11) NOT NULL,
  `titre` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `realisateur` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idCategorie` int(11) DEFAULT NULL,
  `duree` int(10) DEFAULT NULL,
  `image` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `bandeAnnonce` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `films`
--

INSERT INTO `films` (`idfilm`, `titre`, `realisateur`, `idCategorie`, `duree`, `image`, `prix`, `bandeAnnonce`) VALUES
(6, 'Captain Marvel', 'Ryan Fleck', 5, 124, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg', '10.00', 'https://www.youtube.com/embed/Y_JGZTlUbZg?rel=0'),
(7, 'Glass', 'M. Night Shyamalan', 12, 129, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg', '10.00', 'https://www.youtube.com/embed/95ghQs5AmNk?rel=0'),
(8, 'Bumblebee', 'Travis Knight', 2, 114, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg', '10.00', 'https://www.youtube.com/embed/fAIX12F6958?rel=0'),
(9, 'Pet Sematary', 'Dennis Widmyer', 3, 100, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg', '10.00', 'https://www.youtube.com/embed/VllcgXSIJkE?rel=0'),
(10, 'Aquaman', 'James Wan', 5, 144, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg', '10.00', 'https://www.youtube.com/embed/WDkg3h8PCVU?rel=0'),
(11, 'Fate/stay night: Heavenâ€™s Feel II. lost butterfly', 'Tomonori Sudou', 10, 120, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/4tS0iyKQBDFqVpVcH21MSJwXZdq.jpg', '10.00', 'https://www.youtube.com/embed/XD8h_UelYaU?rel=0'),
(12, 'How to Train Your Dragon: The Hidden World', 'Dean DeBlois', 10, 104, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg', '10.00', 'https://www.youtube.com/embed/qLTDtbYmdWM?rel=0'),
(13, 'Fantastic Beasts: The Crimes of Grindelwald', 'David Yates', 12, 134, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg', '10.00', 'https://www.youtube.com/embed/5sEaYB4rLFQ?rel=0'),
(14, 'The Change-Up', 'David Dobkin', 1, 112, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/iXWxlpmaeHQTjFnJhyo95p7Jrnc.jpg', '10.00', 'https://www.youtube.com/embed/43Qc70ZeMFw?rel=0'),
(15, 'Terminator Genisys', 'Alan Taylor', 2, 126, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg', '10.00', 'https://www.youtube.com/embed/rGSxss7gWak?rel=0'),
(16, 'Love, Rosie', 'Christian Ditter', 4, 102, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/qGYr7P3s0gx5YLvrILnbAkpTt1K.jpg', '10.00', 'https://www.youtube.com/embed/luh9S2bUaFk?rel=0'),
(17, 'The Equalizer', 'Antoine Fuqua', 5, 132, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/2eQfjqlvPAxd9aLDs8DvsKLnfed.jpg', '10.00', 'https://www.youtube.com/embed/qNggvk8QtaY?rel=0'),
(18, 'Mary Poppins Returns', 'Rob Marshall', 12, 131, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg', '10.00', 'https://www.youtube.com/embed/PzcaR1N0pTI?rel=0'),
(19, 'Shrek', 'Andrew Adamson', 10, 90, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/140ewbWv8qHStD3mlBDvvGd0Zvu.jpg', '10.00', 'https://www.youtube.com/embed/W37DlG1i61s?rel=0'),
(20, 'Dumbo', 'Tim Burtone', 11, 112, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/279PwJAcelI4VuBtdzrZASqDPQr.jpg', '29.99', 'https://www.youtube.com/embed/-QPdRfqTnt4?rel=0'),
(21, 'Spider-Man: Into the Spider-Verse', 'Bob Persichetti', 5, 117, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg', '10.00', 'https://www.youtube.com/embed/g4Hbz2jLxvQ?rel=0'),
(22, 'Fate/stay night: Heaven’s Feel II. lost butterfly', 'Tomonori Sudou', 10, 120, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/4tS0iyKQBDFqVpVcH21MSJwXZdq.jpg', '10.00', 'https://www.youtube.com/embed/XD8h_UelYaU?rel=0');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `idLocation` int(11) NOT NULL,
  `idfilm` int(11) DEFAULT NULL,
  `courriel` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dateLocation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `membres`
--

CREATE TABLE `membres` (
  `courriel` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nom` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `motDePasse` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sexe` char(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `membres`
--

INSERT INTO `membres` (`courriel`, `prenom`, `nom`, `motDePasse`, `sexe`, `status`) VALUES
('abdel.hidalgo@gmail.com', 'Abdel', 'Hidalgo', 'abdel', 'M', 'user'),
('admin@moviesapp.com', NULL, NULL, 'admin', 'M', 'admin'),
('paulo.craisse@gmail.com', 'paulo', 'Oliveira', '1234', 'M', 'user'),
('pdrocha@gmail.com', 'pd', 'roch', '1234', 'M', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`idCategorie`);

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`idfilm`),
  ADD KEY `fk_idCategorie` (`idCategorie`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`idLocation`),
  ADD KEY `fk_idFilm` (`idfilm`),
  ADD KEY `fk_courriel` (`courriel`);

--
-- Indexes for table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`courriel`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `idCategorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `idfilm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `idLocation` int(11) NOT NULL AUTO_INCREMENT;
--
-- Database: `bdfilmsnode`
--
CREATE DATABASE IF NOT EXISTS `bdfilmsnode` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdfilmsnode`;

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `num` int(11) NOT NULL,
  `titre` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `duree` int(11) NOT NULL,
  `pochette` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`num`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT;
--
-- Database: `bdlivres`
--
CREATE DATABASE IF NOT EXISTS `bdlivres` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdlivres`;

-- --------------------------------------------------------

--
-- Table structure for table `livres`
--

CREATE TABLE `livres` (
  `idlivre` int(11) NOT NULL,
  `titre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `auteur` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `annee` int(11) NOT NULL,
  `pages` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `livres`
--

INSERT INTO `livres` (`idlivre`, `titre`, `auteur`, `annee`, `pages`) VALUES
(1, 'Porra', 'Rocha', 1987, 1987),
(4, 'Testando Novo', 'PD', 2019, 125),
(5, 'Teste de Quarta', 'EU Mesmo', 2019, 123),
(6, 'I finally did it', 'Paulo Daniel', 1999, 234);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `livres`
--
ALTER TABLE `livres`
  ADD PRIMARY KEY (`idlivre`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `livres`
--
ALTER TABLE `livres`
  MODIFY `idlivre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Database: `crudnodejsmysql`
--
CREATE DATABASE IF NOT EXISTS `crudnodejsmysql` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `crudnodejsmysql`;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `address`, `phone`) VALUES
(1, 'Edja Flavia', '637 paraiso', '12121212');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Database: `curso_intro_laravel`
--
CREATE DATABASE IF NOT EXISTS `curso_intro_laravel` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `curso_intro_laravel`;

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

CREATE TABLE `cursos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `titulo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descricao` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagem` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` decimal(5,2) NOT NULL,
  `publicado` enum('sim','nao') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'nao',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id`, `titulo`, `descricao`, `imagem`, `valor`, `publicado`, `created_at`, `updated_at`) VALUES
(1, 'Curso de PD', 'Descricao do Curso de PD apos revisao', 'img/cursos/imagem7174.jpeg', '129.00', 'sim', '2019-05-18 22:55:59', '2019-05-18 23:28:29'),
(3, 'Curso de PD 3', 'Descricao do Curso de PD 3', 'img/cursos/imagem9262.jpeg', '149.00', 'sim', '2019-05-18 22:58:14', '2019-05-18 22:58:14');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_05_01_150754_create_cursos_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Paulinho', 'admin@mail.com', NULL, '$2y$10$VNMxRWhCYPpDWwifEhUUv.i./GbF05zqE/D5byHpAnvPAdYPvUNtS', NULL, '2019-05-24 00:23:42', '2019-05-24 00:27:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Database: `dbauthors`
--
CREATE DATABASE IF NOT EXISTS `dbauthors` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `dbauthors`;

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `idAuthor` int(11) NOT NULL,
  `nomAuthor` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `pays` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `naissance` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`idAuthor`, `nomAuthor`, `pays`, `naissance`) VALUES
(1, 'Arlette Cousture', 'Canada', 1948),
(2, 'Chrystine Brouillet', 'Canada', 1958),
(3, 'Gaetan Soucy', 'Etats-Unis', 1958),
(4, 'Danielle Steel', 'Etats-Unis', 1949),
(5, 'Francine Ouellette', 'Canada', 1947),
(6, 'Mary Higgins Clark', 'Etats-Unis', 1930),
(7, 'Catherine Cookson', 'Angleterre', 1906),
(8, 'Yann Queffelec', 'France', 1949),
(9, 'Henri Troyat', 'Russie', 1911),
(10, 'Michael Crichton', 'Etats-Unis', 1942),
(11, 'Rene Goscinny', 'France', 1926),
(14, 'Dija Andrade', 'Bresil', 1981),
(15, 'Maria Ceceilia', 'Bresil', 1999);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`idAuthor`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `idAuthor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Database: `dbsharent`
--
CREATE DATABASE IF NOT EXISTS `dbsharent` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `dbsharent`;

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
(36, 1, 'Title', 'te amo\r\n', '0', '2019-07-15 00:08:33', '2019-07-15 00:08:33', 2);

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
  `imagePath` varchar(255) DEFAULT 'http://localhost:3000/images/default-user.png',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `imagePath`, `createdAt`, `updatedAt`) VALUES
(1, 'Paulo', 'Oliveira', 'paulo@mail.com', '$2b$10$oQE6UpwBABirs0hGXpNezO6ejbxPUE9UlvK3fwa3stDmoX1cM9GZe', 'http://localhost:3000/images/paulo.jpg', '2019-07-06 19:58:35', '2019-07-06 19:58:35'),
(2, 'Edja', 'Andrade', 'edja@mail.com', '$2b$10$ps9Qxm1I.U/If2prg6M.oeEBEeGwJf0FnMLNf0jvddPbE5JJRtf4W', 'http://localhost:3000/images/edja.jpg', '2019-07-06 21:02:45', '2019-07-06 21:02:45'),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Database: `dbVolley`
--
CREATE DATABASE IF NOT EXISTS `dbVolley` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `dbVolley`;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `name`, `price`, `description`, `created_at`) VALUES
(1, 'CArai', '123.00', 'Grande', '2019-06-10 23:07:57'),
(2, 'Opa opa', '13.00', 'dois opas', '2019-06-11 15:21:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Database: `dbvoyage`
--
CREATE DATABASE IF NOT EXISTS `dbvoyage` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `dbvoyage`;

-- --------------------------------------------------------

--
-- Table structure for table `activite`
--

CREATE TABLE `activite` (
  `idActivite` int(11) NOT NULL,
  `idLieu` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `siteweb` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `activite`
--

INSERT INTO `activite` (`idActivite`, `idLieu`, `nom`, `description`, `siteweb`) VALUES
(1, 1, '', NULL, NULL),
(2, 8, 'test activite', 'descritption test activite', 'http://www.testactivite.com'),
(3, 3, 's', NULL, NULL),
(4, 40, 'r', NULL, NULL),
(5, 7, 'g', NULL, NULL),
(6, 41, '1', NULL, NULL),
(7, 43, '3', NULL, NULL),
(8, 44, '4', NULL, NULL),
(9, 6, 'r', NULL, NULL),
(10, 6, 'e', NULL, NULL),
(11, 6, 'a', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `circuit`
--

CREATE TABLE `circuit` (
  `idCircuit` int(11) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `estActif` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `circuit`
--

INSERT INTO `circuit` (`idCircuit`, `titre`, `description`, `estActif`) VALUES
(5, 'Romance pour deux', 'Un voyage d\'une semaine dans les villes les plus romantiques de l\'Europe', 1),
(13, 'Les plus belles plages au Monde', 'Yo!Seychelles, Caraïbes, Croatie, Bahamas, Cap Vidal. Bref, plein de belles beach', 0),
(14, 'Anciennes Civilisations', 'Égypte, Athènes, Rome, Mexique, Chine. Inde. Visite de ruine... wow c\'est l\'fun!', 1),
(15, ' Le tour de l\'Asie', 'Chine, Japon, Inde, Tibet, Mongolie, Thaïlande', 1),
(16, 'L\'Amazonie', 'Brézil, Équateur, Perou, Venezuela, et croisière sur l\'amazon', 1);

-- --------------------------------------------------------

--
-- Table structure for table `commande`
--

CREATE TABLE `commande` (
  `idCommande` int(11) NOT NULL,
  `idDepart` int(11) NOT NULL,
  `nbAdultes` int(11) DEFAULT '1',
  `nbEnfants` int(11) DEFAULT '0',
  `resteAPayer` int(11) DEFAULT NULL,
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Triggers `commande`
--
DELIMITER $$
CREATE TRIGGER `updateNbPlacesDepart` AFTER INSERT ON `commande` FOR EACH ROW BEGIN
  update depart Set nbPlaces=nbPlaces-(new.nbAdultes+new.nbEnfants)
    where idDepart=new.idDepart;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `depart`
--

CREATE TABLE `depart` (
  `idDepart` int(11) NOT NULL,
  `idCircuit` int(11) NOT NULL,
  `dateDebut` date DEFAULT NULL,
  `nbPlaces` int(11) DEFAULT '10',
  `prix` double DEFAULT NULL,
  `titrePromotion` varchar(50) DEFAULT NULL,
  `rabais` double DEFAULT NULL,
  `estActif` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `depart`
--

INSERT INTO `depart` (`idDepart`, `idCircuit`, `dateDebut`, `nbPlaces`, `prix`, `titrePromotion`, `rabais`, `estActif`) VALUES
(4, 5, '2019-06-02', 30, 5000, 'vfv', 10, 0),
(11, 13, '2019-05-22', 1, 7888, 'Gratuit pour les belles personnes', 100, 0),
(13, 14, '2019-09-09', 10, 22099, 'Whatever', 5, 0),
(15, 15, '2019-08-03', 10, 8999, NULL, NULL, 0),
(16, 16, '2019-10-16', 10, 12999, NULL, NULL, 0),
(17, 5, '2019-12-07', 10, 9999, NULL, NULL, 0),
(18, 13, '2019-10-13', 10, 14999, NULL, NULL, 0),
(19, 16, '2019-07-19', 10, 11999, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `detailsimage`
--

CREATE TABLE `detailsimage` (
  `idDetailsImage` int(11) NOT NULL,
  `idCircuit` int(11) NOT NULL,
  `idImage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `etape`
--

CREATE TABLE `etape` (
  `idEtape` int(11) NOT NULL,
  `idCircuit` int(11) NOT NULL,
  `nom` varchar(50) COLLATE utf8_bin NOT NULL,
  `description` varchar(300) COLLATE utf8_bin DEFAULT NULL,
  `ordre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `etape`
--

INSERT INTO `etape` (`idEtape`, `idCircuit`, `nom`, `description`, `ordre`) VALUES
(5, 5, 'Paris', NULL, 1),
(6, 5, 'Florence', NULL, 2),
(7, 5, 'Venise', NULL, 3),
(8, 5, 'Barcelone', NULL, 4),
(37, 13, 'Dejeuner au caviare', 'Miam miam des oeuf de poissons', 0),
(38, 13, 'Saut de bonji', 'Youuuuuuh', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hebergement`
--

CREATE TABLE `hebergement` (
  `idHebergement` int(11) NOT NULL,
  `idLieu` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `typeHebergement` varchar(50) DEFAULT NULL,
  `dejeunerInclus` tinyint(1) DEFAULT '0',
  `siteweb` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hebergement`
--

INSERT INTO `hebergement` (`idHebergement`, `idLieu`, `nom`, `typeHebergement`, `dejeunerInclus`, `siteweb`) VALUES
(1, 1, '', NULL, 0, NULL),
(2, 5, 'L\'auberge d\'amour', 'Modeste', 1, NULL),
(3, 6, 'Hilton', 'Luxe', 1, 'hilton.com'),
(4, 6, 'L\'hotel à Bob', 'Rustique', 0, NULL),
(5, 7, 'Hilton', 'Luxe', 1, 'hilton.com'),
(6, 7, 'airBnB', 'Luxe', 0, 'airbnb.com'),
(7, 8, 'Hilton', 'Luxe', 1, 'hilton.com'),
(8, 8, 'On charge à l\'heure', 'taux horaire', 0, NULL),
(19, 4, 'Camping on foret', 'Camping', 0, NULL),
(32, 3, 's', NULL, 0, NULL),
(33, 39, 't', NULL, 0, NULL),
(34, 40, 'r', NULL, 0, NULL),
(35, 7, 'g', NULL, 0, NULL),
(36, 41, '1', NULL, 0, NULL),
(37, 42, '2', NULL, 0, NULL),
(38, 43, '3', NULL, 0, NULL),
(39, 44, '4', NULL, 0, NULL),
(40, 6, 'r', NULL, 0, NULL),
(41, 2, 'e', NULL, 0, NULL),
(42, 6, 'a', NULL, 0, NULL),
(43, 45, 'airBnB', NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `idImage` int(11) NOT NULL,
  `url` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `jour`
--

CREATE TABLE `jour` (
  `idJour` int(11) NOT NULL,
  `idLieu` int(10) DEFAULT NULL,
  `idEtape` int(11) NOT NULL,
  `idActivite` int(11) DEFAULT NULL,
  `idHebergement` int(11) DEFAULT NULL,
  `idDinner` int(11) DEFAULT NULL,
  `idSouper` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `jour`
--

INSERT INTO `jour` (`idJour`, `idLieu`, `idEtape`, `idActivite`, `idHebergement`, `idDinner`, `idSouper`) VALUES
(26, 6, 37, 11, 42, 54, 54),
(27, 45, 38, 1, 43, 63, 1);

-- --------------------------------------------------------

--
-- Table structure for table `lieu`
--

CREATE TABLE `lieu` (
  `idLieu` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `ville` varchar(50) DEFAULT NULL,
  `pays` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lieu`
--

INSERT INTO `lieu` (`idLieu`, `nom`, `ville`, `pays`) VALUES
(1, NULL, NULL, NULL),
(7, NULL, 'Barcelone', 'Espagne'),
(6, NULL, 'Florence', 'France'),
(2, NULL, 'Montreal', 'Canada'),
(3, NULL, 'New-York', 'Etats-Unis'),
(5, NULL, 'Paris', 'France'),
(8, NULL, 'Venise', 'Italie'),
(41, '1', NULL, NULL),
(42, '2', NULL, NULL),
(43, '3', NULL, NULL),
(44, '4', NULL, NULL),
(45, 'Barcelone Espagne', NULL, NULL),
(40, 'rr', NULL, NULL),
(39, 'yt', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `manger`
--

CREATE TABLE `manger` (
  `idManger` int(11) NOT NULL,
  `idLieu` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `siteweb` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `manger`
--

INSERT INTO `manger` (`idManger`, `idLieu`, `nom`, `siteweb`) VALUES
(1, 1, '', NULL),
(46, 5, 'Le petit pain chaud', 'lepetitpainchaud.fr'),
(47, 5, 'Au café enchanté', 'enchanteCafe.fr'),
(48, 6, '', NULL),
(49, 6, 'La marmite à maman', 'marmitemarmite.fr'),
(50, 7, 'La soupe chaude', 'cestbondlasoupe.fr'),
(51, 7, 'Pizzaria mamamiya', 'mamamiya.com'),
(52, 8, 'Pasta pasta pasta', 'welovepasta.com'),
(53, 8, 'El restaurante bueno', 'lolwtf.com'),
(54, 6, 'De la bonne bouffe', NULL),
(55, 3, 's', NULL),
(56, 40, 'r', NULL),
(57, 7, 'g', NULL),
(58, 41, '1', NULL),
(59, 42, '2', NULL),
(60, 43, '3', NULL),
(61, 44, '4', NULL),
(62, 2, 'e', NULL),
(63, 45, 'd', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `idMessage` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `contenu` varchar(500) NOT NULL,
  `messageLu` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`idMessage`, `idUtilisateur`, `titre`, `contenu`, `messageLu`) VALUES
(1, 2, 'Annulation', 'J\'aimerais annuler mon voyage, car mon poisson rouge est malade et il a besoin de mon support morale. Merci de votre compréhension.', 0),
(2, 4, 'Très bon service à la clientèle', 'J\'ai été reçu par un gentilhomme nommé Abdel. Il avait un très bon service. Courtois, aimable, et beau. Puis-je avoir son numéro de téléphone stp?', 0),
(3, 2, 'Annulation', 'J\'aimerais annuler mon voyage, car mon poisson rouge est malade et il a besoin de mon support morale. Merci de votre compréhension.', 0),
(4, 4, 'Très bon service à la clientèle', 'J\'ai été reçu par un gentilhomme nommé Abdel. Il avait un très bon service. Courtois, aimable, et beau. Puis-je avoir son numéro de téléphone stp?', 0);

-- --------------------------------------------------------

--
-- Table structure for table `newletter`
--

CREATE TABLE `newletter` (
  `idNewletter` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `contenu` varchar(500) NOT NULL,
  `dateDebut` date DEFAULT NULL,
  `dateFin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `newletter`
--

INSERT INTO `newletter` (`idNewletter`, `idUtilisateur`, `titre`, `contenu`, `dateDebut`, `dateFin`) VALUES
(1, 6, 'Une tempête frappe Milan', 'Les destinations voyage en direction de Milan sont interrompu jusqu à nouvelle ordre. Merci de votre compréhension..', '2019-05-16', '2019-05-20'),
(2, 6, 'message1', 'problems!!!', '2019-05-21', '2019-05-22'),
(3, 6, 'Chaleur extreme au bresil', 'Creme soleil obligatoire.', '2019-05-21', '2019-05-22');

-- --------------------------------------------------------

--
-- Table structure for table `panier`
--

CREATE TABLE `panier` (
  `idPanier` int(11) NOT NULL,
  `idDepart` int(11) NOT NULL,
  `nbAdultes` int(11) DEFAULT '1',
  `nbEnfants` int(11) DEFAULT '0',
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `panier`
--

INSERT INTO `panier` (`idPanier`, `idDepart`, `nbAdultes`, `nbEnfants`, `idUtilisateur`) VALUES
(3, 6, 1, 0, 15),
(8, 12, 1, 0, 15),
(9, 11, 1, 0, 15),
(11, 5, 1, 0, 15),
(16, 11, 1, 0, 15);

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `idUtilisateur` int(11) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `courriel` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL DEFAULT 'p@ssw0rd',
  `sexe` varchar(50) DEFAULT NULL,
  `adresse` varchar(50) DEFAULT NULL,
  `ville` varchar(50) DEFAULT NULL,
  `codePostal` varchar(50) DEFAULT NULL,
  `pays` varchar(50) DEFAULT NULL,
  `role` varchar(50) NOT NULL DEFAULT 'Membre'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`idUtilisateur`, `prenom`, `nom`, `courriel`, `password`, `sexe`, `adresse`, `ville`, `codePostal`, `pays`, `role`) VALUES
(2, 'Charles', 'Tremblay', 'charles@hotmail.com', 'chatetchien', 'Homme', '123 rue de la porte', 'Montreal', 'H4K9D3', 'Canada', 'Membre'),
(3, 'Suzie', 'Karate', 'Suzi@outlook.com', 'ilovemaman', 'Femme', '345 rue Sherbrooke', 'Montreal', 'G8K9D7', 'Canada', 'Admin'),
(4, 'Jose', 'Gonzalez', 'jose@gmail.com', 'poutine', 'Homme', '9876 Saint-Andre', 'Montrel', 'H4K9D3', 'Canada', 'Membre'),
(5, 'Catherine', 'Cossette', 'catherine_45@hotmail.com', 'ryanna', 'Femmme', '5667 du Diable', 'Quebec', 'H4K9D3', 'Canada', 'Membre'),
(6, 'Admin', 'Istrateur', 'admin@gmail.com', 'admin', 'non-binaire', '456 rue de la programmation', 'Montreal', 'K9F3H6', 'Canada', 'Admin'),
(13, 'Julien', 'Ouellet', 'exemple@hotmail.fr', '$2y$10$huvRPBPr8CzAHA1g0p7gHe3EHTtQAy6/EVX7RyOt1RdWjlxm4X/0K', NULL, NULL, NULL, NULL, NULL, 'Membre'),
(14, 'Abdel', 'Hidalgo', 'abdel.hidalgo@gmail.com', 'p@ssw0rd', NULL, NULL, NULL, NULL, NULL, 'Membre'),
(15, 'Paulo', 'Oliveira', 'craisse@mail.com', '$2y$10$3ocNMTP8lm1vHKnaGkTVAu8MXe41Oxftq03Z4hAar/5jYdD8s7bpG', NULL, NULL, NULL, NULL, NULL, 'Membre'),
(16, 'Dudu', 'Pendejo', 'pendejo@mail.com', '$2y$10$4WM1LzE8zfPqGiISx85pR..i0T43pC5CFuYU1T7fq5WLASV6pCudu', NULL, NULL, NULL, NULL, NULL, 'Membre');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activite`
--
ALTER TABLE `activite`
  ADD PRIMARY KEY (`idActivite`),
  ADD UNIQUE KEY `idLieu_2` (`idLieu`,`nom`),
  ADD KEY `idLieu` (`idLieu`);

--
-- Indexes for table `circuit`
--
ALTER TABLE `circuit`
  ADD PRIMARY KEY (`idCircuit`);

--
-- Indexes for table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`idCommande`),
  ADD KEY `idDepart` (`idDepart`),
  ADD KEY `idUtilisateur` (`idUtilisateur`);

--
-- Indexes for table `depart`
--
ALTER TABLE `depart`
  ADD PRIMARY KEY (`idDepart`),
  ADD KEY `idCircuit` (`idCircuit`);

--
-- Indexes for table `detailsimage`
--
ALTER TABLE `detailsimage`
  ADD PRIMARY KEY (`idDetailsImage`),
  ADD KEY `idCircuit` (`idCircuit`),
  ADD KEY `idImage` (`idImage`);

--
-- Indexes for table `etape`
--
ALTER TABLE `etape`
  ADD PRIMARY KEY (`idEtape`),
  ADD KEY `idCircuit` (`idCircuit`);

--
-- Indexes for table `hebergement`
--
ALTER TABLE `hebergement`
  ADD PRIMARY KEY (`idHebergement`),
  ADD UNIQUE KEY `idLieu_2` (`idLieu`,`nom`),
  ADD KEY `idLieu` (`idLieu`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`idImage`);

--
-- Indexes for table `jour`
--
ALTER TABLE `jour`
  ADD PRIMARY KEY (`idJour`),
  ADD KEY `idEtape` (`idEtape`),
  ADD KEY `idActivite` (`idActivite`),
  ADD KEY `idDinner` (`idDinner`),
  ADD KEY `idHebergement` (`idHebergement`),
  ADD KEY `idSouper` (`idSouper`),
  ADD KEY `idLieu` (`idLieu`);

--
-- Indexes for table `lieu`
--
ALTER TABLE `lieu`
  ADD PRIMARY KEY (`idLieu`),
  ADD UNIQUE KEY `nom` (`nom`,`ville`,`pays`);

--
-- Indexes for table `manger`
--
ALTER TABLE `manger`
  ADD PRIMARY KEY (`idManger`),
  ADD UNIQUE KEY `idLieu_2` (`idLieu`,`nom`),
  ADD KEY `idLieu` (`idLieu`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`idMessage`),
  ADD KEY `idUtilisateur` (`idUtilisateur`);

--
-- Indexes for table `newletter`
--
ALTER TABLE `newletter`
  ADD PRIMARY KEY (`idNewletter`),
  ADD KEY `idUtilisateur` (`idUtilisateur`);

--
-- Indexes for table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`idPanier`),
  ADD KEY `idDepart` (`idDepart`),
  ADD KEY `idUtilisateur` (`idUtilisateur`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idUtilisateur`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activite`
--
ALTER TABLE `activite`
  MODIFY `idActivite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `circuit`
--
ALTER TABLE `circuit`
  MODIFY `idCircuit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `commande`
--
ALTER TABLE `commande`
  MODIFY `idCommande` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `depart`
--
ALTER TABLE `depart`
  MODIFY `idDepart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `detailsimage`
--
ALTER TABLE `detailsimage`
  MODIFY `idDetailsImage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etape`
--
ALTER TABLE `etape`
  MODIFY `idEtape` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `hebergement`
--
ALTER TABLE `hebergement`
  MODIFY `idHebergement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `idImage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jour`
--
ALTER TABLE `jour`
  MODIFY `idJour` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `lieu`
--
ALTER TABLE `lieu`
  MODIFY `idLieu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `manger`
--
ALTER TABLE `manger`
  MODIFY `idManger` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `idMessage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `newletter`
--
ALTER TABLE `newletter`
  MODIFY `idNewletter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `panier`
--
ALTER TABLE `panier`
  MODIFY `idPanier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activite`
--
ALTER TABLE `activite`
  ADD CONSTRAINT `activite_ibfk_1` FOREIGN KEY (`idLieu`) REFERENCES `lieu` (`idLieu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`idDepart`) REFERENCES `depart` (`idDepart`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `depart`
--
ALTER TABLE `depart`
  ADD CONSTRAINT `depart_ibfk_2` FOREIGN KEY (`idCircuit`) REFERENCES `circuit` (`idCircuit`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detailsimage`
--
ALTER TABLE `detailsimage`
  ADD CONSTRAINT `detailsimage_ibfk_1` FOREIGN KEY (`idCircuit`) REFERENCES `circuit` (`idCircuit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detailsimage_ibfk_2` FOREIGN KEY (`idImage`) REFERENCES `image` (`idImage`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `etape`
--
ALTER TABLE `etape`
  ADD CONSTRAINT `etape_ibfk_1` FOREIGN KEY (`idCircuit`) REFERENCES `circuit` (`idCircuit`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `jour`
--
ALTER TABLE `jour`
  ADD CONSTRAINT `jour_ibfk_1` FOREIGN KEY (`idEtape`) REFERENCES `etape` (`idEtape`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jour_ibfk_2` FOREIGN KEY (`idActivite`) REFERENCES `activite` (`idActivite`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jour_ibfk_3` FOREIGN KEY (`idDinner`) REFERENCES `manger` (`idManger`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jour_ibfk_4` FOREIGN KEY (`idHebergement`) REFERENCES `hebergement` (`idHebergement`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jour_ibfk_6` FOREIGN KEY (`idSouper`) REFERENCES `manger` (`idManger`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jour_ibfk_7` FOREIGN KEY (`idLieu`) REFERENCES `lieu` (`idLieu`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Database: `h18bdfilms`
--
CREATE DATABASE IF NOT EXISTS `h18bdfilms` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `h18bdfilms`;

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `idf` int(11) NOT NULL,
  `titre` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `duree` int(11) NOT NULL,
  `res` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `pochette` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`idf`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `idf` int(11) NOT NULL AUTO_INCREMENT;
--
-- Database: `nodejs_login`
--
CREATE DATABASE IF NOT EXISTS `nodejs_login` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodejs_login`;
