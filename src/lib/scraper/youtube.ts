// lib/scraper/youtube.ts
/**
 * Server-side Playwright-based "public data extraction" helper.
 * IMPORTANT: only extracts publicly visible contact info shown on About pages.
 */

import { Page } from 'playwright';

function normalizeEmail(raw: string | null) {
    if (!raw) return null;
    const s = raw.trim();
    const match = s.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    return match ? match[0] : null;
}

/**
 * Read an individual channel about page and try to extract a visible email.
 * @param page Playwright Page already navigated to channel's about page
 */
export async function extractEmailFromAbout(page: Page) {
    // common selectors for the email area
    // we attempt multiple approaches so it's robust to small layout changes
    const candidates = [
        'a[href^="mailto:"]',
        'yt-formatted-string:has(a[href^="mailto:"])',
        'a[aria-label*="email"]',
        'ytd-channel-about-metadata-renderer a'
    ];

    for (const sel of candidates) {
        try {
            const handle = await page.$(sel);
            if (!handle) continue;
            const href = await handle.getAttribute('href');
            if (href && href.startsWith('mailto:')) {
                const email = href.replace(/^mailto:/i, '').split('?')[0];
                const normalized = normalizeEmail(email);
                if (normalized) return { email: normalized, source: sel };
            }
            const text = (await handle.innerText()).trim();
            const normalized = normalizeEmail(text);
            if (normalized) return { email: normalized, source: sel };
        } catch (e) {
            // ignore and try next selector
        }
    }

    // fallback: scan page text for an email-looking string
    const bodyText = await page.textContent('body');
    const normalized = normalizeEmail(bodyText || '');
    if (normalized) return { email: normalized, source: 'body-scan' };

    return { email: null, source: null };
}
