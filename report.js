const reporter=require("cucumber-html-reporter")

const options={
    theme:"bootstrap",
    jsonFile:"reports/cucumber_report.json",
    output:"reports/Custom_report.html",
    reportSuiteAsScenarios:true,
    launchReport:true,
    reportTitle:"Custom Report",
    metadata:{
        Environment:"QA",
        Browser:"Chrome",
        platform:"Windows 11",
        TestedBy:"Ramesh"
    }
}

reporter.generate(options)