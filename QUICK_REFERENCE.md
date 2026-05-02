# 🚀 Admin Panel - Quick Reference

## 📍 How to Access

```
LOGIN PAGE:    http://localhost:3000/admin/login
DASHBOARD:     http://localhost:3000/admin
PASSWORD:      admin123
```

---

## 🎯 4 Main Features

### 1. 💾 MongoDB Persistence
```
✅ Data stored permanently
✅ Survives server restarts
✅ Automatic backups on Atlas
```

### 2. 🔑 Password Protection
```
✅ Login required
✅ Secure sessions (7 days)
✅ One-click logout
```

### 3. 🔍 Search & Filters
```
Search:        Type package name/location
Category:      Domestic or International
Price:         Slide to max price
Featured:      Show only featured
Results:       Update instantly
```

### 4. 📝 Dynamic Editors
```
Itinerary:     + Add Day (unlimited)
FAQ:           + Add FAQ (unlimited)
Add/Remove:    Click buttons to manage
```

---

## 📦 Create Package - Form Fields

```
BASIC INFO
├─ Title *              "Bali Romantic Escape"
├─ Location *           "Bali, Indonesia"
├─ Category *           Domestic | International
├─ Duration *           "5D/4N"
├─ Price *              24999
├─ Image URL *          "https://..."
└─ Description *        "Lose yourselves in..."

SETTINGS
├─ Perfect for Couples  ☐/☑
├─ Best Time           "April to October"
└─ Featured            ☐/☑

DETAILS
├─ Highlights          (one per line)
├─ Inclusions          (one per line)
├─ Exclusions          (one per line)
└─ Gallery URLs        (one per line)

ITINERARY (Dynamic)
├─ [+ Add Day]
├─ Day 1: Title + Description
├─ Day 2: Title + Description
└─ ...unlimited days

FAQ (Dynamic)
├─ [+ Add FAQ]
├─ Q1: Question + Answer
├─ Q2: Question + Answer
└─ ...unlimited FAQs
```

---

## 🔄 Common Tasks

### Create New Package
```
1. Click "+ Add Package"
2. Fill all required fields (marked *)
3. Add highlights (one per line)
4. Add inclusions & exclusions
5. Click "+ Add Day" for each itinerary day
6. Click "+ Add FAQ" for each question
7. Click "Save Package"
8. ✓ Done! Saved to MongoDB
```

### Edit Existing Package
```
1. Go to Dashboard (/admin)
2. Use search to find package
3. Click "Edit"
4. Modify any field
5. Update itinerary/FAQ as needed
6. Click "Save Package"
7. ✓ Done! Updated in MongoDB
```

### Delete Package
```
1. Go to Dashboard (/admin)
2. Find package (use search)
3. Click "Delete"
4. Confirm deletion
5. ✓ Done! Removed from MongoDB
```

### Find Specific Package
```
Use FILTERS at top of dashboard:

Search "Maldives"           → Shows Maldives packages
Category: International     → Shows 6 international
Price Slider: ₹30,000      → Shows packages ≤ ₹30,000
Featured Only: ☑           → Shows 4-5 featured
Combine filters             → Find exactly what you want
```

---

## 🌐 Data on Website

```
Package page shows:         From form field:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hero image          ←       Image URL
Title               ←       Title
Location            ←       Location
Duration badge      ←       Duration
Price               ←       Price
Description         ←       Description
Perfect for Couples ←       Perfect for Couples ☑
Best Time           ←       Best Time to Visit
Highlights          ←       Highlights
Itinerary accordion  ←      Itinerary (dynamic)
Inclusions list     ←       Inclusions
Exclusions list     ←       Exclusions
Gallery grid        ←       Gallery URLs
FAQ accordion       ←       FAQ (dynamic)
```

---

## 🔐 Authentication

### Login
```
1. Go to /admin/login
2. Enter: admin123
3. Click: Login
4. ✓ Logged in! (7 days)
```

### Logout
```
1. Click "Logout" button (top-right)
2. ✓ Session cleared
3. Redirected to login
```

### Change Password
```
Edit .env.local:
ADMIN_PASSWORD=your_new_password

Restart server
Done!
```

---

## 🛠️ API Endpoints

```
CREATE:   POST   /api/packages
READ:     GET    /api/packages
DETAIL:   GET    /api/packages/{id}
UPDATE:   PUT    /api/packages/{id}
DELETE:   DELETE /api/packages/{id}
LOGIN:    POST   /api/auth/login
LOGOUT:   POST   /api/auth/logout
SEED:     POST   /api/seed
```

---

## 📊 Current Data

```
Total Packages:  11
├─ International: 6
│  └─ Dubai, Paris, Bali, Swiss, Japan, Maldives
└─ Domestic: 5
   └─ Kerala, Rajasthan, Andaman, Himachal, Goa

Featured:        5
Couples-Friendly: 9
Has Itinerary:   11 ✓
Has FAQ:         11 ✓
```

