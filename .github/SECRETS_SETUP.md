# Setting Up GitHub Secrets - Step by Step Guide

This guide will walk you through setting up GitHub Secrets for automatic Cloudflare Pages deployment.

## 🚀 Quick Setup (Recommended)

If you have GitHub CLI installed:

```bash
cd .github
./setup-secrets.sh
```

This script will guide you through setting up all required secrets.

---

## 📝 Manual Setup

If you prefer to set up secrets manually, follow these steps:

### Step 1: Access GitHub Secrets Settings

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click the **New repository secret** button

### Step 2: Add CLOUDFLARE_API_TOKEN

**Secret Name**: `CLOUDFLARE_API_TOKEN`

**How to get the value**:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Choose **Edit Cloudflare Workers** template or create custom token
4. **Permissions required**:
   - Account → Cloudflare Pages → Edit
5. Click **Continue to summary**
6. Click **Create Token**
7. **Copy the token** (you won't be able to see it again!)
8. Paste it as the secret value in GitHub

**Verification** (optional):
```bash
curl "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/tokens/verify" \
  -H "Authorization: Bearer {YOUR_TOKEN}"
```

### Step 3: Add CLOUDFLARE_ACCOUNT_ID

**Secret Name**: `CLOUDFLARE_ACCOUNT_ID`

**How to get the value**:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your account (if you have multiple)
3. The Account ID is shown in the right sidebar
   - OR you can find it in the URL: `dash.cloudflare.com/{ACCOUNT_ID}/...`
4. Copy the Account ID
5. Paste it as the secret value in GitHub

**Example Account ID format**: `fe394f7c37b25babc4e351d704a6a97c`

---

## ✅ Verify Setup

After adding both secrets:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. You should see:
   - ✓ `CLOUDFLARE_API_TOKEN`
   - ✓ `CLOUDFLARE_ACCOUNT_ID`
   - ✓ `GITHUB_TOKEN` (automatically provided, no setup needed)

---

## 🧪 Test Deployment

To test if everything is set up correctly:

1. Make a small change to your code
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "test: trigger deployment"
   git push origin main
   ```
3. Go to **Actions** tab in your repository
4. Watch the "Deploy to Cloudflare Pages" workflow run
5. If successful, your site will be live on Cloudflare Pages!

---

## 🔐 Security Notes

### ✅ Best Practices

- **Never** commit secrets to your repository
- **Never** share secrets in issues or pull requests
- **Regularly rotate** your API tokens (every 90 days recommended)
- **Use minimal permissions** for tokens
- **Enable branch protection** for the main branch

### 🔄 Rotating Tokens

To rotate your Cloudflare API token:

1. Create a new token in Cloudflare Dashboard
2. Update the `CLOUDFLARE_API_TOKEN` secret in GitHub
3. Revoke the old token in Cloudflare

### 📊 Audit

You can audit who has access to secrets:
- Go to **Settings** → **Actions** → **General**
- Check "Workflow permissions"
- Review collaborators with repository access

---

## ❓ Troubleshooting

### Secret not working?

1. **Check the secret name** - must be exactly:
   - `CLOUDFLARE_API_TOKEN` (not `CLOUDFLARE_TOKEN`)
   - `CLOUDFLARE_ACCOUNT_ID` (not `ACCOUNT_ID`)

2. **Check token permissions**:
   ```bash
   curl "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/tokens/verify" \
     -H "Authorization: Bearer {YOUR_TOKEN}"
   ```
   Should return `"status": "active"`

3. **Check Account ID format**:
   - Should be a 32-character hex string
   - Example: `fe394f7c37b25babc4e351d704a6a97c`

### Workflow not running?

1. Check if workflow file exists: `.github/workflows/deploy.yml`
2. Check if you pushed to the correct branch (`main`)
3. Check **Actions** tab → ensure Actions are enabled

### Deployment failing?

1. Check **Actions** tab for error logs
2. Verify all secrets are set correctly
3. Ensure Cloudflare Pages project exists
4. Check build output for errors

---

## 📞 Support

If you encounter issues:

1. Check the [DEPLOYMENT.md](.github/DEPLOYMENT.md) guide
2. Review GitHub Actions logs
3. Check Cloudflare Pages dashboard
4. Verify all secrets are correctly set

---

## 🎓 Additional Resources

- [GitHub Encrypted Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Cloudflare API Tokens](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)
- [Cloudflare Pages Actions](https://github.com/cloudflare/pages-action)
