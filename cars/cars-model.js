const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  remove

};

function find() {
  return db('cars').select('id', 'make', 'model', 'year');

}


function add(car) {
  return db('cars').insert(car)
  .then(ids => {
    return db('cars').where({id: ids[0]}).first()
  })
    
}

function remove(id){
  return db('cars')
  .where({id})
  .del()
}	

