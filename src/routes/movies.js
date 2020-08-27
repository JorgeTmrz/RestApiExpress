const {Router} = require("express");
const router = Router();
const movies = require("../sample.json")

router.put("/:id", (req, res) => {
    const {id} = req.params;
    const {title, director, year, rating} = req.body;

    // Validate date, in professional cases just use express-validator
    if(title && director && year && rating){
        movies.forEach((movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.year = year;
                movie.director = director;
                movie.rating = rating;
            }
        })

        res.json(movies);
    } else {
        res.status(500).json({"error": "there was an error"})
    }
})

router.get("/", (req, res) => {
    res.json(movies)
})

router.post("/", (req, res) => {
    const {title, director, year, rating} = req.body;

    // Validate date, in professional cases just use express-validator
    if(title && director && year && rating){
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({"error": "there was an error"})
    }
})


// request with params
router.delete("/:id", (req, res) => {
    const {id} = req.params;
    movies.forEach((movie, i) => {
        if(movie.id == id) {
            movies.splice(i, 1);
        }
    })
    res.json(movies);
})


module.exports = router;