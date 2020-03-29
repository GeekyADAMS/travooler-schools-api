const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const School = require('../modules/school');

router.post('/', (req, res, next) => {
    const school = new School({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        state: req.body.state,
        admissionScore: req.body.score,
        status: req.body.status,
        degreeOffered: req.body.degree,
        applicationFee: req.body.appFee,
        country: req.body.country,
        courseOffered: req.body.course,
        schoolCost: req.body.cost
    });

    school
        .save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST request to /schools',
            createdSchool: result
        });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    School.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({message: 'School with this ID not found'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.get('/', (req, res, next) => {

    School.find()
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    School.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Updated'
    });
});

module.exports = router;