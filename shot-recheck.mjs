import { chromium } from "/Users/alavg/Documents/lead-gen/node_modules/playwright/index.mjs";
const sites=[
 ["artadent","https://art-a-dent.ru/"],
 ["dlyasvoix","http://stomatologiadlyasvoix.ru/"],
 ["melodent","https://melodent.moscow/"],
 ["bazis","https://bazis-dent.ru/"],
 ["ulybka","https://улыбка-удачи.рф/"],
];
const b=await chromium.launch();
for(const [name,url] of sites){
  const p=await b.newPage({viewport:{width:1200,height:800}});
  let status="?";
  try{const resp=await p.goto(url,{waitUntil:"domcontentloaded",timeout:30000});status=resp?resp.status():"no-resp";
    await p.waitForTimeout(2500);
    const title=await p.title().catch(()=>"");
    await p.screenshot({path:`/tmp/rc-${name}.png`});
    console.log(`${name} | HTTP ${status} | "${title.slice(0,55)}"`);
  }catch(e){console.log(`${name} | DEAD/ERR | ${e.message.split("\n")[0].slice(0,55)}`);}
  await p.close();
}
await b.close();
