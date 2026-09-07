# Milan Men's Fashion — E-Commerce Web Platform
**Domain**: [milanworld.online](https://milanworld.online)  
**Tagline**: *Redefining Urban & Streetwear Aesthetics*  
**Business Contact**:
- **Phone**: +91 7895499065
- **Email**: milansharma2610@gmail.com
- **Dispatch Hub**: Rajnagar Extension, Ghaziabad, Uttar Pradesh, India

---

## ⚡ Features & Capabilities

1. **Brand Aesthetic & Luxury Dark Theme**:
   - Modern luxury streetwear palette (Jet Black `#0A0A0A`, Deep Charcoal, Soft Off-white, and Gold `#D4AF37` accent).
   - High GSM streetwear imagery (Heavyweight Hoodies, Acid Wash Graphic Tees, Tactical Cargos, Varsity Jackets).

2. **Global Navigation & Real-Time Predictive Search**:
   - Announcement banner featuring discount coupon `MILAN10` and free express shipping threshold (`₹1,499`).
   - Autocomplete predictive search modal with keyboard shortcuts and trending tags.
   - Dynamic Cart counter and Wishlist counter.

3. **Shop & Refine Filtering System**:
   - Multi-category filtering: *All Vault, Hoodies & Sweatshirts, Oversized Tees, Bottomwear, Jackets, Accessories*.
   - Size pills (S, M, L, XL, XXL) and interactive price range slider.
   - Sorting options: *Featured, Newest, Price: Low to High, Price: High to Low, Highest Rated*.

4. **Product Detail View (PDP Modal)**:
   - Multi-angle thumbnail image gallery.
   - Interactive size selection and live stock status alert.
   - Streetwear Size Chart modal with Inches / CM toggle.
   - Accordion specs: 420 GSM French Terry details, wash care guidelines, and Ghaziabad dispatch guarantee.
   - Sticky "Add to Bag" & "Instant Buy Now" actions.

5. **Slide-over Flyout Cart Drawer**:
   - Free shipping dynamic progress bar (threshold: ₹1,499).
   - Quantity increments/decrements with real-time recalculation.
   - Coupon verification (`MILAN10` gives instant 10% OFF with confetti).
   - Delivery instructions / gift notes field.

6. **Checkout & Order Confirmation Flow**:
   - Address input form with Indian state & pincode support.
   - Payment method choice: Instant UPI / QR, Cash on Delivery (COD), Card & Netbanking.
   - Order confirmation receipt with unique Order ID and **1-Click WhatsApp Order Receipt** directly to `+91 7895499065`.

7. **Social Proof & Customer Care**:
   - Verified 5-star customer testimonials.
   - Instagram Community Lookbook (`#MilanMen`).
   - Shipment tracking simulation.
   - Floating WhatsApp Support button.
   - Mobile bottom navigation bar.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🌐 How to Deploy to Vercel with your domain `milanworld.online`

### Step 1: Deploy to Vercel (Free & 1-Click)
1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and log in.
3. Click **"Add New Project"** and select your GitHub repository.
4. Click **Deploy**. Vercel will automatically build using `npm run build` and output `dist/`.

### Step 2: Connect Domain `milanworld.online`
1. Go to your Vercel Project Settings → **Domains**.
2. Enter `milanworld.online` and `www.milanworld.online`.
3. In your domain registrar (GoDaddy, Hostinger, Namecheap, etc.) DNS settings:
   - Add an **A Record**:
     - Host: `@`
     - Points to: `76.76.21.21`
   - Add a **CNAME Record**:
     - Host: `www`
     - Points to: `cname.vercel-dns.com`
4. SSL Certificate will be generated automatically and your site will be live at `https://milanworld.online`!
