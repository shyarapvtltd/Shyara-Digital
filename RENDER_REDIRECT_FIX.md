# Fix for 404 Errors - Render Configuration

## The Problem
When accessing routes directly (e.g., `/samples`), Render is rewriting the URL to `/index.html`, which React Router doesn't recognize as a valid route.

## Solution: Configure Rewrite in Render Dashboard

### Step-by-Step Instructions:

1. **Go to Render Dashboard**
   - Visit https://render.com
   - Sign in to your account
   - Find and click on your `shyara-digital` service

2. **Navigate to Settings**
   - Click on the **"Settings"** tab

3. **Configure Redirects/Rewrites**
   - Scroll down to find **"Redirects"** or **"Rewrites"** section
   - If you see **"Redirects"**, click **"Add Redirect"**
   - If you see **"Rewrites"**, click **"Add Rewrite"**

4. **Add the Rewrite Rule**
   - **Source/From**: `/*` (matches all routes)
   - **Destination/To**: `/index.html`
   - **Status Code**: `200` (IMPORTANT: Must be 200, not 301 or 302)
   - **Preserve Path**: Make sure this option is enabled/checked (if available)
   
   OR if Render uses a different format:
   - **Pattern**: `/*`
   - **Rewrite to**: `/index.html`
   - **Status**: `200`

5. **Save and Deploy**
   - Click **"Save"** or **"Add"**
   - Render will automatically redeploy
   - Wait for deployment to complete (2-5 minutes)

6. **Test**
   - Try accessing: `https://digital.shyara.co.in/samples`
   - The URL should stay as `/samples` (not change to `/index.html`)
   - The page should load correctly

## Alternative: If Redirects Section Doesn't Exist

If you don't see a Redirects section, try:

1. **Check Headers Section**
   - Go to **Settings** → **Headers**
   - Add custom header:
     - **Name**: `X-Rewrite-URL`
     - **Value**: `/index.html`

2. **Contact Render Support**
   - If neither option works, contact Render support
   - They can configure server-side rewrites for your static site

## Important Notes

- The status code MUST be `200` (not 301/302)
- The rewrite should preserve the original URL path
- After configuration, clear browser cache and test again
- The `_redirects` file in the project may not work for Render (it's more for Netlify)

## Verification

After configuration, test these URLs directly:
- ✅ `https://digital.shyara.co.in/samples`
- ✅ `https://digital.shyara.co.in/categories`
- ✅ `https://digital.shyara.co.in/faq`
- ✅ `https://digital.shyara.co.in/contact`

All should work without showing 404 errors.
