# Cloudflare Pages Deployment Guide

This project is configured to automatically deploy to Cloudflare Pages using GitHub Actions.

## 🔐 Setup GitHub Secrets

To enable automatic deployment, you need to configure the following secrets in your GitHub repository:

### Step 1: Go to Repository Settings

1. Navigate to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**

### Step 2: Add Required Secrets

Add the following secrets:

#### 1. `CLOUDFLARE_API_TOKEN`
- **Value**: Your Cloudflare API token
- **How to get it**:
  1. Go to https://dash.cloudflare.com/profile/api-tokens
  2. Click "Create Token"
  3. Use the "Edit Cloudflare Workers" template or create a custom token with these permissions:
     - Account → Cloudflare Pages → Edit
  4. Copy the token and paste it as the secret value

#### 2. `CLOUDFLARE_ACCOUNT_ID`
- **Value**: Your Cloudflare Account ID
- **How to get it**:
  1. Go to https://dash.cloudflare.com/
  2. Select your account
  3. Copy the Account ID from the right sidebar or URL

**Note**: `GITHUB_TOKEN` is automatically provided by GitHub Actions and doesn't need to be configured.

## 🚀 Deployment Process

### Automatic Deployment

The deployment will automatically trigger when:
- You push commits to the `main` branch
- A pull request is merged to `main`

### Manual Deployment

You can also trigger a deployment manually:
1. Go to **Actions** tab in your repository
2. Select the "Deploy to Cloudflare Pages" workflow
3. Click "Run workflow"

## 📦 Build Configuration

The project uses Next.js static export:
- **Build command**: `npm run build`
- **Output directory**: `out`
- **Node version**: 22

## 🔍 Monitoring Deployments

You can monitor your deployments in:
- **GitHub Actions**: Check the workflow runs in the Actions tab
- **Cloudflare Dashboard**: View deployment status at https://dash.cloudflare.com/

## 🛡️ Security Best Practices

✅ **DO**:
- Use GitHub Secrets for all sensitive tokens
- Regularly rotate your API tokens
- Use minimal permissions for tokens
- Enable branch protection rules

❌ **DON'T**:
- Never commit API tokens or secrets to the repository
- Don't share secrets in pull requests or issues
- Avoid using account-level tokens when project-level tokens suffice

## 🆘 Troubleshooting

### Deployment fails with "Invalid API token"
- Verify the `CLOUDFLARE_API_TOKEN` secret is correctly set
- Ensure the token has the required permissions
- Check if the token has expired

### Build fails
- Check the build logs in GitHub Actions
- Ensure all dependencies are properly listed in `package.json`
- Verify the build works locally with `npm run build`

### Wrong deployment directory
- Ensure `next.config.ts` has `output: 'export'`
- The output directory should be `out` for static exports

## 📚 Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
