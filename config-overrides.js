// module.exports = (config)=>{
//     //if not using customize-cra, config here
//     return config
// }


const{override, addDecoratorsLegacy} = require('customize-cra')
module.exports = override(
    addDecoratorsLegacy()
)