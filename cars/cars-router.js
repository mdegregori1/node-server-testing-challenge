const router = require("express").Router();

const Cars = require("./cars-model.js");

router.post('/', (req, res) => {
    const car = req.body;

    Cars.add(car)
    .then(cars => {
        res.status(201).json(cars)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage:"error adding a car"})
    })
  });

router.get('/', (req,res) => {

    Cars.find()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "error retrieving cars list"})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Cars.remove(id)
    .then(id => {
        if(id){
            res.status(204).json({message: "car erased successfully"})
        } else {
            res.status(404).json({message: "could not find car with the given id"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ErrorMessage: "failed from server"})
    })
})

module.exports = router;
