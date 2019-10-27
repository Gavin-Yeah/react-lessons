HOC : higher-order Component

@function is not applied in default react config

we could use react-app-rewired to generate config file
*   npm install react-app-rewired --save-dev
*   change script in package.json 
*   react-script    ===>   react-app-rewired start 
*   add config-overrides.js file
```
module.exports = (config)=>{
    //if not using customize-cra, config here
    return config
}
```

if want to config more convenient
*   npm install customize-cra --save-dev
*   npm i @babel/plugin-proposal-decorators -D


```
const{override, addDecoratorsLegacy} = require('customize-cra')
module.exports = override(
    addDecoratorsLegacy()
)
```