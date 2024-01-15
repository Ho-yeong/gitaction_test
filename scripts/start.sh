#!/usr/bin/env bash

PROJECT_ROOT="/home/ubuntu/app"
APP_NAME="project"

TIME_NOW=$(date +%c)

cd $PROJECT_ROOT

/home/ubuntu/.nvm/versions/node/v21.5.0/bin/pm2 delete $APP_NAME
/home/ubuntu/.nvm/versions/node/v21.5.0/bin/pm2 start npm --name $APP_NAME -- start

echo "$TIME_NOW > Deploy has been completed"