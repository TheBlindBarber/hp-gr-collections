window.siteConfig = window.siteConfig || {};
window.siteConfig.occurrence = {
  rootPredicate: {
    type: "equals",
    key: "datasetKey",
    value: "6e73ce4f-628d-4317-8895-3ddb0d154c0b"
  }
};

window.loadOccurrenceData = async function() {
    const response = await fetch("http://YOURSERVER_IP:9090/occurrence.json");
    const data = await response.json();
    console.log("Loaded", data.length, "records");
    return data;
};
