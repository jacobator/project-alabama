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

in aws security group for this instance
enable 80 port as HTTP

nano /etc/nginx/sites-enabled/default

insert this text

upstream puma {
  server unix:///home/ubuntu/project-alabama/shared/tmp/sockets/puma.sock;
}

server {
  listen 80;
  server_name 52.40.235.247;
  root /home/ubuntu/project-alabama/current/public;


    location / {
      try_files $uri/index.html $uri.html $uri @puma;
    }

    location ~* ^.+\favicon*.(ico|svg|png)$ {
      root /home/ubuntu/project-alabama/current/public/favicons/*/;
    }

    location ~* ^.+\.(jpg|jpeg|gif|png|ico|css|zip|tgz|gz|rar|bz2|doc|xls|exe|pdf|ppt|txt|tar|mid|midi|wav|bmp|rtf|js|mp3|flv|mpeg|avi)$ {
      try_files $uri @puma;
    }

    location @puma {
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_redirect off;
      proxy_pass http://puma;
      add_header Access-Control-Allow-Origin *;
    }

}


sudo nano /etc/nginx/nginx.conf

change user to ubuntu
