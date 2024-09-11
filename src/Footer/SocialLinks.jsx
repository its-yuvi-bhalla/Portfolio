import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialLinks(opts) {
  return (
    <>
    <a href={opts.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={opts.icon} /> {opts.name}
          </a></>
  )
}

export default SocialLinks