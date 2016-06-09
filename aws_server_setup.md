<!-- install rvm -->
\curl -sSL https://get.rvm.io | bash
<!-- load rvm  -->
source ~/.rvm/scripts/rvm
<!--  install ruby -->
rvm install ruby-2.3.1
<!--  install gemset -->
rvm ruby-2.3.1 do rvm gemset create project-alabama
<!-- install bundler  -->
gem install bundler
<!--  install git -->
sudo apt-get update
sudo apt-get install git
<!--  install pg gem -->
sudo apt-get install libpq-dev
gem install pg
<!--  install uglifier gem -->
sudo apt-get install nodejs
<!-- install configure postgres  -->
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04
<!-- setup linked files config/database.yml and config/secrets.yml  -->
create database.yml and secrets.yml on the server

The problem is still your pg_hba.conf file (/etc/postgresql/9.1/main/pg_hba.conf). This line:
sudo nano /etc/postgresql/9.3/main/pg_hba.conf

local   all             postgres                                md5

sudo service postgresql restart

<!--  nginx -->
sudo apt-get install nginx
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts
