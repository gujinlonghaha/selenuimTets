var webdriver = require('selenium-webdriver');
let {Builder, By} = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
 driver.get('http://www.baidu.com');
 driver.findElement(By.id('kw')).sendKeys('selenuim')
 driver.findElement(By.id('su')).click()
