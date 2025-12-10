import { chromium } from "playwright";

export async function launchBrowser() {
    const browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    return browser;
}