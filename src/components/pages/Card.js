import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';
import { FaGithub, FaSearch } from 'react-icons/fa';
function Card(props) {
    const handleGitHubClick = () => {
        window.open(props.github, '_blank');
    };
    const handleLiveClick = () => {
        window.open(props.live, '_blank');
    };
    return (
        <div className='card-container'>
            <div className='card-body'>
                <img src={props.imgsrc} alt='home' className='card-img' height={300} width={450} />
                <div className='desc'>
                    <h2 className='card-title'>{props.title}</h2>
                    <p className='card-text'>{props.description}</p><br />
                    <center><button className='btn' onClick={handleGitHubClick}><FaGithub /> GitHub</button> <button className='btn' onClick={handleLiveClick}><FaSearch /> Live</button></center>
                </div>
            </div>
        </div>
    );
}
Card.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
};
export default Card;
