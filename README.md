# videos
**基于uni-app和node.js实现的仿抖音小程序**

**1、uni-app_videos的运行,直接在HBuildX运行即可**
**2、node_videos如何运行,详细见package.json**
**3、node_videos运行前,需要自行创建的数据库表如下：**
**(1)videos表**

CREATE TABLE `videos` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `src` varchar(30) NOT NULL UNIQUE,
  `author` varchar(20) NOT NULL,
	`title` varchar(50),
	`loveNumber` int,
	`commentNumber` int,
	`shareNumber` int,
  `createAt` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
ALTER TABLE `videos` ADD `authorImg` VARCHAR(200);

**(2)user表**

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
	`userId` varchar(30) NOT NULL UNIQUE,
  `userName` varchar(20) NOT NULL,
	`introduce` varchar(50),
	`school` varchar(50),
	`sex` varchar(50),
	`birthday` DATE,
	`city` VARCHAR(100),
  `createAt` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE `user` ADD `userImg` VARCHAR(200);


