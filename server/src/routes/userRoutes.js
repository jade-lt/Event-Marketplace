const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const router = express.Router();

router.get("/", (req, res) => res.send("this is the user router"));

router.get("/my-items", (req, res) => res.send("this is where my items will be displayed"));

router.get("/new-session", (req, res) => {
    req.session.testProperty = "the session is running";
    res.send("session started OK");
});

router.get("/test-session", (req, res) => {
    res.send(req.session.testProperty);
    console.log("OK")
});

router.get("/expire-session", (req, res) => {
    req.session.destroy(() => res.send("the session has expired"));
});

router.post("/register", (req, res) => {
    const body = req.body;
    const passwordHash = bcrypt.hashSync(body.password, 10);
    const user = { userName: body.userName, password: passwordHash };
    console.log("user registered", body, passwordHash, user);
    UserModel.create(user).then((userData) => {
        res.send(userData);
    });
});

router.post("/login", (req, res) => {
    UserModel.findOne({ userName: req.body.userName }).then((userData) => {
        if(userData) {
            const checkHashPassword = bcrypt.compareSync(
                req.body.password,
                userData.password
            );
            if(checkHashPassword) {
                req.session.user = {
                    id: userData._id,
                };
                res.send("successfully logged in");
            } else {
                res.status(401).send("username or password is incorrect");
            }
        } else {
            res.status(401).send("username or password is incorrect");
        }
    });
});

router.get("/logout", (req, res) => {
    req.session.loggedIn = false;
    res.send("successfully logged out");
});


module.exports = router;