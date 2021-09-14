const express = require('express');
const router = express.Router();
const Tarefa  = require('../models/tarefas');

router.post("/add", async (req, res) => {
    await Tarefa.create(req.body)
    .then(() => {
        res.status(200).send("Prontinho! Tarefa adicionada com sucesso.Tenha um ótimo dia.");

    }).catch((err) => {
        res.status(400).send("Opa! Não conseguimos incluir a sua nova tarefa, será que você preencheu tudo certinho?");
        console.error(err);

    })
});

router.get('/', async (req, res) => {
    await Tarefa.find({})
    .then((tarefa) => {
        console.log(tarefa);
        (res.status(200).send(tarefa));
    })
    .catch((err) => {
        res.status(400).send("Opa! Não conseguimos fazer a sua busca, será que você preencheu tudo certinho?");
        console.error(err);
    })
});

router.get('/findById/:id', async (req, res) => {
    await Tarefa.find({_id : req.params.id})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send("Opa! Não conseguimos fazer a sua busca, será que você preencheu tudo certinho?");
        console.error(err);
    })

});

router.put('/update:id', async (req, res) => {
    await Tarefa.updateOne({_id : req.params.id},
        req.body)
        .then(() => {
            res.status(400).send("Prontinho! Tarefa alterada com sucesso.Tenha um ótimo dia.");
        })
        .catch((err) => {
            res.status(200).send("Opa! Não conseguimos fazer a sua inclusão, será que você preencheu tudo certinho?");
            console.error(err);
        });
});

router.delete("/delete", async (req, res) => {
    await Tarefa.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Prontinho! Tarefa deletada com sucesso.Tenha um ótimo dia.");
    })
    .catch((err) => {
        res.status(400).send("Opa! Não conseguimos fazer a sua inclusão, será que você preencheu tudo certinho?");
        console.error(err);
    })
});

module.exports = router;

