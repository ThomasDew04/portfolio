import { memo } from 'react';
import { skills } from '../data/data';

function IconCard({icon}) {

  return (
    <div className='iconCard'>
        <img className='iconSkill' src={icon.img} alt={icon.name} />
        <p className='iconName'>{icon.name}</p>
    </div>
  );  
} 

function Icons() {
    
  return (
    <div className="icons">
        {skills.map((i) => (
            <IconCard icon={i}/>
        ))}
    </div>
  );  
} 

export default memo(function Skills() {

    return (
        <div className='mainSkills'>
            <h1 className='header2' id="Skills">&lt;/&gt; Skills</h1>
            <div className='skillsContainer'>
                <h3>What I do</h3>
                <Icons />
            </div>
        </div>
    );

});