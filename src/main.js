// audio-graphic - Nathaniel Williams (NaNBytes)

const { app, BrowserWindow } = require("electron");
const nativeImage = require("electron").nativeImage;


app.commandLine.appendSwitch("disable-gpu")


let window;
let settings_window;


// Create Window
function create_window(){

     // Create Main BrowserWindow
     window = new BrowserWindow({
          title: "Audio Graphic",
          width: 1600,
          height: 900,
          frame: false,
          show: false
     });

     // Disable Menu
     window.setMenu(null);

     window.loadFile("src/index.html");

     // Ready-To-Show
     window.on("ready-to-show", () => {
          window.show();
     })

     // Closed
     window.on("closed", () => {
          window = null;
     })


     /*
     // Create Settings BrowserWindow
     settings_window = new BrowserWindow({
          title: "Settings",
          width: 400,
          height: 500,
          parent: window
     });
     settings_window.setAlwaysOnTop(true);
     settings_window.setResizable(false);
     settings_window.show();

     // Disable Menu
     settings_window.setMenu(null);

     settings_window.loadFile("src/settings.html");

     // Ready-To-Show
     settings_window.on("ready-to-show", () => {
          settings_window.show();
     })

     // Closed
     settings_window.on("closed", () => {
          settings_window = null;
     })
     */
}
app.on("ready", create_window);


// All Windows Closed
app.on("window-all-closed", () => {
     if(process.platform !== "darwin"){
          app.quit();
     }
});


// Activate
app.on("activate", () => {
     if(window === null){
          create_window();
     }
     if(settings_window === null){
          create_window();
     }
})
