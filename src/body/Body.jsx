import Section from './Section.jsx'
import Project from './Project.jsx'
import Skills from './Skills.jsx'
import Services from './Services.jsx'
import image from '../assets/component.svg'
import './Body.css'
import jobDuties from '../assets/jobDuties.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import correctly
import { faFileInvoiceDollar, faServer } from "@fortawesome/free-solid-svg-icons"; // Correct import

function Body() {
  const para = {
    para1: 'Hi, I’m Yuvraj Bhalla, a passionate software tester and developer driven by the thrill of creating software that truly excels. With expertise in both manual and automated testing, I’m not just ensuring applications function — I’m committed to pushing them to their full potential. Every line of code I work with undergoes rigorous testing to guarantee not just compliance but true excellence.',
    para2: 'What sets me apart is my deep understanding of both the developer and tester roles. Having a background in software development allows me to dive into code, identify inefficiencies, and optimize performance. This dual perspective helps me anticipate challenges before they arise and streamline the path from development to deployment, ensuring that every product I work on is robust, scalable, and user-friendly.',
    para3: 'I thrive on problem-solving, whether it’s fixing bugs, enhancing performance, or introducing new features that enhance the user experience. My passion lies in bridging the often-overlooked gap between development and testing. By blending these two worlds, I create seamless software that works flawlessly in the real world.',
    para4: 'Ultimately, my mission is simple: to create software that not only works but works brilliantly. Whether it’s finding the smallest bug or ensuring a smooth user journey, I’m all about delivering efficient, high-quality software products that make a difference.',
  }

  const srtDuties = jobDuties.srt
  const qmDuties = jobDuties.QM

  return (
    <>
      <main className="body-main">
        <div className='content-sect-parent'>
          <Section type='text' heading='My Portfolio' para1={para.para1} para2={para.para2} para3={para.para3} para4={para.para4} />
          <Section type='img' imgSource={image} />
        </div>
        <span id='Skills'></span>
        <div className='project-root'>
          <Skills />
        </div>
        <div id='projects'></div>
        <div className='project-root'>
          <Project 
            heading='South River Technologies'
            position = 'Junior QA Analyst'
            icon={<FontAwesomeIcon icon={faServer} />} 
            jd1={srtDuties.automatedTesting}
            jd2={srtDuties.manualTesting}
            jd3={srtDuties.sftpOperations}
            jd4={srtDuties.versionControl}
            jd5={srtDuties.bugReporting}
            jd6={srtDuties.testCaseDevelopment}
            jd7={srtDuties.crossTeamCollaboration}
            jd8={srtDuties.performanceTesting}
            jd9={srtDuties.regressionTesting}
            jd10={srtDuties.loadTesting}
          />
        </div>
        <div className='project-root'>
          <Project 
            heading='Quote Machine'
            position = 'Junior QA Analyst'
            icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />} 
            jd1={qmDuties.automationScripts}
            jd2={qmDuties.manualTesting}
            jd3={qmDuties.integrationTesting}
            jd4={qmDuties.parallelTestExecution}
            jd5={qmDuties.apiTesting}
            jd6={qmDuties.bugReporting}
            jd7={qmDuties.testCaseDevelopment}
            jd8={qmDuties.crossTeamCollaboration}
            jd9={qmDuties.performanceTesting}
            jd10={qmDuties.dataFileUploads}
          />
        </div>
        <div>
          <Services/>
        </div>
      </main>
    </>
  )
}

export default Body;
