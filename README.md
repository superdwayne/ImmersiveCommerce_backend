# Immersive Commerce API
Overview
The Immersive Commerce API provides endpoints for accessing 3D models used in augmented reality applications. This README focuses on the /api/models endpoint, which serves a list of available 3D models.

Endpoint
GET /api/models
Fetches a list of 3D model URLs for use in the Immersive Commerce app.

Request
Method: GET
URL: https://immersive-commerce.vercel.app/api/models
Response
Success Response
Status Code: 200 OK
Content:
```
[
  {
    "name": "Jacket",
    "glbUrl": "https://storage.polycam.io/captures/325eb391-c72a-431d-b304-98ddedef574a/raw.glb?t=1729077591034",
    "usdzUrl": "https://superdwayne.github.io/usdzhost/goose.usdz"
  },
  {
    "name": "Balenciaga",
    "glbUrl": "https://storage.polycam.io/captures/d3efbdcb-ef62-4112-b7c5-3f099f24b636/raw.glb?t=1729077279389",
    "usdzUrl": "https://superdwayne.github.io/usdzhost/used_new.usdz"
  },
  ...
]
```

Error Response
Status Code: 500 Internal Server Error
Content:
```
{
  "error": "An error occurred while fetching the models."
}
```

GET /api/models/:name
Fetches a specific 3D model by name, returning its GLB and USDZ URLs.

Request
Method: GET
URL: https://immersive-commerce.vercel.app/api/models/:name
Replace :name with the model's name (e.g., nike).
Response
Success Response
Status Code: 200 OK
Content:

```
{
  "name": "Nike",
  "glbUrl": "https://storage.polycam.io/captures/7dbfb890-bc2c-4b77-87b5-187973bcbdee/raw.glb?t=1729077764551",
  "usdzUrl": "https://immersive-commerce.vercel.app/models/nike.usdz"
}
```

Example Usage
To retrieve the list of 3D models, you can use the following JavaScript code:

```
fetch('https://immersive-commerce.vercel.app/api/models')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.models); // Use the list of models as needed
  })
  .catch(error => {
    console.error('Error fetching models:', error);
  });
```

To retrieve a specific model, use:

```
fetch('https://immersive-commerce.vercel.app/api/models/nike')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process the specific model data
  })
  .catch(error => {
    console.error('Error fetching model:', error);
  });
```
