import { nanoid } from "nanoid";
import coffeeBag from '@assets/img/coffee-bag.png';

const data = [
    {
        image: coffeeBag,
        title: 'Sun coffee 1',
        price: 100,
        id: nanoid()
    },
    {
        image: coffeeBag,
        title: 'Sun coffee 2',
        price: 200,
        id: nanoid()
    },
    {
        image: coffeeBag,
        title: 'Sun coffee 3',
        price: 300,
        id: nanoid()
    }
];
export default data;