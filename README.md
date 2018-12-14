# cat

thecatapi.com app

## Requirements

- UNIX based OS(not tested on Windows OS)
- Node 7+
- copy config.env(sent by email) at repo root

## Features

- SSR React/Redux Front-end
- Anonymous Login Api using cookies
- getCats and getFavorites API w/ Favorites tab, favorites stored and fetched by user_id
- Hacky build system
- Infinite scroll cats list UI
- Persistent user/favorites w/ MongoDB
- ESNext client/server/build support
- Custom Webpack config
- Hand stitched codebase

## Run the app on localhost

- npm install
- copy config.env(sent by email) file to root dir
- npm run dev
- goto http://localhost:3030

## Details

App rendered on server and preloaded with cats and favorites data
Anonymously login client on server, auth shared with client using cookies
Anon Users/Favorited cat stored in MongoDB
Async client request done w/ Redux-Saga

## Notes

- App not deployed, please run on localhost
- The build system was hacked together, please refresh page if app doesn't update properly
- If you get a mongoose error on 'npm run dev' it is because your config.env is missing!
