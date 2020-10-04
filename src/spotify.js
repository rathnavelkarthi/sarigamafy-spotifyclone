export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "2ca420fbf08546628191e3489a5ada2e";
const redirectUri = "http://localhost:3000/";



const scopes = [
    "user-read-currently-playing" ,
    "user-read-recently-played" ,
    "user-read-playback-state",
    "user-top-read",
    "user-read-playback-state",

];

export const  accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;