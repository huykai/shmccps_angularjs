openNewSite = function(siteName, mode){
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
        },
        'OldReportSuite': {
            URL:"https:/127.0.0.1:51071",
            Label: "ReportSuite系统 (MME/SAEGW)"
        },
        'NewReportSuite': {
            URL:"https:/127.0.0.1:51072",
            Label: "ReportSuite系统 (CMG)"
        }
    }
    console.log("try to add new external page")
    let menuConfigs = window.environment_shmcc
    if (menuConfigs[siteName]){
        if (menuConfigs[siteName]){
            if (mode === "window") {
                window.open(menuConfigs[siteName].URL, "_blank");
            } else if (mode === "ifame") {
                document.getElementById("content").setAttribute("src", menuConfigs[siteName].URL);
            }
        }
    }
}

module.exports = openNewSite