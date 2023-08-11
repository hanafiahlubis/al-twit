import express from "express";

const accounts = [];
const router = express.Router();
router.post("/daftar", async (req, res) => {
    req.body.id = accounts.length + 1;
    accounts.push(req.body);
    res.json(accounts);
});

let result = 0;
router.put("/forgout", async (req, res) => {
    let i = 0;
    for (let account of accounts) {
        if (account.email === req.body.email) {
            result++;
            break;
        } i++;
    };
    if (result > 0) {
        accounts[i].password = req.body.password;
        res.json(accounts[i]);
    }
})
router.put("/forgout", async (req, res) => {
    let i = 0;
    for (let account of accounts) {
        if (account.email === req.body.email) {
            result++;
            break;
        } i++;
    };
    if (result > 0) {
        accounts[i].password = req.body.password;
        res.json(accounts[i]);
    }
})

export default router;