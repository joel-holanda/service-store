import { itensFood } from '../../mock/food'

export default function Submenu() {    
    return(
        <div className="h-12 bg-tertiary flex justify-between items-center">
            {itensFood.map(a => {
                return <p key={a.id} className='mx-16'> | {a.title} | </p>})}
        </div>
    )
}