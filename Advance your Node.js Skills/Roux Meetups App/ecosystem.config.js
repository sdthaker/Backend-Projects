// The purpose of this file is covered in CH 05, Video 06
module.exports = {
  apps: [
    {
      name: 'meetup',
      script: 'bin/www',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'ubuntu@ip-172-31-30-189',
      host: 'https://roux-meetup.herokuapp.com/',
      ref: 'origin/master',
      repo: 'https://github.com/sdthaker/Roux-meetups',

      // Make sure this directory exists on your server or change this entry to match your directory structure
      path: '/home/nodejs/deploy',

      'post-deploy': 'cp ../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
