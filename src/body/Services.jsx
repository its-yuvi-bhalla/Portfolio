import './Services.css';
import ServiceItem from './ServiceItem'

function Services() {
  return (
    <section id='Services'className="services">
      <h2 className="services-heading">My Services</h2>
      <div className="services-list">
        <ServiceItem service='Test Case Design' desc= 'I can create detailed and effective test cases for various software applications.'/>
        <ServiceItem service='Manual Testing' desc= 'I execute manual test cases to ensure software functionality meets requirements.'/>
        <ServiceItem service='Automation Testing with Cypress' desc= 'I develop automation scripts using Cypress to enhance test efficiency.'/>
        <ServiceItem service='Bug Reporting & Tracking' desc= 'I can identify, document, and track software bugs using tools like JIRA.'/>
      </div>
    </section>
  );
}

export default Services;
