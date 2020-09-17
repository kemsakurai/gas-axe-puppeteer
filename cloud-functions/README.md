# axe-puppeteer-firebase-functions     

A tool for accessibility checks using axe-puppeteer in Firebase functions.
To record the check results, [kemsakurai/gas-axe-puppeteer-firebase-functions-client: axe-puppeteer-firebase-functions client made with gas](https://github.com/kemsakurai/gas-axe-puppeteer-firebase-functions-client).   
once you set up each tool, you can periodically record the results of accessibility checks in Google Sheets.


* Git clone   
```console
git clone https://github.com/kemsakurai/axe-puppeteer-firebase-functions.git
```

* Install   
```console
cd axe-puppeteer-firebase-functions
cd functions
npm install
```

* Set API Key
```console
firebase functions:config:set func.key="350cc344-abf6-4cad-b8e8-d3f9995a16ff" func.lang="ja"
```

* Deploy    
```console
firebase use --add
firebase deploy
```

