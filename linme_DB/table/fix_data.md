## brand

```sql
mysql> select * from brand;
+----------+------------------------+---------------------+---------------------+
| brand_id | brand_name             | reg_date            | edit_date           |
+----------+------------------------+---------------------+---------------------+
|        1 | 파파초이스             | 2024-11-28 19:27:57 | 2024-11-28 19:27:57 |
|        2 | 뉴트리어스             | 2024-11-28 19:29:09 | 2024-11-28 19:29:09 |
|        3 | 뉴트리랩스             | 2024-11-28 19:29:32 | 2024-11-28 19:29:32 |
|        4 | 오로니아, 뉴트리코리아 | 2024-11-28 19:31:39 | 2024-11-28 19:31:39 |
|        5 | 주식회사 애프디랩      | 2024-11-28 19:32:02 | 2024-11-28 19:32:02 |
|        6 | 오로니아               | 2024-11-28 19:32:26 | 2024-11-28 19:32:26 |
+----------+------------------------+---------------------+---------------------+
6 rows in set (0.00 sec)
```

## category

```sql
mysql> select * from category;
+-------------+---------------+---------------------+---------------------+
| category_id | category_name | reg_date            | edit_date           |
+-------------+---------------+---------------------+---------------------+
|           1 | 영양제        | 2024-11-28 19:36:17 | 2024-11-28 19:36:17 |
|           2 | 비타민        | 2024-11-28 19:36:46 | 2024-11-28 19:36:46 |
|           3 | 유산균        | 2024-11-28 19:37:06 | 2024-11-28 19:37:06 |
|           4 | 오메가3       | 2024-11-28 19:37:34 | 2024-11-28 19:37:34 |
+-------------+---------------+---------------------+---------------------+
4 rows in set (0.00 sec)
```

## product

