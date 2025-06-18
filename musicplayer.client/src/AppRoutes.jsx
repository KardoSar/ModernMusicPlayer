import SongView from "./component/SongView";
import Player from "./component/Player";
import Home from "./component/Home";

const AppRoutes = [
    {
        path: '/player',
        element: <Player />
    },
    {
        path: 'song-view',
        element: <SongView />
    },
    {
        path: 'home',
        element: <Home />
    },
    {
        path: '/',
        element: <Home />
    }

];

export default AppRoutes;