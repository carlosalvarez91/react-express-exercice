/*SQL part

Question 1:
Use these sentences to draw a schema of a database you would create to store these
information.
. You are working in a casino.
. A casino has games.
. Each game has a unique type.
. Each game has one or more countries where players are allowed to bet from.
. A player may or may not have a favorite game.
Send the image of the schema and also the sql to create the database and tables
*/

DROP DATABASE IF EXISTS `casino`;
CREATE DATABASE `casino`;
USE `casino`;

/*types table*/
DROP TABLE IF EXISTS `types`;

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);


/*games table*/
DROP TABLE IF EXISTS `games`;

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_games` (`type_id`),
  CONSTRAINT `fk_games` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE
);

/*games_countries table*/
DROP TABLE IF EXISTS `games_countries`;

CREATE TABLE `games_countries` (
  `game_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`game_id`,`country_id`),
  KEY `fk_games_countries` (`game_id`),
  KEY `fk_games_countries` (`country_id`),
  CONSTRAINT `fk_games_countries` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_games_countries` FOREIGN KEY (`games_id`) REFERENCES `games` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE
);

/*countries table*/
DROP TABLE IF EXISTS `countries`;

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

/*games_players table -->  favorites table*/
DROP TABLE IF EXISTS `games_players`;

CREATE TABLE `games_players` (
  `id` int(11) NOT NULL,
  `game_id` int(11),
  `player_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_games_players` (`player_id`),
  KEY `fk_games_players` (`game_id`),
  CONSTRAINT `fk_games_players` FOREIGN KEY (`player_id`) REFERENCES `players` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_games_players` FOREIGN KEY (`games_id`) REFERENCES `games` (`id`)  ON DELETE CASCADE ON UPDATE CASCADE
);

/*players table*/
DROP TABLE IF EXISTS `players`;

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);



/*
Question 2:
Write based on above, a SQL query to get all players that have games of type “SLOT” as
their favorite games.
*/

SELECT 
    `p`.`name` AS `player_name`
FROM
    `type` `t`
JOIN `game` `g` ON
    `t`.`id` = `g`.`type_id`
JOIN `games_players` `gp` ON
    `g`.`id` = `gp`.`game_id`
JOIN `player` `p` ON
    `gp`.`player_id` = `p`.`id`
WHERE `t`.`name` = 'SLOTS';
