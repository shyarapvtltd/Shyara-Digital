# Render Static Site Configuration

## Fill in these values in the Render form:

### Basic Settings

**Name:**
```
Shyara-Digital
```
(Already filled - this is correct)

**Branch:**
```
main
```
(Already filled - this is correct)

**Root Directory:**
```
(Leave empty - not a monorepo)
```

### Build Settings

**Build Command:**
```
npm install && npm run build
```
⚠️ **Important:** Change from `bun install` to `npm install && npm run build`

**Publish Directory:**
```
dist
```
⚠️ **Important:** Change from `build` to `dist` (Vite outputs to `dist` folder)

### Environment Variables

**Leave empty** - No environment variables needed for this project unless you have API keys or other secrets.

### Advanced Settings

**Auto-Deploy:**
```
On Commit
```
(Default - keep this enabled)

**Build Filters:**
- **Included Paths:** Leave empty (default - all paths trigger builds)
- **Ignored Paths:** Leave empty (default)

### Summary

✅ **Name:** Shyara-Digital  
✅ **Branch:** main  
✅ **Root Directory:** (empty)  
✅ **Build Command:** `npm install && npm run build`  
✅ **Publish Directory:** `dist`  
✅ **Environment Variables:** (none)  
✅ **Auto-Deploy:** On Commit  

---

## After Configuration

1. Click **"Create Static Site"** or **"Save Changes"**
2. Wait 2-5 minutes for the first build
3. Your site will be live at: `https://shyara-digital.onrender.com`
4. Every push to `main` branch will automatically trigger a new deployment

