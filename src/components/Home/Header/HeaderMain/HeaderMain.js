import { Link } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './HeaderMain.css';

const HeaderMain = () => {
    const history = useHistory();
    return (
        <div className="row container header-main-root">
            <div className="col-md-6 header-info">
                <h1>THE BEST FITNESS</h1>
                <h1>STUDIO IN TOWN</h1>
                <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, deserunt quae. Ullam eos, ratione autem ex sed atque labore earum officiis quidem voluptatibus quisquam. Velit rem, delectus iste quas qui officiis commodi nesciunt voluptatem quo laboriosam repellat? Soluta, in ut.</small></p>
                
                <button onClick={()=>{history.push('/pricing')}} className="btn btn-warning px-5">JOIN US</button>
                
            </div>
            <div className="col-md-6 header-main-video">
                <div className="play-button">
                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;