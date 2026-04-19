# Security Notes

## Do **not** paste tokens in chat, issues, PRs, or commits

If you generated an API token, keep it private.

### Safe handling checklist

1. Store tokens in environment variables (for example, `OPENAI_API_KEY`).
2. Keep secrets in a local `.env` file that is **never committed**.
3. Rotate and revoke any token that is accidentally exposed.
4. Use least-privilege and short-lived tokens where possible.

### Example (local shell)

```bash
export OPENAI_API_KEY="your_token_here"
```

### Example (`.env`)

```env
OPENAI_API_KEY=your_token_here
```
