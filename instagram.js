const puppeteer = require('puppeteer')

const app = async () =>{
    const browser = await puppeteer.launch({headless:false,ignoreDefaultArgs:["--enable-automation"]});
    const tab = await browser.newPage();

    await tab._client.send("Emulation.clearDeviceMetricsOverride");
    await tab.goto("https://www.instagram.com/");
     
    await tab.waitForSelector("#react-root > section > main > article > div.rgFsT > div:nth-child(1)");
    await tab.waitForSelector("#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(2) > div > label > input");
    await tab.click(` #react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(2) > div > label > input`);
    await tab.keyboard.type('your Username');

    await tab.waitForSelector("#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(3) > div > label > input");
    await tab.click(` #react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(3) > div > label > input`);
    await tab.keyboard.type('Your password');

    await tab.waitForSelector("#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(4)");
    await tab.click("#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(4)");

    await tab.waitForSelector("#react-root > section > main > div > div > div > div > button");
    await tab.click("#react-root > section > main > div > div > div > div > button");

    await tab.waitForSelector("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm");
    await tab.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm");

    await tab.waitForSelector("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(2) > a > svg > path");
    await tab.click("#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > div:nth-child(2) > a > svg > path");

    
    await tab.waitForSelector("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.oNO81 > div.S-mcP > div > div._2NzhO.EQ1Mr > button > svg > path:nth-child(2)");
    await tab.click("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.oNO81 > div.S-mcP > div > div._2NzhO.EQ1Mr > button > svg > path:nth-child(2)");

    await tab.waitForSelector("body > div.RnEpo.Yx5HN > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > div.TGYkm > div > div.HeuYH > input");
    await tab.click("body > div.RnEpo.Yx5HN > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > div.TGYkm > div > div.HeuYH > input");
    await tab.keyboard.type("target Username ");

    await tab.waitForSelector("body > div.RnEpo.Yx5HN > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > div.Igw0E.IwRSH.eGOV_.vwCYk._3wFWr > div:nth-child(1) > div > div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button > span");
    await tab.click("body > div.RnEpo.Yx5HN > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.i0EQd > div.Igw0E.IwRSH.eGOV_.vwCYk._3wFWr > div:nth-child(1) > div > div.Igw0E.rBNOH.YBx95.ybXk5._4EzTm.soMvl > button > span");
  
    await tab.waitForSelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > div > button");
    await tab.click("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > div > button");
   
  
    async function msg(){

   

    await tab.waitForSelector("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.ItkAi > textarea");
    await tab.click("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.Igw0E.IwRSH.eGOV_.vwCYk.ItkAi > textarea");
    await tab.keyboard.type("auto gerenated ");

    await tab.waitForSelector("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
    await tab.click("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");

    setTimeout(msg,1000);
    }
    msg();
}
app();