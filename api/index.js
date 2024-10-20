const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'immersive-commerce.vercel.app/',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
  };

app.use(cors());
app.use(express.json());

// API endpoint to get all 3D models (GLB and USDZ)
app.get('/api/models', cors(), async (req, res) => {
    const models = [
        {
            name: "Jacket",
            glbUrl: "https://storage.polycam.io/captures/325eb391-c72a-431d-b304-98ddedef574a/raw.glb?t=1729077591034",
            usdzUrl: "https://superdwayne.github.io/usdzhost/goose.usdz"
        },
        {
            name: "Balenciaga",
            glbUrl: "https://storage.polycam.io/captures/d3efbdcb-ef62-4112-b7c5-3f099f24b636/raw.glb?t=1729077279389",
            usdzUrl: "https://superdwayne.github.io/usdzhost/used_new.usdz"
        },
        {
            name: "Dior birks",
            glbUrl: "https://storage.polycam.io/captures/875883e9-9a75-44d9-b148-beaf28dc6689/poly.glb?t=1712313069573",
            usdzUrl: "https://superdwayne.github.io/usdzhost/fila.usdz"
        },
        {
            name: "Nike",
            glbUrl: "https://storage.polycam.io/captures/0023494b-28c7-4056-8d3a-a4fcd8177ebd/raw.glb?t=1729424392257",
            usdzUrl: "https://superdwayne.github.io/usdzhost/nike.usdz"
        },
        {
            name: "Bag",
            glbUrl: "https://storage.polycam.io/captures/1ac77d1b-3178-4738-bbb4-ae1e6c883542/raw.glb?t=1729077815091",
            usdzUrl: "https://superdwayne.github.io/usdzhost/gucci.usdz"
        },
        {
            name: "Dior",
            glbUrl: "https://storage.polycam.io/captures/d330c813-0232-4620-b394-642145be55eb/raw.glb?t=1729077933033",
            usdzUrl: "https://superdwayne.github.io/usdzhost/dior.usdz"
        }
    ];
    res.json(models);
});

// API endpoint to get a specific 3D model by name (GLB and USDZ)
app.get('/api/models/:name', (req, res) => {
    const models = [
        {
            name: "Jacket",
            glbUrl: "https://storage.polycam.io/captures/325eb391-c72a-431d-b304-98ddedef574a/raw.glb?t=1729077591034",
            usdzUrl: "https://superdwayne.github.io/usdzhost/goose.usdz"
        },
        {
            name: "Balenciaga",
            glbUrl: "https://storage.polycam.io/captures/d3efbdcb-ef62-4112-b7c5-3f099f24b636/raw.glb?t=1729077279389",
            usdzUrl: "https://superdwayne.github.io/usdzhost/used_new.usdz"
        },
        {
            name: "dior birks",
            glbUrl: "https://storage.polycam.io/captures/875883e9-9a75-44d9-b148-beaf28dc6689/poly.glb?t=1712313069573",
            usdzUrl: "https://superdwayne.github.io/usdzhost/fila.usdz"
        },
        {
            name: "Nike",
            glbUrl: "https://storage.polycam.io/captures/0023494b-28c7-4056-8d3a-a4fcd8177ebd/raw.glb?t=1729424392257",
            usdzUrl: "https://immersive-commerce.vercel.app/models/nike.usdz"
        },
        {
            name: "Bag",
            glbUrl: "https://storage.polycam.io/captures/1ac77d1b-3178-4738-bbb4-ae1e6c883542/raw.glb?t=1729077815091",
            usdzUrl: "https://superdwayne.github.io/usdzhost/nike.usdz"
        },
        {
            name: "Dior",
            glbUrl: "https://storage.polycam.io/captures/d330c813-0232-4620-b394-642145be55eb/raw.glb?t=1729077933033",
            usdzUrl: "https://superdwayne.github.io/usdzhost/dior.usdz"
        }
    ];

    const modelName = req.params.name.toLowerCase();
    const modelData = models[modelName];

    if (modelData) {
        res.json({ name: modelName, glbUrl: modelData.glbUrl, usdzUrl: modelData.usdzUrl });
    } else {
        res.status(404).json({ error: "Model not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

