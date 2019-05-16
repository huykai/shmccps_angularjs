openNewSite = function(siteName){
    console.log("try to add new external page")
    window['environment_shmcc'] = {
        'RTM': {
            URL: "http://127.0.0.1:51081/",
            Label: "RTM系统"
        },
        'GRAFANA': {
            URL:"http://127.0.0.1:52720/",
            Label: "实时监控(Grafana)系统"
        },
        'MAC': {
            URL:"http://127.0.0.1:51150/epc-ices",
            Label: "智能运维(MAX)系统"
        }
    }
    console.log("try to add new external page")
    let menuConfigs = window.environment_shmcc
    if (menuConfigs[siteName]){
        document.getElementById("content").setAttribute("src", menuConfigs[siteName].URL);
    }
}

module.exports = openNewSite