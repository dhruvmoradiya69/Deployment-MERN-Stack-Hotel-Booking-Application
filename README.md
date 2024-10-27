# 🏨 Welcome to HotelHub - Your Ultimate Hotel Booking Platform

## 🌟 Core Features

### 1. 🔐 User Authentication System
- **Secure Login & Registration**
  - 🔒 JWT (JSON Web Token) authentication
  - 🍪 HTTP cookie-based sessions
  - 👤 User profile management
  - 🔑 Password encryption & security
  - 🚫 Protected routes implementation

### 2. 🏢 Hotel Management System
- **Complete Hotel CRUD Operations**
  - ➕ Add new hotels with detailed information
  - 📝 Edit existing hotel details
  - 🗑️ Remove outdated listings
  - 👀 View comprehensive hotel information
  - 📋 Form validation and error handling

### 3. 📸 Image Upload System
- **Cloudinary Integration**
  - 🖼️ Multiple image uploads
  - 🗂️ Image storage in the cloud
  - 🔄 Image optimization
  - 📱 Responsive image delivery
  - 🎭 Image preview functionality

### 4. 🔍 Advanced Search Features
- **Search, Sort & Filter Capabilities**
  - 🔤 Search by hotel name
  - 📍 Filter by location
  - 💰 Sort by price
  - ⭐ Filter by ratings
  - 🏷️ Dynamic filtering options

### 5. 💳 Payment Integration
- **Stripe Payment System**
  - 💰 Secure payment processing
  - 💸 Real-time payment verification
  - 🧾 Payment receipt generation
  - 📊 Transaction history
  - ⚡ Quick checkout process

### 6. 📅 Booking Management
- **Comprehensive Booking System**
  - 📊 View all bookings
  - ✏️ Manage booking details
  - 📅 Check availability
  - 🔔 Booking notifications
  - 📋 Booking history

### 7. 🏠 Dynamic Home Page
- **Recent Hotels Display**
  - 🆕 Show newly added properties
  - 🔄 Auto-updating content
  - 🎯 Featured hotels section
  - 📱 Responsive design
  - ⚡ Fast loading times

## 🛠️ Essential Services Setup

### 1. 📦 MongoDB Atlas Setup
**Step-by-Step Guide:**
1. 🌐 Visit [MongoDB Atlas](https://www.mongodb.com/atlas/database)
2. 👤 Click "Try Free" to create an account
3. 🆕 Choose "Create a New Cluster"
   - Select "FREE" tier
   - Choose your preferred region
   - Click "Create Cluster"
4. 🔒 Set Up Database Access
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create username and password (save these!)
   - Select "Read and write to any database"
5. 🌍 Configure Network Access
   - Go to "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (for development)
6. 🔗 Get Connection String
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

### 2. ☁️ Cloudinary Setup
**Account Creation & Configuration:**
1. 📝 Register at [Cloudinary](https://cloudinary.com/users/register/free)
2. ✨ After registration, access your dashboard
3. 🔑 Locate your account credentials:
   - Cloud Name
   - API Key
   - API Secret
4. ⚙️ Configure Upload Settings:
   - Go to Settings → Upload
   - Enable "Auto-create folders"
   - Set upload presets if needed
5. 📁 Create Upload Preset (Optional):
   - Go to Settings → Upload
   - Click "Add upload preset"
   - Choose "Unsigned" for development
   - Save preset name

### 3. 💳 Stripe Integration
**Setup Process:**
1. 🔑 Sign up at [Stripe](https://dashboard.stripe.com/register)
2. 🎯 Access the Dashboard
3. 🔄 Toggle to Test Mode for development
4. 📝 Collect Required Keys:
   - Find Publishable Key
   - Find Secret Key
5. 💻 Developer Integration:
   - Install Stripe CLI (optional)
   - Get test card numbers:
     ```
     Test Card: 4242 4242 4242 4242
     Expiry: Any future date
     CVV: Any 3 digits
     ```
6. 🧪 Test Webhook (Optional):
   - Install Stripe CLI
   - Run `stripe listen`
   - Get webhook signing secret

## 🚀 Quick Setup Guide

### 1. 📥 Clone Repository
```bash
git clone https://github.com/dhruvmoradiya69000/HotelHub.git
cd HotelHub
```

### 2. 🔧 Backend Configuration
```env
# 📁 .env file
MONGODB_CONNECTION_STRING=your_mongodb_url
JWT_SECRET_KEY=your_secret_key
FRONTEND_URL=http://localhost:3000

# Cloudinary Config
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe Config
STRIPE_API_KEY=your_stripe_key
```

### 3. 🎨 Frontend Configuration
```env
# 📁 .env file
VITE_API_BASE_URL=http://localhost:3000
VITE_STRIPE_PUB_KEY=your_stripe_public_key
```

### 4. 🚀 Launch Application

#### Backend:
```bash
cd backend
npm install
npm start
```

#### Frontend:
```bash
cd frontend
npm install
npm run dev
```

## 🧪 Testing Credentials
- 📧 Email: 1@1.com
- 🔑 Password: password123

## 🆘 Common Troubleshooting

### MongoDB Issues:
- 🔴 Connection Failed: Check IP whitelist
- 🔴 Authentication Failed: Verify username/password
- 🔴 Network Error: Check internet connection

### Cloudinary Issues:
- 🔴 Upload Failed: Verify API credentials
- 🔴 Image Not Showing: Check cloud name
- 🔴 Size Limit: Check upload preset settings

### Stripe Issues:
- 🔴 Payment Failed: Ensure test mode is active
- 🔴 API Key Invalid: Check key copying
- 🔴 Webhook Error: Verify signing secret

## 📞 Support Resources
- 📚 [MongoDB Documentation](https://docs.mongodb.com)
- 🌥️ [Cloudinary Documentation](https://cloudinary.com/documentation)
- 💳 [Stripe Documentation](https://stripe.com/docs)
- 📧 Create GitHub Issue for project-specific help

### 🌈 Happy Building! 🚀
