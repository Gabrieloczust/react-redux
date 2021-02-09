import Types from './types';

const Creators = {
    addCar: car => ({
        type: Types.ADD_CAR,
        car: car
    })
}

export default Creators;