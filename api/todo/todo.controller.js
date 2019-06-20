const Todo = require('./todo.model');

exports.show = (req, res, next) => {
    return Todo.find({ deleted_at: null })
        .then(result => {
            res.send(result);
        })
};

exports.create = (req, res, next) => {

    let entity = {
        name: req.body.name,
        created_at: new Date(),
        is_completed: false
    }

    return Todo.create(entity)
        .then(result => {
            res.send('sucess').status(200);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.update = (req, res, next) => {
    if (!req.params.id)
        throw 'Id is required';
    let entity = {
        name: req.body.name,
        updated_at: new Date(),
        is_completed: false
    }

    return Todo.updateOne({ _id: req.params.id }, { $set: entity }, { new: true })
        .then(result => {
            res.send('sucess').status(200);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.destroy = (req, res, next) => {
    return Todo.updateOne({ _id: req.params.id }, { $set: { deleted_at: new Date() } })
        .then(result => {
            res.send(result).status(201);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.updateFields = async (req, res, next) => {
    if (!req.params.id)
        throw 'Id is required'

    let entity = req.body
    entity.updated_at = new Date()
    try{
        let updateToDo = await Todo.updateOne({ _id: req.params.id }, { $set:  entity }, { new: true })

        res.send(updateToDo).status(200)
    }catch(err){
        res.send(err).status(500)
    }    
}