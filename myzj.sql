/*
Navicat MySQL Data Transfer

Source Server         : ly
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : myzj

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-15 11:33:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `login`
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `passwordagain` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', 'ly', '123', null);
INSERT INTO `login` VALUES ('3', '', '', '');
INSERT INTO `login` VALUES ('4', '290066357@qq.com', 'hhhhh', 'nbvv');
