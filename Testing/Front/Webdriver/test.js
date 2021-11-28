// WebDriver: represents the browser
// WebElement: represents a particular DOM node (a control, e.g. a link or input field, etc.)

const { Builder, By } = require("selenium-webdriver");
let fs = require("fs");

let driver;

// MANIPULACIÓN DEL BROWSER
const manipularBrowser = async () => {
  // WINDOW
  // Ajustar el tamaño y posición de la ventana
  await driver
    .manage()
    .window()
    .setRect({ width: 1024, height: 768, x: 50, y: 50 });

  // Access each dimension individually
  const { x, y, width, height } = await driver.manage().window().getRect();
  console.log(x, y, width, height);

  // Navegar a una URL
  await driver.get("https://selenium.dev");

  let ele = await driver.findElement(By.css("h1"));

  // Executing JavaScript to capture innerText of header element
  let text = await driver.executeScript("return arguments[0].innerText", ele);
  console.log(text);

  // Captures the element screenshot
  let encodedString = await ele.takeScreenshot(true);
  await fs.writeFileSync("./image.png", encodedString, "base64");

  // Obtener url
  console.log(await driver.getCurrentUrl());

  //Presionar Back button
  await driver.navigate().back();

  // Presionar Forward button
  await driver.navigate().forward();

  // Refrescar el navegador
  await driver.navigate().refresh();

  // Obtener el título de la ventana
  console.log(await driver.getTitle());

  //Obtener el window Handle
  console.log(await driver.getWindowHandle());

  //Store the ID of the original window
  const originalWindow = await driver.getWindowHandle();

  // Opens a new tab and switches to new tab
  await driver.switchTo().newWindow("tab");

  // Opens a new window and switches to new window
  await driver.switchTo().newWindow("window");

  //Close the tab or window
  await driver.close();

  //Switch back to the old tab or window
  await driver.switchTo().window(originalWindow);
};

const localizarElementos = async () => {
  // Busca un elemento con id=cheese
  const cheese = driver.findElement(By.id("cheese"));

  // Busca un elemento con id=cheddar que esté dentro de un elemento con id=cheese,
  const cheddar = driver.findElement(By.css("#cheese #cheddar"));

  // Busca varios elementos li dentro de uno con id=cheese
  const muchoCheese = driver.findElements(By.css("#cheese li"));
};

(async function init() {
  //WebDriver code here...
  driver = await new Builder().forBrowser("chrome").build();
  try {
    await manipularBrowser();
    await localizarElementos();
  } finally {
    await driver.quit();
  }
})();
