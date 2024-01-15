import React, { useState } from 'react';
import '../styles/Project.css';
import Card from './Card';
import portfolio from '../assets/portfolio.png';
import drummachine from '../assets/drummachine.png';
import quotegenerator from '../assets/quotegenerator.png';
import calculator from '../assets/calculator.png';
import mycompany from '../assets/mycompany.png';
import playlistmanager from '../assets/playlistmanager.png';
import internshipmanager from '../assets/internshipmanager.png';
import kidsapp from '../assets/kidsapp.png';
import lightbulb from '../assets/lightbulb.png';
import alarmclock from '../assets/alarmclock.png';
import fakeproduct from '../assets/fakeproduct.png';
import newyear from '../assets/newyear.png';
import pythonandexcel from '../assets/pythonandexcel.png';
const Project = () => {
    const [projectsData] = useState([
        { imgsrc: portfolio, title: "Portfolio", description: "Description for Cookify", github: "https://github.com/Gowtham-017/Portfolio/", live: "https://gowthamk29.netlify.app/", },
        { imgsrc: drummachine, title: "DrumMachine", description: "Description for Musify" , github: "https://github.com/Gowtham-017/DrumMachine", live: "https://www.google.com/",},
        { imgsrc: newyear, title: "New-Year", description: "Description for Cookify" , github: "https://github.com/Gowtham-017/New_Year_2024", live: "https://www.google.com/",},
        { imgsrc: lightbulb, title: "Light-Bulb", description: "Description for Cookify" , github: "https://github.com/Gowtham-017/Light_Bulb", live: "https://lightbulb17.netlify.app/",},
        { imgsrc: mycompany, title: "My-Company", description: "Description for Cookify", github: "https://github.com/Gowtham-017/mycompany", live: "https://www.google.com/", },
        { imgsrc: alarmclock, title: "Alarm-Clock", description: "Description for Cookify" , github: "https://github.com/Gowtham-017/Alarm_Clock", live: "https://alarm-clock-model.netlify.app/",},
        { imgsrc: quotegenerator, title: "Random-Quotes", description: "Description for Cookify", github: "https://github.com/Gowtham-017/Random-Quotes", live: "https://quotesgen-random.netlify.app/", },
        { imgsrc: kidsapp, title: "Kids-ColorApp", description: "Description for Musify" , github: "https://github.com/Gowtham-017/Color_App_Kids", live: "https://kids-color.netlify.app/",},
        { imgsrc: playlistmanager, title: "PlayList-Manager", description: "Description for Musify" , github: "https://github.com/Gowtham-017/PlayList_Manager", live: "https://www.google.com/",},
        { imgsrc: fakeproduct, title: "FakeProduct-Detector", description: "Description for Cookify" , github: "https://github.com/Gowtham-017/FakeProduct_Manager", live: "https://www.google.com/",},
        { imgsrc: calculator, title: "Calculator", description: "Description for Musify", github: "https://github.com/Gowtham-017/Simple-Calculator", live: "https://easycalci.netlify.app/", },
        { imgsrc: internshipmanager, title: "Internship-Manager", description: "Description for Cookify" , github: "https://github.com/Gowtham-017/Internship_Manager", live: "https://www.google.com/",},
        { imgsrc: pythonandexcel, title: "Python-Excel", description: "Description for Cookify" , github: "https://github.com/Gowtham-017/Python_and_Excel", live: "https://www.google.com/",},
    ]);
    return (
        <div className='body'>
            <center><h1 style={{ padding: '10px' }}>My Recent Projects</h1></center>
            <div className='row'>
                {projectsData.map((project, index) => (
                    <Card key={index} imgsrc={project.imgsrc} title={project.title} description={project.description} github={project.github} live={project.live}/>
                ))}
            </div>
        </div>
    );
};
export default Project;
