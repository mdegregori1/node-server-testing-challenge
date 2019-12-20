const Cars = require("./cars-model.js")
const db = require('../database/dbConfig.js')

describe('The Cars Model', () => {
    
    beforeEach(async () => {
        //wipe db
        await db('cars').truncate();
    })
    describe('the add function', () => {
        it('should add a new car', async ()=>{
            //test setup
            const carData = {make: "mazda", model: "3", "year": 1990}
            await Cars.add(carData)
            
            //assert
            const cars = await db('cars')
            expect(cars.length).toBe(1);
            expect(cars[0].make).toBe('mazda')

        })
        it('should resolve to the newly created car', async () => {
            //test setup
            const carData = {make: "mazda", model: "3", year: 1990}
            const car = await Cars.add(carData);

            expect(car).toEqual({id: 1, make: 'mazda', model: "3", year: 1990})
        })

    })
    describe('the delete function', () => {
        it('should delete a car', async ()=> {
            //test setup
            await Cars.add({id: 1, make: 'mazda', model: "3", year: 1990})
            await Cars.remove(1);

            const CarData = await db('cars')
            expect(CarData).toHaveLength(0)
        })

        it('should resolve to a newly delete car', async () => {
            //test setup
            const carData = {make: "mazda", model: "3", year: 1990}
            const car = await Cars.remove(carData);

            expect(car).toEqual(0)
        })
    })
})

