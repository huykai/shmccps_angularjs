openNewSite = function(siteName, mode){
    console.log("try to add new external page")
    window['environment_shmcc'] = {
        'RTM': {
            URL: "http://10.221.30.101/",
            Label: "RTM系统"
        },
        'GRAFANA': {
            URL:"http://10.222.5.38:3001/",
            Label: "实时监控(Grafana)系统"
        },
        'MAC': {
            URL:"http://10.222.5.35:8888/epc-ices",
            Label: "实时监控(Grafana)系统"
        },
        'OldReportSuite': {
            URL:"https:/10.221.255.60",
            Label: "ReportSuite系统 (MME/SAEGW)"
        },
        'NewReportSuite': {
            URL:"https:/10.222.36.242",
            Label: "ReportSuite系统 (CMG)"
        }
    }
    console.log("try to add new external page")
    let menuConfigs = window.environment_shmcc
    if (menuConfigs[siteName]){
        if (mode === "window") {
            window.open(menuConfigs[siteName].URL, "_blank");
        } else if (mode === "ifame") {
            document.getElementById("content").setAttribute("src", menuConfigs[siteName].URL);
        }
    }
}

module.exports = openNewSite