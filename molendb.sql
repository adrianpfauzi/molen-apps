-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2019 at 06:04 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `molendb`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang_data`
--

CREATE TABLE `barang_data` (
  `id_barang` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `pemilik` varchar(100) NOT NULL,
  `no_telp` varchar(50) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `stok` varchar(100) NOT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `keterangan` varchar(300) NOT NULL,
  `kategori` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang_data`
--

INSERT INTO `barang_data` (`id_barang`, `id_user`, `pemilik`, `no_telp`, `nama`, `stok`, `foto`, `keterangan`, `kategori`) VALUES
(34, 10, 'Adrian Fauzi', '081234567800', 'Televisi 24 Inch Merk PoliThrone', 'Bekas', NULL, 'Dijual atau dihibahkan bagi yang mau sebuah televisi 24 inch. Jika berminat silahkan menghubungi atau whatsapp di nomor telepon yang tertera. Terima Kasih.', 'Elektronik');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id_comment` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `komentar` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lapak_detail`
--

CREATE TABLE `lapak_detail` (
  `id_lapak` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `keterangan` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lapak_detail`
--

INSERT INTO `lapak_detail` (`id_lapak`, `id_user`, `nama`, `keterangan`) VALUES
(1, 1, 'Adrian Fauzi', 'Lapak yang menjual berbagai macam barang bekas'),
(3, 2, 'Toko Jaya Makmur', 'Menyediakan barang - barang bekas yang tidak terpakai tetapi bisa dimanfaatkan untuk kepentingan yang lain.'),
(4, 1, 'Toko Jaya Jaya', 'Toko punyanya si Jaya'),
(5, 2, 'Toko Suka Miskin', 'Toko yang tidak suka kaya');

-- --------------------------------------------------------

--
-- Table structure for table `user_acc`
--

CREATE TABLE `user_acc` (
  `id_user` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `alamat` varchar(200) NOT NULL,
  `kota` varchar(100) NOT NULL,
  `provinsi` varchar(100) NOT NULL,
  `no_telp` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_acc`
--

INSERT INTO `user_acc` (`id_user`, `email`, `password`, `nama`, `tgl_lahir`, `alamat`, `kota`, `provinsi`, `no_telp`) VALUES
(7, 'adrianfauzi@gmail.com', '123456', 'Adrian Fauzi', '2019-03-30', 'Tiban Housing Sekupang', 'Batam', 'Kepulauan Riau', '081234567890'),
(8, 'adrian@fauzi.com', '123456', 'Adrian Priabdi Fauzi', '2019-02-08', 'Tiban Housing Sekupang', 'Batam', 'Kepulauan Riau', '081234567890'),
(9, 'adrianfauzi@polibatam.ac.id', '123456', 'Adrian Priabdi Fauzi', '2018-11-03', 'Tiban Housing Sekupang', 'Batam', 'Kepulauran Riau', '081234567890'),
(10, 'adrian@fauzi.id', '123456', 'Adrian Fauzi', '2019-02-08', 'Tiban Housing Sekupang', 'Batam', 'Kepulauan Riau', '081234567890');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang_data`
--
ALTER TABLE `barang_data`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id_comment`),
  ADD KEY `id_user_barang` (`id_user`),
  ADD KEY `id_barang_com` (`id_barang`);

--
-- Indexes for table `lapak_detail`
--
ALTER TABLE `lapak_detail`
  ADD PRIMARY KEY (`id_lapak`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `user_acc`
--
ALTER TABLE `user_acc`
  ADD PRIMARY KEY (`id_user`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang_data`
--
ALTER TABLE `barang_data`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id_comment` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lapak_detail`
--
ALTER TABLE `lapak_detail`
  MODIFY `id_lapak` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_acc`
--
ALTER TABLE `user_acc`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `id_barang_com` FOREIGN KEY (`id_barang`) REFERENCES `barang_data` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
