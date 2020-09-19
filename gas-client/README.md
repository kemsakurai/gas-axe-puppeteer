# gas-axe-puppeteer (gas-client)

A container binding script that records the results of running [dequelabs/axe-puppeteer](https://github.com/dequelabs/axe-puppeteer) in a Google spreadsheet.

----------

## Prerequisites

### Deploy Cloud Function     
Using [gas-axe-puppeteer/cloud-functions at master · kemsakurai/gas-axe-puppeteer](https://github.com/kemsakurai/gas-axe-puppeteer/tree/master/cloud-functions) Run ax-puppeteer.
Please deploy the cloud function in advance.

### Clasp development environment   
- [Node.js](https://nodejs.org/)
- [google/clasp](https://github.com/google/clasp)

----------

## How to deploy container bind script    

### Clone the repository
```
git clone https://github.com/kemsakurai/gas-axe-puppeteer.git <project_name>   
cd <project_name>/gas-client
```

### Install dependencies
```
npm install
```

### Configuration

#### When creating a spreadsheet          
If you want to create a new spreadsheet, run `npm run setup`.   
Initialize .clasp.json and create a spreadsheet.

#### When using an existing spreadsheet       
You can use an existing spreadsheet by following one of the steps below.   

* Run the `setup: use-id` command      
```console
npm run setup:use-id 1K7MPtCHkjasdf93238234asdKFDF3sa9
```

* Change the script ID of `.clasp.json`    
```console
{"scriptId":"<your_script_id>", "rootDir": "dist" }   
```

### Development and build project
```
npm run push
```

---------------     
## SpreadSheet setting

### Cloud Function Setting   

#### Create sheets    
Open the context menu and click Preferences> Create sheets.   
[![Image from Gyazo](https://i.gyazo.com/f426e7f04999a53a1c9438fb75d35b70.png)](https://gyazo.com/f426e7f04999a53a1c9438fb75d35b70)   
A Records sheet and an Aggregations sheet are created. The Records sheet records the ax-puppeteer warning line by line, and the Aggregations sheet records the aggregated results for each execution time.    

#### URL Settings    
* Open the context menu and click Preferences> URL Settings.   
[![Image from Gyazo](https://i.gyazo.com/f926d5aa2f5dd5ca15c17cc42e83c8dd.png)](https://gyazo.com/f926d5aa2f5dd5ca15c17cc42e83c8dd)
    
* A dialog is displayed. Enter the following 3 items.    
[![Image from Gyazo](https://i.gyazo.com/d72b405a81b0dc67c1d769b9eadd5790.png)](https://gyazo.com/d72b405a81b0dc67c1d769b9eadd5790)   
    
    * Firebase endpoint URL    
    Enter the URL of the Cloud Function you deployed to Firebase.     
    
    * Target URL     
    Please enter the URL of the web page to be checked.      
    
    * API Key      
    Enter the API Key set for Cloud Function.      

#### Execution     
Open the context menu and click Execute.
[![Image from Gyazo](https://i.gyazo.com/4f407e8aef17866af0b2003c745c09b0.png)](https://gyazo.com/4f407e8aef17866af0b2003c745c09b0)    
Send a request to Cloud Function and record the execution result.     

#### Schedule Execution      
Open the context menu and click Schedule Execution.    
[![Image from Gyazo](https://i.gyazo.com/7f16c31fb16fde4f7bb6f45cf4524c3f.png)](https://gyazo.com/7f16c31fb16fde4f7bb6f45cf4524c3f)    
You can set the scheduling execution using the gas trigger.     

## License    
MIT

