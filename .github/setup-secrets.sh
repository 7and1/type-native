#!/bin/bash

# GitHub Secrets Setup Script
# This script helps you set up GitHub Secrets for Cloudflare Pages deployment
#
# Usage: ./setup-secrets.sh

set -e

echo "🔐 GitHub Secrets Setup for Cloudflare Pages Deployment"
echo "========================================================"
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "📥 Please install it from: https://cli.github.com/"
    echo ""
    echo "Installation:"
    echo "  macOS:   brew install gh"
    echo "  Linux:   See https://github.com/cli/cli/blob/trunk/docs/install_linux.md"
    echo "  Windows: See https://github.com/cli/cli#windows"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ You are not authenticated with GitHub CLI."
    echo "🔑 Please run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI is installed and authenticated"
echo ""

# Get repository info
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
echo "📦 Repository: $REPO"
echo ""

# Function to set a secret
set_secret() {
    local secret_name=$1
    local secret_description=$2

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Setting: $secret_name"
    echo "Description: $secret_description"
    echo ""

    read -sp "Enter value for $secret_name (input hidden): " secret_value
    echo ""

    if [ -z "$secret_value" ]; then
        echo "⚠️  Skipping $secret_name (no value entered)"
        echo ""
        return
    fi

    if gh secret set "$secret_name" --body "$secret_value" --repo "$REPO"; then
        echo "✅ $secret_name has been set successfully"
    else
        echo "❌ Failed to set $secret_name"
    fi

    echo ""
}

# Set Cloudflare API Token
set_secret "CLOUDFLARE_API_TOKEN" "Your Cloudflare API token with Pages edit permissions"

# Set Cloudflare Account ID
set_secret "CLOUDFLARE_ACCOUNT_ID" "Your Cloudflare Account ID (not sensitive, but stored as secret for convenience)"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Verify secrets at: https://github.com/$REPO/settings/secrets/actions"
echo "  2. Push to main branch to trigger deployment"
echo "  3. Monitor deployment at: https://github.com/$REPO/actions"
echo ""
echo "📚 For more information, see .github/DEPLOYMENT.md"
echo ""
