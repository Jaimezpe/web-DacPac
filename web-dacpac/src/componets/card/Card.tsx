import './Card.css'

interface CardProp {
    title: string;
    children: React.ReactNode;
}

export default function Card({title, children}: CardProp) {
    return <div className="titled-card mx-auto">
        <h3 className="card-title py-3">{title}</h3>
        <div className="card-children">{children}</div>
    </div>
}