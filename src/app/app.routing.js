"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./component/home/home.component');
var profile_component_1 = require('./component/profile/profile.component');
var auth_guard_1 = require('./auth.guard');
var AppRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routing.js.map