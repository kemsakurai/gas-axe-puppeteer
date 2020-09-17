import * as functions from 'firebase-functions';
import { AxePuppeteer } from 'axe-puppeteer';
import * as puppeteer from 'puppeteer';
import * as Axe from 'axe-core';
import * as locale_ja from 'axe-core/locales/ja.json';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// リクエストヘッダーからTokenをパース
const getAccessToken = function(header: any) : any {
    if (!header) return null;
    const match = header.match(/^Bearer\s+([^\s]+)$/);
    return match ? match[1] : null;
}

const runtimeOpts : functions.RuntimeOptions = {
    timeoutSeconds: 300,
    memory: '1GB'
}

async function run(url : string) {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setBypassCSP(true);
    await page.goto(url);
    let results;
    if (functions.config().func.lang == "ja") {
        // @ts-ignore
        const spec : Axe.Spec = { locale: locale_ja }
        // @ts-ignore
        results = await new AxePuppeteer(page).configure(spec).analyze()
    } else {
        // @ts-ignore
        results = await new AxePuppeteer(page).analyze()
    }
    await page.close();
    await browser.close();
    return results;
}

export const runAxePuppeteer = functions.runWith(runtimeOpts).https.onRequest((request, response) => {
    const actualKey = getAccessToken(request.get('Authorization'));
    const expectedKey = functions.config().func.key;
    if (expectedKey == actualKey) {
        const url = request.query.url;
        if (!url) {
            return;
        }
        run(url.toString()).then((results) => {
            response.status(200).send(results);
        }).catch((err) => {
            console.error(err);
            response.status(500).send("error: " + err);
        });
    } else {
        response.status(403).send("不正なアクセスです");
    }
});
