-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Jan-2023 às 18:24
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crud`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cargo`
--

CREATE TABLE `cargo` (
  `id` int(11) NOT NULL,
  `nome_cargo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cargo`
--

INSERT INTO `cargo` (`id`, `nome_cargo`) VALUES
(1, 'Ativo'),
(2, 'Demitido'),
(3, 'Suspenso');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cargo_funcionario`
--

CREATE TABLE `cargo_funcionario` (
  `cargo_id` int(11) DEFAULT NULL,
  `funcionario_id` int(11) DEFAULT NULL,
  `criado_em` timestamp NOT NULL DEFAULT current_timestamp(),
  `atualizado_em` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cargo_funcionario`
--

INSERT INTO `cargo_funcionario` (`cargo_id`, `funcionario_id`, `criado_em`, `atualizado_em`) VALUES
(1, 25, '2023-01-18 20:27:51', '2023-01-18 16:27:51'),
(2, 26, '2023-01-18 20:55:27', '2023-01-18 16:55:27'),
(1, 36, '2023-01-19 00:45:14', '2023-01-18 20:45:14'),
(3, 37, '2023-01-19 05:33:01', '2023-01-19 01:33:01'),
(1, 38, '2023-01-19 05:40:20', '2023-01-19 01:40:20'),
(NULL, 38, '2023-01-19 05:47:52', '2023-01-19 01:47:52'),
(2, 39, '2023-01-19 06:19:12', '2023-01-19 02:19:12'),
(2, 40, '2023-01-19 06:21:10', '2023-01-19 02:21:10'),
(2, 41, '2023-01-19 06:21:36', '2023-01-19 02:21:36'),
(2, 42, '2023-01-19 06:21:51', '2023-01-19 02:21:51'),
(2, 43, '2023-01-19 06:22:17', '2023-01-19 02:22:17'),
(2, 44, '2023-01-19 06:33:32', '2023-01-19 02:33:32'),
(2, 45, '2023-01-19 06:34:05', '2023-01-19 02:34:05'),
(2, 46, '2023-01-19 06:34:56', '2023-01-19 02:34:56'),
(2, 47, '2023-01-19 06:44:26', '2023-01-19 02:44:26'),
(1, 48, '2023-01-19 06:44:59', '2023-01-19 02:44:59'),
(1, 49, '2023-01-19 06:46:22', '2023-01-19 02:46:22'),
(NULL, 50, '2023-01-19 06:47:26', '2023-01-19 02:47:26'),
(NULL, 51, '2023-01-19 07:00:33', '2023-01-19 03:00:33'),
(NULL, 52, '2023-01-19 07:11:19', '2023-01-19 03:11:19'),
(NULL, 53, '2023-01-19 07:13:49', '2023-01-19 03:13:49'),
(NULL, 54, '2023-01-19 07:15:28', '2023-01-19 03:15:28'),
(NULL, 58, '2023-01-19 07:37:52', '2023-01-19 03:37:52'),
(NULL, 59, '2023-01-19 07:38:23', '2023-01-19 03:38:23'),
(NULL, 59, '2023-01-19 07:39:24', '2023-01-19 03:39:24'),
(NULL, 65, '2023-01-19 08:51:34', '2023-01-19 04:51:34'),
(NULL, 66, '2023-01-19 08:51:53', '2023-01-19 04:51:53'),
(NULL, 67, '2023-01-19 08:52:15', '2023-01-19 04:52:15'),
(NULL, 68, '2023-01-19 08:58:21', '2023-01-19 04:58:21'),
(NULL, 69, '2023-01-19 08:59:20', '2023-01-19 04:59:20'),
(NULL, 70, '2023-01-19 09:08:11', '2023-01-19 05:08:11'),
(NULL, 71, '2023-01-19 09:08:36', '2023-01-19 05:08:36'),
(NULL, 72, '2023-01-19 09:10:24', '2023-01-19 05:10:24'),
(NULL, 73, '2023-01-19 09:12:11', '2023-01-19 05:12:11'),
(NULL, 74, '2023-01-19 09:12:57', '2023-01-19 05:12:57'),
(NULL, 75, '2023-01-19 09:14:42', '2023-01-19 05:14:42'),
(NULL, 76, '2023-01-19 22:17:40', '2023-01-19 18:17:40'),
(NULL, 77, '2023-01-19 22:24:29', '2023-01-19 18:24:29'),
(1, 78, '2023-01-19 23:53:29', '2023-01-19 19:53:29'),
(1, 79, '2023-01-19 23:57:11', '2023-01-19 19:57:11'),
(NULL, 80, '2023-01-19 23:58:16', '2023-01-19 19:58:16'),
(NULL, 81, '2023-01-20 00:07:07', '2023-01-19 20:07:07'),
(NULL, 82, '2023-01-20 00:09:11', '2023-01-19 20:09:11'),
(1, 83, '2023-01-20 00:20:57', '2023-01-19 20:20:57'),
(1, 84, '2023-01-20 00:21:27', '2023-01-21 12:43:47'),
(1, 85, '2023-01-20 00:33:56', '2023-01-19 20:33:56'),
(1, 89, '2023-01-21 16:52:03', '2023-01-21 12:52:03'),
(1, 90, '2023-01-21 16:55:18', '2023-01-21 12:55:18'),
(3, 91, '2023-01-21 17:01:38', '2023-01-21 13:01:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `id_funcionario` int(11) NOT NULL,
  `nome_completo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `funcionarios`
--

INSERT INTO `funcionarios` (`id_funcionario`, `nome_completo`) VALUES
(25, 'Erik'),
(26, 'alguem demitido'),
(27, 'tomara que funcione'),
(29, 'wefwe'),
(30, 'wefwe'),
(31, 'wefwe'),
(32, 'wefwe'),
(33, 'dfkjl'),
(34, 'dfkjl'),
(35, 'erik felipe teste'),
(36, 'erikkkkk'),
(37, 'teste sql'),
(38, 'erik felipeee'),
(39, 'teste que naao funciona'),
(40, 'teste do postman'),
(41, 'olha no front'),
(42, 'olha no front'),
(43, 'olha no front'),
(44, 'olha no front1111'),
(45, 'olha no front1111'),
(46, 'olha no front1111'),
(47, 'olha no front1111'),
(48, 'teste pra valer'),
(49, 'nem acredito que funcionou'),
(50, 'daleaaaa'),
(51, 'asdasdasdasd'),
(52, 'aaaaaa'),
(53, 'asdasdasd'),
(54, 'aaaaaaa'),
(55, 'erjdfmsdmflsakdmf'),
(56, 'asdasdasdasd'),
(57, 'asdasdasdasd'),
(58, 'asdasdasdasd'),
(59, 'asdfasdasd'),
(60, 'asdasdasdasd'),
(61, '123123123'),
(62, '123123123'),
(63, 'wefwewer'),
(64, 'asdasdasd'),
(65, 'aasdasdasd'),
(66, 'asdasdasd'),
(67, 'dsdasd'),
(68, '123123'),
(69, 'aasdsadsada'),
(70, 'asadasdaasd'),
(71, 'asdasda'),
(72, 'adsadasd'),
(73, 'funcionario teste 4'),
(74, 'asdasd'),
(75, 'ereiier'),
(76, 'sadasd'),
(77, 'asdasdasd'),
(78, 'nem acredito que funcionou'),
(79, 'nem acredito que funcionou'),
(80, 'saadaasdaasda'),
(81, 'erikkkkk'),
(82, 'asdasd'),
(83, 'asadasdasd'),
(84, 'postman patch222'),
(85, 'erik felipe '),
(89, 'andreina'),
(90, 'teste de horario'),
(91, 'ultimo teste');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `cargo_funcionario`
--
ALTER TABLE `cargo_funcionario`
  ADD KEY `fk_cargo` (`cargo_id`),
  ADD KEY `fk_funcionario` (`funcionario_id`);

--
-- Índices para tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`id_funcionario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cargo`
--
ALTER TABLE `cargo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  MODIFY `id_funcionario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cargo_funcionario`
--
ALTER TABLE `cargo_funcionario`
  ADD CONSTRAINT `fk_cargo` FOREIGN KEY (`cargo_id`) REFERENCES `cargo` (`id`),
  ADD CONSTRAINT `fk_funcionario` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionarios` (`id_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_funcionario` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionarios` (`id_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
