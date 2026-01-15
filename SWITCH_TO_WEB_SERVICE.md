# Switch from Static Site to Web Service on Render

## Why Switch?
Render Static Sites don't support SPA routing without redirect rules. By switching to a Web Service with a simple Express server, we can handle routing properly without needing redirect rules.

## Steps to Switch

### Option 1: Update Existing Service (Recommended)

1. **Go to Render Dashboard**
   - Visit https://render.com
   - Find your `shyara-digital` service

2. **Update Service Settings**
   - Go to **Settings** tab
   - Change **Environment** from `static` to `node`
   - Update **Start Command** to: `node server.js`
   - Keep **Build Command** as: `npm install && npm run build`
   - Save changes

3. **Wait for Redeploy**
   - Render will automatically redeploy
   - This may take 5-10 minutes

### Option 2: Create New Web Service

1. **Create New Service**
   - Go to Dashboard → **New +** → **Web Service**
   - Connect repository: `shyarapvtltd/Shyara-Digital`
   - Branch: `main`

2. **Configure Settings**
   - **Name**: `shyara-digital`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `node server.js`
   - **Root Directory**: (leave empty)

3. **Create Service**
   - Click **Create Web Service**
   - Wait for deployment

4. **Update Custom Domain** (if needed)
   - Go to **Settings** → **Custom Domains**
   - Add your domain: `digital.shyara.co.in`
   - Update DNS if needed

## What Changed

- Added `server.js` - Simple Express server that serves static files and handles SPA routing
- Added `express` dependency to `package.json`
- Updated `render.yaml` to use Web Service instead of Static Site
- The server serves `index.html` for all routes, keeping the URL intact

## Benefits

✅ No redirect rules needed  
✅ URLs stay as `/samples` (not changed to `/index.html`)  
✅ All routes work correctly  
✅ Same performance as static site  
✅ Automatic deployments still work  

## Cost Note

Web Services on Render's free tier may have different limits than Static Sites, but for a simple static file server, it should work fine on the free tier.
