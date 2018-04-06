# Unifi/Cobot Portal

This project is an attempt to integrate Unifi's guest portal & client APIs
with Cobot attendance.


## Setup

Start by installing all the dependencies, with:

    yarn install

You will then need to set up your `.env` file. See `env.json` for details on
all the environmental variables that need to be set.

## Development

To start the local dev server & React hot reloading, run:

    yarn run dev
    
## Production

To create a production build of the portal and start the production server,
run:

    yarn run prod

You can also just start the server without rebuilding the portal with:

    yarn run prod-server