```sql
mysql> select * from product;
+------------+------------------------------------------------------------------------------------------------+-------+------------+---------------+----------------+---------------------+---------------------+----------+-------------+
| product_id | product_name                                                                                   | price | sale_price | discount_rate | discount_price | reg_date            | edit_date           | brand_id | category_id |
+------------+------------------------------------------------------------------------------------------------+-------+------------+---------------+----------------+---------------------+---------------------+----------+-------------+
|          1 | [파파초이스]비타민D 아연_1박스(1.5g*30포, 총 45g)(1개월분)                                     | 39000 |      27000 |            31 |          12000 | 2024-11-28 19:49:57 | 2024-11-28 19:49:57 |        1 |           2 |
|          2 | [뉴트리어스]국내최초 100% 식물성 비타민C셀레늄_1박스(500mg*60캡슐, 총 30g)(2개월분)            | 50000 |      30000 |            40 |          20000 | 2024-11-28 19:50:19 | 2024-11-28 19:50:19 |        2 |           2 |
|          3 | [뉴트리어스]국내최초 100% 식물성 비타민B컴플렉스_1박스(500mg*60캡슐, 총 30g)(2개월분)          | 60000 |      36000 |            40 |          24000 | 2024-11-28 19:50:35 | 2024-11-28 19:50:35 |        2 |           2 |
|          4 | [뉴트리어스]국내최초 100% 식물성 멀티비타민미네랄_1박스(500mg*60캡슐, 총 30g)(2개월분)         | 65000 |      39000 |            40 |          26000 | 2024-11-28 19:50:54 | 2024-11-28 19:50:54 |        2 |           2 |
|          5 | [뉴트리랩스]마그네슘 & 비타민B_1박스(1,450mg*90정, 총 130.5g)(3개월분)                         | 72160 |      65600 |            10 |           6560 | 2024-11-28 19:51:09 | 2024-11-28 19:51:09 |        3 |           2 |
|          6 | [파파초이스]유산균 장건강 프로바이오틱스 30억 CFU_1박스(2g*30포, 총 60g)(1개월분)              | 42000 |      37000 |            12 |           5000 | 2024-11-28 19:51:41 | 2024-11-28 20:08:50 |        1 |           3 |
|          7 | [오로니아]프로바이오틱스 골드 가세리유산균 비피더스유산균_1박스(500mg*60캡슐, 총 30g)(2개월분) | 19800 |      18000 |            10 |           1800 | 2024-11-28 19:51:59 | 2024-11-28 20:09:11 |        4 |           3 |
|          8 | [뉴트리랩스]원데이 멀티바이오틱스_1박스(500mg*60캡슐, 총 30g)(2개월분)                         | 74100 |      57000 |            30 |          17100 | 2024-11-28 19:52:25 | 2024-11-28 20:16:43 |        3 |           3 |
|          9 | [네츄럴메이드]쏘팔메토&옥타코사놀_1박스(1,000mg*90캡슐, 총 90g)(3개월분)                       | 52500 |      29800 |            44 |          22700 | 2024-11-28 19:52:40 | 2024-11-28 20:17:21 |        3 |           3 |
|         10 | [뉴트리파워]글루타치온 골드_1박스(1,500mg*120정, 총 180g)(4개월분)                             | 42500 |      37000 |            15 |           5500 | 2024-11-28 19:53:35 | 2024-11-28 20:17:54 |        4 |           3 |
|         11 | [오로니아]오메가-3 말랑말랑한 젤리_1박스(2.3g*60꾸미, 총 138g)(1개월분)                        | 15340 |      11800 |            30 |           3540 | 2024-11-28 19:54:06 | 2024-11-28 20:18:26 |        4 |           4 |
|         12 | [네츄럴메이드]알티지 오메가-3 에이드_1박스(816.5mg*120캡슐, 총 97.98g)(2개월분)                | 79600 |      20100 |            75 |          59500 | 2024-11-28 19:54:22 | 2024-11-28 20:18:50 |        5 |           4 |
|         13 | [네츄럴메이드]징코큐텐 은행잎추출물_1박스(450mg*60캡슐, 총 27g)(2개월분)                       | 72500 |      19800 |            73 |          52700 | 2024-11-28 19:54:39 | 2024-11-28 20:19:13 |        5 |           4 |
|         14 | [네츄럴메이드]플랙씨드 앤 햄프씨드_1박스(1,000mg*180캡슐, 총 180g)(3개월분)                    | 87000 |      36800 |            58 |          50200 | 2024-11-28 19:54:52 | 2024-11-28 20:19:43 |        5 |           4 |
|         15 | [오로니아][유통기한 임박]엔초비 오메가3 징코 플러스_1박스(1,331mg*60캡슐, 총 79.86g)(2개월)    | 16520 |      11800 |            48 |           4720 | 2024-11-28 19:55:08 | 2024-11-28 20:20:07 |        5 |           4 |
|         16 | [오로니아]캐나다 멀티비타민 말랑말랑한 젤리_1박스(2.2g*60꾸미, 총 132g)(2개월분)               | 16520 |      11800 |            48 |           4720 | 2024-11-28 20:20:32 | 2024-11-28 20:20:32 |        6 |           1 |
|         17 | [오로니아]칼슘 & 비타민D 60꾸미 말랑말랑한 젤리_1박스(2.3g*60꾸미, 총 138g)(1개월분)           | 16520 |      11800 |            48 |           4720 | 2024-11-28 20:20:55 | 2024-11-28 20:20:55 |        6 |           1 |
|         18 | [뉴트리어스]국내최초 100% 식물성 철분엽산 스텝1_1박스(500mg*60캡슐, 총 30g)(1개월분)           | 33000 |      19800 |            40 |          13200 | 2024-11-28 20:21:11 | 2024-11-28 20:21:11 |        2 |           1 |
|         19 | [뉴트리파워]비오틴 10000_1박스(400mg*180캡슐, 총 72g)(6개월분)                                 | 52540 |      37000 |            42 |          15540 | 2024-11-28 20:21:26 | 2024-11-28 20:21:26 |        4 |           1 |
|         20 | [뉴트리어스]국내최초 100% 식물성 비타민D아연_(500mg*60캡슐, 총 30g)(1개월분)                   | 55000 |      33000 |            40 |          22000 | 2024-11-28 20:21:52 | 2024-11-28 20:21:52 |        2 |           1 |
+------------+------------------------------------------------------------------------------------------------+-------+------------+---------------+----------------+---------------------+---------------------+----------+-------------+
20 rows in set (0.00 sec)
```

## img

