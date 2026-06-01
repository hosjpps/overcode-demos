import { chromium } from "/Users/alavg/Documents/lead-gen/node_modules/playwright/index.mjs";
const sites=[["moscow-stomatology","https://moscow-stomatology.ru/"],["solnechnyy-eslizuba","http://www.eslizuba.net/domodedovskaya"],["irida-lridadent","https://lridadent.ru/"]];
const b=await chromium.launch();
for(const [name,url] of sites){
  try{const p=await b.newPage({viewport:{width:1200,height:850},deviceScaleFactor:1});
  await p.goto(url,{waitUntil:"networkidle",timeout:45000}).catch(()=>{});
  await p.waitForTimeout(2500);
  await p.screenshot({path:`/tmp/site-${name}.png`});
  const title=await p.title().catch(()=>"");
  console.log(name+" | "+title.slice(0,70));
  await p.close();}catch(e){console.log(name+" ERR "+e.message.slice(0,60));}
}
await b.close();
