import React from 'react';
import { connect } from 'react-redux';

//destructure song of props object
const SongDetail = ({song}) => {
    if (song) {
        return (
            <div>
                <h3>Details for: </h3>
                <p style={{fontWeight: "bold"}}>Title: <span style={{fontWeight: "normal"}}>{song.title}</span></p>
                <p style={{fontWeight: "bold"}}>Duration: <span style={{fontWeight: "normal"}}>{song.duration}</span></p>  
            </div>
        )
    }
    return "Select A Song"
};

const mapStateToProps = (state) => {
    //see reducers for origin
   return { song: state.selectedSong }
};

export default connect(mapStateToProps) (SongDetail);