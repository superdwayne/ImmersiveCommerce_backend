const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// API endpoint to get all 3D models
app.get('/api/models', (req, res) => {
    const models = [
        { name: "Jacket", url: "https://storage.polycam.io/captures/325eb391-c72a-431d-b304-98ddedef574a/raw.glb?t=1729077591034" },
        { name: "Balenciaga", url: "https://storage.polycam.io/captures/d3efbdcb-ef62-4112-b7c5-3f099f24b636/raw.glb?t=1729077279389" },
        { name: "Fila", url: "https://storage.polycam.io/captures/e7860688-4e56-44e4-8b5a-d1fbcc34775f/raw.glb?t=1729077484936" },
        { name: "Nike", url: "https://storage.polycam.io/captures/7dbfb890-bc2c-4b77-87b5-187973bcbdee/raw.glb?t=1729077764551" },
        { name: "Bag", url: "https://storage.polycam.io/captures/1ac77d1b-3178-4738-bbb4-ae1e6c883542/raw.glb?t=1729077815091" },
        { name: "Dior", url: "https://storage.polycam.io/captures/d330c813-0232-4620-b394-642145be55eb/raw.glb?t=1729077933033" }
    ];
    res.json(models);
});

// API endpoint to get a specific 3D model by name
app.get('/api/models/:name', (req, res) => {
    const models = {
        "jacket": "https://storage.polycam.io/captures/325eb391-c72a-431d-b304-98ddedef574a/raw.glb?t=1729077591034",
        "balenciaga": "https://storage.polycam.io/captures/d3efbdcb-ef62-4112-b7c5-3f099f24b636/raw.glb?t=1729077279389",
        "fila": "https://storage.polycam.io/captures/e7860688-4e56-44e4-8b5a-d1fbcc34775f/raw.glb?t=1729077484936",
        "nike": "https://storage.polycam.io/captures/7dbfb890-bc2c-4b77-87b5-187973bcbdee/raw.glb?t=1729077764551",
        "bag": "https://storage.polycam.io/captures/1ac77d1b-3178-4738-bbb4-ae1e6c883542/raw.glb?t=1729077815091",
        "dior": "https://storage.polycam.io/captures/d330c813-0232-4620-b394-642145be55eb/raw.glb?t=1729077933033"
    };

    const modelName = req.params.name.toLowerCase();
    const modelUrl = models[modelName];

    if (modelUrl) {
        res.json({ name: modelName, url: modelUrl });
    } else {
        res.status(404).json({ error: "Model not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
