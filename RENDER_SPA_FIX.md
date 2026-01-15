# Fix for 404 Errors on Direct Route Access

## Problem
When accessing routes directly (e.g., `https://digital.shyara.co.in/samples`), you get a 404 error because the server tries to find a file at that path, but React Router handles routing on the client side.

## Solution
A `_redirects` file has been added to the `public` folder. This file tells the server to serve `index.html` for all routes, allowing React Router to handle the routing.

## Render Configuration

If the `_redirects` file doesn't work automatically, you may need to configure this in the Render dashboard:

1. Go to your Render service dashboard
2. Navigate to **Settings** → **Headers**
3. Add a custom header:
   - **Name**: `X-Rewrite-URL`
   - **Value**: `/index.html`
   
   OR add a redirect rule:
   - **From**: `/*`
   - **To**: `/index.html`
   - **Status**: `200` (not 301/302, so URL stays the same)

## Alternative: Using Render's Redirects Feature

1. Go to **Settings** → **Redirects**
2. Add redirect:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Status Code**: `200` (Important: Use 200, not 301/302)

This ensures all routes serve the React app, and React Router handles the routing on the client side.
