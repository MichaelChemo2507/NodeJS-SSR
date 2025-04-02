-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2025 at 04:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `calender`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `ID` int(11) NOT NULL,
  `name` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lerning_track`
--

CREATE TABLE `lerning_track` (
  `ID` int(11) NOT NULL,
  `description` varchar(254) DEFAULT NULL,
  `user_ID` int(11) NOT NULL,
  `coursID` int(11) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `date` date NOT NULL,
  `is_plan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students_to_teathers`
--

CREATE TABLE `students_to_teathers` (
  `ID` int(11) NOT NULL,
  `teacher_ID` int(11) NOT NULL,
  `student_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `name` varchar(254) NOT NULL,
  `user_level` int(11) NOT NULL,
  `user_name` varchar(254) NOT NULL,
  `password` varchar(11) NOT NULL,
  `email` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_lavel`
--

CREATE TABLE `user_lavel` (
  `ID` int(11) NOT NULL,
  `name` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `lerning_track`
--
ALTER TABLE `lerning_track`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD KEY `lerning_track_fk2` (`user_ID`),
  ADD KEY `lerning_track_fk3` (`coursID`);

--
-- Indexes for table `students_to_teathers`
--
ALTER TABLE `students_to_teathers`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD KEY `students_to_teathers_fk1` (`teacher_ID`),
  ADD KEY `students_to_teathers_fk2` (`student_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD KEY `users_fk2` (`user_level`);

--
-- Indexes for table `user_lavel`
--
ALTER TABLE `user_lavel`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lerning_track`
--
ALTER TABLE `lerning_track`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students_to_teathers`
--
ALTER TABLE `students_to_teathers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_lavel`
--
ALTER TABLE `user_lavel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lerning_track`
--
ALTER TABLE `lerning_track`
  ADD CONSTRAINT `lerning_track_fk2` FOREIGN KEY (`user_ID`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `lerning_track_fk3` FOREIGN KEY (`coursID`) REFERENCES `courses` (`ID`);

--
-- Constraints for table `students_to_teathers`
--
ALTER TABLE `students_to_teathers`
  ADD CONSTRAINT `students_to_teathers_fk1` FOREIGN KEY (`teacher_ID`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `students_to_teathers_fk2` FOREIGN KEY (`student_ID`) REFERENCES `users` (`ID`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_fk2` FOREIGN KEY (`user_level`) REFERENCES `user_lavel` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
