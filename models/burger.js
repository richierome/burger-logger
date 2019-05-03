var orm = require ("../config/orm.js");

//Calls ORM function specific to burger
var burger = {
    selectAll: (cb) =>{
        orm.selectAll("burger", (res) =>{
            cb(res);

        });
    
},

insertOne: (cols, vals, cb) =>{
    orm.insertOne("burger", cols, vals, (res) => {
        cb(res);
    })
},

updateOne: (objColVals, condition, cb) =>{
    orm.updateOne("burger", objColVals, condition, (res) => {
        cb(res);
    });
    }
};
module.exports = burger;