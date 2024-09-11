function ServiceItem(opts) {
  return (
    <>
    <div className="service-item">
          <h3 className="service-title">{opts.service}</h3>
          <p className="service-description">{opts.desc}</p>
        </div>
    </>
  )
}

export default ServiceItem