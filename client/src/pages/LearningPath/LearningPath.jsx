import React, {lazy, useState} from "react";

const Learner = lazy(() => import('./Learner/Learner.jsx'));
const Worker = lazy(() => import('./GIGWorker/Worker.jsx'));

import './LearningPath.css';
import gigWorker from '../../assets/images/worker.jpg';
import learner from '../../assets/images/learner.jpg';

const  LearningPath = () => {
    const [path, setPath] = useState('');

    const isPath = (destination) => {
        console.log(path, destination);
        return path === destination;
    }

    if(isPath('learner')) {
        return <Learner />
    }

    if(isPath('gig-worker')) {
        return <Worker />
    }

    return (
        <section className="section-path">
            <div className="header">
                <h1>N2O Ciphers Bounty Nation</h1>
                <div className='slide-animation'/>
            </div>
            <div className="path">
                <h3>Select your role:</h3>
                <div className="learning-path">
                    <article className="learner-article" >
                        <img src={learner} alt="learner"/>
                        <p>
                            I'm a student looking to learn and explore programs. I aim to get certified and eventually transition into a gig-worker by building my skills through the platform.
                        </p>
                        <button onClick={() => setPath('learner')}>Explore as a Learner</button>
                    </article>
                    <article className="worker-article">
                        <img src={gigWorker} alt="gig-learner"/>
                        <p>
                            I'm a gig-worker here to take up real-world projects posted on the platform and earn money by applying my skills to complete tasks efficiently.
                        </p>
                        <button onClick={() => setPath('gig-worker')}>Continue as a GIG-Worker</button>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default LearningPath;