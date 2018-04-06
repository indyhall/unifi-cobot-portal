# Unifi/Cobot Portal

This project is an attempt to integrate Unifi's guest portal & client APIs
with Cobot attendance.


## Setup

Start by installing all the dependencies, with:

    yarn install

You will then need to set up your `.env` file. See `env.json` for details on
all the environmental variables that need to be set.

Next, run:

    yarn run build

This will install the dependencies and build the portal UI.


## Development

To start the local dev server & React hot reloading, run:

    yarn run start
    
To just start the server, serving built assets, run:

    yarn run start-server
