# 📸 Photo Upload API

A RESTful API for uploading and retrieving photos, built with Node.js, Express, MongoDB, and Multer.

---

## 🚀 Features

- **Upload photos** with a title via a simple POST request
- **Retrieve all photos** with auto-generated full URLs
- **Image-only validation** — rejects any non-image file automatically
- **Unique filenames** generated on every upload to avoid conflicts
- **Static file serving** — uploaded images accessible directly via URL
- **Mongoose middleware** to auto-prefix image paths on fetch

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js + Express.js | Server & Routing |
| MongoDB + Mongoose | Database |
| Multer | File Upload Handling |

---

## 📁 Project Structure

```
├── app.js                  # Entry point & server config
├── apis/
│   └── photo.api.js        # Route definitions
├── services/
│   └── photo.service.js    # Business logic
├── models/
│   └── photo.model.js      # Mongoose schema
└── uploads/                # Stored images (git-ignored)
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/photos` | Upload a new photo |
| `GET` | `/photos` | Get all photos |

---

## 👤 Author

Made with ❤️ — feel free to connect on [LinkedIn](#)
