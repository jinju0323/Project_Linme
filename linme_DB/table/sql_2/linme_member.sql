-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: linme
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` int NOT NULL AUTO_INCREMENT COMMENT '회원 일련번호',
  `user_id` varchar(255) NOT NULL COMMENT '아이디(이메일)',
  `user_pw` varchar(255) NOT NULL COMMENT '비밀번호',
  `user_name` varchar(100) NOT NULL COMMENT '회원 이름',
  `nickname` varchar(100) NOT NULL COMMENT '닉네임',
  `tel` varchar(20) NOT NULL COMMENT '휴대폰',
  `postcode` char(5) NOT NULL COMMENT '우편번호',
  `addr1` varchar(255) NOT NULL COMMENT '검색된 주소',
  `addr2` varchar(255) NOT NULL COMMENT '나머지 주소',
  `addr_msg` varchar(255) DEFAULT NULL COMMENT '배송 요청사항',
  `profile` blob COMMENT '프로필 사진',
  `is_out` enum('Y','N') NOT NULL COMMENT '탈퇴여부(Y/N)',
  `is_admin` enum('Y','N') NOT NULL COMMENT '관리자 여부(Y/N)',
  `login_date` datetime DEFAULT NULL COMMENT '마지막 로그인 일시',
  `reg_date` datetime NOT NULL COMMENT '등록일시',
  `edit_date` datetime NOT NULL COMMENT '변경일시',
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='회원';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'tlawlswn28','123qwe!@#','심진주','jinju','01012345678','06129','서울 강남구 강남대로94길 13','삼경빌딩 3층','Null',_binary 'Null','N','Y',NULL,'2024-11-29 09:59:32','2024-11-29 09:59:32'),(2,'tlawlswn28@naver.com','123qwe!@#','심진주','jinju1234','01026750028','06122','서울 강남구 논현로111길 3 (논현동, 휴먼스페이스주상복합아파트)','111','N',_binary 'N','N','N','2024-12-06 14:10:57','2024-12-02 00:41:08','2024-12-02 00:41:08'),(3,'jinju@naver.com','123qwe!@#','심진주','jinju123','01026750028','01066','서울 강북구 한천로123가길 5 (번동)','123','N',NULL,'N','N','2024-12-05 18:09:05','2024-12-05 17:35:30','2024-12-05 17:35:30');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-06 16:47:27
