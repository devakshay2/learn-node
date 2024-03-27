const router = require("express").Router();

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

router.get("/concurency", async (req, res) => {
  for (let i = 0; i < 120; i++) {
    await delay(500);
    console.log(i);
    fetch("https://catfact.ninja/fact")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.fact);
      });
  }
});

router.get("/exception", async (req, res, next) => {
  try {
    let ele = {};
    //delibrately causing an error.
    const ele2 = ele.map((i) => i);
    res.status(200).send({ data: ele2 });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
