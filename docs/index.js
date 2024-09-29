const basicInfo = require('./basicInfo');
const components = require('./components');
const tasks = require('./task')

module.exports = {
    ...basicInfo,
    ...components,
    ...tasks
};