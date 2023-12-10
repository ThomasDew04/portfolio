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
          <svg viewBox="0 0 864 114" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg2'>
            <path d="M914.838 -463.063C914.838 -355.092 1752.34 92.9366 960.338 113.937C514.838 113.937 -125.163 -55.5635 21.337 -226.563C167.837 -397.563 378.837 -286.063 769.838 -633.063C1160.84 -980.064 914.838 -571.035 914.838 -463.063Z" fill="#9DB2BF"/>
          </svg>
          <h1 className='header2' id="Skills">&lt;/&gt; Skills</h1>
          <div className='skillsContainer'>
              <h3>What I do</h3>
              <Icons />
          </div>
        </div>
    );

});