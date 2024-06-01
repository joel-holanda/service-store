export type FlavorsItems = {
    id: number
    title: string
    listFlavors: IListFlavors[]
}

export type IListFlavors = {
    id: number;
    price: number;
    name: string;
    image: string;
    description: string;    
};