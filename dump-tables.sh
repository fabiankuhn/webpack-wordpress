#!/bin/bash

while getopts p: flag
do
  case "${flag}" in
    p ) SQL_ROOT_PASSWORD=${OPTARG};;
  esac
done

for t in $(docker exec -e MYSQL_PWD=${SQL_ROOT_PASSWORD} webpack-wordpress-db-1 mysql -u root -N wordpress -e 'show tables')
do
  echo "Dump" $t
  docker exec -e MYSQL_PWD=${SQL_ROOT_PASSWORD} webpack-wordpress-db-1 mysqldump --extended-insert=FALSE --complete-insert --dump-date=false wordpress -u root $t > ./wordpress/db_dump/$t.sql
done

echo "Completed"
