const {Router} = require("express");
const router = Router();

// ROUTES
router.get("/", (req, res) => {
    res.json({"Title": "Hello World!"})
})

router.get("/test", (req, res) => {
    const data = {
        "Title": "Jorge Tamariz",
        "website": "github.com/jorgetmrz"
    }
    res.json(data);
})

module.exports = router;