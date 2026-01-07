# Quick Start: Deploy to Render

## Fast Track (5 Minutes)

### 1. Go to Render
Visit: https://render.com and sign in with GitHub

### 2. Create Static Site
- Click **"New +"** → **"Static Site"**
- Connect repository: `shyarapvtltd/Shyara-Digital`
- Branch: `main`

### 3. Build Settings
```
Build Command: npm install && npm run build
Publish Directory: dist
```

### 4. Deploy
- Click **"Create Static Site"**
- Wait 2-5 minutes for build
- Your site will be live at: `https://shyara-digital.onrender.com`

### 5. Add Custom Subdomain (Optional)
- Go to **Settings** → **Custom Domains**
- Add your subdomain (e.g., `digital.shyaradigital.com`)
- Add CNAME record in your DNS:
  ```
  Type: CNAME
  Name: digital (or your subdomain)
  Value: shyara-digital.onrender.com
  ```

## That's It! 🎉

Your site will auto-deploy on every push to `main` branch.

