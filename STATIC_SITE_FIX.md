# Fix SPA Routing for Render Static Site

## Current Issue
When accessing routes directly (e.g., `/samples`), Render redirects to `/index.html` instead of serving the page while keeping the URL.

## Solution Options

### Option 1: Configure Headers in Static Site (Try This First)

1. **Go to Render Dashboard**
   - Visit https://render.com
   - Open your `Shyara-Digital` Static Site service

2. **Check for Headers Section**
   - Go to **Settings** tab
   - Look for **"Headers"** or **"Custom Headers"** section
   - If available, add:
     - **Name**: `X-Rewrite-URL`
     - **Value**: `/index.html`

3. **Alternative: Check Advanced Settings**
   - Look for **"Advanced"** or **"Additional Settings"**
   - Check if there's a **"SPA Mode"** or **"History API Fallback"** option
   - Enable it if available

### Option 2: Switch to Web Service (Recommended - Guaranteed to Work)

Since Render Static Sites have limited SPA routing support, switching to Web Service is the most reliable solution.

#### Steps to Switch:

1. **Create New Web Service**
   - Go to Dashboard → **New +** → **Web Service**
   - Connect repository: `shyarapvtltd/Shyara-Digital`
   - Branch: `main`

2. **Configure Settings**
   - **Name**: `Shyara-Digital` (or `shyara-digital`)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `node server.js`
   - **Root Directory**: (leave empty)

3. **Create Service**
   - Click **Create Web Service**
   - Wait for deployment (5-10 minutes)

4. **Transfer Custom Domain**
   - Once new service is live, go to **Settings** → **Custom Domains**
   - Delete domain from old Static Site
   - Add domain to new Web Service: `digital.shyara.co.in`
   - DNS should already be configured, so it should work immediately

5. **Delete Old Static Site** (Optional)
   - Once new service is working, you can delete the old Static Site

## What's Already Prepared

✅ `server.js` - Express server ready to use  
✅ `express` dependency added to `package.json`  
✅ `render.yaml` updated for Web Service  
✅ All code changes pushed to GitHub  

## Why Web Service Works Better

- ✅ No redirect rules needed
- ✅ URLs stay correct (`/samples` not `/index.html`)
- ✅ Full control over routing
- ✅ Same performance (serves static files)
- ✅ Works on free tier

## Quick Decision Guide

**Try Option 1 first** if you see Headers/Advanced settings in your Static Site.

**Use Option 2** if:
- No Headers section available
- Headers don't work
- You want a guaranteed solution

The Web Service approach is already set up and ready to deploy!
