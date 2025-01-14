import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/data", (req, res) => {
  res.status(200).send([
    {
      id: 1,
      name: "John Doe",
      email: "john@john.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@doe.com",
    }
  ]);
});

export default router;
