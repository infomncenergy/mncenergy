# 🛡️ Landlord Safety Certificate — Backend

Node.js + Express + MongoDB backend with a built-in Admin Panel.

---

## 📋 What's Included

| Feature | Details |
|---|---|
| **Booking API** | Receives bookings from the Book Now form |
| **Contact API** | Receives enquiries from the Contact Us form |
| **Admin Panel** | Web dashboard at `/admin` — view, update, delete all records |
| **Email Alerts** | Auto-emails you AND the customer on every submission |
| **JWT Auth** | Password-protected admin login |
| **Rate Limiting** | Prevents spam submissions |

---

## 🚀 Setup Instructions (Step by Step)

### Step 1 — Install Node.js
Download and install Node.js from https://nodejs.org (choose the LTS version).
After installing, open a terminal and check it works:
```
node --version
npm --version
```

### Step 2 — Set Up MongoDB (Free)
1. Go to https://cloud.mongodb.com and create a free account
2. Create a new **Free Cluster** (M0 — completely free)
3. Under **Database Access**, create a database user with a username and password
4. Under **Network Access**, click **Add IP Address** → **Allow Access from Anywhere** (0.0.0.0/0)
5. Click **Connect** → **Drivers** → copy the connection string
   - It looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/`
   - Replace `<password>` with your actual password
   - Add your database name at the end: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/landlord-safety-cert`

### Step 3 — Set Up Gmail App Password (for email)
1. Go to your Google Account → Security
2. Make sure **2-Step Verification** is turned ON
3. Go to: https://myaccount.google.com/apppasswords
4. Create a new app password for "Mail"
5. Copy the 16-character password shown (e.g. `abcd efgh ijkl mnop`)

### Step 4 — Create Your .env File
In the `backend/` folder, copy `.env.example` to `.env`:
```
cd backend
cp .env.example .env
```
Then open `.env` and fill in your values:
```
MONGODB_URI=mongodb+srv://youruser:yourpass@cluster0.xxxxx.mongodb.net/landlord-safety-cert
JWT_SECRET=any_long_random_string_here_at_least_32_characters
PORT=5000
FRONTEND_URL=http://localhost:5173
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=abcdefghijklmnop
ADMIN_EMAIL=yourgmail@gmail.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=YourSecurePassword123
```

### Step 5 — Install Dependencies
In the `backend/` folder:
```
npm install
```

### Step 6 — Create Your Admin Account
Run this ONCE to create your admin login:
```
node seed.js
```
You should see: `✅ Admin account created successfully!`

### Step 7 — Start the Backend Server
```
npm run dev
```
You should see:
```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
🚀 Server running on http://localhost:5000
📊 Admin panel: http://localhost:5000/admin
```

### Step 8 — Start the Frontend (separate terminal)
In the `react-bootstrap5-app/` folder:
```
npm run dev
```
Frontend runs at: http://localhost:5173

---

## 🔑 Accessing the Admin Panel

Open your browser and go to: **http://localhost:5000/admin**

Login with the username and password you set in your `.env` file.

### What you can do in the Admin Panel:
- **Dashboard** — see total bookings, new enquiries, recent activity at a glance
- **Bookings** — view all booking requests, filter by status, search by name/email/service
  - Click the eye icon to see full details
  - Update status: New → Confirmed → Completed → Cancelled
  - Add internal admin notes
- **Contact Enquiries** — view all contact form submissions, filter by status
  - Messages auto-mark as "Read" when you open them
  - Update status: New → Read → Replied → Closed
- **Settings** — change your admin password

---

## 📡 API Endpoints

### Public (no auth needed)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/bookings` | Submit a booking |
| POST | `/api/contacts` | Submit a contact form |
| GET | `/api/health` | Check server is running |

### Admin (requires Bearer token)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Admin login |
| GET | `/api/auth/me` | Get current admin |
| GET | `/api/bookings` | Get all bookings |
| GET | `/api/bookings/stats` | Get dashboard stats |
| GET | `/api/bookings/:id` | Get single booking |
| PATCH | `/api/bookings/:id` | Update booking status/notes |
| DELETE | `/api/bookings/:id` | Delete booking |
| GET | `/api/contacts` | Get all contacts |
| GET | `/api/contacts/stats` | Get contact stats |
| GET | `/api/contacts/:id` | Get single contact |
| PATCH | `/api/contacts/:id` | Update contact status/notes |
| DELETE | `/api/contacts/:id` | Delete contact |

---

## 📁 Folder Structure
```
backend/
├── config/
│   └── db.js               # MongoDB connection
├── middleware/
│   ├── authMiddleware.js    # JWT token verification
│   └── errorHandler.js     # Global error handler
├── models/
│   ├── Admin.js             # Admin user (hashed password)
│   ├── Booking.js           # Booking submissions
│   └── Contact.js           # Contact enquiries
├── public/
│   └── admin.html           # Admin panel (single HTML file)
├── routes/
│   ├── auth.js              # Login, me, change-password
│   ├── bookings.js          # CRUD for bookings
│   └── contacts.js          # CRUD for contacts
├── utils/
│   └── sendEmail.js         # Nodemailer email templates
├── .env.example             # Template for your .env file
├── package.json
├── seed.js                  # Run once to create admin account
└── server.js                # Main server entry point
```

---

## 🌍 Deploying to Production

When you're ready to deploy both frontend and backend on the same server:

1. Build the frontend: `npm run build` (inside `react-bootstrap5-app/`)
2. In `server.js`, add this to serve the built React app:
   ```js
   app.use(express.static(path.join(__dirname, '../dist')));
   app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));
   ```
3. Update your `.env`:
   ```
   NODE_ENV=production
   FRONTEND_URL=https://yourdomain.com
   ```
4. Use **PM2** to keep the server running: `npm install -g pm2 && pm2 start server.js`

---

## ❓ Troubleshooting

| Problem | Solution |
|---|---|
| `MongoDB connection error` | Check your MONGODB_URI is correct and IP whitelist is set to 0.0.0.0/0 |
| `Email notification failed` | Check EMAIL_USER and EMAIL_PASS (must be App Password, not regular password) |
| `Token invalid` | Log out and log back in — token may have expired (7 days) |
| Admin panel shows blank | Make sure backend server is running on port 5000 |
| Frontend can't reach backend | Check VITE_API_URL in frontend `.env` matches backend port |
