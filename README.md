# primevideo-nativefier
Code to get Disney+ working as a native app using the nodejs nativefier

## Requirements
You need [nativefier](https://github.com/nativefier/nativefier) installed and working for the core app to build and run.

If you want to turn it into an AppImage, the necessary files are provided in the AppImage directory, but you need a copy of AppImageTool.

## Usage

### Nativefier app

Just run the build.sh script inside and it will build the app for Linux. If you want to try your hand at building it for Windows or MacOS, you can uncomment the corresponding lines in the script!

### AppImage

To get the appimage working just place the contents of the AppImage directory inside the nativefied app you just built, then run AppImageTool on that directory and it'll build a (hopefully) working .AppImage file for you to enjoy.

Disclaimer: I do not recommend doing this step, and I have included these files only for reference, there are some additional libraries requiered that I still haven't pinpointed that should be included in the AppDir tree.

## TODO
- Get a MacOS tester.
- Figure out what libraries are required inside the AppDir tree
- Fully automate the build script, at least for Linux.
