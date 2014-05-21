// Arthor: Jack Chin

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript(null,{file:"contentscript.js"});
});