//action creators
    //export named export 
    export const selectSong = song => {
        //return an action (actions are objects)
        //must have a type property
        //optional payload property
        return {
            type: 'SONG_SELECTED',
            payload: song
        };
    };
    
    