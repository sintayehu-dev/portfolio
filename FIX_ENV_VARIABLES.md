# 🔧 Fix: Environment Variables Not Loading

## The Problem

You're seeing this error:
```
Uncaught TypeError: Expected parameter accessToken
```

This happens because **React doesn't hot-reload environment variables**. When you add or change `.env` files, you MUST restart the development server.

---

## ✅ Solution: Restart Your Development Server

### Step 1: Stop the Current Server
In your terminal where `npm start` is running:
- Press `Ctrl + C` to stop the server

### Step 2: Restart the Server
```bash
npm start
```

### Step 3: Wait for Compilation
Wait until you see:
```
Compiled successfully!
You can now view my-portfolio in the browser.
Local: http://localhost:3000
```

### Step 4: Refresh Your Browser
- Go to http://localhost:3000
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

---

## ✅ Verify Environment Variables Are Loaded

After restarting, open your browser console (F12) and check for these messages:

**If configured correctly:**
- No errors about "Expected parameter accessToken"
- Projects should load from Contentful

**If still not working:**
- Check console for error messages
- Verify `.env` file is in the root directory (not in `src/`)
- Make sure `.env` file has no extra spaces or quotes around values

---

## Your Current `.env` Configuration

```env
CI=false

# Contentful CMS Configuration
REACT_APP_CONTENTFUL_SPACE_ID=ljv58ycon8ns
REACT_APP_CONTENTFUL_ACCESS_TOKEN=NOL_cKEn9psxI0Njm0kFaRYZLJIqJZnFUnHJ-vidDXc
REACT_APP_CONTENTFUL_ENVIRONMENT=master
```

✅ This looks correct!

---

## Important Notes

1. **Always restart after changing `.env`** - React Create App only reads `.env` on startup
2. **No quotes needed** - Environment variables don't need quotes in `.env` files
3. **Must start with `REACT_APP_`** - React only exposes variables with this prefix to the browser
4. **File location matters** - `.env` must be in the project root, not in `src/`

---

## Still Having Issues?

Run this command to verify your environment variables:
```bash
node test-contentful.js
```

This should show:
```
✅ Success! Found 1 project(s)
```

If the test works but the browser doesn't, it's definitely an environment variable loading issue - restart the dev server!

---

## Quick Checklist

- [ ] Stopped the development server (`Ctrl + C`)
- [ ] Restarted with `npm start`
- [ ] Waited for "Compiled successfully!" message
- [ ] Hard refreshed browser (`Ctrl + Shift + R`)
- [ ] Checked browser console for errors

---

**After following these steps, your Contentful integration should work perfectly! 🎉**
