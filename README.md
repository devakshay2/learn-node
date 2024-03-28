server -> npm install -> npm run dev
client -> npm install -> npm start

Server Instructions for prod: 
  Start Server with pm2: npm run prod
  Kill px2 & stop node server: npx px2 kill
  See status of running server: npx pm2 ps
  To stop node server only: npx pm2 stop app
  To restart server after stopping it: npx pm2 restart app