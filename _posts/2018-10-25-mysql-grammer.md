---
layout: post
title: "2018-10-25-Mysql常用命令"
excerpt: "Mysql常用命令及设置"
categories: code&nbsp;share
comments: true
---

> 常用命令及设置

```
//  ~/.zshrc
#mysql ================================
  alias mysql='/usr/local/mysql/bin/mysql' 
  alias mysqladmin='/usr/local/mysql/bin/mysqladmin'
  alias start='sudo /usr/local/mysql/support-files/mysql.server start'
  alias stop='sudo /usr/local/mysql/support-files/mysql.server stop'
  alias restart='sudo /usr/local/mysql/support-files/mysql.server restart'
```

- `show databases;` 显示所有数据库
- `create dbname` 创建数据库
- `use <数据库名>` 打开某数据库
- `create tbname(column_name data_type,...)` 创建数据表
- `show create tbname;` 查看创建的数据表输入的命令
- `select database()` 选择数据表
- `show tables` 显示数据表
- `show columns from tbname` 显示数据表结构
- `insert tbname(...) values(...)` 插入数据
- `select ... from tbname` 显示数据表中的所有记录
- `show indexes from tbname\G` 显示数据表中的索引(树状显示)
- `delete from tbname where...` 删除记录

> 修改数据表

- `alter table tbname add (column_name data_type) after/before (column_name)` 添加单列数据
- `alter table tbname drop column_name1 , drop column_name2…` 删除表中列
- `alter table tb_name modify ...first/before` 修改列定义（数据类型及位置）

> 特殊字符及各项约束

- `signed / unsigned` 有无符号 （+ /-）

- `null / not null` 空 / 非空

- `auto_increment` 唯一自增，必须与主键配合使用

- `primary key` 主键约束，一张数据表只能存在一个主键，保证记录唯一性，会自动创建索引

- `unique key`唯一约束，一张数据表可以存在多个

- `default` 默认值设定，插入数据如果为空，则默认设定默认值

- `foreign key` 外键约束，字表设置外键时，外键列与父表参照列数据属性需要一致，存储引擎只能为InnoDB，外键列和参照列必须创建索引，外键的pid对应着父表的参照列中的id

  ```
  // 父表 id 参照列
  create table provinces(
  	id samllint unsigned primary key auto_increment,
  	pname varchar(20) not null
  );
  //字表 pid 外键列
  create table users(
  	id samllint unsigned primary key auto_increment,
  	username varchar(20) not null,
  	// 保证数据类型与参照列一致
  	pid smallint unsigned,
  	//
  	foreign key (pid) references provinces (id) on delete cascade
  )
  ```

  - cascade 从父表中删除或更新且自动删除或更新子表外键中对应的行
  - set null 从父表中删除或更新且自动设置子表外键为null
  - restrict 拒绝对父表的更新或删除操作
  - not action 与restrict相同

> 记录操作

1. 插入记录
   - `insert into tb_name`