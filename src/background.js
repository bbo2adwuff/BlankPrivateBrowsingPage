
function handleUpdated(tabId, changeInfo, tabInfo) {

    // console.log(tabId);
    // console.log(changeInfo);
    // console.log(tabInfo);

    if (changeInfo.status == "loading" && changeInfo.url == "about:privatebrowsing"){
        //console.log("opening about:blank..");
        browser.tabs.update({url: "about:blank", active: true});
    } else if (
        tabInfo.favIconUrl == "chrome://browser/skin/privatebrowsing/favicon.svg" &&
            tabInfo.incognito == true &&
            tabInfo.url == "about:blank"
    ){
        browser.tabs.update({url: "about:blank", active: true});
    }
}

browser.tabs.onUpdated.addListener(handleUpdated);
