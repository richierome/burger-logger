var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//routes 
router.get("/", (req, res) => {
    burger.selectAll((data) =>{
        var hbsObject = {
            burger:data
        };

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    console.log(req.body);
    req.body.devoured = req.body.devoured == 'true';

    burger.insertOne([
        "burger", "devoured"
    ], [req.body.burger_name, req.body.devoured], (data) =>{
        //send back the id of the newly created burger.
        res.json ({id: data.insertId });
    });
});

router.put("/api/burgers/:id",(req, res) =>{
    var condition = "id =" + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (data) =>{
        
        if (data.changedRows == 0) {
            //if no rows were changed, then the ID must not exit.
            return res.status(404).end();

        }else{
            res.status(200).end();
        }
    });
});


module.exports = router;