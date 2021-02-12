// Close button data
var imgData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQ5JREFUWIXt101KA0EQhuGvYhRxK4JXMniBbHO3SCRZCl5HBnfiDYQ3mw6GOD/VMkwZqW/ZU9399EBP90iZTCaTOfuYtxC4lfQo6UPSq5lROxlgkh4k3Ul6MbPP2jF6gUDDd56BeeUY89LvkKYsfDTkip/ZeqEFuG0ZYzUmctEygQvaAwRYjImcAZta6ABwA8xGQ5YJL4B1x4Q74LKl/slbPzk0DFgBvQ4FOqFNR/t0QCc0HlgJjQMeQa+Atw7gO3ATDezbxfFv0gmMgw4A43f3APDwnXSfTBHA4xNneqgXeFI/HZRzuAURfJ/0ruS+pW0naWlmX30dy/NlqfeM+7sQ/I/zf/4WM5lMJvO3swfTT3IgyvruXQAAAABJRU5ErkJggg==";

// Inject the close button
var closeButton = '<div class=""><a id="close-button" href="javascript:window.close();"><img src=' + imgData + ' /></a></div>';
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', closeButton);
