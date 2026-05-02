# Admin Panel - Complete Guide

## 🔐 Authentication & Login

### Default Credentials
- **Password**: `admin123` (set in `.env.local` as `ADMIN_PASSWORD`)

### How to Login
1. Navigate to `http://localhost:3000/admin/login`
2. Enter the admin password
3. You'll be redirected to the admin dashboard
4. Your session lasts 7 days

### How to Logout
- Click the **"Logout"** button in the top-right corner of the admin nav

### Changing the Password
Edit `.env.local`:
```env
ADMIN_PASSWORD=your_new_password_here
```

---

## 📊 Admin Dashboard

Access the main dashboard at: `http://localhost:3000/admin`

### Features

#### 🔍 **Search & Filter**
- **Search Box**: Search by package title, location, or description
- **Category Filter**: Filter by Domestic or International
- **Price Range Slider**: Filter packages by maximum price
- **Featured Only**: Show only featured packages
- **Results Counter**: See how many packages match your filters

#### 📦 **Package List**
Each package card shows:
- Title, location, and category badge
- Duration and price
- "Featured" badge (if applicable)
- Brief description
- **Edit** button - Modify the package
- **Delete** button - Remove the package (with confirmation)

---

## ➕ Creating a New Package

### Step 1: Click "+ Add Package"
Navigate to `http://localhost:3000/admin/packages/new`

### Step 2: Fill in Basic Information
- **Title**: Package name (e.g., "Bali Romantic Escape")
- **Location**: Destination (e.g., "Bali, Indonesia")
- **Category**: Select "Domestic" or "International"
- **Duration**: Format as "5D/4N"
- **Price**: Price in ₹ (e.g., 24999)
- **Image URL**: Direct link to main package image
- **Description**: Brief package overview

### Step 3: Configure Package Settings
- **Perfect for Couples**: Check if package is couple-friendly
- **Best Time to Visit**: Peak season info (e.g., "April to October")
- **Featured**: Check to display on homepage

### Step 4: Add Package Details
Enter one item per line:
- **Highlights**: Key activities/experiences
- **Inclusions**: What's included in the price
- **Exclusions**: What's NOT included
- **Gallery URLs**: Additional images

### Step 5: Add Itinerary (Day-wise)
- Click **"+ Add Day"** to add each day
- Enter day **Title** and **Description**
- Click **"Remove"** to delete a day
- Days are automatically numbered

Example:
```
Day 1: Arrival & Seminyak
"Arrive at Ngurah Rai Airport, transfer to your boutique beachfront hotel..."

Day 2: Ubud Cultural Immersion
"Visit the Ubud Monkey Forest, local art galleries..."
```

### Step 6: Add FAQ (Questions & Answers)
- Click **"+ Add FAQ"** to add each Q&A
- Enter the **Question** and **Answer**
- Click **"Remove"** to delete an FAQ
- Items are auto-numbered

Example:
```
Question: "Is this package customisable?"
Answer: "Yes, our travel expert will tailor the itinerary..."

Question: "Do I need a visa for Bali?"
Answer: "Indian passport holders get a free Visa on Arrival..."
```

### Step 7: Save
Click **"Save Package"** - The package is immediately saved to MongoDB

---

## ✏️ Editing a Package

1. Go to the admin dashboard (`/admin`)
2. Find the package you want to edit
3. Click the **"Edit"** button
4. Modify any fields (same form as creating)
5. Click **"Save Package"**

### Itinerary & FAQ Editing
- **Add more items**: Click "+ Add Day" or "+ Add FAQ"
- **Remove items**: Click "Remove" on any item
- **Reorder items**: Items appear in the order you created them

---

## 🗑️ Deleting a Package

1. On the admin dashboard, find the package
2. Click the **"Delete"** button
3. Confirm the deletion
4. Package is permanently removed from MongoDB

---

## 🔍 Filter Examples

### Example 1: Find International Packages Under ₹30,000
1. Category Filter → "International"
2. Price Range Slider → Move to ₹30,000
3. Results show only matching packages

### Example 2: Show Only Featured Packages
1. Check the "Featured Only" checkbox
2. Dashboard displays only featured packages

