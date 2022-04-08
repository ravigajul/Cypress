const report = require('multiple-cucumber-html-reporter')

report.generate({
	jsonDir: 'cucumber-json',
	reportPath: 'reports/cucumberhtmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '99'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Apr 8th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Apr 8th 2017, 02:56 PM EST'}
        ]
    }
});