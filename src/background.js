
// A big thanks to Smile4ever for making this extension possible.
// https://stackoverflow.com/a/47529107

function handleUpdated(tabId, changeInfo, tabInfo) {
    if(changeInfo.favIconUrl){
        //console.log("favIconUrl updated is " + changeInfo.favIconUrl);

        if (tabInfo.incognito && changeInfo.favIconUrl.indexOf("privatebrowsing") > -1){
            //console.log("opening about:blank..");
            browser.tabs.update({url: "about:blank"});
        }
    }
}

function winCreated(window) {
    if(window.incognito){
        browser.tabs.update({url: "about:blank"});
    }
}

browser.tabs.onUpdated.addListener(handleUpdated);
browser.windows.onCreated.addListener(winCreated)
