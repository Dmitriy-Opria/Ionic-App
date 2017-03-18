"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./component/home/home.component');
var profile_component_1 = require('./component/profile/profile.component');
var AppRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routing.js.map