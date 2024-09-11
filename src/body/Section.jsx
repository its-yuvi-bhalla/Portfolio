import './Section.css'
function Section(opts) {
  if(opts.type == 'text'){
    return (
    <>
    <div className='container container-text'>
        <h1 className='home-port-heading'>{opts.heading}</h1>
        <p>{opts.para1}</p>
        <p>{opts.para2}</p>
        <p>{opts.para3}</p>
        <p>{opts.para4}</p>

    </div>
    </>
    )
  } else if( opts.type == 'img'){
    return (
    <>
    <div className='container'>
    <img src={opts.imgSource} alt="img" className="sect-img" />
    </div>
    </>)
  }
}

export default Section