import ListItem from './ListItem.jsx'
import './Nav.css'

function Nav(){
  return (
    <>
      <nav className="nav-struct">
        <div>
          <ul className='list-parent'>
            <ListItem item= "Home" link="#"/>
            <ListItem item= "Skills" link="#Skills"/>
            <ListItem item= "Projects" link="#projects"/>
            <ListItem item= "Services" link="#Services"/>
          </ul>
        </div>
        <div className='list-parent'>
          <h1 className='nav-heading'>My Portfolio</h1>
        </div>
      </nav>
    </>
  )
}

export default Nav