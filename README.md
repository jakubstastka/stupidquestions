# Deployment for blbyotazky.cz

Keep on keeping on!

## Frontend

### pm2 related commands

> pm2 list
- list all running apps

> pm2 kill
- kills every app that might be running and deletes it

> pm2 stop/delete [app_name]
- doesnt kill everything

> pm2 start npm --name app1 -- run start -- -p 3000
- runs the frontend app with the name "app1"