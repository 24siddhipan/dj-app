import Spotify from 'spotify-web-api-node';

import { atom } from 'recoil';

// TODO: set environment variables for global state
export const spotifyAPI = atom({
    key: 'spotifyAPIState',
    default: new Spotify()
})