---

## ⚡ Tips

### Searching
```
Type in search box     → Finds title, location, description
Works real-time        → No page reload needed
Case-insensitive       → "bali" = "Bali" = "BALI"
```

### Filters
```
Multiple filters work together
Price slider     → Drag to set max price
Category        → Select one at a time
Featured        → Toggle on/off
Search          → Combine with other filters
Results counter → Shows "X of Y packages"
```

### Itinerary Tips
```
+ Add Day          → Creates next sequential day
Can reorder?       → No, they're in creation order
Max days?          → Unlimited!
Edit existing?     → Click day title/description
Remove day?        → Click "Remove" button
```

### FAQ Tips
```
+ Add FAQ          → Creates next question
Can reorder?       → No, they're in creation order
Max FAQs?          → Unlimited!
Edit existing?     → Click question/answer
Remove FAQ?        → Click "Remove" button
```

---

## ❓ Common Questions

**Q: What happens if I refresh the page while editing?**  
A: Your changes are lost unless you click "Save Package". Save frequently!

**Q: Can I edit the ID of a package?**  
A: No, ID is generated and locked. It's used for the URL (/packages/[id]).

**Q: How do I reorder packages?**  
A: They display in order on the website. Delete and recreate to change order.

**Q: Can I have duplicate package titles?**  
A: Yes, but not recommended. Each should have unique title + location combo.

**Q: What if I forget the password?**  
A: Edit .env.local ADMIN_PASSWORD and restart server.

**Q: Will data be lost if server crashes?**  
A: No! Data is in MongoDB Atlas, safe regardless of server state.

**Q: Can I upload images directly?**  
A: Not yet. Use URLs from Unsplash, Pexels, or your server.

**Q: How do I access from different devices?**  
A: Use http://{your-ip}:3000/admin/login from any device on same network.

---

## 🚨 Troubleshooting

**Can't login**
```
✓ Check password in .env.local (default: admin123)
✓ Restart dev server
✓ Clear browser cookies
✓ Try different browser
```

**Package won't save**
```
✓ Fill all required fields (marked *)
✓ Check browser console for errors (F12)
✓ Verify MongoDB connection in .env.local
✓ Try again
```

**Filters not working**
```
✓ Refresh page (Ctrl+R)
✓ Clear browser cache
✓ Check if packages exist
✓ Check console for errors (F12)
```

**Can't see changes on website**
```
✓ Give it a few seconds
✓ Refresh website page (Ctrl+R)
✓ Check /packages page, not homepage cache
```

**Server won't start**
```
✓ Check .env.local MONGO_URI is correct
✓ Ensure npm packages installed (npm install)
✓ Kill any process on port 3000
✓ npm run dev again
```

---

## 📞 Help Resources

```
ADMIN_PANEL_GUIDE.md    → Complete user guide (25KB)
ENHANCEMENTS_SUMMARY.md → Feature details (18KB)
ADMIN_FEATURES.md       → Overview & examples (20KB)
FORM_FIELD_MAPPING.md   → What goes where (15KB)
COMPLETION_REPORT.md    → Status & stats (12KB)
```

---

## 🎯 Checklist

Use this when managing packages:

```
☐ Fill Title and Location
☐ Set Category (Domestic/International)
☐ Enter Duration in format "XD/YN"
☐ Set Price in ₹
☐ Add Image URL
☐ Write Description
☐ Add 5-7 Highlights (one per line)
☐ Add 4-7 Inclusions (one per line)
☐ Add 3-5 Exclusions (one per line)
☐ Add 2-3 Gallery URLs
☐ Add 5-7 Itinerary Days (+ Add Day)
☐ Add 4 FAQ items (+ Add FAQ)
☐ Check Perfect for Couples (if applicable)
☐ Enter Best Time to Visit
☐ Check Featured (if main package)
☐ Click "Save Package"
☐ Verify on website (/packages/[id])
```

---

## 🎓 Learn More

### Quick Video Guides (if available)
```
Coming soon!
```

### Support
```
Email: support@pravaasholidays.com
Chat:  Dashboard support section
```

---

## 📌 Important URLs

```
Admin Login:        http://localhost:3000/admin/login
Admin Dashboard:    http://localhost:3000/admin
Create Package:     http://localhost:3000/admin/packages/new
Edit Package:       http://localhost:3000/admin/packages/[id]

Website:            http://localhost:3000
International:      http://localhost:3000/international
Domestic:           http://localhost:3000/domestic
Package Detail:     http://localhost:3000/packages/[id]
```

---

## 🏆 Status

```
✅ All 4 enhancements complete
✅ MongoDB connected (11 packages stored)
✅ Authentication working (admin123)
✅ Filters & search live
✅ Dynamic editors functional
✅ Form includes all 16 fields
✅ Production ready
```

**You're all set! Happy managing! 🚀**

---

*Last Updated: 2026-05-02*  
*Status: ✅ Complete*  
*Ready For: Production Use*
