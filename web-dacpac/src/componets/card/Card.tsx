import './Card.css'

interface CardProp {
    className?: string;
    title: string;
    children: React.ReactNode;
}

export default function Card({className, title, children}: CardProp) {
    return <div className={"titled-card drop-shadow " + className}>
        <h3 className="card-title py-3">{title}</h3>
        <div className="card-children">{children}</div>
    </div>
}