# FindNest — Roommate Finder Web Application

## Live Links
**Live Website:** [https://b11a10-findnest.web.app/](https://b11a10-findnest.web.app/)  
**Server URL:** [https://b11a10-findnest-server.vercel.app/](https://b11a10-findnest-server.vercel.app/)

## GitHub Repositories
- **Client:** [FindNest Client](https://github.com/arif128551/findnest_client)
- **Server:** [FindNest Server](https://github.com/arif128551/findnest_serverside)

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