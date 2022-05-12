const {override} = require('customize-cra');
const {aliasDangerous} = require("react-app-rewire-alias/src/aliasDangerous");
const {configPaths} = require("react-app-rewire-alias");
const {} = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    )
}