# Render Deployment Guide for Shyara Digital

This guide will walk you through deploying the Shyara Digital website to Render with a custom subdomain.

## Prerequisites

- A Render account (sign up at https://render.com if you don't have one)
- Your GitHub repository: `https://github.com/shyarapvtltd/Shyara-Digital`
- Access to your domain's DNS settings (if using a custom subdomain)

## Step-by-Step Deployment Instructions

### Step 1: Sign Up / Log In to Render

1. Go to https://render.com
2. Click **"Get Started for Free"** or **"Sign In"** if you already have an account
3. Sign in with your GitHub account (recommended) or email

### Step 2: Connect GitHub Repository

1. Once logged in, click on **"Dashboard"** in the top navigation
2. Click the **"New +"** button in the top right
3. Select **"Static Site"** from the dropdown menu
   - *Note: Since this is a Vite React app that builds to static files, we use Static Site, not Web Service*

### Step 3: Connect Your Repository

1. In the **"Connect Repository"** section:
   - If you haven't connected GitHub yet, click **"Connect GitHub"** and authorize Render
   - Search for or select: `shyarapvtltd/Shyara-Digital`
   - Click **"Connect"**

### Step 4: Configure Build Settings

Fill in the following configuration:

- **Name**: `shyara-digital` (or your preferred name)
- **Branch**: `main` (or `master` if that's your default branch)
- **Root Directory**: Leave empty (or `./` if required)
- **Build Command**: 
  ```
  npm install && npm run build
  ```
- **Publish Directory**: 
  ```
  dist
  ```

**Important:** The project includes a `_redirects` file in the `public` folder that ensures all routes work correctly. This file is automatically copied to the `dist` folder during build and tells Render to serve `index.html` for all routes, allowing React Router to handle client-side routing properly.

### Step 5: Environment Variables (Optional)

If you have any environment variables, add them here:
- Click **"Advanced"** to expand additional settings
- Under **"Environment Variables"**, add any needed variables
- For this project, you typically don't need any unless you have API keys

### Step 6: Create Static Site

1. Review all your settings
2. Scroll down and click **"Create Static Site"**
3. Render will start building your site (this takes 2-5 minutes)

### Step 7: Wait for Build to Complete

1. You'll see the build logs in real-time
2. Wait for the build to complete successfully
3. Once done, you'll get a default Render URL like: `https://shyara-digital.onrender.com`

### Step 8: Configure Custom Subdomain

#### Option A: Using Render's Free Subdomain

1. Go to your service dashboard
2. Click on **"Settings"** tab
3. Under **"Custom Domain"**, you can use Render's free subdomain
4. Your site will be available at: `https://shyara-digital.onrender.com`

#### Option B: Using Your Own Domain/Subdomain

1. Go to your service dashboard
2. Click on **"Settings"** tab
3. Scroll to **"Custom Domains"** section
4. Click **"Add Custom Domain"**
5. Enter your subdomain (e.g., `digital.shyaradigital.com` or `www.shyaradigital.com`)
6. Render will provide you with DNS records to add

### Step 9: Configure DNS (For Custom Domain)

If you're using your own domain, add these DNS records:

**For Root Domain (e.g., shyaradigital.com):**
- Type: `CNAME`
- Name: `@` or leave blank
- Value: `shyara-digital.onrender.com`

**For Subdomain (e.g., digital.shyaradigital.com):**
- Type: `CNAME`
- Name: `digital` (or your subdomain name)
- Value: `shyara-digital.onrender.com`

**Alternative (A Record):**
- Type: `A`
- Name: `@` or subdomain name
- Value: Render's IP (provided in the dashboard)

### Step 10: SSL Certificate

1. Render automatically provisions SSL certificates via Let's Encrypt
2. Once DNS propagates (can take up to 48 hours, usually 1-2 hours), SSL will be active
3. Your site will be available at `https://your-subdomain.com`

### Step 11: Automatic Deployments

Render automatically deploys when you push to the connected branch:
- Every push to `main` branch triggers a new deployment
- You can see deployment history in the **"Events"** tab
- Failed deployments won't affect your live site

## Post-Deployment Checklist

- [ ] Site is accessible at the Render URL
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active (HTTPS works)
- [ ] All pages load correctly
- [ ] Images and assets load properly
- [ ] Forms and interactive elements work
- [ ] Mobile responsiveness works

## Troubleshooting

### Build Fails

- Check build logs in Render dashboard
- Ensure `package.json` has correct build script
- Verify Node.js version (Render uses Node 18 by default)

### Site Not Loading

- Check if build completed successfully
- Verify publish directory is set to `dist`
- Check browser console for errors

### Custom Domain Not Working

- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check DNS using tools like `nslookup` or `dig`
- Ensure CNAME/A records point to correct Render URL

### Assets Not Loading

- Check if paths in code use relative paths (not absolute)
- Verify `vite.config.ts` has correct `base` setting if needed
- Check browser network tab for 404 errors

## Render Configuration File

The project includes a `render.yaml` file for infrastructure-as-code deployment. You can use it to:

1. Go to **Dashboard** → **New** → **Blueprint**
2. Connect your repository
3. Render will read `render.yaml` and create the service automatically

## Useful Render Features

- **Preview Deployments**: Test deployments before going live
- **Manual Deploy**: Trigger deployments manually
- **Rollback**: Quickly revert to previous deployment
- **Logs**: View real-time application logs
- **Metrics**: Monitor site performance

## Support

- Render Documentation: https://render.com/docs
- Render Support: https://render.com/support
- Status Page: https://status.render.com

## Notes

- Render's free tier includes:
  - Unlimited static sites
  - Automatic SSL certificates
  - Custom domains
  - Automatic deployments from GitHub
  
- For production, consider:
  - Upgrading to paid plan for better performance
  - Setting up CDN for faster global access
  - Configuring custom headers if needed

