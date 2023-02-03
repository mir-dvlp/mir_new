export default function Card({type, href, src, name}) {
    return(
        <div className={type}>
            <a href={href} aria-label={name}></a>
            <img src={src} alt={name}/>
            <span className="name">{name}</span>
        </div>
    )
}