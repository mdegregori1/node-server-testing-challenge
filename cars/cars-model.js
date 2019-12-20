const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  remove
//   findBy,
//   findById,
};

function find() {
  return db('cars').select('id', 'make', 'model', 'year');
}

// function findBy(filter) {
//   return db('users').where(filter);
// }

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

// function findById(id) {
//   return db('users')
//     .where({ id })
//     .first();
// }
