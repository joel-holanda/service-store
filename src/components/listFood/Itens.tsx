import { itens } from "../../mock/food"
import CardFood from "./CardFood"


export default function Itens() {
    const title = itens.map(a => a.title)

    return(
        <div className="">
            {/* {itens.map(a => (
                <CardFood key={a.id} listFlavors={a.listFlavors} title={title}/>
            ))} */}
        </div>
    )
}