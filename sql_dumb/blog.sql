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

 Date: 24/04/2023 17:19:51
*/

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
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of posts
-- ----------------------------
BEGIN;
INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES (36, 'Что такое this в javascript?', '<p>В JavaScript ключевое слово <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> используется для ссылки на текущий контекст выполнения кода. Значение <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> зависит от контекста, в котором оно используется, и может отличаться в разных частях кода.</p><p>В общем случае, значение <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> определяется во время выполнения функции, в зависимости от того, каким образом была вызвана эта функция. Например, если функция вызывается как метод объекта, то значение <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> будет ссылаться на этот объект.</p><p><br></p><p><strong><u>Рассмотрим следующий пример:</u></strong></p><p><em>let person = { name: \"John\", age: 30, sayHello: function() { console.log(\"Hello, my name is \" + this.name); } }; person.sayHello(); // выводит \"Hello, my name is John\" </em></p><p><br></p><p><br></p><p>В данном случае, при вызове метода <code style=\"color: var(--tw-prose-code);\"><u>sayHello</u></code> объекта <code style=\"color: var(--tw-prose-code);\"><u>person</u></code>, значение <code style=\"color: var(--tw-prose-code);\"><u>this</u></code> ссылается на сам объект <code style=\"color: var(--tw-prose-code);\"><u>person</u></code>, поэтому при обращении к свойству <code style=\"color: var(--tw-prose-code);\"><u>name</u></code> через <code style=\"color: var(--tw-prose-code);\"><u>this.name</u></code> выводится значение \"John\".</p><p>Однако, если вызвать эту же функцию как обычную функцию (а не как метод объекта), то значение <code style=\"color: var(--tw-prose-code);\">this</code> будет определено по-другому:</p><p><br></p><p><em>let sayHello = person.sayHello; sayHello(); // выводит \"Hello, my name is undefined\" </em></p><p><br></p><p>В этом случае значение <code style=\"color: var(--tw-prose-code);\">this</code> будет ссылаться на глобальный объект (например, <code style=\"color: var(--tw-prose-code);\">window</code> в браузере), а свойство <code style=\"color: var(--tw-prose-code);\">name</code> не будет найдено в этом объекте, поэтому будет выведено значение \"undefined\".</p>', '1681321767769maxresdefault.jpg', '2023-04-12 18:55:29', 9, 'fe');
INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES (38, ' Для чего используются анонимные функции?', '<p>Анонимные функции используются при создании IIFE — конструкций, переменные, объявленные в которых, не загрязняют глобальную область видимости.</p><p><br></p><p>Анонимные функции применяют в качестве функций обратного вызова, которые используются лишь в одном месте программы. Код будет выглядеть более самодостаточным и читабельным в том случае, если коллбэк будет объявлен прямо в том месте, где он используется. Это избавляет от необходимости просматривать код в поиске тела функции.</p><p><br></p><p>setTimeout(function() {</p><p>&nbsp;console.log(\'Hello world!\');</p><p>}, 1000);</p><p><br></p><p>Анонимные функции удобно использовать в конструкциях, характерных для функционального стиля программирования, или при работе с библиотеками вроде Lodash (этот вариант их использования похож на их применение в качестве коллбэков).</p><p><br></p><p>const arr = [1, 2, 3];</p><p>const double = arr.map(function(el) {</p><p>&nbsp;return el * 2;</p><p>});</p><p>console.log(double); // [2, 4, 6]</p>', '16813234236661_ejY_AnBJ4w47LCn6jmfKAA.jpg', '2023-04-12 20:17:03', 9, 'fe');
INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES (39, 'Повторяющиеся значения в массиве', '<p>Найти повторяющиеся значения в массиве можно, используя метод&nbsp;<u>indexOf()</u>&nbsp;и функцию высшего порядка&nbsp;<u>filter</u>:</p><p><br></p><p>Рассмотрим пример:</p><p><br></p><p>Есть числовой массив</p><p> values = [1, 100, 5, 6, 13, 13, 22, 5];</p><p><br></p><p>const duplicates = values.filter((number, index, numbers) =&gt; {</p><p>	console.log(number); // number - элемент массива</p><p>	console.log(index); // index - индекс элемента массива</p><p>	console.log(numbers); // numbers - представление массива values</p><p>		return numbers.indexOf(number) !== index;</p><p>});</p><p><br></p><p>Метод&nbsp;indexOf()&nbsp;возвращает первый индекс, по которому данный элемент может быть найден в массиве.</p><p>Соответственно, фильтруем значения, индекс которых не равен индексу, который вернул метод indexOf().</p><p>console.log(duplicates); // =&gt; [ 13, 5 ] </p><p><br></p>', '1681941407963how.jpg', '2023-04-19 23:56:47', 9, 'fe');
INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES (40, 'основное различие методов массивов forEach() и map()', '<p><strong>Можете ли вы описать основное различие методов массивов forEach() и map()? В каких ситуациях вы предпочли бы один из этих методов другому?</strong></p><p><br></p><p><strong>Вот как работает </strong>.forEach()<strong>:</strong></p><p><br></p><p>• Он перебирает элементы массива.</p><p>• Он выполняет переданную ему функцию обратного вызова для каждого элемента массива.</p><p>• Он ничего не возвращает.</p><p><br></p><p><strong>Вот краткая характеристика метода </strong>.map()<strong>:</strong></p><p><br></p><p>• Он перебирает элементы массива.</p><p>• Он преобразует каждый элемент исходного массива в элемент нового массива, вызывая переданную ему функцию для каждого элемента исходного массива.</p><p><br></p><p>В результате оказывается, что основное различие между .forEach() и .map() заключается в том, что .map() возвращает новый массив. Если вам нужно получить результат преобразования элементов исходного массива, не меняя этот массив, тогда стоит выбрать .map(). Если же нужно просто перебрать элементы массива — тогда можно воспользоваться .forEach().</p>', '1682107400565ecdcf4da5b.jpeg', '2023-04-21 22:03:20', 9, 'fe');
INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES (41, 'Реализация связи один ко многим. MySQL', '<p>Для создания связи один-ко-многим между таблицами в MySQL необходимо использовать внешний ключ (foreign key) в дочерней таблице, который ссылается на первичный ключ (primary key) родительской таблицы.</p><p>Пример создания двух таблиц <code style=\"color: var(--tw-prose-code);\">orders</code> и <code style=\"color: var(--tw-prose-code);\">order_items</code>, где один заказ может содержать несколько элементов заказа:</p><p><br></p><p>CREATE TABLE orders (</p><p>&nbsp;id INT PRIMARY KEY,</p><p>&nbsp;customer_name VARCHAR(50),</p><p>&nbsp;order_date DATE</p><p>);</p><p><br></p><p>CREATE TABLE order_items (</p><p>&nbsp;id INT PRIMARY KEY,</p><p>&nbsp;order_id INT,</p><p>&nbsp;product_name VARCHAR(50),</p><p>&nbsp;quantity INT,</p><p>&nbsp;price DECIMAL(10,2),</p><p>&nbsp;FOREIGN KEY (order_id) REFERENCES orders(id)</p><p>);</p><p><br></p><p><br></p><p>В этом примере, <code style=\"color: var(--tw-prose-code);\">orders.id</code> является первичным ключом родительской таблицы, а <code style=\"color: var(--tw-prose-code);\">order_items.order_id</code> является внешним ключом, который ссылается на <code style=\"color: var(--tw-prose-code);\">orders.id</code>.</p><p>Для добавления данных в таблицы можно использовать следующий SQL-запрос:</p><p><br></p><p>INSERT INTO orders (id, customer_name, order_date) VALUES (1, \'John Doe\', \'2023-04-22\');</p><p>INSERT INTO order_items (id, order_id, product_name, quantity, price) VALUES (1, 1, \'Product A\', 2, 10.99);</p><p>INSERT INTO order_items (id, order_id, product_name, quantity, price) VALUES (2, 1, \'Product B\', 1, 20.50);</p><p><br></p><p><br></p><p>Этот запрос создаст заказ с <code style=\"color: var(--tw-prose-code);\">id=1</code>, который содержит два элемента заказа: <code style=\"color: var(--tw-prose-code);\">order_items.id=1</code> и <code style=\"color: var(--tw-prose-code);\">order_items.id=2</code>. Обратите внимание, что <code style=\"color: var(--tw-prose-code);\">order_items.order_id</code> ссылается на <code style=\"color: var(--tw-prose-code);\">orders.id=1</code>.</p><p>Чтобы получить данные из связанных таблиц, можно использовать оператор JOIN:</p><p><br></p><p><br></p><p>SELECT * FROM orders</p><p>JOIN order_items ON orders.id = order_items.order_id</p><p>WHERE orders.id = 1;</p><p><br></p>', '1682249268537otm.jpg', '2023-04-23 13:27:48', 9, 'be');
INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES (42, 'Реализация связи Многие ко многим. MySQL', '<p>Для создания отношения \"многие ко многим\" в MySQL необходимо создать дополнительную таблицу, которая будет содержать внешние ключи на таблицы, которые нужно связать.</p><p>Например, предположим, что у нас есть две таблицы: \"users\" и \"groups\", и мы хотим создать связь \"многие ко многим\" между ними.</p><p>Для этого необходимо создать дополнительную таблицу \"users_groups\", которая будет содержать внешние ключи на обе таблицы:</p><p><br></p><p>CREATE TABLE users (</p><p>&nbsp;id INT NOT NULL AUTO_INCREMENT,</p><p>&nbsp;name VARCHAR(255) NOT NULL,</p><p>&nbsp;PRIMARY KEY (id)</p><p>);</p><p><br></p><p>CREATE TABLE groups (</p><p>&nbsp;id INT NOT NULL AUTO_INCREMENT,</p><p>&nbsp;name VARCHAR(255) NOT NULL,</p><p>&nbsp;PRIMARY KEY (id)</p><p>);</p><p><br></p><p>CREATE TABLE users_groups (</p><p>&nbsp;user_id INT NOT NULL,</p><p>&nbsp;group_id INT NOT NULL,</p><p>&nbsp;FOREIGN KEY (user_id) REFERENCES users(id),</p><p>&nbsp;FOREIGN KEY (group_id) REFERENCES groups(id),</p><p>&nbsp;PRIMARY KEY (user_id, group_id)</p><p>);</p><p><br></p><p><br></p><p>Здесь таблица \"users_groups\" содержит два внешних ключа на таблицы \"users\" и \"groups\", и объявляет их как первичный ключ.</p><p>Теперь, чтобы добавить связь между пользователем и группой, необходимо добавить запись в таблицу \"users_groups\":</p><p><br></p><p>INSERT INTO users_groups (user_id, group_id) VALUES (1, 2);</p><p><br></p><p>Здесь мы создаем связь между пользователем с идентификатором 1 и группой с идентификатором 2.</p><p>Чтобы получить список групп, в которых состоит пользователь, можно использовать запрос с объединением таблиц:</p><p><br></p><p>SELECT groups.name FROM groups</p><p>&nbsp;INNER JOIN users_groups ON groups.id = users_groups.group_id</p><p>&nbsp;WHERE users_groups.user_id = 1;</p><p><br></p><p>Здесь мы объединяем таблицы \"groups\" и \"users_groups\" по внешнему ключу \"group_id\", и выбираем только те записи, которые соответствуют пользователю с идентификатором 1.</p>', '1682250349622mtm.jpg', '2023-04-23 13:45:49', 9, 'be');
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
