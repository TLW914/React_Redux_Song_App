import React from 'react';
//named exports need curly braces
import { selectSong } from '../actions/index.js';
import SongsList from './SongsList.jsx';
import SongDetail from './SongDetail.jsx';

const App = () => {

    return (
        <div className="ui container grid" style={{marginTop:'10px'}}>
            <div className="ui row">
                <div className="column eight wide">
                    <SongsList>SongList</SongsList>
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;