const mongoose = require("mongoose")
const List = mongoose.model("List")

module.exports = (app) => {
    // Global routes
    app.route("/lists")
        .get((req, res) => {

            List.find((err, oldLists) => {
                if (err)
                    res.send(err);
                else
                    res.send(oldLists);
            })

        })
        .post((req, res) => {

            const newList = new List({
                title: req.body.title,
                obtained: req.body.obtained,
                listNumber: req.body.listNumber,
                details: req.body.details,
                objectives: req.body.objectives
            });

            newList.save((err) => {
                if (err)
                    res.send(err)
                else
                    res.send("Added a new list! \"El Psy Kongroo\"")
            })
        })



    // Modifications can only be done based on the quest listNumber
    app.route("/lists/listNumber/:listNumber")
        .patch((req, res) => {
            List.updateOne({ listNumber: req.params.listNumber },
                {
                    $set: req.body
                },
                (err) => {
                    if (err)
                        res.send(err);
                    else
                        res.send("Mutated one list")
                })
        })
        .delete((req, res) => {
            List.deleteOne({ listNumber: req.params.listNumber }, (err) => {
                if (err)
                    res.send(err)
                else
                    res.send("Deleted one list successfully!")
            })
        });
}