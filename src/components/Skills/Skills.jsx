import React, { useState } from 'react';
import './Skills.css';
import {skills} from "../../utils/data.js";
import SkillsCard from './SkillsCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard.jsx';

const Skills = () => {
    const [selectedSkill,setselectedSkill]=useState(skills[0]);
    const handleSelectedSkill=(data)=>{
        setselectedSkill(data);
    };
  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>
      <div className='skills-content'>
        <div className='skills'>
            {skills.map((item)=>(
                <SkillsCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title===item.title}
                    onClick={()=>
                    {handleSelectedSkill(item);
                    }}
                />
            ))}
        </div>
        <div className='skills-info'>
            <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            />
        </div>
      </div>
    </section>
  )
}

export default Skills