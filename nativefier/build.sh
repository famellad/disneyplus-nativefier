#!/bin/bash

URL=https://www.disneyplus.com
APPNAME="disneyplus"
PARAMS="--hide-window-frame --inject disneyplus.css --inject disneyplus.js --widevine"
#INTERNAL="https:\/\/www\.(amazon\.com\/ap\/signin|primevideo\.com)\/*"

#--disable-context-menu

# Windows, the browser is unsupported
#nativefier $URL --name $APPNAME $PARAMS --platform windows

# MacOS, not tested
#nativefier $URL --name $APPNAME $PARAMS --platform osx

# Linux
nativefier $URL --name $APPNAME $PARAMS --platform linux --verbose 
