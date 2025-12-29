# Troubleshooting Admin Login Issues

## Issue: "Unauthorized" message when logging into admin UI

### Solution Steps:

1. **Restart the Backend Server**
   The CORS settings have been updated. You need to restart the backend:
   ```bash
   # Stop the current backend (Ctrl+C)
   # Then restart it:
   npm run dev
   ```

2. **Clear Browser Cache and Cookies**
   - Open Developer Tools (F12 or Cmd+Option+I)
   - Go to Application/Storage tab
   - Clear all cookies for `localhost:9000`
   - Clear browser cache
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

3. **Verify You're Using the Correct Endpoint**
   The admin UI should be accessing: `http://localhost:9000/auth/admin/emailpass`
   
4. **Test Authentication Directly**
   You can test if authentication works:
   ```bash
   curl -X POST http://localhost:9000/auth/admin/emailpass \
     -H "Content-Type: application/json" \
     -d '{"email":"mohit@cheenti.com","password":"Mohit@123!@#$"}'
   ```
   This should return a token if working correctly.

5. **Check Browser Console**
   - Open Developer Tools → Console
   - Look for any CORS errors or authentication errors
   - Check the Network tab to see what request is being made

6. **Verify Credentials**
   - Email: `mohit@cheenti.com`
   - Password: `Mohit@123!@#$` (exact, including special characters)

7. **Try Incognito/Private Mode**
   Open the admin UI in an incognito/private browser window to rule out extension interference.

### If Still Not Working:

1. **Check Backend Logs**
   Look at the terminal where `npm run dev` is running for any error messages.

2. **Verify User Exists**
   ```bash
   psql -d dizester-herbal-2 -c "SELECT email FROM \"user\" WHERE email = 'mohit@cheenti.com';"
   ```

3. **Recreate Admin User**
   ```bash
   npx medusa user -e mohit@cheenti.com -p 'Mohit@123!@#$'
   ```

### Admin UI Access:
- URL: http://localhost:9000/app
- The admin UI is served from the same backend server

