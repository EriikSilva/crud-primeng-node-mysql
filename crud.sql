CREATE TABLE `funcionarios` (
  `id_funcionario` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome_completo` varchar(150) NOT NULL
) 

INSERT INTO `funcionarios` (`id_funcionario`, `nome_completo`) VALUES
(25, 'Erik'),
(26, 'alguem demitido'),
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
(83, 'asadasdasd'),
(89, 'andreina'),
(90, 'teste de horario'),
(91, 'ultimo teste');




CREATE TABLE `cargo` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `nome_cargo` varchar(100) NOT NULL
) 

INSERT INTO `cargo` (`id`, `nome_cargo`) VALUES
(1, 'Ativo'),
(2, 'Demitido'),
(3, 'Suspenso');



CREATE TABLE `cargo_funcionario` (
  `cargo_id` int(11) DEFAULT NULL,
  `funcionario_id` int(11) DEFAULT NULL,
  `criado_em` datetime NOT NULL DEFAULT current_timestamp(),
  `atualizado_em` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  CONSTRAINT `FK_cargo` FOREIGN KEY (`cargo_id`) REFERENCES `funcionarios` (`id_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_id_funcionario` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionarios` (`id_funcionario`) ON DELETE CASCADE ON UPDATE CASCADE
) 



INSERT INTO `cargo_funcionario` (`cargo_id`, `funcionario_id`, `criado_em`, `atualizado_em`) VALUES
(1, 25, '2023-01-18 20:27:51', '2023-01-18 16:27:51'),
(2, 26, '2023-01-18 20:55:27', '2023-01-18 16:55:27'),
(1, 36, '2023-01-19 00:45:14', '2023-01-18 20:45:14'),
(3, 37, '2023-01-19 05:33:01', '2023-01-19 01:33:01'),
(1, 38, '2023-01-19 05:40:20', '2023-01-19 01:40:20'),
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
(1, 83, '2023-01-20 00:20:57', '2023-01-19 20:20:57'),
(1, 89, '2023-01-21 16:52:03', '2023-01-21 12:52:03'),
(1, 90, '2023-01-21 16:55:18', '2023-01-21 12:55:18'),
(3, 91, '2023-01-21 17:01:38', '2023-01-21 13:01:38');









