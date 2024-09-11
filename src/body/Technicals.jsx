import { useState, useEffect, useRef } from "react";
import "./interPersonal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCogs, faCloud, faKeyboard, faBug, faFileAlt, faDesktop, faClipboardCheck, faNetworkWired, faSync, faTachometerAlt, faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";

function TechnicalSkills() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      gsap.to(dropdownRef.current, {
        height: 400,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
          dropdownRef.current.style.display = "block";
        },
      });
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          dropdownRef.current.style.display = "none";
        },
      });
    }
  }, [isDropdownOpen]);

  return (
    <div className='inter-skills-parent'>
      <div className="inter-skills-child">
        <h1 className='inter-skills-heading'>Technical Skills</h1>
        <ul className='technical-skills'>
          <li className='sk'><FontAwesomeIcon className='bug' icon={faCode} /> Programming Languages: HTML5, CSS3, JavaScript (ES6+), SQL, Python</li>
          <li className='sk'><FontAwesomeIcon className='bug' icon={faCogs} /> Frameworks & Libraries: Cypress</li>
          <li className='sk'><FontAwesomeIcon className='bug' icon={faCloud} /> Cloud Testing Platforms: BrowserStack</li>
          <li className='sk'><FontAwesomeIcon className='bug' icon={faKeyboard} /> Testing Frameworks: Mocha, Chai</li>
          <li className='sk-drop'>
            <FontAwesomeIcon className='bug' icon={faBug} onClick={toggleDropdown} /> 
            Testing Methodologies:<span className="see-more"> (click on the <FontAwesomeIcon className='bug-span' icon={faBug} onClick={toggleDropdown} /> to see more...)</span>
          </li>

          {/* Conditional rendering for the dropdown */}
          <ul ref={dropdownRef} className='sk sk-sub' style={{ display: "none", overflow: "hidden", height: 0 }}>
            <li className='sk sub'><FontAwesomeIcon className='bug' icon={faDesktop} /> User Interface Testing</li>
            <li className='sk sub'><FontAwesomeIcon className='bug' icon={faClipboardCheck} /> User Acceptance Testing (UAT)</li>
            <li className='sk sub'><FontAwesomeIcon className='bug' icon={faNetworkWired} /> RESTful API Testing</li>
            <li className='sk sub'><FontAwesomeIcon className='bug' icon={faSync} /> Smoke Testing</li>
            <li className='sk sub'><FontAwesomeIcon className='bug' icon={faNetworkWired} /> Integration Testing</li>
            <li className='sk sub'><FontAwesomeIcon className='bug' icon={faTachometerAlt} /> Load Testing</li>
            <li className='sk sub'><FontAwesomeIcon className='bug' icon={faFileUpload} /> File Transfer Testing</li>
            <li className='sk sub'><FontAwesomeIcon className='bug' icon={faTachometerAlt} /> Performance Testing</li>
          </ul>

          <li className='sk'><FontAwesomeIcon className='bug' icon={faCloud} /> Integrated Development Environments (IDEs): Visual Studio Code, Visual Studio</li>
          <li className='sk'><FontAwesomeIcon className='bug' icon={faGithub} /> Version Control Systems: GitHub, Bitbucket</li>
          <li className='sk'><FontAwesomeIcon className='bug' icon={faFileAlt} /> File Transfer Tools: FileZilla, WinSCP</li>
        </ul>
      </div>
    </div>
  );
}

export default TechnicalSkills;