```sql
mysql> select * from img;
+--------+------------+---------------------------------------+-----------------------------------------+---------------------+---------------------+
| img_id | product_id | img                                   | d_img                                   | reg_date            | edit_date           |
+--------+------------+---------------------------------------+-----------------------------------------+---------------------+---------------------+
|      1 |          1 | /product/vitamin/vitamin1.jpg         | /product/vitamin/d_vitamin1.jpg         | 2024-11-28 20:32:17 | 2024-11-28 20:41:30 |
|      2 |          2 | /product/vitamin/vitamin2.jpg         | /product/vitamin/d_vitamin2.jpg         | 2024-11-28 20:32:46 | 2024-11-28 20:32:46 |
|      3 |          3 | /product/vitamin/vitamin3.jpg         | /product/vitamin/d_vitamin3.jpg         | 2024-11-28 20:33:19 | 2024-11-28 20:33:19 |
|      4 |          4 | /product/vitamin/vitamin4.jpg         | /product/vitamin/d_vitamin4.jpg         | 2024-11-28 20:33:41 | 2024-11-28 20:33:41 |
|      5 |          5 | /product/vitamin/vitamin5.jpg         | /product/vitamin/d_vitamin5.jpg         | 2024-11-28 20:34:00 | 2024-11-28 20:34:00 |
|      6 |          6 | /product/lacto/lacto1.jpg             | /product/lacto/d_lacto1.jpg             | 2024-11-28 20:37:34 | 2024-11-28 20:42:00 |
|      7 |          7 | /product/lacto/lacto2.jpg             | /product/lacto/d_lacto2.jpg             | 2024-11-28 20:37:59 | 2024-11-28 20:42:40 |
|      8 |          8 | /product/lacto/lacto3.jpg             | /product/lacto/d_lacto3.jpg             | 2024-11-28 20:38:16 | 2024-11-28 20:43:02 |
|      9 |          9 | /product/lacto/lacto4.jpg             | /product/lacto/d_lacto4.jpg             | 2024-11-28 20:43:21 | 2024-11-28 20:43:21 |
|     10 |         10 | /product/lacto/lacto5.jpg             | /product/lacto/d_lacto5.jpg             | 2024-11-28 20:43:37 | 2024-11-28 20:43:37 |
|     11 |         11 | /product/omega/omega1.jpg             | /product/omega/d_omega1.jpg             | 2024-11-28 20:46:23 | 2024-11-28 20:46:23 |
|     12 |         12 | /product/omega/omega2.jpg             | /product/omega/d_omega2.jpg             | 2024-11-28 20:46:38 | 2024-11-28 20:46:38 |
|     13 |         13 | /product/omega/omega3.jpg             | /product/omega/d_omega3.jpg             | 2024-11-28 20:46:55 | 2024-11-28 20:46:55 |
|     14 |         14 | /product/omega/omega4.jpg             | /product/omega/d_omega4.jpg             | 2024-11-28 20:47:09 | 2024-11-28 20:47:09 |
|     15 |         15 | /product/omega/omega5.jpg             | /product/omega/d_omega5.jpg             | 2024-11-28 20:47:26 | 2024-11-28 20:47:26 |
|     16 |         16 | /product/supplements/supplements1.jpg | /product/supplements/d_supplements1.jpg | 2024-11-28 20:49:10 | 2024-11-28 20:49:10 |
|     17 |         17 | /product/supplements/supplements2.jpg | /product/supplements/d_supplements2.jpg | 2024-11-28 20:49:28 | 2024-11-28 20:49:28 |
|     18 |         18 | /product/supplements/supplements3.jpg | /product/supplements/d_supplements3.jpg | 2024-11-28 20:49:42 | 2024-11-28 20:49:42 |
|     19 |         19 | /product/supplements/supplements4.jpg | /product/supplements/d_supplements4.jpg | 2024-11-28 20:49:56 | 2024-11-28 20:49:56 |
|     20 |         20 | /product/supplements/supplements5.jpg | /product/supplements/d_supplements5.jpg | 2024-11-28 20:50:10 | 2024-11-28 20:50:10 |
+--------+------------+---------------------------------------+-----------------------------------------+---------------------+---------------------+
20 rows in set (0.00 sec)
```
