
function handleCreated(tab) {
    //if (tab.incognito == true && tab.url == "about:privatebrowsing"){
    // about:privatebrowsing does not work...
    if (tab.incognito == true && tab.url == "about:blank"){
	browser.tabs.create({url: "about:blank"});
	console.log(tab.url);
    }
}

browser.tabs.onCreated.addListener(handleCreated);
