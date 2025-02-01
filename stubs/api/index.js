const router = require('express').Router();

router.get(`/dishes`, (req, res) => {
    const { page, size } = req.query;
    res.send(require(`../json/homepage-data/dishes/${page}&${size}.json`))
})

router.get(`/profile/userId`, (req, res) => {
    const { id } = req.query;
    res.send(require(`../json/userpage-data/user-data/${id}.json`))
})

router.get(`/profile/my-dishes`, (req, res) => {
    const { page, size } = req.query;
    res.send(require(`../json/userpage-data/my-recipes/${page}&${size}.json`))
})

router.get(`/profile/favourite`, (req, res) => {
    const { page, size } = req.query;
    res.send(require(`../json/userpage-data/favourite/${page}&${size}.json`))
})

router.get(`/tag`, (req, res) => {
    res.send(require(`../json/homepage-data/tags/tags.json`))
})

router.get(`/recipepage-data/:id`, (req, res) => {
    const { id } = req.params;
    res.send(require(`../json/recipepage-data/${id}.json`))
})

module.exports = router;

// // router.get('/recipes/:id', (req, res) => {
// //     const recipeId = req.params.id;
// //     const filePath = path.join(__dirname, '../json/recipepage-data', `recipe_${recipeId}.json`);

// //     if (fs.existsSync(filePath)) {
// //         res.json(readJSON(filePath));
// //     } else {
// //         res.status(404).json({ error: "Recipe not found" });
// //     }
// // })

// router.get('/recipepage-data/:id', (req, res) => {
//     res.send(require('../json/recipepage-data/success.json'))
// })

// module.exports = router;
// const fs = require('fs');
// const path = require('path');
// const router = require('express').Router();

// router.get('/api/stubs/json/recipepage-data/:id', (req, res) => {
//     const recipeId = req.params.id;
//     const filePath = path.join(__dirname, `../json/recipepage-data/${recipeId}.json`);

//     if (fs.existsSync(filePath)) {
//         res.json(require(filePath));
//     } else {
//         res.status(404).json({ success: false, error: "Recipe not found" });
//     }
// });

// module.exports = router;

// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs');

// app.use(express.json()); // Поддержка JSON

// // Проверяем, что сервер вообще работает
// app.get('/', (req, res) => {
//     res.send('Server is running!');
// });

// // Проверяем, работает ли API-маршрут
// app.get('/stubs/json/recipepage-data/:id', (req, res) => {
//     console.log(`Request received for ID: ${req.params.id}`);
//     const recipeId = req.params.id;
//     const filePath = path.join(__dirname, `json/recipepage-data/${recipeId}.json`); // путь к JSON-файлу
//     console.log(`Запрос на ID: ${recipeId}`);
//     console.log(`Файл: ${filePath}`);

//     if (fs.existsSync(filePath)) {
//         res.json(require(filePath));
//     } else {
//         res.status(404).json({ success: false, error: "Recipe not found" });
//     }
// });

// // Запускаем сервер
// const PORT = 8099;

// app._router.stack.forEach((r) => {
//     if (r.route && r.route.path) {
//         console.log(`Маршрут: ${r.route.path}`);
//     }
// });
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });