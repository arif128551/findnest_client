# FindNest — Roommate Finder Web Application

## Live Links
**Live Website:** [https://b11a10-findnest.web.app/](https://b11a10-findnest.web.app/)  
**Server URL:** [https://b11a10-findnest-server.vercel.app/](https://b11a10-findnest-server.vercel.app/)

## GitHub Repositories
- **Client:** [FindNest Client](https://github.com/arif128551/findnest_client)
- **Server:** [FindNest Server](https://github.com/arif128551/findnest_serverside)

## 🧪 How to Run Locally

To run the project locally on your machine, follow these steps carefully:

### 🚀 1. Clone & Run the Client

```bash
git clone https://github.com/arif128551/findnest_client.git
cd findnest_client
npm install
npm run dev
```

### 🛠️ 2. Clone & Run the Server

```bash
git clone https://github.com/arif128551/findnest_serverside.git
cd findnest_serverside
npm install
npm run dev
```

✅ **Note:** The client will not function properly unless the server is running.  
So make sure the server is started **before** using the client.

---

### 🔐 3. Setup `.env` Files

Create a `.env` file in both the client and server directories.

For **client**:
```
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

For **server**:
```
PORT=5000
DB_USER=your_mongo_user
DB_PASS=your_mongo_pass
FB_SERVICE_KEY=base64_encoded_service_account_json
```

If there are `.env.example` files, copy them as `.env` and fill in the correct values.

---

Now you're all set!  
- Server should run at `http://localhost:5000`  
- Client should run at `http://localhost:5173`

---

---

## 🌍 Website Overview
FindNest is a full-stack web application designed to help individuals find compatible roommates. Users can add, browse, and manage roommate listings with features like lifestyle preferences, availability status, contact info reveal after liking, and more.

---

## 🏆 Key Features

- ✅ **Email + Google Authentication** with Firebase Auth
- ✅ **Add to Find Roommate** — Post listings (protected route)
- ✅ **Browse Listings** from all users with dynamic details page
- ✅ **My Listings** — View, update, and delete own posts
- ✅ **Like Feature** — Users can like other's profile multiple times (but not their own), revealing contact info
- ✅ **Loading Spinners + Toast/SweetAlerts** for feedback
- ✅ **Dark/Light Theme Toggle** (Home page)
- ✅ **404 Not Found Page** with custom design
- ✅ **Responsiveness:** Fully mobile, tablet & desktop compatible
- ✅ **Meaningful Content** — No lorem ipsum or placeholder alerts
- ✅ **React Simple Typewriter** + **React Tooltip** integrations

---

## 📦 Installed Packages

### 🔹 Client-side:
- `react`
- `react-dom`
- `react-router`
- `firebase`
- `react-hot-toast`
- `react-icons`
- `sweetalert2`
- `swiper`
- `react-tooltip`
- `react-simple-typewriter`
- `react-spinners`
- `tailwindcss`
- `daisyui`
- `@tailwindcss/vite`
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- `vite`, `@vitejs/plugin-react`

### 🔹 Server-side:
- `express`
- `cors`
- `dotenv`
- `firebase-admin`
- `mongodb`

---

## 📂 Project Structure

```
src/
├── assets/
│   ├── lifestyle/
│   └── slider/
├── components/
│   └── ui/
├── contexts/
│   └── auth/
├── firebase/
├── layouts/
├── pages/
│   ├── AddFindRoommate/
│   ├── BrowseListing/
│   ├── Home/
│   │   └── Sections/
│   ├── Login/
│   ├── MyListings/
│   ├── Register/
│   ├── RoomDetails/
├── routes/
│   ├── MainRoutes.jsx
│   └── PrivateRoute.jsx
```

---

## 📊 Environment Variables

### ⚖️ Client:
```
VITE_FIREBASE_API_KEY=your-key
VITE_FIREBASE_AUTH_DOMAIN=your-domain
```

### ⚖️ Server:
```
DB_USER=yourMongoUser
DB_PASS=yourMongoPass
```

---

## 🌐 Notable Routes

| Route                     | Description                         | Protected |
|--------------------------|-------------------------------------|-----------|
| `/`                      | Home Page (banner, featured, etc.) | No        |
| `/browse-listing`        | View all listings                   | No        |
| `/listing/:id`           | View details of one listing         | Yes       |
| `/add-find-roommate`     | Add a new listing                   | Yes       |
| `/my-listings`           | View user's own listings            | Yes       |
| `/login`, `/signup`      | Auth pages                          | No        |

---

## 🛠️ CRUD Features
- **Create**: Add Find Roommate
- **Read**: Browse Listings + My Listings
- **Update**: Edit posts via modal (My Listings)
- **Delete**: Delete post with confirmation

---

## 🚀 Extra Notes
- Server validates every token and restricts update/delete access to only post owner
- Like feature avoids self-like and supports multiple likes per user
- On Like, user sees contact info (partial otherwise)

---

## 🎨 Inspiration
Design inspiration taken from platforms like ThemeForest, adapted with unique custom implementation using Tailwind, DaisyUI, and dynamic React behavior.

---

## 🛬 Submission ✅
- [x] Hosted Client
- [x] Hosted Server
- [x] Authentication Setup
- [x] Routing + CRUD Features
- [x] Like + Reveal Feature
- [x] Design + Responsiveness
- [x] ReadMe Ready



## 👨‍💻 Developer Info
**Md Arif Uddin**  
📧 xossarif@gmail.com  
🎓 Assignment Project for Programming Hero - Assignment 10

Thanks for visiting **FindNest** 🏡
