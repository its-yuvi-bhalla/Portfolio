import { useEffect, useRef } from 'react';
import './Project.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Project(opts) {
  const projectRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 50, scale: 0.9 , duration: 15},
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  return (
    <>
      <div className='project-parent' ref={projectRef}>
        <div className="project-child" >
          <div className='inline'>
            <h1 className='proj-heading'>{opts.heading}</h1>
            <span className="icon">{opts.icon}</span>
          </div>
          <h2 className='proj-position'>Position: {opts.position}</h2> 
          <p className='proj-para-primary'>My job duties include:</p>
          <ul>
            <li className='job-d'>{opts.jd1}</li>
            <li className='job-d'>{opts.jd2}</li>
            <li className='job-d'>{opts.jd3}</li>
            <li className='job-d'>{opts.jd4}</li>
            <li className='job-d'>{opts.jd5}</li>
            <li className='job-d'>{opts.jd6}</li>
            <li className='job-d'>{opts.jd7}</li>
            <li className='job-d'>{opts.jd8}</li>
            <li className='job-d'>{opts.jd9}</li>
            <li className='job-d'>{opts.jd10}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project;
