Runs slotmachine demo games (to capture for offline replay). The puppeteer docker required for this:

docker run -e "PREBOOT_CHROME=true" -e "KEEP_ALIVE=true" -e "TOKEN=2cbc5771-38f2-4dcf-8774-50ad51a971bd" -e "MAX_CONCURRENT_SESSIONS=10" -e "DEFAULT_BLOCK_ADS=true"  -e "DEFAULT_IGNORE_HTTPS_ERRORS=true" -e FUNCTION_ENABLE_INCOGNITO_MODE=true  -e "CONNECTION_TIMEOUT=-1" -e "DEFAULT_LAUNCH_ARGS=[\"--window-size=968,1280\"]" -e "DEBUG=-*" -p 24055:3000 --restart always -d browserless/chrome

![puppet]([https://i.ibb.co/2P7GVxv/dockered-puppeteer.png](https://i.ibb.co/929QK6b/dockered-puppeteer.png)

## Requirements
- NodeJS (version 12 or higher).
- An environment to run command's (Terminal or others).

## Running
1. NodeJS >= 12 is installed
2. 'npm install'
3. 'npm start'
