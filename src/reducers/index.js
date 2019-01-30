import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Stairway To Heaven', duration: '8:00'},
        { title: 'Dream on', duration: '4:23'},
        { title: 'Good Vibrations', duration: '4:05'},
        { title: 'Moby Dick', duration: '7:45'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers (
    {
        songs: songsReducer,
        selectedSong: selectedSongReducer
    }
);