openNewSite = function(siteName){
    console.log("try to add new external page")
    window['environment_shmcc'] = {
        'RTM': {
            URL: "http://10.221.30.101/",
            Label: "RTM系统"
        },
        'GRAFANA': {
            URL:"http://10.221.30.101/",
            Label: "实时监控(Grafana)系统"
        }
    }
    console.log("try to add new external page")
    let menuConfigs = window.environment_shmcc
    if (menuConfigs[siteName]){
        //window.open(menuConfigs[siteName].URL, "_blank");
        document.getElementById("content").setAttribute("src", menuConfigs[siteName].URL);
    }
}

module.exports = openNewSite