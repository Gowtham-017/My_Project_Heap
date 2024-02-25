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
import eventapp from '../assets/eventapp.png';
import fakeproduct from '../assets/fakeproduct.png';
import newyear from '../assets/newyear.png';
import mytodo from '../assets/mytodo.png';
import pythonandexcel from '../assets/pythonandexcel.png';
const Project = () => {
    const [projectsData,setProjectsData] = useState([
        {id:1, imgsrc: portfolio, title: "Portfolio", description: "Designed a simple Portfolio website for me shocasing my profiles and works", github: "https://github.com/Gowtham-017/Portfolio/", live: "https://gowthamk29.netlify.app/", },
        {id:2, imgsrc: eventapp, title: "Event Manager", description: "A Full- Stack Event Manager application using Vite.js and SpringBoot. I have used Postgresql for managing data and implemented Jwt Security for authentication", github: "https://github.com/Gowtham-017/Advanced_App_Development/", live: "", },
        {id:3, imgsrc: newyear, title: "New-Year", description: "A New Year wishing page with animations" , github: "https://github.com/Gowtham-017/New_Year_2024", live: "",},
        {id:4, imgsrc: lightbulb, title: "Light-Bulb", description: "A HTML and CSS project that designes a lightbulb and it was quite fun designing this project" , github: "https://github.com/Gowtham-017/Light_Bulb", live: "https://lightbulb17.netlify.app/",},
        {id:5, imgsrc: mycompany, title: "My-Company", description: "Employee Manager application connected with Database that effectively manages the details of the company's employee", github: "https://github.com/Gowtham-017/mycompany", live: "", },
        {id:6, imgsrc: fakeproduct, title: "FakeProduct-Detector", description: "A frontend design for a fake-product detection site using React" , github: "https://github.com/Gowtham-017/FakeProduct_Manager", live: "",},
        {id:7, imgsrc: mytodo, title: "To-Do-List", description: "My to-do app for managing tasks for the day using react and javascript", github: "https://github.com/Gowtham-017/To_Do_List", live: "https://to-do-stack.netlify.app/", },
        {id:8, imgsrc: drummachine, title: "DrumMachine", description: "A simple DrumMachine that you can use for making sounds and enjoy the music" , github: "https://github.com/Gowtham-017/DrumMachine", live: "",},
        {id:9, imgsrc: alarmclock, title: "Alarm-Clock", description: "Designed simple alarm clock using HTML and CSS" , github: "https://github.com/Gowtham-017/Alarm_Clock", live: "https://alarm-clock-model.netlify.app/",},
        {id:10, imgsrc: quotegenerator, title: "Random-Quotes", description: "A random quote generator that generates quotes on a random basis", github: "https://github.com/Gowtham-017/Random-Quotes", live: "https://quotesgen-random.netlify.app/", },
        {id:11, imgsrc: kidsapp, title: "Kids-ColorApp", description: "A simple webpage for kids to learn colours using audio and descriptions" , github: "https://github.com/Gowtham-017/Color_App_Kids", live: "https://kids-color.netlify.app/",},
        {id:12, imgsrc: playlistmanager, title: "PlayList-Manager", description: "Integrated system for managing music playlist that is connected to database and I have used SpringBoot for the backend services" , github: "https://github.com/Gowtham-017/PlayList_Manager", live: "",},
        {id:13, imgsrc: calculator, title: "Calculator", description: "An arithmetic calculator that performs basic calculations", github: "https://github.com/Gowtham-017/Simple-Calculator", live: "https://easycalci.netlify.app/", },
        {id:14, imgsrc: internshipmanager, title: "Internship-Manager", description: "A console application developed using Java that manages internships registered by students" , github: "https://github.com/Gowtham-017/Internship_Manager", live: "",},
        {id:15, imgsrc: pythonandexcel, title: "Python-Excel", description: "Used Python to extract the data from folders to excel sheet and simplify it" , github: "https://github.com/Gowtham-017/Python_and_Excel", live: "",},
    ]);
    return (
        <div className='body'>
            <center><h1 style={{ padding: '10px' }}>My Recent Projects</h1></center>
            <div className='row'>
                {projectsData.map((project) => (
                    <Card key={project.id} imgsrc={project.imgsrc} title={project.title} description={project.description} github={project.github} live={project.live}/>
                ))}
            </div>
        </div>
    );
};
export default Project;
