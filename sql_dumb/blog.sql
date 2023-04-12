/*
 Navicat Premium Data Transfer

 Source Server         : cnct
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 12/04/2023 19:54:37
*/
CREATE DATABASE blog;


SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;


-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `desc` text,
  `img` varchar(255) NOT NULL,
  `date` datetime DEFAULT (now()),
  `uid` int NOT NULL,
  `cat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of posts
-- ----------------------------
BEGIN;
INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES (36, 'Что такое this в javascript?', '<p>В JavaScript ключевое слово <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> используется для ссылки на текущий контекст выполнения кода. Значение <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> зависит от контекста, в котором оно используется, и может отличаться в разных частях кода.</p><p>В общем случае, значение <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> определяется во время выполнения функции, в зависимости от того, каким образом была вызвана эта функция. Например, если функция вызывается как метод объекта, то значение <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> будет ссылаться на этот объект.</p><p><br></p><p><strong><u>Рассмотрим следующий пример:</u></strong></p><p><em>let person = { name: \"John\", age: 30, sayHello: function() { console.log(\"Hello, my name is \" + this.name); } }; person.sayHello(); // выводит \"Hello, my name is John\" </em></p><p><br></p><p><br></p><p>В данном случае, при вызове метода <code style=\"color: var(--tw-prose-code);\"><u>sayHello</u></code> объекта <code style=\"color: var(--tw-prose-code);\"><u>person</u></code>, значение <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> ссылается на сам объект <code style=\"color: var(--tw-prose-code);\"><u>person</u></code>, поэтому при обращении к свойству <code style=\"color: var(--tw-prose-code);\"><u>name</u></code> через <code style=\"color: var(--tw-prose-code);\"><u>this.name</u></code> выводится значение \"John\".</p><p>Однако, если вызвать эту же функцию как обычную функцию (а не как метод объекта), то значение <code style=\"color: var(--tw-prose-code);\">this</code> будет определено по-другому:</p><p><br></p><p><em>let sayHello = person.sayHello; sayHello(); // выводит \"Hello, my name is undefined\" </em></p><p><br></p><p>В этом случае значение <code style=\"color: var(--tw-prose-code);\">this</code> будет ссылаться на глобальный объект (например, <code style=\"color: var(--tw-prose-code);\">window</code> в браузере), а свойство <code style=\"color: var(--tw-prose-code);\">name</code> не будет найдено в этом объекте, поэтому будет выведено значение \"undefined\".</p>', '1681321767769maxresdefault.jpg', '2023-04-12 18:55:29', 9, 'fe');
INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES (37, 'Работа с массивом в Java', '<p>Массив (array) в Java - это упорядоченная коллекция элементов одного типа данных. Массивы в Java могут быть одномерными (содержащими одну строку значений) или многомерными (содержащими несколько строк и столбцов значений).</p><p>Создание массива в Java начинается с объявления переменной, которая будет содержать массив, а затем с определения размера массива. Например, чтобы создать массив, который содержит 5 целочисленных значений, мы можем написать:</p><pre class=\"ql-syntax\" spellcheck=\"false\">arduino\n\nCopy code\nint[] myArray = new int[5]; \n</pre><p>В этом примере мы объявили переменную <code style=\"color: var(--tw-prose-code);\">myArray</code> типа <code style=\"color: var(--tw-prose-code);\">int[]</code> и определили, что он будет содержать 5 целочисленных значений.</p><p>Для доступа к элементам массива в Java используется индексация. Индексы в массивах начинаются с 0, поэтому первый элемент массива будет иметь индекс 0, второй элемент - индекс 1 и т.д. Чтобы получить доступ к элементу массива, мы используем квадратные скобки с индексом элемента, например:</p><pre class=\"ql-syntax\" spellcheck=\"false\">arduino\n\nCopy code\nint firstElement = myArray[0]; // получаем первый элемент массива \n</pre><p>Также в Java существуют методы, которые позволяют работать с массивами. Например, метод <code style=\"color: var(--tw-prose-code);\">length</code> возвращает количество элементов в массиве, а метод <code style=\"color: var(--tw-prose-code);\">sort</code> сортирует элементы массива в порядке возрастания.</p><p>Массивы в Java могут быть использованы для хранения и обработки большого количества данных, и они являются важной частью многих программ на Java.</p>', '1681320391453Java_Array_Thumbnail.png', '2023-04-12 19:26:31', 9, 'be');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `username`, `email`, `password`, `img`) VALUES (9, 'Анатолий Сидоренко', 'sidhtc510@gmail.com', '$2a$10$Auz2M9JrmXPZYTfnxC9UZe0EDQuiY7L0.divomtxeUzoMa8iZs1K6', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
