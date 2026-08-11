-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 07, 2026 at 11:44 AM
-- Server version: 10.11.18-MariaDB-cll-lve
-- PHP Version: 8.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cell24`
--

-- --------------------------------------------------------

--
-- Table structure for table `enquiries`
--

CREATE TABLE `enquiries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `remarks` text DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `country_code` varchar(20) DEFAULT NULL,
  `service_type` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `enquiries`
--

INSERT INTO `enquiries` (`id`, `name`, `email`, `mobile`, `created_at`, `updated_at`, `remarks`, `company_name`, `country_code`, `service_type`) VALUES
(39, 'Milind', 'vajrakavach@rediffmail.com', '+917400088455', '2023-12-29 22:01:42', '2023-12-29 22:01:42', NULL, NULL, NULL, NULL),
(40, 'Milind', 'vajrakavach@rediffmail.com', '+917400088455', '2023-12-29 22:02:01', '2023-12-29 22:02:01', NULL, NULL, NULL, NULL),
(41, 'YOGESH', 'yogeshyash_2005@rediffmail.com', '9011685151', '2023-12-30 01:20:28', '2023-12-30 01:20:28', NULL, NULL, NULL, NULL),
(42, 'Murugan', 'pillai@cell24x7.com', '9892891772', '2024-01-02 19:09:57', '2024-01-02 19:09:57', NULL, NULL, NULL, NULL),
(43, 'admin', 'admin@admin.com', '12345678', '2024-01-03 05:22:09', '2024-01-03 05:22:09', NULL, NULL, NULL, NULL),
(44, 'admin', 'admin@admin.com', '12345678', '2024-01-03 05:22:22', '2024-01-03 05:22:22', NULL, NULL, NULL, NULL),
(45, 'admin', 'admin@admin.com', '123456', '2024-01-03 05:24:22', '2024-01-03 05:24:22', NULL, NULL, NULL, NULL),
(46, 'admin', 'admin@admin.com', '123456666', '2024-01-03 05:25:25', '2024-01-03 05:25:25', NULL, NULL, NULL, NULL),
(47, 'Murugan', 'pillai@cell24x7.com', '9892891772', '2024-01-03 07:54:50', '2024-01-03 07:54:50', NULL, NULL, NULL, NULL),
(48, 'Devakumari', 'devakumari.nadar@cell24x7.com', '7304763972', '2024-01-05 03:25:51', '2024-01-05 03:25:51', NULL, NULL, NULL, NULL),
(49, 'pothy', 'pothy@gmail.com', '9688373372', '2024-01-10 20:49:23', '2024-01-10 20:49:23', NULL, NULL, NULL, NULL),
(50, 'Deva Kumari ', 'devakumari.nadar@cell24x7.com', '7304763972', '2024-01-12 03:42:40', '2024-01-12 03:42:40', NULL, NULL, NULL, NULL),
(51, 'Murugan', 'Pillai@cell24x7.com', '9892891772', '2024-01-13 03:39:28', '2025-02-05 16:37:58', 'hello sir', NULL, NULL, NULL),
(52, 'sandeep yadav', 'sandeep.sde.pss@gmail.com', '09876839965', '2024-01-13 04:04:55', '2024-01-13 04:04:55', NULL, NULL, NULL, NULL),
(53, 'Rinky Pal', 'rinkyp071@gmail.com', '9167547965', '2024-01-13 04:10:20', '2024-01-13 04:10:20', NULL, NULL, NULL, NULL),
(54, 'Rinky pal', 'rinkyp071@gmail.com', '9167547965', '2024-01-13 04:18:15', '2024-01-13 04:18:15', NULL, NULL, NULL, NULL),
(55, 'admin', 'admin@admin.com', '9688373372', '2024-01-13 23:46:14', '2024-01-13 23:46:14', NULL, NULL, NULL, NULL),
(56, 'admin', 'admin@admin.com', '9688373372', '2024-01-13 23:58:56', '2024-01-13 23:58:56', NULL, NULL, NULL, NULL),
(57, 'admin', 'admin@admin.com', '9688373372', '2024-01-14 00:00:10', '2024-01-14 00:00:10', NULL, NULL, NULL, NULL),
(58, 'Birla institute of technology', 'sandeepyadavallmcaentrance2021@gmail.com', '09876839965', '2024-01-14 00:08:51', '2024-01-14 00:08:51', NULL, NULL, NULL, NULL),
(59, 'Rinky pal', 'rinky.cell24x7@gmail.com', '9167547965', '2024-01-14 00:10:16', '2024-01-14 00:10:16', NULL, NULL, NULL, NULL),
(60, 'Birla institute of technology', 'sandeepyadavallmcaentrance2021@gmail.com', '09876839965', '2024-01-14 00:17:23', '2024-01-14 00:17:23', NULL, NULL, NULL, NULL),
(61, 'Rinky', 'rinkyp071@gmail.com', '9167547965', '2024-01-14 00:25:02', '2024-01-14 00:25:02', NULL, NULL, NULL, NULL),
(62, 'Rinky', 'rinkyp071@gmail.com', '9167547965', '2024-01-14 00:29:06', '2024-01-14 00:29:06', NULL, NULL, NULL, NULL),
(63, 'Birla institute of technology', 'sandeepyadavallmcaentrance2021@gmail.com', '09876839965', '2024-01-14 23:13:14', '2024-01-14 23:13:14', NULL, NULL, NULL, NULL),
(64, 'admin', 'pothy01@gmail.com', '9688373372', '2024-01-16 23:17:04', '2024-01-16 23:17:04', NULL, NULL, NULL, NULL),
(65, 'PILLAI MURUGAN', 'pillai@cell24x7.com', '9892891772', '2024-01-16 23:57:58', '2024-01-16 23:57:58', NULL, NULL, NULL, NULL),
(66, 'PILLAI MURUGAN', 'pillai@cell24x7.com', '9892891772', '2024-01-19 03:14:59', '2024-01-19 03:14:59', NULL, NULL, NULL, NULL),
(67, 'PILLAI MURUGAN', 'pillai@cell24x7.com', '9892891772', '2024-01-19 03:20:20', '2024-01-19 03:20:20', NULL, NULL, NULL, NULL),
(68, 'pothy pothy', 'admin@admin.com', '9688373372', '2024-01-19 03:55:41', '2024-01-19 03:55:41', NULL, NULL, NULL, NULL),
(69, 'MURUGAN PILLAI', 'pillai@cell24x7.com', '9892891772', '2024-01-19 09:46:00', '2024-01-19 09:46:00', NULL, NULL, NULL, NULL),
(70, 'pothytest002', 'pothy02@gmail.com', '9363633372', '2024-01-19 10:00:16', '2024-01-19 10:00:16', NULL, NULL, NULL, NULL),
(71, 'ASDFGHJ', 'yogeshhhh@gmail.com', '9892891772', '2024-01-24 02:10:53', '2024-01-24 02:10:53', NULL, NULL, NULL, NULL),
(72, 'Abhay', 'abhay.mayekar@bicholimurbanbank.com', '9423152581', '2024-01-29 01:14:30', '2024-01-29 01:14:30', NULL, NULL, NULL, NULL),
(73, 'Pawan', 'pawan.kumar@pargro.co.in', '9560605393', '2024-02-01 19:21:20', '2024-02-01 19:21:20', NULL, NULL, NULL, NULL),
(74, 'MURUGAN', 'pillai@cell24x7.com', '9892891772', '2024-02-03 21:01:06', '2024-02-03 21:01:06', NULL, NULL, NULL, NULL),
(75, 'vincent', 'info@onlycorecutting.com', '6381025890', '2024-02-07 05:22:52', '2024-02-07 05:22:52', NULL, NULL, NULL, NULL),
(76, 'pothy pothy', 'pothy01@gmail.com', '9688373372', '2024-02-09 22:57:46', '2024-02-09 22:57:46', NULL, NULL, NULL, NULL),
(77, 'PILLAI MURUGAN', 'pillai@cell24x7.com', '9892891772', '2024-02-10 00:35:15', '2024-02-10 00:35:15', NULL, NULL, NULL, NULL),
(78, 'Ava', 'ava@rozper.com', '9292014104', '2024-02-27 05:48:48', '2024-02-27 05:48:48', NULL, NULL, NULL, NULL),
(79, 'Sujit', 'dubeysujit16@gmail.com', '8369288512', '2024-03-05 10:10:41', '2024-03-05 10:10:41', NULL, NULL, NULL, NULL),
(80, 'sandeep', 'sandeep.sde.pss@gmail.com', '09876839965', '2024-04-26 00:37:52', '2024-04-26 00:37:52', NULL, NULL, NULL, NULL),
(81, 'Rinky', 'rinky.cell24x7@gmail.com', '9167547965', '2024-04-26 00:38:23', '2024-04-26 00:38:23', NULL, NULL, NULL, NULL),
(82, 'Birla', 'sandeepyadavallmcaentrance2021@gmail.com', '09876839965', '2024-04-26 00:50:45', '2024-04-26 00:50:45', NULL, NULL, NULL, NULL),
(83, 'Poonam', 'poonam.cell24x7@gmail.com', '6757868789', '2024-04-26 00:51:48', '2024-04-26 00:51:48', NULL, NULL, NULL, NULL),
(84, 'Vicky', 'Vicky@tele-sms.com', '852-69399754', '2024-04-28 03:11:51', '2024-04-28 03:11:51', NULL, NULL, NULL, NULL),
(85, 'Christy', 'christy@zoomwings.co.uk', '09811517337', '2024-05-01 01:16:02', '2024-05-01 01:16:02', NULL, NULL, NULL, NULL),
(86, 'Devakumari', 'devakumari.nadar1510@gmail.com', '7304763972', '2024-05-14 01:39:46', '2024-05-14 01:39:46', NULL, NULL, NULL, NULL),
(87, 'Murugan', 'pillai@cell24x7.com', '9892891772', '2024-05-14 01:43:35', '2024-05-14 01:43:35', NULL, NULL, NULL, NULL),
(88, 'sandeep', 'sandeep.sde.pss@gmail.com', '09876839965', '2024-05-14 01:48:14', '2024-05-14 01:48:14', NULL, NULL, NULL, NULL),
(89, 'Birla', 'sandeepyadavallmcaentrance2021@gmail.com', '09876839965', '2024-05-14 01:48:46', '2024-05-14 01:48:46', NULL, NULL, NULL, NULL),
(90, 'Rinky', 'rinki.pal@cell24x7.in', '57890934', '2024-05-14 02:08:11', '2024-05-14 02:08:11', NULL, NULL, NULL, NULL),
(91, 'Dia', 'mughillab@gmail.com', '7304763972', '2024-05-14 02:08:33', '2024-05-14 02:08:33', NULL, NULL, NULL, NULL),
(92, 'Birla', 'sandeepyadavallmcaentrance2021@gmail.com', '09876839965', '2024-05-14 04:53:51', '2024-05-14 04:53:51', NULL, NULL, NULL, NULL),
(93, 'Arun', 'arunkumar.d@risolutortechnologies.com', '9790941944', '2024-05-15 02:21:08', '2024-05-15 02:21:08', NULL, NULL, NULL, NULL),
(94, 'Eva', 'eva.cohen@nettyawards.com', '9173841330', '2024-05-16 13:15:11', '2024-05-16 13:15:11', NULL, NULL, NULL, NULL),
(95, 'Sam', 'calebsamemmanuel@gmail.com', '8610465661', '2024-05-22 22:59:59', '2024-05-22 22:59:59', NULL, NULL, NULL, NULL),
(96, 'Sherry', 'sherry@letsdial.com', '+1 (814) 300-84', '2024-05-31 22:59:26', '2024-05-31 22:59:26', NULL, NULL, NULL, NULL),
(97, 'Christy', 'christy@zoomwings.co.uk', '09811517337', '2024-06-04 01:31:37', '2024-06-04 01:31:37', NULL, NULL, NULL, NULL),
(98, 'Pradeep', 'pradeep.sukumar@routemobile.com', '9900084110', '2024-06-10 23:22:32', '2024-06-10 23:22:32', NULL, NULL, NULL, NULL),
(99, 'Dhanussh ', 'accounts@arumart.co.in', '9152551391', '2024-06-11 02:55:14', '2024-06-11 02:55:14', NULL, NULL, NULL, NULL),
(100, 'Manikha ', 'manikkaselvan2333@gmail.com', '9994878278', '2024-07-03 04:52:36', '2024-07-03 04:52:36', NULL, NULL, NULL, NULL),
(101, 'GAYATHRI ', 'gayathirig95@gmail.com', '9994921171', '2024-07-09 01:02:48', '2024-07-09 01:02:48', NULL, NULL, NULL, NULL),
(102, 'GAYATHRI ', 'gayathirig95@gmail.com', '9994921171', '2024-07-09 01:03:21', '2024-07-09 01:03:21', NULL, NULL, NULL, NULL),
(103, 'Badri', 'badri.b@learnengg.com', '8248482168', '2024-07-16 00:33:20', '2024-07-16 00:33:20', NULL, NULL, NULL, NULL),
(104, 'Murugan', 'pillai@cell24x7.com', '8779721034', '2024-07-22 02:47:21', '2024-07-22 02:47:21', NULL, NULL, NULL, NULL),
(105, 'Shila', 'shila_nair1972@gmail.com', '9826300753', '2024-07-24 02:22:59', '2024-07-24 02:22:59', NULL, NULL, NULL, NULL),
(106, 'sandeep', 'sandeep.sde.pss@gmail.com', '09876839965', '2024-07-24 23:15:12', '2024-07-24 23:15:12', NULL, NULL, NULL, NULL),
(107, 'Rinky', 'rinki.cell24x7@gmail.com', '9167547965', '2024-07-24 23:16:38', '2024-07-24 23:16:38', NULL, NULL, NULL, NULL),
(108, 'Shaila', 'saraswathy@gmail.com', '9920936152', '2024-07-26 05:10:32', '2024-07-26 05:10:32', NULL, NULL, NULL, NULL),
(109, 'mohamed', 'akbarg28@gmail.com', '9789548929', '2024-08-05 03:53:40', '2024-08-05 03:53:40', NULL, NULL, NULL, NULL),
(110, 'Jagadish', '2009fti@gmail.com', '9965412846', '2024-08-09 19:50:04', '2024-08-09 19:50:04', NULL, NULL, NULL, NULL),
(111, 'ramgopal', 'ramgopalsharma@gmail.com', '7653456986', '2024-09-04 05:10:18', '2024-09-04 05:10:18', NULL, NULL, NULL, NULL),
(112, 'Abhishek', 'abhishek.navathe@gmail.com', '9409492661', '2024-10-06 21:51:32', '2024-10-06 21:51:32', NULL, NULL, NULL, NULL),
(113, 'Abhishek', 'abhishek.navathe@gmail.com', '9409492661', '2024-10-06 21:53:03', '2024-10-06 21:53:03', NULL, NULL, NULL, NULL),
(114, 'Pavithra', 'networksupport@readylink.in', '7397736011', '2024-10-07 00:27:28', '2025-02-05 16:47:04', NULL, NULL, NULL, NULL),
(115, 'Valerie', 'valerie_low@otpp.com', '97108090', '2024-11-08 00:59:39', '2024-11-08 00:59:39', NULL, NULL, NULL, NULL),
(116, 'kavin', 'kavint4545@gmail.com', '8428482151', '2024-12-04 23:35:21', '2024-12-04 23:35:21', NULL, NULL, NULL, NULL),
(117, 'testy', 'test@gmail.com', '23456789435', '2024-12-08 23:02:14', '2024-12-08 23:02:14', NULL, NULL, NULL, NULL),
(118, 'Jayant', 'jayant@cloudcx.ai', '0', '2024-12-10 07:29:35', '2024-12-10 07:29:35', NULL, NULL, NULL, NULL),
(119, 'Jayant', 'jayant@cloudcx.ai', '0', '2024-12-10 07:29:50', '2024-12-10 07:29:50', NULL, NULL, NULL, NULL),
(264, 'Mnagesh', 'mangesh.nawale@ionexchange.co.in', '9028222273', '2024-12-17 01:40:14', '2024-12-17 01:40:14', NULL, NULL, NULL, NULL),
(265, 'Devakumari', 'devakumari.nadardk@gmail.com', '7304763972', '2025-01-07 23:51:03', '2025-01-07 23:51:03', NULL, NULL, NULL, NULL),
(266, 'Sandeep ', 'Sandeep@cell24x7.com', '9876839965', '2025-01-22 23:33:51', '2025-01-22 23:33:51', NULL, NULL, NULL, NULL),
(267, 'Appunraj', 'appunraj144@gmail.com', '8978012747', '2025-02-04 02:47:58', '2025-02-05 17:08:58', NULL, NULL, NULL, NULL),
(268, 'mr', '979679495@qq.com', '+8617555228560', '2025-02-11 00:04:53', '2025-02-28 18:41:36', NULL, NULL, NULL, NULL),
(269, 'mr', '979679495@qq.com', '+8617555228560', '2025-02-11 00:04:53', '2025-02-11 00:04:53', NULL, NULL, NULL, NULL),
(270, 'mr', '979679495@qq.com', '+8617555228560', '2025-02-11 00:04:53', '2025-02-11 00:04:53', NULL, NULL, NULL, NULL),
(271, 'mr', '979679495@qq.com', '+8617555228560', '2025-02-11 00:04:53', '2025-02-11 00:04:53', NULL, NULL, NULL, NULL),
(272, 'Ashley', 'ashley.allen@kitchenaid-llc.com', '8782066060', '2025-03-22 02:23:46', '2025-03-22 02:23:46', NULL, NULL, NULL, NULL),
(273, 'Ashley', 'ashley.allen@kitchenaid-llc.com', '8782066060', '2025-03-22 02:23:46', '2025-03-22 02:23:46', NULL, NULL, NULL, NULL),
(274, 'kalaiselvan', 'digitalmarketing.bargain@gmail.com', '7010990183', '2025-04-10 01:35:00', '2025-04-10 01:35:00', NULL, NULL, NULL, NULL),
(275, 'Ajit', 'topnosyd@gmail.com', '+61421102265', '2025-04-28 04:58:26', '2025-04-28 04:58:26', NULL, NULL, NULL, NULL),
(276, 'anna', 'ngant@vtvlive.vn', '0975258556', '2025-05-04 07:04:34', '2025-05-04 07:04:34', NULL, NULL, NULL, NULL),
(277, 'Ynng', 'u687549@gmail.com', '886903522063', '2025-05-06 15:32:09', '2025-05-06 15:32:09', NULL, NULL, NULL, NULL),
(278, 'Uung', 'u687549@gmail.com', '886903522033', '2025-05-06 15:32:30', '2025-05-06 15:32:30', NULL, NULL, NULL, NULL),
(279, 'Yung', 'u687549@gmail.com', '886903522063', '2025-05-06 15:32:44', '2025-05-06 15:32:44', NULL, NULL, NULL, NULL),
(280, 'Devakumari', 'devakumari.nadar@gmail.com', '987643210', '2025-06-21 01:20:13', '2025-06-21 01:20:13', NULL, NULL, NULL, NULL),
(281, 'mihir', 'dalalmihir81@gmail.com', '9879558198', '2025-06-25 01:47:54', '2025-06-25 01:47:54', NULL, NULL, NULL, NULL),
(282, 'vikas', 'vy133427@gmail.com', '09198055290', '2025-07-12 00:50:31', '2025-07-12 00:50:31', NULL, NULL, NULL, NULL),
(283, 'vikas', 'vy133427@gmail.com', '09198055290', '2025-07-12 00:50:45', '2025-07-12 00:50:45', NULL, NULL, NULL, NULL),
(284, 'Vinoth', 'spvinothmedia@jesusredeems.org', '9543151563', '2025-08-18 00:14:03', '2025-08-18 00:14:03', NULL, NULL, NULL, NULL),
(285, 'Vignesh ', 'hr@suryainformatics.com', '7538803058', '2025-09-02 05:09:17', '2025-09-02 05:09:17', NULL, NULL, NULL, NULL),
(286, 'syed', 'pmit.ups@unityschool.in', '9994073188', '2025-09-17 23:10:38', '2025-09-17 23:10:38', NULL, NULL, NULL, NULL),
(287, 'Ritish', 'modgil25ritish@gmail.com', '7015792261', '2025-10-02 23:33:51', '2025-10-02 23:33:51', NULL, NULL, NULL, NULL),
(288, 'Ritish', 'modgil25ritish@gmail.com', '7015792261', '2025-10-02 23:34:28', '2025-10-02 23:34:28', NULL, NULL, NULL, NULL),
(289, 'Ritish', 'modgil25ritish@gmail.com', '7015792261', '2025-10-03 04:03:37', '2025-10-03 04:03:37', NULL, NULL, NULL, NULL),
(290, 'mala', 'malathakur2025@gmail.com', '8451025794', '2025-11-02 03:25:32', '2025-11-02 03:25:32', NULL, NULL, NULL, NULL),
(291, 'mala', 'malathakur2025@gmail.com', '8451025794', '2025-11-02 03:26:10', '2025-11-02 03:26:10', NULL, NULL, NULL, NULL),
(292, 'mala', 'malathakur2025@gmail.com', '8451025794', '2025-11-02 03:26:35', '2025-11-02 03:26:35', NULL, NULL, NULL, NULL),
(293, 'mala', 'malathakur2025@gmail.com', '8451025794', '2025-11-02 03:43:04', '2025-11-02 03:43:04', NULL, NULL, NULL, NULL),
(294, 'mala', 'malathakur2025@gmail.com', '8451025794', '2025-11-02 03:43:46', '2025-11-02 03:43:46', NULL, NULL, NULL, NULL),
(295, 'Sharon', 'sharon@teligus.in', '9895679779', '2025-11-04 10:04:35', '2025-11-04 10:04:35', NULL, NULL, NULL, NULL),
(296, 'chirag', 'valagulamchirag20@gmail.com', '9381607152', '2025-11-05 00:28:21', '2025-11-05 00:28:21', NULL, NULL, NULL, NULL),
(297, 'Sagar', 'sagardhon98@gmail.com', '8422048682', '2025-11-09 23:41:39', '2025-11-09 23:41:39', NULL, NULL, NULL, NULL),
(298, 'Devakumari', 'devakumari.nadar@cell24x7.com', '7304763972', '2025-11-13 04:38:17', '2025-11-13 04:38:17', NULL, NULL, NULL, NULL),
(299, 'Ankit', 'sushila142525@gmail.com', '9341851425', '2025-11-13 19:04:45', '2025-11-13 19:04:45', NULL, NULL, NULL, NULL),
(300, 'Ankit ', 'sushila142525@gmail.com', '9341851425', '2025-11-13 19:05:37', '2025-11-13 19:05:37', NULL, NULL, NULL, NULL),
(301, 'Farkhunda', 'nuriddinovafarkhunda08@gmail.com', '+992917990008', '2025-11-13 22:08:27', '2025-11-13 22:08:27', NULL, NULL, NULL, NULL),
(302, 'Farkhunda', 'nuriddinovafarkhunda08@gmail.com', '+99292917990008', '2025-11-13 22:09:27', '2025-11-13 22:09:27', NULL, NULL, NULL, NULL),
(303, 'xadier_22', 'nuriddinovafarkhunda08@gmail.com', '+99292917990008', '2025-11-13 22:10:16', '2025-11-13 22:10:16', NULL, NULL, NULL, NULL),
(304, 'xadier_22', 'nuriddinovafarkhunda08@gmail.com', '+992917990068', '2025-11-13 22:11:16', '2025-11-13 22:11:16', NULL, NULL, NULL, NULL),
(305, 'Dimpal', 'rajputdimpal998@gmail.com', '8059948624', '2025-11-14 07:45:34', '2025-11-14 07:45:34', NULL, NULL, NULL, NULL),
(306, 'Dimpal', 'rajputdimpal998@gmail.com', '8059948624', '2025-11-14 07:45:54', '2025-11-14 07:45:54', NULL, NULL, NULL, NULL),
(307, 'Dimpal', 'rajputdimpal998@gmail.com', '8059948624', '2025-11-14 07:45:54', '2025-11-14 07:45:54', NULL, NULL, NULL, NULL),
(308, 'Dimpal', 'rajputdimpal998@gmail.com', '8059948624', '2025-11-14 07:46:05', '2025-11-14 07:46:05', NULL, NULL, NULL, NULL),
(309, 'Mr', 'inshfndksrbbfdj@gmail.com', '7703062774', '2025-11-14 08:50:40', '2025-11-14 08:50:40', NULL, NULL, NULL, NULL),
(310, 'Ilyas', 'ilyasszahir354@gmail.com', '17', '2025-11-14 13:03:24', '2025-11-14 13:03:24', NULL, NULL, NULL, NULL),
(311, 'Ilyas', 'ilyasszahir354@gmail.com', '17', '2025-11-14 13:03:24', '2025-11-14 13:03:24', NULL, NULL, NULL, NULL),
(312, 'Rock', 'abishekrock669@gmail.com', '9527668943', '2025-11-14 13:15:07', '2025-11-14 13:15:07', NULL, NULL, NULL, NULL),
(313, 'Heidi', 'heidypatriciareyesmartines@gmail.com', '11', '2025-11-14 13:21:25', '2025-11-14 13:21:25', NULL, NULL, NULL, NULL),
(314, 'Akram', 'aramasa220@gmail.com', '0723963368', '2025-11-14 14:19:29', '2025-11-14 14:19:29', NULL, NULL, NULL, NULL),
(315, 'Akram', 'aramasa220@gmail.com', '0723963368', '2025-11-14 14:20:13', '2025-11-14 14:20:13', NULL, NULL, NULL, NULL),
(316, 'Aramasa', 'aramasa220@gmail.com', '0723963368', '2025-11-14 14:21:07', '2025-11-14 14:21:07', NULL, NULL, NULL, NULL),
(317, 'Brwn ', 'Njhonsonbrwn@gmail.com', '682812731', '2025-11-14 15:51:39', '2025-11-14 15:51:39', NULL, NULL, NULL, NULL),
(318, 'Brwn ', 'Njhonsonbrwn@gmail.com', '682812731', '2025-11-14 15:53:46', '2025-11-14 15:53:46', NULL, NULL, NULL, NULL),
(319, 'Yuba', 'yubaalik@gmail.com', '0798522362', '2025-11-14 15:58:33', '2025-11-14 15:58:33', NULL, NULL, NULL, NULL),
(320, 'yuba', 'yubaalik@gmail.com', '+213798522362', '2025-11-14 16:00:44', '2025-11-14 16:00:44', NULL, NULL, NULL, NULL),
(321, 'Mirolla', 'mirolla36@gmail.com', '+201210722315', '2025-11-14 16:32:41', '2025-11-14 16:32:41', NULL, NULL, NULL, NULL),
(322, 'Mirolla', 'mirolla36@gmail.com', '+201210722315', '2025-11-14 16:32:42', '2025-11-14 16:32:42', NULL, NULL, NULL, NULL),
(323, 'Mirolla', 'mirolla36@gmail.com', '01210722315', '2025-11-14 16:33:10', '2025-11-14 16:33:10', NULL, NULL, NULL, NULL),
(324, 'Mainuddin', 'ktm.mainuddin@gmail.com', '+919250805956', '2025-11-14 17:51:09', '2025-11-14 17:51:09', NULL, NULL, NULL, NULL),
(325, 'Shronn', 'shronndevanomoningkamailangkay@gmail.com', '082191298489', '2025-11-14 19:38:34', '2025-11-14 19:38:34', NULL, NULL, NULL, NULL),
(326, 'Sharonn Devano', 'shronndevanomoningkamailangkay@gmail.com', '123456', '2025-11-14 19:39:51', '2025-11-14 19:39:51', NULL, NULL, NULL, NULL),
(327, 'Shronn', 'shronndevanomoningkamailangkay@gmail.com', '123456', '2025-11-14 19:40:50', '2025-11-14 19:40:50', NULL, NULL, NULL, NULL),
(328, ' Abdusattorov', 'abdusattorovodilbek91@gmail.com', '+998880001246', '2025-11-14 20:00:54', '2025-11-14 20:00:54', NULL, NULL, NULL, NULL),
(329, 'Anshil', 'anshildongre921@gmail.com', '82369 85793', '2025-11-14 22:11:03', '2025-11-14 22:11:03', NULL, NULL, NULL, NULL),
(330, 'Anshil ', 'anshildongre921@gmail.com', '8236985793', '2025-11-14 22:11:25', '2025-11-14 22:11:25', NULL, NULL, NULL, NULL),
(331, 'Md', 'emd274674@gmail.com', '01743389374', '2025-11-14 23:28:00', '2025-11-14 23:28:00', NULL, NULL, NULL, NULL),
(332, 'alfrasadinsail@yahoo.com', 'alfrasadinsail@yahoo.com', '09353466327', '2025-11-14 23:30:19', '2025-11-14 23:30:19', NULL, NULL, NULL, NULL),
(333, 'Rania', 'raniakachroudi2007@gmail.com', '51058643', '2025-11-14 23:32:19', '2025-11-14 23:32:19', NULL, NULL, NULL, NULL),
(334, 'Ø±Ø§Ù†ÙŠØ©', 'raniakachroudi2007@gmail.com', '51058643', '2025-11-14 23:33:32', '2025-11-14 23:33:32', NULL, NULL, NULL, NULL),
(335, 'OM PRAKASH ', 'omprakashjha2232@gmail.com', '9110065970', '2025-11-15 00:49:08', '2025-11-15 00:49:08', NULL, NULL, NULL, NULL),
(336, 'OM PRAKASH', 'omprakashjha2232@gmail.com', '9110065970', '2025-11-15 00:50:12', '2025-11-15 00:50:12', NULL, NULL, NULL, NULL),
(337, 'OM PRAKASH', 'omprakashjha2232@gmail.com', '9110065970', '2025-11-15 00:50:35', '2025-11-15 00:50:35', NULL, NULL, NULL, NULL),
(338, 'Bhaskar', 'bm8801678@gmail.com', '+919832506021', '2025-11-15 01:07:21', '2025-11-15 01:07:21', NULL, NULL, NULL, NULL),
(339, 'Bhaskar', 'bm8801678@gmail.com', '+919832506021', '2025-11-15 01:07:40', '2025-11-15 01:07:40', NULL, NULL, NULL, NULL),
(340, 'D', 'sd7169533@gmail.com', '+1919398061382', '2025-11-15 01:30:55', '2025-11-15 01:30:55', NULL, NULL, NULL, NULL),
(341, 'Irebe tamu', 'orlairebetamu@com.gmail', '0739582409', '2025-11-15 02:36:27', '2025-11-15 02:36:27', NULL, NULL, NULL, NULL),
(342, 'Irebe jeza', 'orlairebetamu@com.gmail', '0739582409', '2025-11-15 02:37:25', '2025-11-15 02:37:25', NULL, NULL, NULL, NULL),
(343, 'Irebe tamu ', 'kezaprincesse19960@gmail.com', '0785867949', '2025-11-15 02:38:13', '2025-11-15 02:38:13', NULL, NULL, NULL, NULL),
(344, 'Zhzk', 'gmalifgamingyt@gmail.com', '01770824494', '2025-11-15 03:46:54', '2025-11-15 03:46:54', NULL, NULL, NULL, NULL),
(345, 'Alif', 'mimealif1234@gmail.com', '01770824494', '2025-11-15 03:47:26', '2025-11-15 03:47:26', NULL, NULL, NULL, NULL),
(346, 'Mb', 'mimealif1234@gmail.com', '+8801770824494', '2025-11-15 03:48:06', '2025-11-15 03:48:06', NULL, NULL, NULL, NULL),
(347, 'Abdul', 'abduljabbarabdul59@gmail.com', '+917252001673', '2025-11-15 03:54:02', '2025-11-15 03:54:02', NULL, NULL, NULL, NULL),
(348, 'Soundous', 'aouissisoundous45@gmail.com', '0552500710', '2025-11-15 04:42:16', '2025-11-15 04:42:16', NULL, NULL, NULL, NULL),
(349, 'Soundous', 'soundousaouissi45@gmail.com', '0552500710', '2025-11-15 04:43:08', '2025-11-15 04:43:08', NULL, NULL, NULL, NULL),
(350, 'Riquelme', 'riquelmesanttos17@gmail.com', '99984771278', '2025-11-15 04:59:20', '2025-11-15 04:59:20', NULL, NULL, NULL, NULL),
(351, 'Riquelme ', 'riquelmesanttos207@gmail.com', '99985535593', '2025-11-15 04:59:58', '2025-11-15 04:59:58', NULL, NULL, NULL, NULL),
(352, 'Aditya', 'adityawahyuputrawan@gmail.com', '87849352111', '2025-11-15 05:09:50', '2025-11-15 05:09:50', NULL, NULL, NULL, NULL),
(353, 'Aditya', 'adityawahyuputrawan@gmail.com', '087846352111', '2025-11-15 05:10:44', '2025-11-15 05:10:44', NULL, NULL, NULL, NULL),
(354, 'Aditya', 'adityawahyuputrawan@gmail.com', '87849352111', '2025-11-15 05:11:30', '2025-11-15 05:11:30', NULL, NULL, NULL, NULL),
(355, 'Heera', 'heerasahu949@gmail.com', '9752991454', '2025-11-15 05:48:51', '2025-11-15 05:48:51', NULL, NULL, NULL, NULL),
(356, 'AntÃ³nio ', 'alcides6002@icloud.com', '937124227', '2025-11-15 06:57:59', '2025-11-15 06:57:59', NULL, NULL, NULL, NULL),
(357, 'Amit Yadav', 'amit@gmail.com', '9876838865', '2025-11-15 08:59:36', '2025-11-15 08:59:36', NULL, 'cmt', '+91', 'voice_bot'),
(358, 'Sandeep Yadav', 'amit@gmail.com', '9878658357', '2025-11-15 10:57:14', '2025-11-15 10:57:14', NULL, 'Shiv Road Lines ', '+91', '\"[\"VoiceBot\",\"RCS\",\"Call Center Solution\"]\"'),
(359, 'Amit Yadav', 'super.admin@test.com', '9876839965', '2025-11-15 10:59:49', '2025-11-15 10:59:49', NULL, 'Shiv Road Lines ', '+91', '\"[\"VoiceBot\",\"RCS\",\"SMS\",\"Call Center Solution\"]\"'),
(360, 'Poojan', 'poojan@gmail.com', '9876839965', '2025-11-15 11:07:49', '2025-11-16 10:01:18', 'will connet you shortly', 'Ma vaishano polurions ', '+91', '\"[\"VoiceBot\",\"RCS\",\"Call Center Solution\"]\"'),
(361, 'Amit Yadav', 'support@cell24x7.com', '9876839965', '2025-11-15 12:19:55', '2025-11-15 12:19:55', NULL, 'cemt', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\"]\"'),
(362, 'goluyadav', 'support@cell24x7.com', '9876839965', '2025-11-15 12:25:24', '2025-11-15 12:25:24', NULL, 'cell24x7', '+91', '\"[\"WhatsApp Business API\",\"RCS\"]\"'),
(363, 'sameer yadav', 'support@cell24x7.com', '9856475647', '2025-11-15 12:31:17', '2025-11-15 12:31:17', NULL, 'white plus trading ', '+91', '\"[\"RCS\",\"SMS\"]\"'),
(364, 'ASNSAJ', 'support@cell24x7.com', '8475758848', '2025-11-15 12:35:34', '2025-11-15 12:35:34', NULL, 'Shiv Road Lines ', '+91', '\"[\"RCS\"]\"'),
(365, 'sDAFADFADFAF', 'test@test.com', '8786854382', '2025-11-15 12:37:33', '2025-11-15 12:37:33', NULL, 'cmt', '+91', '\"[\"VoiceBot\",\"RCS\"]\"'),
(366, 'Ajsjxjsjxkxkxkk', 'sjjsjxdj@gmail.com', '9876865436', '2025-11-15 13:28:45', '2025-11-15 13:28:45', NULL, 'Xhjdjssjjzkzkzkzk', '+91', '\"[\"VoiceBot\"]\"'),
(367, 'MURUGAN PILLAI', 'pillai@cell24x7.com', '9892891772', '2025-11-15 18:18:18', '2025-11-15 18:18:18', NULL, 'CELL24x7 MEDIA TECHNOLOGIES PVT LTD', '+1', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(368, 'Sandeep yadav', 'sandeep@cell24x7.in', '9876839965', '2025-11-15 18:40:30', '2025-11-15 18:40:30', NULL, 'Cell 24x7', '+91', '\"[\"WhatsApp Business API\",\"RCS\",\"Call Center Solution\"]\"'),
(369, 'pingsparrow', 'pillai@pingsparrow.com', '9892891772', '2025-11-15 18:43:26', '2025-11-15 18:43:26', NULL, 'Pingsparrow Pvt Ltd', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\"]\"'),
(370, 'Nanhe Lal', 'nl1681909@gmail.com', '+9759669046', '2025-11-15 20:04:35', '2025-11-15 20:04:35', NULL, 'Nanhe Kal ', '+91', '\"[\"VoiceBot\"]\"'),
(371, 'Tdhdyd Hhdydydufufd', 'hhdydydufufdtdhdyd@gmail.com', '9186140538', '2025-11-15 22:41:41', '2025-11-17 13:16:44', 'cx disconnected the call', 'Tdhdyd Hhdydydufufd', '+91', '\"[\"WhatsApp Business API\",\"RCS\",\"SMS\",\"Other Solution\"]\"'),
(372, 'Tannu Rajput ', 'tanishakalyanwat@gmail.co', '9636431030', '2025-11-15 22:49:47', '2025-11-15 22:49:47', NULL, 'Anantwar bandikui', '+91', '\"[\"SMS\"]\"'),
(373, 'Sandeep Yadav', 'amit@gmail.com', '7574837573', '2025-11-16 04:11:03', '2025-11-16 04:11:03', NULL, 'Shiv Road Lines ', '+91', '\"[\"VoiceBot\",\"RCS\"]\"'),
(374, 'ajdklajdklajflkas', 'super.admin@test.com', '8475834584', '2025-11-16 16:48:17', '2025-11-16 16:48:17', NULL, 'akfjaldkjflkdaj', '+91', '\"[\"VoiceBot\"]\"'),
(375, 'Amit', 'amitsahoo7202@gmail.com', '9798405706', '2025-11-17 07:59:17', '2025-11-17 07:59:17', NULL, 'Sahoo endstery ', '+91', '\"[\"WhatsApp Business API\"]\"'),
(376, 'Sk isarul', 'sksahidul2356@gmail.com', '+918250289844', '2025-11-17 09:22:51', '2025-11-17 13:17:14', 'Invalid data', 'à¦¬à¦¦à¦¿à¦ªà§à¦° à¦ªà§à¦°à¦¾à¦‡à¦®à¦¾à¦°à¦¿ à¦¸à§à¦•à§à¦² ', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(377, 'Suraj Surajkumar', 'surajkumarsuraj30583@gmail.com', '+917667478168', '2025-11-17 09:46:34', '2025-11-17 09:46:34', NULL, 'Suraj Surajkumar', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(378, 'Suraj Surajkumar', 'surajkumarsuraj30583@gmail.com', '+917667478168', '2025-11-17 09:47:01', '2025-11-17 09:47:01', NULL, 'Suraj Surajkumar', '+91', '\"[\"SMS\"]\"'),
(379, 'Ankit Rao', 'ankitrao5888@gmail.com', '+918976036581', '2025-11-17 21:19:12', '2025-11-18 13:22:47', 'Disconnecting the call', 'Ankit Rao', '+91', '\"[\"WhatsApp Business API\"]\"'),
(380, 'Shatyam', 'shatyamkumar627@gmail.com', '9534919853', '2025-11-18 08:36:43', '2025-11-18 13:28:24', 'Wrong enquiry, as the cx keeps on hand-over the calls to their family member', 'Satyam kumar ', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(381, 'khayla syakira attallah', 'khaylasyakira21@gmail.com', '08112900993', '2025-11-18 08:56:23', '2025-11-18 13:28:24', 'Invalid number', 'khayla', '+1', '\"[\"WhatsApp Business API\",\"Emails\"]\"'),
(382, 'Jangam', 'jangamnaresh85@gmail.com', '8639916318', '2025-11-18 11:13:52', '2025-11-18 13:28:24', 'Lanugage issue asking to speak in telugu number given to raghu', 'narsingha problem', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(383, 'Jangam', 'jangamnaresh85@gmail.com', '8639916318', '2025-11-18 11:13:52', '2025-11-18 11:13:52', NULL, 'narsingha problem', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(384, 'Jangam Naresh', 'jangamnaresh85@gmail.com', '7729836318', '2025-11-18 11:14:32', '2025-11-18 11:14:32', NULL, 'narsing the palam', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(385, 'Roopa', 'rupasaroj346@gmail.com', '9389142295', '2025-11-18 11:20:17', '2025-11-18 13:30:29', 'No requirement', 'Mohabbat mein prayagraj Jiten Chauraha', '+91', '\"[\"WhatsApp Business API\"]\"'),
(386, 'Hirak Mishra', 'hirakmishra06@gmail.com', '70010 70157', '2025-11-18 11:25:09', '2025-11-18 11:25:09', NULL, 'Hirak Mishra', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(387, 'Hirak Mishra', 'hirakmishra06@gmail.com', '70010 70157', '2025-11-18 11:25:09', '2025-11-18 13:32:28', 'No requirement', 'Hirak Mishra', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(388, 'Hirak Mishra', 'hirakmishra06@gmail.com', '70010 70157', '2025-11-18 11:25:09', '2025-11-18 11:25:09', NULL, 'Hirak Mishra', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(389, 'Nicka', 'nickajoygentaps@gmail.com', '09051207286', '2025-11-18 11:58:43', '2025-11-18 13:33:34', 'Busy on another call', 'Student ', '+61', '\"[\"WhatsApp Business API\",\"Other Solution\"]\"'),
(390, 'Singa', 'rajaraoregam.5669@gmail.com', '8555088316', '2025-11-18 12:27:24', '2025-11-18 12:27:24', NULL, 'Raj', '+91', '\"[\"SMS\"]\"'),
(391, 'Singa', 'rajaraoregam.5669@gmail.com', '8555088316', '2025-11-18 12:27:24', '2025-11-18 13:34:35', 'Disconnected the call', 'Raj', '+91', '\"[\"SMS\"]\"'),
(392, 'MURUGAN PILLAI', 'pillai@cell24x7.com', '9892891772', '2025-11-18 13:19:02', '2025-11-18 13:19:02', NULL, 'CELL24x7 MEDIA TECHNOLOGIES PVT LTD', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\"]\"'),
(393, 'Ranjtih', 'ranjith@thrillophilia.com', '9360639078', '2025-12-06 17:09:33', '2025-12-16 14:24:25', 'Arranged a demo for Voicebot on 16th December 2025, client has a volume of 50k interested in inbound and outbound dailer', 'Thrillophilia', '+91', '\"[\"VoiceBot\"]\"'),
(394, 'Madhar choodakni', 'khushboomaurya3000@gmail.com', '8840699011', '2025-12-16 09:13:48', '2025-12-16 09:13:48', NULL, 'Chodkani', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"SMS\",\"Call Center Solution\"]\"'),
(395, 'Bikram ', 'bikrambarmandpg1@gmail.com', '7029381840', '2025-12-16 13:35:01', '2025-12-16 13:35:01', NULL, 'Barmam ', '+91', '\"[\"WhatsApp Business API\"]\"'),
(396, 'Soumitra Samanta', 'soumitrasamanta875@gmail.com', '8001928017', '2025-12-17 01:44:09', '2025-12-17 01:44:09', NULL, 'rashmi ', '+91', '\"[\"SMS\"]\"'),
(397, 'Soumitra Samanta', 'soumitrasamanta875@gmail.com', '+91 70036 46142', '2025-12-17 01:44:45', '2025-12-18 15:10:45', 'Not responding the call.', 'rose', '+91', '\"[\"SMS\"]\"'),
(398, 'Laxmi ', 'abhiverma6457@gmail.com', '8890595870', '2025-12-17 13:04:27', '2025-12-18 15:11:29', 'Not responding the call', 'Komari', '+91', '\"[\"WhatsApp Business API\"]\"'),
(399, 'Hanmant ', 'sankoleranjit51@gmail.com', '9309016344', '2025-12-17 13:57:51', '2025-12-18 15:12:36', 'Wrong number', 'Sankole ', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(400, 'Ajay Walsane', 'walsaneajay2001@gmail.com', '7709481193', '2025-12-17 21:24:35', '2025-12-17 21:24:35', NULL, 'Jalgi Technologies Pvt. Ltd.', '+91', '\"[\"SMS\"]\"'),
(401, 'Tushi', 'tushiakdhau@55gmail.com', '8812801091', '2025-12-18 00:39:28', '2025-12-18 00:39:28', NULL, 'Rushu', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\"]\"'),
(402, 'Akshansh', 'thakurprince0588@gmail.com', '8815983972', '2025-12-18 09:02:31', '2025-12-18 09:02:31', NULL, 'Apple', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(403, 'Akshansh', 'thakurprince0588@gmail.com', '8815983972', '2025-12-18 09:03:50', '2025-12-18 09:03:50', NULL, 'iPhone company', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(404, 'Akshansh', 'thakurprince0588@gmail.com', '8815983972', '2025-12-18 09:04:30', '2025-12-18 09:04:30', NULL, 'iPhone company', '+91', '\"[\"Other Solution\"]\"'),
(405, 'Omkar Thorat ', 'thoratomkar2004@gmail.com', '8605612990', '2025-12-18 18:09:47', '2025-12-18 18:09:47', NULL, 'AFCS', '+91', '\"[\"SMS\"]\"'),
(406, 'Omkar Thorat', 'thoratomkar2004@gmail.com', '8605612990', '2025-12-18 18:10:53', '2025-12-18 18:10:53', NULL, 'AFCS', '+91', '\"[\"SMS\"]\"'),
(407, 'Laxman Kalesj', 'laxmankalesj@gmail.com', '8269628911', '2025-12-18 22:14:40', '2025-12-18 22:14:40', NULL, 'Laxman Kalesj', '+91', '\"[\"WhatsApp Business API\",\"Other Solution\"]\"'),
(408, 'Laxman Kalesj', 'laxmankalesj@gmail.com', '+917440326968', '2025-12-18 22:16:11', '2025-12-18 22:16:11', NULL, 'Laxman Kalesj', '+91', '\"[\"WhatsApp Business API\",\"Emails\",\"SMS\",\"Other Solution\"]\"'),
(409, 'Max jude ', 'maxjude143@gmail.com', '9366452508', '2025-12-19 08:13:25', '2025-12-19 08:13:25', NULL, 'Maxjude group of company ', '+91', '\"[\"SMS\"]\"'),
(410, '', 'namrata.enterprise96@gmail.com', '9820192005', '2025-12-19 13:10:12', '2025-12-19 13:10:12', NULL, '', '', '[]'),
(411, 'ABIR Sk', 'ask255560@gmail.com', '8158803742', '2025-12-19 15:06:19', '2025-12-19 15:06:19', NULL, 'Abirsk', '+91', '\"[\"VoiceBot\",\"WhatsApp Business API\",\"RCS\",\"Emails\",\"SMS\",\"Call Center Solution\",\"Other Solution\"]\"'),
(412, 'ABIR Sk', 'ask255560@gmail.com', '9735694379', '2025-12-19 15:06:44', '2025-12-19 15:06:44', NULL, 'Abirsk', '+91', '\"[\"WhatsApp Business API\"]\"'),
(413, 'Sahil', 'am4722584@gmail.com', '9284931531', '2025-12-19 16:28:01', '2025-12-19 16:28:01', NULL, 'India', '+91', '\"[\"SMS\"]\"'),
(414, 'Surekha Tayade', 'surekhatayade04@gmail.com', '+918830872685', '2025-12-19 19:08:02', '2025-12-19 19:08:02', NULL, 'Surekha Tayade', '+91', '\"[\"Emails\"]\"'),
(415, 'ShivaKumarbariwa', 'shivak16283@gmail.com', '958884072', '2025-12-19 19:10:57', '2025-12-19 19:10:57', NULL, 'ShivaKumarbariwa', '+91', '\"[\"WhatsApp Business API\"]\"');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enquiries`
--
ALTER TABLE `enquiries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enquiries`
--
ALTER TABLE `enquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=416;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
