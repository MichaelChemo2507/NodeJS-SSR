-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2025 at 06:09 PM
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

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`ID`, `name`) VALUES
(8, 'das'),
(9, 'java#'),
(10, 'js'),
(11, 'sa'),
(12, 'ads'),
(13, 'ads'),
(14, 'ads'),
(15, 'ads');

-- --------------------------------------------------------

--
-- Table structure for table `courses_to_teathers`
--

CREATE TABLE `courses_to_teathers` (
  `ID` int(250) NOT NULL,
  `user_id` int(250) NOT NULL,
  `course_id` int(250) NOT NULL
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
  `password` varchar(250) NOT NULL,
  `email` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `name`, `user_level`, `user_name`, `password`, `email`) VALUES
(3, 'Michael', 1, 'Mihcael_No_Logic', '12345678', 'mnh8551@gmail.com'),
(5, 'Maor', 1, 'Maor_No_Brain', '12345678', 'meor8551@gmail.com'),
(6, 'Maor', 2, 'Maor_No_Brain', '12345678', 'meor8551@gmail.com'),
(7, 'Micah', 1, 'micha', '25d55ad283a', 'mnh8551@gmail.com'),
(8, 'MMMM', 1, 'dsf', '839787a428a', 'mnh8551@gmail.com'),
(9, 'MMMM', 1, 'dsf', '839787a428a626a79586f23b998d7434', 'mnh8551@gmail.com'),
(10, 'MMMM', 1, 'dsf', '786453f40669aedae796369d4c2a8b9a', 'mnh8551@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user_lavel`
--

CREATE TABLE `user_lavel` (
  `ID` int(11) NOT NULL,
  `name` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_lavel`
--

INSERT INTO `user_lavel` (`ID`, `name`) VALUES
(1, 'Teacher'),
(2, 'Student');

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
-- Indexes for table `courses_to_teathers`
--
ALTER TABLE `courses_to_teathers`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `course_id` (`course_id`);

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `courses_to_teathers`
--
ALTER TABLE `courses_to_teathers`
  MODIFY `ID` int(250) NOT NULL AUTO_INCREMENT;

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_lavel`
--
ALTER TABLE `user_lavel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses_to_teathers`
--
ALTER TABLE `courses_to_teathers`
  ADD CONSTRAINT `courses_to_teathers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `courses_to_teathers_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`ID`);

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
