import './ListItem.css'

function ListItem(opts) {
  return (
        <li className="item-child"><a href= {opts.link}>{opts.item}</a></li>
  )
}

export default ListItem