### Example 3: Search for "Maldives"
1. Type "Maldives" in the Search box
2. Only Maldives package appears (and any with Maldives in description)

---

## 📂 Database: MongoDB Integration

### Connection Details
- **Database**: PravaasHolidays
- **Atlas Cluster**: cluster0.wti2c.mongodb.net
- **Collection**: packages

### Data Structure
Each package document includes:
```javascript
{
  id: string,
  title: string,
  location: string,
  category: "domestic" | "international",
  duration: string,
  price: number,
  image: string,
  description: string,
  perfectForCouples: boolean,
  bestTimeToVisit: string,
  featured: boolean,
  highlights: string[],
  itinerary: { day: number, title: string, description: string }[],
  inclusions: string[],
  exclusions: string[],
  gallery: string[],
  faq: { question: string, answer: string }[],
  createdAt: date,
  updatedAt: date
}
```

### Seeding Database
Already seeded with 11 packages! If you need to reseed:
```bash
curl -X POST http://localhost:3000/api/seed
```

---

## 🔗 API Endpoints

All endpoints require proper authentication (cookie-based):

### Packages
```
GET    /api/packages           # List all packages
POST   /api/packages           # Create new package
GET    /api/packages/[id]      # Get single package
PUT    /api/packages/[id]      # Update package
DELETE /api/packages/[id]      # Delete package
```

### Authentication
```
POST   /api/auth/login         # Login with password
POST   /api/auth/logout        # Logout
```

### Database
```
POST   /api/seed               # Seed with initial data
```

---

## 🚀 Tips & Best Practices

### 1. **Image URLs**
- Use direct image URLs (URLs ending in .jpg, .png, .webp)
- Unsplash, Pexels, or your own server work great
- Format: `https://example.com/image.jpg`

### 2. **Itinerary Guidelines**
- Include one day per entry
- Provide details on activities
- Keep descriptions concise but engaging (2-3 sentences)

### 3. **FAQ Best Practices**
- Answer the most common questions first
- Keep answers concise and helpful
- Cover visa, cost, suitability, and customization

### 4. **Highlights**
- List 5-7 key experiences
- Start with action verbs (Explore, Visit, Experience)
- Make them exciting and descriptive

### 5. **Price Updates**
- Update prices regularly to stay competitive
- Prices are in Indian Rupees (₹)
- Use the price filter to spot outdated pricing

### 6. **Featured Packages**
- Mark 3-5 "flagship" packages as featured
- Featured packages appear on the homepage
- Update featured status seasonally

---

## 🐛 Troubleshooting

### "Login Failed" Error
- Check `.env.local` for correct `ADMIN_PASSWORD`
- Restart the dev server after changing password
- Clear browser cookies if stuck on login

### "Failed to Create/Update Package"
- Check MongoDB connection in `.env.local`
- Verify MONGO_URI is correct
- Check if any required fields are empty

### Changes Not Appearing
- Refresh the page (Ctrl+R or Cmd+R)
- Clear browser cache if persisting
- Check MongoDB connection status

### Filtering Not Working
- Ensure you have packages in the database
- Try clearing all filters and searching again
- Check browser console for errors (F12)

---

## 📱 Frontend Display

The admin-managed packages appear on:
- Homepage: Featured packages carousel
- `/international` page: All international packages with filters
- `/domestic` page: All domestic packages with filters
- `/packages/[id]` page: Full package details including itinerary & FAQ

Any changes you make in the admin panel are live on the frontend!

---

## 🔐 Security Notes

⚠️ **Current Setup** (Development):
- Password stored in `.env.local` (local only)
- Session cookie expires in 7 days
- HttpOnly cookies prevent XSS attacks

✅ **For Production**, consider:
- Use NextAuth.js for OAuth integration
- Store passwords hashed in database
- Add rate limiting on login attempts
- Implement 2FA
- Use environment variables for secrets
- Add audit logging for all admin actions

---

## 📞 Support

For issues or feature requests, check:
1. `.env.local` configuration
2. MongoDB connection status
3. Browser console (F12 → Console tab)
4. Network tab to see API requests

---

**Last Updated**: 2026-05-02
**Status**: ✅ All features operational with MongoDB persistence
