webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routing_auth_guard__ = __webpack_require__("../../../../../src/app/routing/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing_not_auth_guard__ = __webpack_require__("../../../../../src/app/routing/not-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_client_client_component__ = __webpack_require__("../../../../../src/app/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_devis_devis_component__ = __webpack_require__("../../../../../src/app/components/devis/devis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_valider_devis_valider_devis_component__ = __webpack_require__("../../../../../src/app/components/valider-devis/valider-devis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_facture_accompte_facture_accompte_component__ = __webpack_require__("../../../../../src/app/components/facture-accompte/facture-accompte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_bugs_bugs_component__ = __webpack_require__("../../../../../src/app/components/bugs/bugs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_components_login_login_component__ = __webpack_require__("../../../../../src/app/authentication/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_components_register_register_component__ = __webpack_require__("../../../../../src/app/authentication/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authentication_components_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/authentication/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__authentication_components_init_password_init_password_component__ = __webpack_require__("../../../../../src/app/authentication/components/init-password/init-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Guards


// Components











/**
 * routes definition
 */
var routes = [
    // Auth routes
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__authentication_components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__routing_not_auth_guard__["a" /* NotAuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__authentication_components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__routing_auth_guard__["a" /* AuthGuard */]] },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_13__authentication_components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__routing_not_auth_guard__["a" /* NotAuthGuard */]] },
    { path: 'init-password', component: __WEBPACK_IMPORTED_MODULE_14__authentication_components_init_password_init_password_component__["a" /* InitPasswordComponent */] },
    { path: 'init-password/:_id', component: __WEBPACK_IMPORTED_MODULE_14__authentication_components_init_password_init_password_component__["a" /* InitPasswordComponent */] },
    // uncomment dashboard when implemented
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__routing_auth_guard__["a" /* AuthGuard */]] },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_5__components_client_client_component__["a" /* ClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__routing_auth_guard__["a" /* AuthGuard */]] },
    // { path: 'devis', component: DevisComponent },
    // path Devis by client._id
    { path: 'devis/client/:id_client', component: __WEBPACK_IMPORTED_MODULE_6__components_devis_devis_component__["a" /* DevisComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__routing_auth_guard__["a" /* AuthGuard */]] },
    // { path: 'facture', component: FactureComponent },
    // path valider Devis into facture global
    { path: 'devis/client/valider-devis/:id_devis', component: __WEBPACK_IMPORTED_MODULE_7__components_valider_devis_valider_devis_component__["a" /* ValiderDevisComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__routing_auth_guard__["a" /* AuthGuard */]] },
    // path facture d'accompte / facture mois
    { path: 'facture/facture-accompte/:id_fact', component: __WEBPACK_IMPORTED_MODULE_8__components_facture_accompte_facture_accompte_component__["a" /* FactureAccompteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__routing_auth_guard__["a" /* AuthGuard */]] },
    // path bugs
    { path: 'bug', component: __WEBPACK_IMPORTED_MODULE_9__components_bugs_bugs_component__["a" /* BugsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__routing_auth_guard__["a" /* AuthGuard */]] },
    { path: 'pageNotFound', component: __WEBPACK_IMPORTED_MODULE_10__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
    // default path redirect to 'client'
    { path: '', redirectTo: 'client', pathMatch: 'full' },
    // Undefined page path
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flash-msg {\r\n    margin-top: -68px;\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.router-container {\r\n    margin-top: 120px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"flash-msg\">\r\n    <ngx-flash-messages></ngx-flash-messages>\r\n</div>\r\n<div class=\"container-fluid router-container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    // Root Component
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
    // Root Component
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_client_client_component__ = __webpack_require__("../../../../../src/app/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_devis_devis_component__ = __webpack_require__("../../../../../src/app/components/devis/devis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_facture_global_facture_global_component__ = __webpack_require__("../../../../../src/app/components/facture-global/facture-global.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_valider_devis_valider_devis_component__ = __webpack_require__("../../../../../src/app/components/valider-devis/valider-devis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_facture_accompte_facture_accompte_component__ = __webpack_require__("../../../../../src/app/components/facture-accompte/facture-accompte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_bugs_bugs_component__ = __webpack_require__("../../../../../src/app/components/bugs/bugs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__authentication_components_login_login_component__ = __webpack_require__("../../../../../src/app/authentication/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__authentication_components_register_register_component__ = __webpack_require__("../../../../../src/app/authentication/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__authentication_components_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/authentication/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__authentication_components_init_password_init_password_component__ = __webpack_require__("../../../../../src/app/authentication/components/init-password/init-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_facture_accompte_service__ = __webpack_require__("../../../../../src/app/service/facture-accompte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_details_devis_service__ = __webpack_require__("../../../../../src/app/service/details-devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_reglement_service__ = __webpack_require__("../../../../../src/app/service/reglement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_bugs_service__ = __webpack_require__("../../../../../src/app/service/bugs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__authentication_services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__authentication_services_validation_service__ = __webpack_require__("../../../../../src/app/authentication/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__authentication_services_email_service__ = __webpack_require__("../../../../../src/app/authentication/services/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__routing_auth_guard__ = __webpack_require__("../../../../../src/app/routing/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__routing_not_auth_guard__ = __webpack_require__("../../../../../src/app/routing/not-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_sort_number_pipe__ = __webpack_require__("../../../../../src/app/pipes/sort-number.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pipes_sort_string_pipe__ = __webpack_require__("../../../../../src/app/pipes/sort-string.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pipes_order_by_date_pipe__ = __webpack_require__("../../../../../src/app/pipes/order-by-date.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Angular Flash messages

// ng2-Charts

// Routing Module

// import Components














// import Services










// Guards


// Pipes



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_devis_devis_component__["a" /* DevisComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_facture_global_facture_global_component__["a" /* FactureGlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_valider_devis_valider_devis_component__["a" /* ValiderDevisComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_facture_accompte_facture_accompte_component__["a" /* FactureAccompteComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_bugs_bugs_component__["a" /* BugsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__authentication_components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_21__authentication_components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__authentication_components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_23__authentication_components_init_password_init_password_component__["a" /* InitPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_36__pipes_sort_number_pipe__["a" /* SortNumberPipe */],
            __WEBPACK_IMPORTED_MODULE_37__pipes_sort_string_pipe__["a" /* SortStringPipe */],
            __WEBPACK_IMPORTED_MODULE_38__pipes_order_by_date_pipe__["a" /* OrderByDatePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_flash_messages__["a" /* FlashMessagesModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__service_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_25__service_devis_service__["a" /* DevisService */],
            __WEBPACK_IMPORTED_MODULE_27__service_facture_accompte_service__["a" /* FactureAccompteService */],
            __WEBPACK_IMPORTED_MODULE_26__service_facture_global_service__["a" /* FactureGlobalService */],
            __WEBPACK_IMPORTED_MODULE_28__service_details_devis_service__["a" /* DetailsDevisService */],
            __WEBPACK_IMPORTED_MODULE_29__service_reglement_service__["a" /* ReglementService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_30__service_bugs_service__["a" /* BugsService */],
            __WEBPACK_IMPORTED_MODULE_34__routing_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_35__routing_not_auth_guard__["a" /* NotAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_31__authentication_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_32__authentication_services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_33__authentication_services_email_service__["a" /* EmailService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/components/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/components/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"page-header\">Mot de passe oublié ?</h2>\r\n  <p>Entrez votre adresse email pour réinitialiser votre mot de passe.</p>\r\n  <form class=\"form-inline\" (submit)=\"forgotPassword()\" [formGroup]=\"forgotPasswordForm\">\r\n    <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" size=\"50\" name=\"email\" placeholder=\"Email\" autofocus\r\n      required>\r\n    <button [disabled]=\"!forgotPasswordForm.valid || processing\" type=\"submit\" style=\"margin-left:5px;\" class=\"btn btn-lg btn-success\">Soumettre</button>\r\n  </form>\r\n  <br>\r\n  <br>\r\n  <div *ngIf=\"requestSubmitted\" class=\"container\">\r\n    Un email vient d'être envoyé à l'adresse {{adresseEmail}}. Vérifier votre\r\n    <a href=\"{{emailUrl}}\">boîte de réception</a>.\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/components/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service__ = __webpack_require__("../../../../../src/app/authentication/services/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_template_email__ = __webpack_require__("../../../../../src/app/models/template-email.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services




// Templates

/**
 * Forgot Password du Compte utilisateur
 * @author Paul GUINARD
 * @export ForgotPasswordComponent
 * @class ForgotPasswordComponent
 * @implements {OnInit}
 */
var ForgotPasswordComponent = (function () {
    /**
     * Creates an instance of ForgotPasswordComponent.
     * @param {EmailService} _emailService Email
     * @param {AuthService} _authService Authentication
     * @param {FlashMsgService} _flashMsg Flash Msg
     * @param {FormBuilder} _fb Reactive Form Builder
     * @memberof ForgotPasswordComponent
     */
    function ForgotPasswordComponent(_emailService, _flashMsg, _authService, _fb) {
        this._emailService = _emailService;
        this._flashMsg = _flashMsg;
        this._authService = _authService;
        this._fb = _fb;
        this.requestSubmitted = false;
        this.processing = false;
        this.createForm();
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_User__["a" /* User */]();
        this.emailUrl = 'http://www.gmail.com';
    }
    Object.defineProperty(ForgotPasswordComponent.prototype, "email", {
        get: function () { return this.forgotPasswordForm.get('email').value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Generate forgotPasswordForm
     *
     * @memberof ForgotPasswordComponent
     */
    ForgotPasswordComponent.prototype.createForm = function () {
        this.forgotPasswordForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required
                ])]
        });
    };
    /**
     * Get User by Email. Appelé par forgotPassword()
     *
     * @param {string} email email
     * @memberof ForgotPasswordComponent
     */
    ForgotPasswordComponent.prototype.getUserByEmail = function (email) {
        var _this = this;
        this._authService.getUserByEmail(email)
            .subscribe(function (user) {
            _this.user = user.obj;
        }, function (err) { return console.log(err); });
    };
    /**
     * Send forgotPassword mail pour réinitialiser le password.
     * - Appel fonction getUserByEmail()
     * - Envoi Email de réinitialisation du password
     *
     * @memberof ForgotPasswordComponent
     */
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        var _this = this;
        this.processing = true;
        this.adresseEmail = this.email;
        this.getUserByEmail(this.email);
        setTimeout(function () {
            var mailBody = __WEBPACK_IMPORTED_MODULE_6__models_template_email__["a" /* forgotPassword */](_this.user);
            var mail = {
                to: _this.adresseEmail,
                subject: 'Mot de passe oublié ?',
                text: mailBody
            };
            _this._emailService.sendMail(mail)
                .subscribe(function (data) {
                _this.requestSubmitted = true;
                _this.processing = false;
            }, function (err) {
                console.log(err);
                _this._flashMsg.show('Erreur durant l\'envoi du message, réessayer plus tard', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                _this.processing = false;
            });
        }, 1000);
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__("../../../../../src/app/authentication/components/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/components/forgot-password/forgot-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _d || Object])
], ForgotPasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/components/init-password/init-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/components/init-password/init-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"page-header\">Réinitialisez votre mot de passe</h2>\r\n  <form (submit)=\"initPassword()\" [formGroup]=\"initPasswordForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email:</label>\r\n      <input type=\"text\" name=\"email\" class=\"form-control \" id=\"email\" formControlName=\"email\" />\r\n    </div>\r\n    <div formGroupName=\"passwords\">\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Mot de passe:</label>\r\n        <input type=\"password\" name=\"password\" class=\"form-control \" id=\"password\" formControlName=\"password\" required autofocus\r\n        />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"confirmPassword\">Confirmation:</label>\r\n        <input type=\"password\" name=\"confirmPassword\" class=\"form-control \" id=\"confirmPassword\" formControlName=\"confirmPassword\"\r\n          required />\r\n      </div>\r\n    </div>\r\n    <button [disabled]=\"!initPasswordForm.valid || processing\" type=\"submit\" class=\"btn btn-success\">Réinitialiser le mot de passe</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/components/init-password/init-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validation_service__ = __webpack_require__("../../../../../src/app/authentication/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Models

// Services



/**
 * Réinitialise password Compte Utilisateur
 * @author Paul GUINARD
 * @export InitPasswordComponent
 * @class InitPasswordComponent
 * @implements {OnInit}
 */
var InitPasswordComponent = (function () {
    /**
     * Creates an instance of InitPasswordComponent.
     * @param {AuthService} _authService AuthService
     * @param {ValidationService} _validationService Validation Form Function
     * @param {FlashMsgService} _flashMsg Flash Msg
     * @param {FormBuilder} _fb Reactive Form Builder
     * @param {ActivatedRoute} _activatedRoute get router params
     * @param {Router} _router router
     * @memberof InitPasswordComponent
     */
    function InitPasswordComponent(_authService, _validationService, _flashMsg, _fb, _activatedRoute, _router) {
        this._authService = _authService;
        this._validationService = _validationService;
        this._flashMsg = _flashMsg;
        this._fb = _fb;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.createForm();
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */]();
        this.processing = false;
        this.userEmail = undefined;
    }
    Object.defineProperty(InitPasswordComponent.prototype, "email", {
        get: function () { return this.initPasswordForm.get('email').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitPasswordComponent.prototype, "passwords", {
        get: function () { return this.initPasswordForm.controls['passwords']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitPasswordComponent.prototype, "password", {
        get: function () { return this.passwords.get('password').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitPasswordComponent.prototype, "confirmPassword", {
        get: function () { return this.passwords.get('confirmPassword').value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Generate initPasswordForm
     *
     * @memberof InitPasswordComponent
     */
    InitPasswordComponent.prototype.createForm = function () {
        this.initPasswordForm = this._fb.group({
            email: [{ value: this.userEmail, disabled: true }],
            passwords: this._fb.group({
                password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(150)
                    ])],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(150)
                    ])],
            }, {
                validator: this._validationService.comparePasswords
            })
        });
    };
    /**
     * Réinitialise password Compte utilisateur.
     * - Set init-password dans le localStorage et redirect to login page on success
     *
     * @memberof InitPasswordComponent
     */
    InitPasswordComponent.prototype.initPassword = function () {
        var _this = this;
        this.processing = false;
        // Set User Object
        var user = this.user;
        user.password = this.password;
        console.log(user);
        this._authService.initUserPassword(user)
            .subscribe(function (data) {
            if (data.success) {
                _this._flashMsg.show('Mot de passe mis à jour. Vous pouvez vous connecter avec votre nouveau password.', {
                    classes: ['alert', 'alert-success'],
                    timeout: 3000
                });
                // Set localStorage init-password on success
                setTimeout(function () {
                    localStorage.setItem('init-password', user.email);
                    _this._router.navigate(['/login']);
                }, 1000);
            }
            else {
                _this._flashMsg.show('Erreur durant la mise à jour du password. Veuillez réessayer.', {
                    classes: ['alert', 'alert-success'],
                    timeout: 3000
                });
            }
        }, function (err) { return console.log(err); });
    };
    /**
     * Get User data by Id. Appelé onInit quand params Id récupéré dans l'url.
     *
     * @param {number} id user id
     * @memberof InitPasswordComponent
     */
    InitPasswordComponent.prototype.getCompteById = function (id) {
        var _this = this;
        this._authService.getUserById(id)
            .subscribe(function (user) {
            _this.user = user.obj;
            _this.userEmail = user.obj.email;
            _this.initPasswordForm.get('email').setValue(_this.userEmail);
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * OnInit.
     * - Get Id params définie dans l'url de l'email
     * - Get User data store in database by Id
     *
     * @memberof InitPasswordComponent
     */
    InitPasswordComponent.prototype.ngOnInit = function () {
        if (this._activatedRoute.snapshot.params['_id'] !== undefined) {
            this.userId = this._activatedRoute.snapshot.params['_id'];
            // Get User data
            this.getCompteById(this.userId);
        }
        else {
            this._flashMsg.show('Ce lien a expiré. Entrez votre adresse E-mail pour recevoir un lien valide.', {
                classes: ['alert', 'alert-success'],
                timeout: 3000
            });
            this._router.navigate(['/forgot-password']);
        }
    };
    return InitPasswordComponent;
}());
InitPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-init-password',
        template: __webpack_require__("../../../../../src/app/authentication/components/init-password/init-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/components/init-password/init-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_validation_service__["a" /* ValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validation_service__["a" /* ValidationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], InitPasswordComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=init-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Specific styles of signin component\r\n */\r\n\r\n\r\n/*\r\n * General styles\r\n */\r\n\r\nbody,\r\nhtml {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n}\r\n\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n}\r\n\r\n\r\n/*\r\n* Card component\r\n*/\r\n\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n/*\r\n* Form styles\r\n*/\r\n\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n}\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n    cursor: pointer;\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n\r\n.forgot-password {\r\n    font-size: 15px;\r\n    color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus {\r\n    color: rgb(12, 97, 33);\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n\r\n/* \r\n  Angular Material Form\r\n*/\r\n\r\n.login-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.login-container>* {\r\n    width: 100%;\r\n}\r\n\r\n.input {\r\n    width: 100%;\r\n    margin-top: 5px;\r\n}\r\n\r\n.link {\r\n    font-size: 12px !important;\r\n    margin-left: 20px !important;\r\n}\r\n\r\n.forgot-password-link {\r\n    font-size: 12px !important;\r\n    margin-left: 10px;\r\n}\r\n\r\n.error {\r\n    font-size: 110% !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2 class=\"page-header\">GP - Conception & Construction</h2>\r\n    <span class=\"col-sm-4 col-md-4 col-lg-4 col-xs-2\"></span>\r\n\r\n    <mat-card class=\"col-sm-4 col-md-4 col-lg-4 col-xs-8\" style=\"background-color: rgb(255, 246, 234);\">\r\n        <form (submit)=\"onLogin()\" [formGroup]=\"loginForm\">\r\n            <mat-card-header>\r\n                <mat-card-title style=\"font-size: 40px;\">Se connecter</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content class=\"login-container\">\r\n                <!-- Login data -->\r\n                <div>\r\n                    <mat-form-field class=\"input\">\r\n                        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\r\n                        <mat-error class=\"error\" *ngIf=\"loginForm.controls.email.errors\">{{getErrorMessage('email')}}</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"input\">\r\n                        <input matInput type=\"password\" placeholder=\"Mot de passe\" formControlName=\"password\" required>\r\n                        <mat-error class=\"error\" *ngIf=\"loginForm.controls.password.errors\">{{getErrorMessage('password')}}</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <!-- /Login data -->\r\n\r\n            </mat-card-content>\r\n            <!-- Button -->\r\n            <mat-card-actions>\r\n                <div style=\"text-align: center;\">\r\n                    <button mat-raised-button [disabled]=\"!loginForm.valid || processing\" type=\"submit\" color=\"primary\">Se connecter</button>\r\n                    <a routerLink=\"/forgot-password\" class=\"forgot-password-link\">Mot de passe oublié ?</a>\r\n                </div>\r\n            </mat-card-actions>\r\n            <!-- /Button -->\r\n        </form>\r\n    </mat-card>\r\n\r\n    <span class=\"col-sm-4 col-md-4 col-lg-4 col-xs-2\"></span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validation_service__ = __webpack_require__("../../../../../src/app/authentication/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_auth_guard__ = __webpack_require__("../../../../../src/app/routing/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Models

// Services



// Guards

/**
 * Connexion Compte utilisateur
 * @author Paul GUINARD
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
var LoginComponent = (function () {
    /**
     * Creates an instance of LoginComponent.
     * @param {FormBuilder} _fb Reactive Form Builder
     * @param {AuthService} _authService Auth
     * @param {FlashMsgService} _flashMsg Flash Msg
     * @param {ValidationService} _validationService Validation Form Function
     * @param {AuthGuard} _authGuard route auth guard
     * @param {Router} _router router
     * @memberof LoginComponent
     */
    function LoginComponent(_fb, _authService, _authGuard, _flashMsg, _validationService, _router) {
        this._fb = _fb;
        this._authService = _authService;
        this._authGuard = _authGuard;
        this._flashMsg = _flashMsg;
        this._validationService = _validationService;
        this._router = _router;
        this.createForm();
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */]();
        this.processing = false;
    }
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.loginForm.get('email').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password').value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Generate loginForm
     *
     * @memberof LoginComponent
     */
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(100),
                    this._validationService.emailValidation
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(150)
                ])]
        });
    };
    /**
     * Get Error message du loginForm en fonction des Validators
     *
     * @param {string} arg current Input
     * @returns {string} Error message
     * @memberof LoginComponent
     */
    LoginComponent.prototype.getErrorMessage = function (arg) {
        switch (arg) {
            case 'email':
                return this.loginForm.controls['email'].hasError('required') ? 'Ce champ est requis' :
                    this.loginForm.controls['email'].hasError('emailValidation') ? 'Email invalide' :
                        '';
            case 'password':
                return this.loginForm.controls['password'].hasError('required') ? 'Ce champ est requis' :
                    '';
            default:
                break;
        }
    };
    /**
     * Login Compte utilisateur function.
     * - Set User Object
     * - Appel function login du authService
     * - Store user data et token in localStorage
     * - Redirect to home ou previousUrl page
     *
     * @memberof LoginComponent
     */
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.processing = true;
        // Set User Object
        this.user = {
            email: this.email,
            password: this.password
        };
        // Appel function login()
        this._authService.login(this.user)
            .subscribe(function (data) {
            // Si passport return success
            if (data.info.success) {
                // Store user data et token
                _this._authService.storeUserData(data.token);
                _this._flashMsg.show('Connexion avec succés', {
                    classes: ['alert', 'alert-success'], timeout: 1500
                });
                // Redirect to home ou previousUrl page
                setTimeout(function () {
                    _this._router.navigate(['/client']);
                }, 1000);
            }
        }, function (err) {
            _this.processing = false;
            if (!err.ok) {
                _this._flashMsg.show(err.error.message, {
                    classes: ['alert', 'alert-danger'], timeout: 3000
                });
            }
            else {
                console.log(err);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/authentication/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__routing_auth_guard__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__routing_auth_guard__["a" /* AuthGuard */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_validation_service__["a" /* ValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_validation_service__["a" /* ValidationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".email-already-exists {\r\n    font-style: italic;\r\n}\r\n\r\n.register-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.register-container>* {\r\n    width: 100%;\r\n}\r\n\r\n.container-width {\r\n    width: 100%;\r\n}\r\n\r\n.input {\r\n    width: 98%;\r\n    margin-top: 5px;\r\n}\r\n\r\n.login-link {\r\n    font-size: 12px !important;\r\n    margin-left: 40px !important;\r\n}\r\n\r\n.passwords-error {\r\n    font-size: 85%;\r\n    color: #f44336;\r\n    display: block;\r\n}\r\n\r\n.error {\r\n    font-size: 110% !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">GP - Conception & Construction</h2>\r\n<span class=\"col-sm-3 col-md-3 col-lg-3 col-xs-2\"></span>\r\n\r\n<mat-card class=\"col-sm-6 col-md-6 col-lg-6 col-xs-8\" style=\"background-color: rgb(255, 246, 234);\">\r\n    <form (submit)=\"onRegister()\" [formGroup]=\"registerForm\">\r\n        <mat-card-header>\r\n            <mat-card-title style=\"font-size: 40px;\">Créer un compte</mat-card-title>\r\n            <mat-card-subtitle class=\"email-already-exists\" *ngIf=\"verifEmailUnicite\">Un compte avec cet adresse email existe déjà.\r\n                <a routerLink=\"/login\" (click)=\"onLogin()\">Se connecter ?</a>\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"register-container\">\r\n            <!-- Common data -->\r\n            <table class=\"container-width\">\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field class=\"input\">\r\n                            <input matInput type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" autofocus required>\r\n                            <mat-error class=\"error\" *ngIf=\"registerForm.controls.nom.errors\">{{getErrorMessage('nom')}}</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field class=\"input\">\r\n                            <input matInput type=\"text\" placeholder=\"Prénom\" formControlName=\"prenom\" required>\r\n                            <mat-error class=\"error\" *ngIf=\"registerForm.controls.prenom.errors\">{{getErrorMessage('prenom')}}</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <!-- /Common data -->\r\n\r\n            <mat-form-field class=\"input\">\r\n                <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\r\n                <mat-error class=\"error\" *ngIf=\"registerForm.controls.email.errors\">{{getErrorMessage('email')}}</mat-error>\r\n            </mat-form-field>\r\n\r\n            <!-- Passwords formGroup -->\r\n            <table class=\"container-width\" formGroupName=\"passwords\">\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field class=\"input\">\r\n                            <input matInput type=\"password\" placeholder=\"Mot de passe\" formControlName=\"password\" required>\r\n                            <mat-error class=\"error\" *ngIf=\"passwords.controls.password.errors\">{{getErrorMessage('password')}}</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <mat-form-field class=\"input\">\r\n                            <input matInput type=\"password\" placeholder=\"Confirmation\" formControlName=\"confirmPassword\" required>\r\n                            <mat-error class=\"error\" *ngIf=\"passwords.controls.confirmPassword.errors\">{{getErrorMessage('confirmPassword')}}</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <!-- /Passwords formGroup -->\r\n\r\n            <!-- Error Passwords Not Match -->\r\n            <span class=\"passwords-error\" *ngIf=\"registerForm.controls.passwords.errors && passwords.controls.password.touched && !passwords.controls.confirmPassword.pristine\">{{getErrorMessage('passwords')}}</span>\r\n\r\n        </mat-card-content>\r\n        <!-- Button -->\r\n        <mat-card-actions>\r\n            <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-0\"></span>\r\n            <span class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n\r\n        <button mat-raised-button [disabled]=\"!registerForm.valid || processing || verifEmailUnicite\" type=\"submit\" color=\"primary\">S'enregistrer</button>\r\n      </span>\r\n            <span class=\"col-lg-2 col-md-2 col-sm-2 col-xs-0\"></span>\r\n        </mat-card-actions>\r\n        <!-- /Button -->\r\n    </form>\r\n</mat-card>\r\n\r\n<span class=\"col-sm-3 col-md-3 col-lg-3 col-xs-2\"></span>"

/***/ }),

/***/ "../../../../../src/app/authentication/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validation_service__ = __webpack_require__("../../../../../src/app/authentication/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services



// Models

/**
 * Création Compte utilisateur
 * @author Paul GUINARD
 * @export RegisterComponent
 * @class RegisterComponent
 * @implements {OnInit}
 */
var RegisterComponent = (function () {
    /**
     * Creates an instance of RegisterComponent.
     * @param {FormBuilder} _fb Reactive Form Builder
     * @param {AuthService} _authService Auth
     * @param {EmailService} _emailService Email
     * @param {FlashMsgService} _flashMsg Flash Msg
     * @param {CompteService} _compteService Compte utilisateur
     * @param {UserService} _userService User service
     * @param {ValidationService} _validationService Validation Form Function
     * @param {Router} _router router
     * @memberof RegisterComponent
     */
    function RegisterComponent(_fb, _authService, _flashMsg, _validationService, _router) {
        this._fb = _fb;
        this._authService = _authService;
        this._flashMsg = _flashMsg;
        this._validationService = _validationService;
        this._router = _router;
        this.createForm();
        this.user = new __WEBPACK_IMPORTED_MODULE_6__models_User__["a" /* User */]();
        this.processing = false;
        this.verifEmailUnicite = false;
    }
    Object.defineProperty(RegisterComponent.prototype, "nom", {
        get: function () { return this.registerForm.get('nom').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "prenom", {
        get: function () { return this.registerForm.get('prenom').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwords", {
        get: function () { return this.registerForm.controls['passwords']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.passwords.get('password').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () { return this.passwords.get('confirmPassword').value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Generate registerForm
     *
     * @memberof RegisterComponent
     */
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this._fb.group({
            nom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(100)
                ])],
            prenom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(100)
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(100),
                    this._validationService.emailValidation
                ])],
            passwords: this._fb.group({
                password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(150)
                    ])],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6),
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(150)
                    ])],
            }, {
                validator: this._validationService.comparePasswords
            })
        });
    };
    /**
     * Get Error message du registerForm en fonction des Validators
     *
     * @param {string} arg current Input
     * @returns {string} Error message
     * @memberof RegisterComponent
     */
    RegisterComponent.prototype.getErrorMessage = function (arg) {
        switch (arg) {
            case 'nom':
                return this.registerForm.controls['nom'].hasError('required') ? 'Ce champ est requis' :
                    '';
            case 'prenom':
                return this.registerForm.controls['prenom'].hasError('required') ? 'Ce champ est requis' :
                    '';
            case 'email':
                return this.registerForm.controls['email'].hasError('required') ? 'Ce champ est requis' :
                    this.registerForm.controls['email'].hasError('emailValidation') ? 'Email invalide' :
                        '';
            case 'password':
                return this.passwords.get('password').hasError('required') ? 'Ce champ est requis' :
                    '';
            case 'confirmPassword':
                return this.passwords.get('confirmPassword').hasError('required') ? 'Ce champ est requis' :
                    '';
            case 'passwords':
                return this.passwords.hasError('comparePasswords') ? 'Les mots de passe ne sont pas identiques' :
                    '';
            default:
                break;
        }
    };
    /**
     * Register Compte utilisateur function.
     * - Set User Object
     * - Appel function register du authService
     * - Envoi un email de validation on success
     *
     * @memberof RegisterComponent
     */
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.processing = true;
        // Set User Object
        this.user = {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            password: this.password,
        };
        // Appel function register()
        this._authService.register(this.user)
            .subscribe(function (data) {
            if (data.success) {
                _this._flashMsg.show('Création de compte réussie', {
                    classes: ['alert', 'alert-success'],
                    timeout: 3000
                });
                // Redirection vers login page
                _this._router.navigate(['/login']);
            }
            else {
                _this._flashMsg.show(data.message, {
                    classes: ['alert', 'alert-success'],
                    timeout: 3000
                });
            }
        }, function (err) {
            _this.processing = false;
            _this._flashMsg.show('Erreur durant la création de compte. Réessayez plus tard.', {
                classes: ['alert', 'alert-danger'],
                timeout: 4000
            });
            console.log(err);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/authentication/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_validation_service__["a" /* ValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validation_service__["a" /* ValidationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Environments

/**
 * Authentication Service
 * @author Paul GUINARD
 * @export AuthService
 * @class AuthService
 */
var AuthService = (function () {
    /**
     * Creates an instance of AuthService.
     * @param {HttpClient} _http httpClient
     * @memberof AuthService
     */
    function AuthService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url;
    }
    /**
     * Store token et user in localStorage
     *
     * @param {string} token token
     * @param {User} user User Object
     * @memberof AuthService
     */
    AuthService.prototype.storeUserData = function (token) {
        localStorage.setItem('token', token);
    };
    /**
     * Login User
     *
     * @param {User} user User Object
     * @memberof AuthService
     */
    AuthService.prototype.login = function (user) {
        return this._http.post(this.url + "/auth/login", user);
    };
    /**
     * Register User
     *
     * @param {User} user User Object
     * @memberof AuthService
     */
    AuthService.prototype.register = function (user) {
        return this._http.post(this.url + "/auth/register", user);
    };
    /**
     * Clear le localStorage
     *
     * @memberof AuthService
     */
    AuthService.prototype.clearLocalStorage = function () {
        localStorage.clear();
    };
    /**
     * Get User object by Email
     *
     * @param {string} email user email
     * @memberof AuthService
     */
    AuthService.prototype.getUserByEmail = function (email) {
        return this._http.get(this.url + "/auth/users/email/" + email);
    };
    /**
     * Get User Object by Id
     *
     * @param {number} id User id
     * @memberof AuthService
     */
    AuthService.prototype.getUserById = function (id) {
        return this._http.get(this.url + "/auth/users/" + id);
    };
    /**
     * Init User password
     *
     * @param {User} user User object
     * @memberof AuthService
     */
    AuthService.prototype.initUserPassword = function (user) {
        return this._http.put(this.url + "/auth/init-password/" + user._id, user);
    };
    /**
     * Vérifie si token dans localStorage et tokenNotExpired
     *
     * @returns {boolean} tokenNotExpired
     * @memberof AuthService
     */
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/services/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Service pour envoyer des Email
 * @author Paul GUINARD
 * @export EmailService
 * @class EmailService
 */
var EmailService = (function () {
    /**
     * Creates an instance of EmailService.
     * @param {HttpClient} _http httpClient
     * @memberof EmailService
     */
    function EmailService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url;
    }
    /**
     * Fonction pour envoyer un Email au compte utilisateur
     *
     * @param {Email} email Email Object
     * @returns {Observable<any>}
     * @memberof EmailService
     */
    EmailService.prototype.sendMail = function (email) {
        return this._http.post(this.url + "/mail/sendMail", email);
    };
    return EmailService;
}());
EmailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], EmailService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/services/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Form Validation function
 * @author Paul GUINARD
 * @export ValidationService
 * @class ValidationService
 */
var ValidationService = (function () {
    function ValidationService() {
    }
    /**
     * Email validation
     *
     * @param {FormControl} controls input control
     * @returns emailValidation
     * @memberof ValidationService
     */
    // TODO: tslint avec join()
    ValidationService.prototype.emailValidation = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        return {
            emailValidation: true
        };
    };
    /**
     * NumTel validation
     *
     * @param {FormControl} controls input control
     * @returns numTelValidation
     * @memberof ValidationService
     */
    ValidationService.prototype.numTelValidation = function (controls) {
        var regExp = new RegExp(/[0-9-_.]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        return {
            numTelValidation: true
        };
    };
    /**
     * Compare passwords validation
     *
     * @param {FormGroup} group form group
     * @returns comparePasswords
     * @memberof ValidationService
     */
    ValidationService.prototype.comparePasswords = function (group) {
        if (group.value.password !== group.value.confirmPassword) {
            return {
                comparePasswords: true
            };
        }
        return null;
    };
    return ValidationService;
}());
ValidationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidationService);

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/bugs/bugs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".italic {\r\n  font-style: italic;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bugs/bugs.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n  <h2>Reporter un Bug</h2>\r\n  <h4>Pour reporter un bug ou proposer une amélioration, suivez la démarche suivante :</h4>\r\n  <ul>\r\n    <li>Cliquer sur le bouton \"Reporter un Bug\" pour ouvrir la page Issues du projet</li>\r\n    <li>Cliquer sur new Issue</li>\r\n    <li>Se connecter (Sign in) ou créer un compte (Sign up) sur le site github</li>\r\n    <li>Remplir les différents champs en décrivant le problème</li>\r\n    <li class=\"italic\">Conseil : Essayer d'être précis dans la description du bug en décrivant l'action effectuée et si possible la démarche\r\n      pour reproduire le problème</li>\r\n  </ul>\r\n  <br>\r\n  <a class=\"btn btn-primary btn-lg\" target=\"_blank\" href=\"https://github.com/guinardpaul/GPAssocies-MEAN-App/milestone/2\">Reporter un Bug</a>\r\n\r\n</div> -->\r\n\r\n\r\n<!-- ============================================= -->\r\n<!-- NOT USED -->\r\n<!-- ============================================= -->\r\n<div class=\"container-fluid\">\r\n  <h4 style=\"text-align: center;\">Bugs</h4>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Statut</th>\r\n        <th>Date création</th>\r\n        <th>Description</th>\r\n        <th>Criticité</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let b of listBugs | orderByDate: 'date_creation'\">\r\n        <td>{{b.status_correction}}</td>\r\n        <td>{{b.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{b.description}}</td>\r\n        <td>{{b.criticite}}</td>\r\n        <td>\r\n          <div class=\"btn-group-vertical\">\r\n            <button class=\"btn btn-success\" (click)=\"onUpdateBug(b)\">Modifier</button>\r\n            <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getBugToDelete(b)\">Supprimer</button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-primary\" (click)=\"onAdd()\">Ajouter Bug</button>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!-- Confirm delete Modal -->\r\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Etes-vous sûr de vouloir supprimer ce bug ?</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-danger\" (click)=\"deleteBug(bug._id)\" data-dismiss=\"modal\">Supprimer</button>\r\n          <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Add Bug form -->\r\n  <span class=\"col-sm-3\"></span>\r\n  <div class=\"container-fluid col-sm-6\" *ngIf=\"mode\">\r\n\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <h4>Création Bug</h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"bugForm\" (submit)=\"addBug()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{bug.date_creation}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"description\">Description :</label>\r\n            <textarea type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" formControlName=\"description\" value=\"{{bug.description}}\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"criticite\">Criticité :</label>\r\n            <select class=\"form-control\" name=\"criticite\" id=\"criticite\" formControlName=\"criticite\" required>\r\n              <option value=\"\">Criticité</option>\r\n              <option *ngFor=\"let key of keys\" [value]=\"key\">{{criticite[key]}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button [disabled]=\"!bugForm.valid || processing\" type=\"submit\" class=\"btn btn-success\">Ajouter Bug</button>\r\n            <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Update Bug form -->\r\n\r\n  <div class=\"container-fluid col-sm-6\" *ngIf=\"modeUpdate\">\r\n\r\n    <div class=\"panel panel-warning \">\r\n      <div class=\"panel-heading\">\r\n        <h4>Modification Bug</h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"bugFormUpdate\" (submit)=\"updateBug()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"status_correction\">Statut :</label>\r\n            <select class=\"form-control\" name=\"status_correction\" id=\"status_correction\" formControlName=\"status_correction\" required>\r\n              <option *ngFor=\"let number of numbers\" ([value])=\"number\">{{status_correction[number]}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{bug.date_creation}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"description\">Description :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" formControlName=\"description\" value=\"{{bug.description}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"criticite\">Criticité :</label>\r\n            <select class=\"form-control\" name=\"criticite\" id=\"criticite\" formControlName=\"criticite\" required>\r\n              <option *ngFor=\"let key of keys\" ([value])=\"key\">{{criticite[key]}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button [disabled]=\"!bugFormUpdate.valid || processing\" type=\"submit\" class=\"btn btn-warning\">Modifier Bug</button>\r\n            <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <span class=\"col-sm-3\"></span>"

/***/ }),

/***/ "../../../../../src/app/components/bugs/bugs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BugsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_bugs_service__ = __webpack_require__("../../../../../src/app/service/bugs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_bug__ = __webpack_require__("../../../../../src/app/models/bug.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_criticite_enum__ = __webpack_require__("../../../../../src/app/models/criticite.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_status_bug_enum__ = __webpack_require__("../../../../../src/app/models/status-bug.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Service


// Model



/**
 *
 * @author Paul GUINARD
 * @export
 * @class BugsComponent
 * @implements {OnInit}
 */
var BugsComponent = (function () {
    /**
     * Creates an instance of BugsComponent.
     * @param {BugsService} bugService bug service
     * @param {FlashMessagesService} flashMessages Angular flash message service
     * @param {FormBuilder} formBuilder reactive forms builder
     * @param {DatePipe} datePipe format date
     * @memberof BugsComponent
     */
    function BugsComponent(bugService, flashMessages, formBuilder, datePipe) {
        this.bugService = bugService;
        this.flashMessages = flashMessages;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        /*  constructor() { }
       
         ngOnInit() {
       
         } */
        // =======================================
        // Bug component
        // NOT USED
        // Use issues report on github instead
        // =======================================
        this.listBugs = [];
        this.bug = {};
        this.status_correction = __WEBPACK_IMPORTED_MODULE_7__models_status_bug_enum__["a" /* STATUS */];
        this.criticite = __WEBPACK_IMPORTED_MODULE_6__models_criticite_enum__["a" /* CRITICITE */];
        this.mode = false;
        this.modeUpdate = false;
        this.processing = false;
        this.generateForm();
        this.generateFormUpdate();
        this.numbers = Object.keys(this.status_correction).filter(Number);
        this.keys = Object.keys(this.criticite).filter(Number);
        this.id_bug = 0;
    }
    /**
     * Get All Bugs
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.getAllBugs = function () {
        var _this = this;
        this.bugService.getAllBugs()
            .subscribe(function (data) { return _this.listBugs = data; }, function (error) { return console.log('Erreur :' + error); });
    };
    /**
     * Add Bug
     * Check si this.id_bug set :
     * - si.id_bug === 0 : méthode Add
     * - si.id_bug !== 0 : méthode Update
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.addBug = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var newBug = new __WEBPACK_IMPORTED_MODULE_5__models_bug__["a" /* Bug */]({
            date_creation: this.bugForm.get('date_creation').value,
            criticite: this.criticite[this.bugForm.get('criticite').value],
            description: this.bugForm.get('description').value
        });
        console.log(newBug);
        this.bugService.addBug(newBug)
            .subscribe(function (data) {
            console.log('Bug saved');
            _this.flashMessages.show('Bug ajouté', {
                classes: ['alert', 'alert-success'],
                timeout: 3000
            });
            console.log(data);
            _this.onSuccess();
        }, function (err) {
            console.log('Erreur :' + err);
            _this.flashMessages.show('Erreur suppresion Bug', {
                classes: ['alert', 'alert-danger'],
                timeout: 3000
            });
            _this.enableForm();
        });
    };
    /**
     * Update Bug
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.updateBug = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var newBug = new __WEBPACK_IMPORTED_MODULE_5__models_bug__["a" /* Bug */]({
            _id: this.bug._id,
            date_creation: this.bugFormUpdate.get('date_creation').value,
            criticite: this.bugFormUpdate.get('criticite').value,
            status_correction: this.bugFormUpdate.get('status_correction').value,
            description: this.bugFormUpdate.get('description').value
        });
        console.log(newBug);
        this.bugService.updateBug(newBug)
            .subscribe(function (data) {
            console.log('Bug updated');
            _this.flashMessages.show('Bug modifié', {
                classes: ['alert', 'alert-success'],
                timeout: 3000
            });
            _this.onSuccess();
        }, function (err) {
            console.log('Erreur :' + err);
            _this.flashMessages.show('Erreur modification Bug', {
                classes: ['alert', 'alert-danger'],
                timeout: 3000
            });
            _this.enableForm();
        });
    };
    /**
     * Delete Bug
     *
     * @param {number} id bug._id
     * @memberof BugsComponent
     */
    BugsComponent.prototype.deleteBug = function (id) {
        var _this = this;
        this.bugService.deleteBug(id)
            .subscribe(function (data) {
            console.log('Bug deleted');
            _this.flashMessages.show('Bug supprimé', {
                classes: ['alert', 'alert-warning'],
                timeout: 3000
            });
            _this.onSuccess();
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Display bugForm
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.onAdd = function () {
        // Display ony one form
        this.mode = true;
        this.modeUpdate = false;
        this.generateForm();
        this.bug = {};
        this.id_bug = 0;
        var latest_date = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
        this.bugForm.get('date_creation').setValue(latest_date);
        this.bugForm.get('criticite').setValue('');
        this.bug.date_creation = latest_date;
    };
    /**
     * onUpdate => Display bugFormUpdate
     *
     * @param {Bug} bug
     * @memberof BugsComponent
     */
    BugsComponent.prototype.onUpdateBug = function (bug) {
        // Display only one form
        this.mode = false;
        this.modeUpdate = true;
        // Set bug value
        this.generateFormUpdate();
        this.id_bug = bug._id;
        this.bug = bug;
        var latest_date = this.datePipe.transform(this.bug.date_creation, 'yyyy-MM-dd');
        this.bug.date_creation = latest_date;
        // TODO: set valeur select option input
        this.bugFormUpdate.get('description').setValue(bug.description);
        this.bugFormUpdate.get('date_creation').setValue(bug.date_creation);
        this.bugFormUpdate.get('criticite').setValue(bug.criticite);
        this.bugFormUpdate.get('status_correction').setValue(bug.status_correction);
    };
    BugsComponent.prototype.getBugToDelete = function (bug) {
        this.bug = bug;
    };
    BugsComponent.prototype.closeModal = function () {
        this.bug = {};
    };
    /**
     * onSuccess method
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.onSuccess = function () {
        this.generateForm();
        this.generateFormUpdate();
        this.id_bug = 0;
        this.mode = false;
        this.modeUpdate = false;
        this.processing = false;
        this.getAllBugs();
    };
    /**
     * Cancel Bug Forms
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.onCancel = function () {
        this.generateForm();
        this.generateFormUpdate();
        this.id_bug = 0;
        this.mode = false;
        this.modeUpdate = false;
        this.processing = false;
        this.bug = {};
    };
    /**
     * Generate reactive bug form
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.generateForm = function () {
        this.bugForm = this.formBuilder.group({
            date_creation: [this.bug.date_creation],
            description: [this.bug.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            criticite: [this.bug.criticite, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
    };
    BugsComponent.prototype.generateFormUpdate = function () {
        this.bugFormUpdate = this.formBuilder.group({
            status_correction: [this.bug.status_correction, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            date_creation: [this.bug.date_creation],
            description: [this.bug.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            criticite: [this.bug.criticite, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
    };
    /**
     * Enable controls
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.enableForm = function () {
        this.bugForm.enable();
        this.bugFormUpdate.enable();
    };
    /**
     * Disable controls
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.disableForm = function () {
        this.bugForm.disable();
        this.bugFormUpdate.disable();
    };
    /**
     * onInit:
     * - Get All Bugs
     *
     * @memberof BugsComponent
     */
    BugsComponent.prototype.ngOnInit = function () {
        this.getAllBugs();
    };
    return BugsComponent;
}());
BugsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bugs',
        template: __webpack_require__("../../../../../src/app/components/bugs/bugs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bugs/bugs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_bugs_service__["a" /* BugsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_bugs_service__["a" /* BugsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]) === "function" && _d || Object])
], BugsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=bugs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer{\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <table class=\"table table-responsive table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Statut</th>\r\n                <th>N° affaire</th>\r\n                <th>Nom</th>\r\n                <th>Prénom</th>\r\n                <th>Adresse Facturation</th>\r\n                <th>Adresse Chantier</th>\r\n                <th>Email</th>\r\n                <th>Tél</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let client of listClient | sortNumber: 'affaire'\">\r\n                <td *ngIf=\"client.status_client\">\r\n                    <img src=\"{{status_true}}\" alt=\"true\">\r\n                </td>\r\n                <td *ngIf=\"!client.status_client\">\r\n                    <img src=\"{{status_false}}\" alt=\"false\">\r\n                </td>\r\n                <td>{{client.affaire}}</td>\r\n                <td>{{client.nom}}</td>\r\n                <td>{{client.prenom}}</td>\r\n                <td>{{client.adresseFact}} {{client.complAdresseFact}}\r\n                    <br/> {{client.cpFact}} {{client.villeFact}}</td>\r\n                <td>{{client.adresseChantier}} {{client.complAdresseChantier}}\r\n                    <br/> {{client.cpChantier}} {{client.villeChantier}}</td>\r\n                <td>{{client.email}}</td>\r\n                <td>{{client.numTel}}</td>\r\n                <td>\r\n                    <div class=\"btn-group-vertical\">\r\n                        <a class=\"btn btn-success\" [routerLink]=\"['/devis/client', client._id]\">Consulter</a>\r\n                        <button class=\"btn btn-warning\" (click)=\"onUpdate(client)\">Modifier</button>\r\n                        <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getClientToDelete(client)\">Supprimer</button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <button class=\"btn btn-primary\" (click)=\"onAdd()\">Ajouter client</button>\r\n</div>\r\n<br/>\r\n\r\n<!-- Confirm delete Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Etes-vous sûr de vouloir supprimer {{client.nom}} {{client.prenom}} ?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-danger\" (click)=\"onDelete(client._id)\" data-dismiss=\"modal\">Supprimer</button>\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Add/Update Client form -->\r\n<div class=\"container\" *ngIf=\"mode\">\r\n    <div class=\"panel-group\">\r\n\r\n        <form class=\"form-horizontal\" [formGroup]=\"clientForm\" (submit)=\"addClient()\">\r\n            <div class=\"panel-info col-sm-4\">\r\n                <div class=\"panel-heading\">\r\n                    Client\r\n                    <select class=\"form-control\" name=\"clients\" id=\"clients\" [ngModel]=\"selectedClient\" [ngModelOptions]=\"{standalone: true}\"\r\n                        (ngModelChange)=\"loadClient($event)\">\r\n                        <option>Ajouter une affaire à un client existant</option>\r\n                        <option *ngFor=\"let c of listClient\" [ngValue]=\"c\">{{c.nom}} {{c.prenom}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"numAffaire\">Numéro affaire :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"numAffaire\" id=\"numAffaire\" formControlName=\"affaire\" (blur)=\"verifNumAffaire()\"\r\n                            autofocus required>\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.affaire.errors?.required && clientForm.controls.affaire.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validNumAffaire\">\r\n                                Le N° d'affaire est déjà utilisé\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"civilite\">Civilité :</label>\r\n                        <select class=\"form-control\" name=\"civilite\" id=\"civilite\" formControlName=\"civilite\">\r\n                            <option>Civilité...</option>\r\n                            <option *ngFor=\"let key of keys\" ([ngValue])=\"key\">{{civiliteEnum[key]}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (clientForm.controls.nom.errors && clientForm.controls.nom.dirty),\r\n              'has-success': (!clientForm.controls.nom.errors)}\">\r\n                        <label for=\"nom\">Nom :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"nom\" value=\"{{client.nom}}\" id=\"nom\" formControlName=\"nom\" required />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.nom.errors?.required && clientForm.controls.nom.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.nom.errors?.nomPrenomValidation && clientForm.controls.nom.dirty\r\n                && !clientForm.controls.nom.errors?.required\">\r\n                                Le nom doit être composé uniquement de lettres\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (clientForm.controls.prenom.errors && clientForm.controls.prenom.dirty),\r\n          'has-success': (!clientForm.controls.prenom.errors)}\">\r\n                        <label for=\"prenom\">Prénom :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"prenom\" value=\"{{client.prenom}}\" id=\"prenom\" formControlName=\"prenom\" required\r\n                        />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.prenom.errors?.required && clientForm.controls.prenom.dirty\">Ce champ est requis</li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.prenom.errors?.nomPrenomValidation && clientForm.controls.prenom.dirty\r\n            && !clientForm.controls.prenom.errors?.required\">\r\n                                Le prénom doit être composé uniquement de lettres\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (clientForm.controls.email.errors && clientForm.controls.email.dirty),\r\n      'has-success': (!clientForm.controls.email.errors)}\">\r\n                        <label for=\"email\">Email :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"email\" value=\"{{client.email}}\" id=\"email\" formControlName=\"email\" required\r\n                        />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.email.errors?.required && clientForm.controls.email.dirty\">Ce champ est requis</li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.email.errors?.emailValidation && clientForm.controls.email.dirty\r\n        && !clientForm.controls.email.errors?.required\">\r\n                                L'email n'est pas valide\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (clientForm.controls.numTel.errors && clientForm.controls.numTel.dirty), 'has-success': (!clientForm.controls.numTel.errors)}\">\r\n                        <label for=\"numTel\">Tél :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"numTel\" value=\"{{client.numTel}}\" id=\"numTel\" formControlName=\"numTel\" />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.numTel.errors?.numTelValidation && clientForm.controls.numTel.dirty\">Le tel doit être composé de chiffre, '-' ou '.'</li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.numTel.errors?.minlength && clientForm.controls.numTel.dirty\r\n      && !clientForm.controls.numTel.errors?.numTelValidation\">\r\n                                Le tel doit être composé de 10 chiffres\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                        <button [disabled]=\"!clientForm.valid || processing || validNumAffaire\" type=\"submit\" class=\"btn btn-success\">Sauver</button>\r\n                        <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-info col-sm-4\">\r\n                <div class=\"panel-heading\">Adresse Facturation</div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"adresseFact\">Adresse :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"adresseFact\" value=\"{{client.adresseFact}}\" id=\"adresseFact\" formControlName=\"adresseFact\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"complAdresseFact\">Complément adresse :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"complAdresseFact\" value=\"{{client.complAdresseFact}}\" id=\"complAdresseFact\"\r\n                            formControlName=\"complAdresseFact\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cpFact\">Code postal :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"cpFact\" value=\"{{client.cpFact}}\" id=\"cpFact\" formControlName=\"cpFact\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"villeFact\">Ville :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"villeFact\" value=\"{{client.villeFact}}\" id=\"villeFact\" formControlName=\"villeFact\"\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-info col-sm-4\">\r\n                <div class=\"panel-heading\">Adresse Chantier</div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"adresseChantier\">Adresse :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"adresseChantier\" value=\"{{client.adresseChantier}}\" id=\"adresseChantier\" formControlName=\"adresseChantier\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"complAdresseChantier\">Complément adresse :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"complAdresseChantier\" value=\"{{client.complAdresseChantier}}\" id=\"complAdresseChantier\"\r\n                            formControlName=\"complAdresseChantier\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cpChantier\">Code postal :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"cpChantier\" value=\"{{client.cpChantier}}\" id=\"cpChantier\" formControlName=\"cpChantier\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"villeChantier\">Ville :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"villeChantier\" value=\"{{client.villeChantier}}\" id=\"villeChantier\" formControlName=\"villeChantier\"\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_civilite_enum__ = __webpack_require__("../../../../../src/app/models/civilite.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Models


// Services



/**
 *
 * @author Paul GUINARD
 * @export ClientComponent
 * @class ClientComponent
 * @implements {OnInit}
 */
var ClientComponent = (function () {
    /**
     * Creates an instance of ClientComponent.
     *
     * @param {ClientService} clientService client service
     * @param {DevisService} devisService devis service
     * @param {FormBuilder} formBuilder Reactive forms builder
     * @param {FlashMessagesService} flashMessages Angular flash messages
     * @memberof ClientComponent
     */
    function ClientComponent(clientService, devisService, formBuilder, flashMessages) {
        this.clientService = clientService;
        this.devisService = devisService;
        this.formBuilder = formBuilder;
        this.flashMessages = flashMessages;
        /**
         * client
         *
         * @type {*}
         * @memberof ClientComponent
         */
        this.client = {};
        /**
         * id client
         *
         * @type {number}
         * @memberof ClientComponent
         */
        this.client_id = null;
        /**
         * enum CIVILITE
         *
         * @memberof ClientComponent
         */
        this.civiliteEnum = __WEBPACK_IMPORTED_MODULE_3__models_civilite_enum__["a" /* CIVILITE */];
        /**
         * mode form
         *
         * @memberof ClientComponent
         */
        this.mode = false;
        /**
         * on process
         *
         * @memberof ClientComponent
         */
        this.processing = false;
        /**
         * Used for select client options
         *
         * @memberof ClientComponent
         */
        this.selectedClient = 'Ajouter une affaire à un client existant' || new __WEBPACK_IMPORTED_MODULE_2__models_client__["a" /* Client */]();
        // Status images
        /**
         * image status true
         *
         * @memberof ClientComponent
         */
        this.status_true = '../../assets/images/status_true.png';
        /**
         * image status false
         *
         * @memberof ClientComponent
         */
        this.status_false = '../../assets/images/status_false.png';
        this.generateForm();
        this.keys = Object.keys(this.civiliteEnum).filter(Number);
        this.validNumAffaire = false;
    }
    /**
     * Get All Clients to display in table.
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.getAllClients = function () {
        var _this = this;
        this.clientService.getAllClients()
            .subscribe(function (data) {
            _this.listClient = data;
        }, function (error) { return console.log(error); });
    };
    /**
     * Get One Client.
       * Method not used.
     *
     * @param {number} id client._id
     * @memberof ClientComponent
     */
    ClientComponent.prototype.getOneClient = function (id) {
        var _this = this;
        this.clientService.getOneClient(id)
            .subscribe(function (client) { return _this.client = client; }, function (error) { return console.log('Erreur ' + error); });
    };
    /**
    * ADD/UPDATE Client.
    * - Si this.client._id exists : updateClient().
    * - Si this.client._id == null || 0 : addClient().
    *
    * @memberof ClientComponent
    */
    ClientComponent.prototype.addClient = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        this.client = this.clientForm.value;
        this.client._id = this.client_id;
        this.client.civilite = this.clientForm.get('civilite').value;
        // Check method to use 
        if (this.client_id === null || this.client_id === 0) {
            this.clientService.addClient(this.client)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.flashMessages.show(data.message, {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    _this.processing = false;
                    _this.enableForm();
                }
                else {
                    _this.flashMessages.show(data.message, {
                        classes: ['alert', 'alert-success'],
                        timeout: 3000
                    });
                    _this.onSuccess();
                }
            }, function (err) {
                _this.flashMessages.show('Erreur : Client non sauvé', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                console.log(err);
                _this.enableForm();
                _this.processing = false;
            });
        }
        else {
            this.clientService.updateClient(this.client)
                .subscribe(function (data) {
                if (data.success) {
                    _this.flashMessages.show('Client mis à jour', {
                        classes: ['alert', 'alert-success'],
                        timeout: 3000
                    });
                    _this.onSuccess();
                }
                else {
                    _this.flashMessages.show('Erreur : Client non modifié', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    console.log('Erreur update client :' + data);
                    _this.processing = false;
                    _this.enableForm();
                }
            }, function (err) {
                _this.flashMessages.show('Erreur : Client non modifié', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                console.log(err);
                _this.processing = false;
                _this.enableForm();
            });
        }
    };
    /**
     * Delete client si Ne possède pas de Devis
     *
     * @param {number} id client._id
     * @memberof ClientComponent
     */
    ClientComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.devisService.getAllDevisByClient(id)
            .subscribe(function (data) {
            if (data.length === 0) {
                _this.clientService.deleteClient(id)
                    .subscribe(function () {
                    _this.flashMessages.show('Client supprimé', {
                        classes: ['alert', 'alert-warning'],
                        timeout: 3000
                    });
                    _this.client = {};
                    _this.getAllClients();
                }, function (error) {
                    _this.client = {};
                    console.log(error);
                    _this.flashMessages.show('Erreur: Client non supprimé', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                });
            }
            else {
                _this.client = {};
                _this.flashMessages.show('Suppression impossible ! le client est associé à des devis', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Set client to delete on confirm
     *
     * @param {Client} client client body
     * @memberof ClientComponent
     */
    ClientComponent.prototype.getClientToDelete = function (client) {
        this.client = client;
    };
    /**
     * on close modal
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.closeModal = function () {
        this.client = {};
        this.client_id = null;
    };
    /**
     * Success function called when request to api successfull.
       * Fetch data from database to update table.
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.onSuccess = function () {
        this.generateForm();
        this.processing = false;
        this.enableForm();
        this.mode = false;
        this.client = {};
        this.client_id = null;
        this.getAllClients();
    };
    /**
     * Display clientForm
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.onAdd = function () {
        this.mode = true;
        this.client_id = null;
        this.client = {};
    };
    /**
     * Display clientForm and set values to be updated
     *
     * @param {Client} client client body
     * @memberof ClientComponent
     */
    ClientComponent.prototype.onUpdate = function (client) {
        // Set this.client values (fecth _id)
        this.client = client;
        this.client_id = client._id;
        // Set clientForm values
        this.clientForm.get('affaire').setValue(client.affaire);
        this.clientForm.get('civilite').setValue(client.civilite);
        this.clientForm.get('nom').setValue(client.nom);
        this.clientForm.get('prenom').setValue(client.prenom);
        this.clientForm.get('email').setValue(client.email);
        this.clientForm.get('numTel').setValue(client.numTel);
        this.clientForm.get('adresseFact').setValue(client.adresseFact);
        this.clientForm.get('complAdresseFact').setValue(client.complAdresseFact);
        this.clientForm.get('cpFact').setValue(client.cpFact);
        this.clientForm.get('villeFact').setValue(client.villeFact);
        this.clientForm.get('adresseChantier').setValue(client.adresseChantier);
        this.clientForm.get('complAdresseChantier').setValue(client.complAdresseChantier);
        this.clientForm.get('cpChantier').setValue(client.cpChantier);
        this.clientForm.get('villeChantier').setValue(client.villeChantier);
        client = null;
        this.mode = true;
    };
    /**
     * Cancel button
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.onCancel = function () {
        this.mode = false;
        this.client_id = null;
        this.client = {};
        this.generateForm();
    };
    /**
     * Form Generator
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.generateForm = function () {
        this.clientForm = this.formBuilder.group({
            affaire: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required
                ])],
            civilite: '',
            nom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    this.nomPrenomValidation
                ])],
            prenom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    this.nomPrenomValidation
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                    this.emailValidation
                ])],
            numTel: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([
                    this.numTelValidation,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(10)
                ])],
            adresseFact: '',
            complAdresseFact: '',
            cpFact: '',
            villeFact: '',
            adresseChantier: '',
            complAdresseChantier: '',
            cpChantier: '',
            villeChantier: '',
        });
    };
    Object.defineProperty(ClientComponent.prototype, "affaire", {
        get: function () { return this.clientForm.get('affaire').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "civilite", {
        get: function () { return this.clientForm.get('civilite').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "nom", {
        get: function () { return this.clientForm.get('nom').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "prenom", {
        get: function () { return this.clientForm.get('prenom').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "email", {
        get: function () { return this.clientForm.get('email').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "numTel", {
        get: function () { return this.clientForm.get('numTel').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "adresseFact", {
        get: function () { return this.clientForm.get('adresseFact').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "complAdresseFact", {
        get: function () { return this.clientForm.get('complAdresseFact').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "cpFact", {
        get: function () { return this.clientForm.get('cpFact').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "villeFact", {
        get: function () { return this.clientForm.get('villeFact').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "adresseChantier", {
        get: function () { return this.clientForm.get('adresseChantier').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "complAdresseChantier", {
        get: function () { return this.clientForm.get('complAdresseChantier').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "cpChantier", {
        get: function () { return this.clientForm.get('cpChantier').value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientComponent.prototype, "villeChantier", {
        get: function () { return this.clientForm.get('villeChantier').value; },
        enumerable: true,
        configurable: true
    });
    /**
     * enable form
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.enableForm = function () {
        this.clientForm.enable();
    };
    /**
     * disable form
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.disableForm = function () {
        this.clientForm.disable();
    };
    // Input Validation
    /**
     * nom et prenom validation using RegExp
     *
     * @param {any} controls
     * @returns
     * @memberof ClientComponent
     */
    ClientComponent.prototype.nomPrenomValidation = function (controls) {
        var regExp = new RegExp(/[a-zA-z-_éè]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        return {
            nomPrenomValidation: true
        };
    };
    /**
     * email validation using RegExp
     *
     * @param {any} controls
     * @returns
     * @memberof ClientComponent
     */
    ClientComponent.prototype.emailValidation = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        return {
            emailValidation: true
        };
    };
    /**
     * num tel validation using RegExp
     *
     * @param {any} controls
     * @returns
     * @memberof ClientComponent
     */
    ClientComponent.prototype.numTelValidation = function (controls) {
        var regExp = new RegExp(/[0-9-_.]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        return {
            numTelValidation: true
        };
    };
    ClientComponent.prototype.verifNumAffaire = function () {
        var _this = this;
        this.validNumAffaire = false;
        if (this.clientForm.get('affaire').value !== '') {
            this.clientService.verifUniciteNumAffaire(this.clientForm.get('affaire').value)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.validNumAffaire = true;
                }
            }, function (err) { return console.log(err); });
        }
    };
    ClientComponent.prototype.loadClient = function (client) {
        this.clientForm.get('civilite').setValue(client.civilite);
        this.clientForm.get('nom').setValue(client.nom);
        this.clientForm.get('prenom').setValue(client.prenom);
        this.clientForm.get('email').setValue(client.email);
        this.clientForm.get('numTel').setValue(client.numTel);
        this.clientForm.get('adresseFact').setValue(client.adresseFact);
        this.clientForm.get('complAdresseFact').setValue(client.complAdresseFact);
        this.clientForm.get('cpFact').setValue(client.cpFact);
        this.clientForm.get('villeFact').setValue(client.villeFact);
        this.clientForm.get('adresseChantier').setValue(client.adresseChantier);
        this.clientForm.get('complAdresseChantier').setValue(client.complAdresseChantier);
        this.clientForm.get('cpChantier').setValue(client.cpChantier);
        this.clientForm.get('villeChantier').setValue(client.villeChantier);
    };
    /**
     * Fetch All Clients from database
     *
     * @memberof ClientComponent
     */
    ClientComponent.prototype.ngOnInit = function () {
        this.getAllClients();
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client',
        template: __webpack_require__("../../../../../src/app/components/client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client/client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__service_devis_service__["a" /* DevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_devis_service__["a" /* DevisService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _d || Object])
], ClientComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rowColor {\r\n  color: coral;\r\n};", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"annulerSelection()\">Voir tous les clients</button>\r\n<div class=\"checkbox\">\r\n  <label>\r\n    <input type=\"checkbox\" value=\"{{historique}}\" [(ngModel)]=\"historique\" (click)=\"updateCheckedOptions()\"> Afficher l'historique des données\r\n  </label>\r\n</div>\r\n<br>\r\n<div class=\"container-fluid col-sm-6 col-md-6\">\r\n  <h4 style=\"text-align: center;\">Client</h4>\r\n  <!-- Client table -->\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Statut</th>\r\n        <th>Nom</th>\r\n        <th>Prénom</th>\r\n        <th>Email</th>\r\n        <th>Tél</th>\r\n        <th>Sélection</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let client of listClient\" [ngClass]=\"{'rowColor' : selectedClient._id === client._id}\">\r\n        <td *ngIf=\"client.status_client\">\r\n          <img src=\"{{status_true}}\" alt=\"true\">\r\n        </td>\r\n        <td *ngIf=\"!client.status_client\">\r\n          <img src=\"{{status_false}}\" alt=\"false\">\r\n        </td>\r\n        <td>{{client.nom}}</td>\r\n        <td>{{client.prenom}}</td>\r\n        <td>{{client.email}}</td>\r\n        <td>{{client.numTel}}</td>\r\n        <td>\r\n          <div class=\"btn-group-vertical\">\r\n            <a class=\"btn btn-success\" (click)=\"onSelect(client)\">Selectionnez</a>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <br>\r\n\r\n  <!-- Facture global table -->\r\n  <div class=\"container-fluid\">\r\n    <h4 style=\"text-align: center;\">Factures</h4>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>Statut</th>\r\n          <th>Ref</th>\r\n          <th>Date</th>\r\n          <th>Montant total TTC</th>\r\n          <th>Montant facturé TTC</th>\r\n          <th>Montant réglé</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let fg of listFactureGlobal\">\r\n          <td *ngIf=\"fg.status_factureGlobal\">\r\n            <img src=\"{{status_true}}\" alt=\"true\">\r\n          </td>\r\n          <td *ngIf=\"!fg.status_factureGlobal\">\r\n            <img src=\"{{status_false}}\" alt=\"false\">\r\n          </td>\r\n          <td>{{fg.ref_factureGlobal}}</td>\r\n          <td>{{fg.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n          <td>{{fg.montantTtcTotal}}</td>\r\n          <td>{{fg.montantTtcFacture}}</td>\r\n          <td>{{fg.montantTtcRegle}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!-- Devis table -->\r\n<div class=\"container-fluid col-sm-6 col-md-6\">\r\n  <h4 style=\"text-align: center;\">Devis</h4>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Ref</th>\r\n        <th>Date</th>\r\n        <th>Montant HT</th>\r\n        <th>Taux TVA €</th>\r\n        <th>Montant TTC</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let d of listDevis\">\r\n        <td>{{d.ref_devis}}</td>\r\n        <td>{{d.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{d.montantHt}}</td>\r\n        <td>{{d.tauxTva}}</td>\r\n        <td>{{d.montantTtc}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n  <!-- Facture accompte table -->\r\n  <div class=\"container-fluid\">\r\n    <h4 style=\"text-align: center;\">Factures d'accompte</h4>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>Statut</th>\r\n          <th>Ref</th>\r\n          <th>Date</th>\r\n          <th>Montant facturé TTC</th>\r\n          <th>Règlement client TTC</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let f of listFactureAccompte\">\r\n          <td *ngIf=\"f.status_factureAccompte\">\r\n            <img src=\"{{status_true}}\" alt=\"true\">\r\n          </td>\r\n          <td *ngIf=\"!f.status_factureAccompte\">\r\n            <img src=\"{{status_false}}\" alt=\"false\">\r\n          </td>\r\n          <td>{{f.ref_factureAccompte}}</td>\r\n          <td>{{f.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n          <td>{{f.montantFacture}}</td>\r\n          <td>{{f.reglementClient}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!-- Charts -->\r\n<!-- PieChart -->\r\n<!-- TODO: Afficher que si data, message 'no data to display' sinon -->\r\n<div *ngIf=\"pieChartData !== [0,0,0]\" style=\"display: block\">\r\n  <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\"\r\n    (chartClick)=\"chartClicked($event)\"></canvas>\r\n</div>\r\n\r\n<!-- LineChart -->\r\n<div style=\"display: block;\">\r\n  <canvas baseChart width=\"400\" height=\"400\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\"\r\n    [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_facture_accompte_service__ = __webpack_require__("../../../../../src/app/service/facture-accompte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Models

// Services




/**
 *
 * @author Paul GUINARD
 * @export DashboardComponent
 * @class DashboardComponent
 * @implements {OnInit}
 */
var DashboardComponent = (function () {
    /**
     * Creates an instance of DashboardComponent.
     * @param {ClientService} clientService client service
     * @param {DevisService} devisService devis service
     * @param {FactureGlobalService} factureGlobalService facture global service
     * @param {FactureAccompteService} factureAccompteService facture accompte service
     * @memberof DashboardComponent
     */
    function DashboardComponent(clientService, devisService, factureGlobalService, factureAccompteService) {
        this.clientService = clientService;
        this.devisService = devisService;
        this.factureGlobalService = factureGlobalService;
        this.factureAccompteService = factureAccompteService;
        /**
        * Liste clients
        *
        * @type {Client[]}
        * @memberof DashboardComponent
        */
        this.listClient = [];
        /**
         * Liste Devis
         *
         * @type {Devis[]}
         * @memberof DashboardComponent
         */
        this.listDevis = [];
        /**
         * Liste Factures Global
         *
         * @type {FactureGlobal[]}
         * @memberof DashboardComponent
         */
        this.listFactureGlobal = [];
        /**
         * Liste Factures Accompte
         *
         * @type {FactureAccompte[]}
         * @memberof DashboardComponent
         */
        this.listFactureAccompte = [];
        /**
         * current selected client
         *
         * @type {Client}
         * @memberof DashboardComponent
         */
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */]();
        /**
         * historique actif
         *
         * @memberof DashboardComponent
         */
        this.historique = false;
        // Status images
        /**
         * image status true
         *
         * @memberof ClientComponent
         */
        this.status_true = '../../assets/images/status_true.png';
        /**
         * image status false
         *
         * @memberof ClientComponent
         */
        this.status_false = '../../assets/images/status_false.png';
        // ===================================
        // TEST ng2-charts
        this.pieChartLabels = ['Montant Total TTC', 'Montant Facturé TTC', 'Montant Réglé TTC'];
        this.montantTotalTTC = 0;
        this.montantFactureTTC = 0;
        this.montantRegleTTC = 0;
        this.pieChartData = [this.montantTotalTTC, this.montantFactureTTC, this.montantRegleTTC];
        this.pieChartType = 'pie';
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40, 51, 21, 51, 61], label: 'Montant Total TTC' },
            { data: [28, 48, 40, 19, 86, 27, 90, 51, 21, 51, 61], label: 'Montant Facturé TTC' },
            { data: [18, 48, 77, 9, 100, 27, 40, 51, 21, 51, 61], label: 'Montant Réglé TTC' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aout', 'Septembre', 'Novembre', 'Décembre'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    /**
     * on Select client
     * reload data
     *
     * @param {Client} client
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.onSelect = function (client) {
        this.activeClient = true;
        this.selectedClient = client;
        this.loadData();
    };
    /**
     * Cancel select client
     * reLoad data
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.annulerSelection = function () {
        this.activeClient = false;
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */]();
        this.loadData();
    };
    /**
     * Get All Client
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllClients = function () {
        var _this = this;
        this.clientService.getAllClients()
            .subscribe(function (data) { return _this.listClient = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get All Devis
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllDevis = function () {
        var _this = this;
        this.listDevis = [];
        this.devisService.getAllDevis()
            .subscribe(function (data) { return _this.listDevis = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
   * Get All Valid Devis
   *
   * @memberof DashboardComponent
   */
    DashboardComponent.prototype.getAllValidDevis = function () {
        var _this = this;
        this.listDevis = [];
        this.devisService.getAllDevis()
            .subscribe(function (data) {
            for (var d in data) {
                if (data.hasOwnProperty(d)) {
                    if (data[d].valid) {
                        _this.listDevis.push(data[d]);
                    }
                }
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get All Devis by Client
     *
     * @param {number} id client._id
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getDevisByClient = function (id) {
        var _this = this;
        this.listDevis = [];
        this.devisService.getAllDevisByClient(id)
            .subscribe(function (data) { return _this.listDevis = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
   * Get All Valid Devis by Client
   *
   * @param {number} id client._id
   * @memberof DashboardComponent
   */
    DashboardComponent.prototype.getValidDevisByClient = function (id) {
        var _this = this;
        this.listDevis = [];
        this.devisService.getAllDevisByClient(id)
            .subscribe(function (data) {
            for (var d in data) {
                if (data.hasOwnProperty(d)) {
                    if (data[d].valid) {
                        _this.listDevis.push(data[d]);
                    }
                }
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get all facture global
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllFactureGlobal = function () {
        var _this = this;
        this.listFactureGlobal = [];
        this.factureGlobalService.getAllFactureGlobal()
            .subscribe(function (data) {
            console.log(data);
            _this.listFactureGlobal = data;
            for (var facture in data) {
                if (data.hasOwnProperty(facture)) {
                    console.log(data[facture].montantTtcFacture);
                    _this.montantTotalTTC += data[facture].montantTtcTotal;
                    _this.montantFactureTTC += data[facture].montantTtcFacture;
                    _this.montantRegleTTC += data[facture].montantTtcRegle;
                }
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get all valid facture global
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllValidFactureGlobal = function () {
        var _this = this;
        this.listFactureGlobal = [];
        this.factureGlobalService.getAllFactureGlobal()
            .subscribe(function (data) {
            _this.lineData(data);
            for (var f in data) {
                if (data.hasOwnProperty(f)) {
                    if (data[f].valid) {
                        _this.listFactureGlobal.push(data[f]);
                        _this.montantTotalTTC += data[f].montantTtcTotal;
                        _this.montantFactureTTC += data[f].montantTtcFacture;
                        _this.montantRegleTTC += data[f].montantTtcRegle;
                    }
                }
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get all facture global by client
     * si data.length > 0 => get all facture accompte by facture global
     *
     * @param {number} id client id
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllFactureGlobalbyClient = function (id) {
        var _this = this;
        this.listFactureGlobal = [];
        this.factureGlobalService.getAllFactureGlobalByClient(id)
            .subscribe(function (data) {
            _this.listFactureGlobal = data;
            // Set charts data
            for (var f in data) {
                if (data.hasOwnProperty(f)) {
                    _this.montantTotalTTC += data[f].montantTtcTotal;
                    _this.montantFactureTTC += data[f].montantTtcFacture;
                    _this.montantRegleTTC += data[f].montantTtcRegle;
                }
            }
            if (_this.listFactureGlobal.length > 0) {
                _this.getAllFactureAccomptebyFactureGlobal(data[0]._id);
            }
            else {
                _this.listFactureAccompte = [];
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get all valid facture global by client
     * si data.length > 0 => get all valid facture accompte by facture global
     *
     * @param {number} id client id
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllValidFactureGlobalbyClient = function (id) {
        var _this = this;
        this.listFactureGlobal = [];
        this.factureGlobalService.getAllFactureGlobalByClient(id)
            .subscribe(function (data) {
            for (var f in data) {
                if (data.hasOwnProperty(f)) {
                    if (data[f].valid) {
                        _this.listFactureGlobal.push(data[f]);
                        // Set chart data
                        _this.montantTotalTTC += data[f].montantTtcTotal;
                        _this.montantFactureTTC += data[f].montantTtcFacture;
                        _this.montantRegleTTC += data[f].montantTtcRegle;
                    }
                }
            }
            if (_this.listFactureGlobal.length > 0) {
                _this.getAllValidFactureAccomptebyFactureGlobal(_this.listFactureGlobal[0]._id);
            }
            else {
                _this.listFactureAccompte = [];
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get all facture accompte
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllFactureAccompte = function () {
        var _this = this;
        this.listFactureAccompte = [];
        this.factureAccompteService.getAllFactureAccompte()
            .subscribe(function (data) { return _this.listFactureAccompte = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get all valid facture accompte
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllValidFactureAccompte = function () {
        var _this = this;
        this.listFactureAccompte = [];
        this.factureAccompteService.getAllFactureAccompte()
            .subscribe(function (data) {
            for (var f in data) {
                if (data.hasOwnProperty(f)) {
                    if (data[f].valid) {
                        _this.listFactureAccompte.push(data[f]);
                    }
                }
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get All facture accompte by facture global
     *
     * @param {number} id facture global
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllFactureAccomptebyFactureGlobal = function (id) {
        var _this = this;
        this.listFactureAccompte = [];
        this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
            .subscribe(function (data) { return _this.listFactureAccompte = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get All Valid facture accompte by facture global
     *
     * @param {number} id facture global id
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getAllValidFactureAccomptebyFactureGlobal = function (id) {
        var _this = this;
        this.listFactureAccompte = [];
        this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
            .subscribe(function (data) {
            for (var f in data) {
                if (data.hasOwnProperty(f)) {
                    if (data[f].valid) {
                        _this.listFactureAccompte.push(data[f]);
                    }
                }
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * onClick checkbox :
     * - change historique value
     * - loadData ()
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.updateCheckedOptions = function () {
        // Change on select checkbox boolean
        this.historique = !this.historique;
        this.loadData();
    };
    /**
     * Load date en fonction des bool:
     * - activeClient
     * - historique
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.loadData = function () {
        var _this = this;
        // init charts data
        this.montantFactureTTC = 0;
        this.montantRegleTTC = 0;
        this.montantTotalTTC = 0;
        // Load data en fonction des bool activeClient & historique
        if (this.historique) {
            if (this.activeClient) {
                this.getDevisByClient(this.selectedClient._id);
                this.getAllFactureGlobalbyClient(this.selectedClient._id);
            }
            else {
                this.getAllDevis();
                this.getAllFactureGlobal();
                this.getAllFactureAccompte();
            }
        }
        else {
            if (this.activeClient) {
                this.getValidDevisByClient(this.selectedClient._id);
                this.getAllValidFactureGlobalbyClient(this.selectedClient._id);
            }
            else {
                this.getAllValidDevis();
                this.getAllValidFactureGlobal();
                this.getAllValidFactureAccompte();
            }
        }
        setTimeout(function () {
            console.log(_this.montantTotalTTC);
            _this.pieChartData = [_this.montantTotalTTC, _this.montantFactureTTC, _this.montantRegleTTC];
            console.log(_this.pieChartData);
        }, 1000);
    };
    /**
     * onInit:
     * - Get All data
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAllClients();
        this.loadData();
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // ===================================
    // lineChart
    DashboardComponent.prototype.lineData = function (factures) {
        var previousMonth = '0';
        var i = 0;
        for (var f in factures) {
            if (factures.hasOwnProperty(f)) {
                var month = String(factures[f].date_creation).split('-')[1];
                if (month === previousMonth) {
                    // push data
                }
                else {
                    previousMonth = month;
                    i++;
                }
                console.log(month);
            }
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_devis_service__["a" /* DevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_devis_service__["a" /* DevisService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_facture_accompte_service__["a" /* FactureAccompteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_facture_accompte_service__["a" /* FactureAccompteService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/devis/devis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/devis/devis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h4>{{client.nom}} {{client.prenom}}</h4>\r\n    <a class=\"btn btn-default\" [routerLink]=\"['/client']\">Retour page client</a>\r\n</div>\r\n<div class=\"container-fluid col-sm-6 col-md-6\">\r\n    <h4 style=\"text-align: center;\">Devis</h4>\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Ref</th>\r\n                <th>Date</th>\r\n                <th>Montant HT</th>\r\n                <th>Taux TVA €</th>\r\n                <th>Montant TTC</th>\r\n                <th>Client</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let d of listDevis | orderByDate: 'date_creation'\">\r\n                <td>{{d.ref_devis}}</td>\r\n                <td>{{d.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n                <td>{{d.montantHt.toFixed(2)}}</td>\r\n                <td>{{d.tauxTva.toFixed(2)}}</td>\r\n                <td>{{d.montantTtc.toFixed(2)}}</td>\r\n                <td>{{client.nom}} {{client.prenom}}</td>\r\n                <td>\r\n                    <div class=\"btn-group-vertical\">\r\n                        <a class=\"btn btn-success\" [routerLink]=\"['/devis/client/valider-devis', d._id]\">Valider</a>\r\n                        <button class=\"btn btn-warning\" (click)=\"onUpdate(d)\">Modifier</button>\r\n                        <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getDevisToDelete(d)\">Supprimer</button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"color-sum\" *ngIf=\"listDevis.length > 0\">\r\n                <th>Total</th>\r\n                <th>:</th>\r\n                <th>{{getSumMontantHt()}}</th>\r\n                <th>{{getSumTauxTva()}}</th>\r\n                <th>{{getSumMontantTtc()}}</th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <button class=\"btn btn-primary\" (click)=\"onAdd()\">Ajouter devis</button>\r\n\r\n    <br/>\r\n    <br/>\r\n\r\n    <!-- Confirm delete Modal -->\r\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <!-- Modal content-->\r\n            <form #modalForm=\"ngForm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <p>Etes-vous sûr de vouloir supprimer {{devis.ref_devis}} ?</p>\r\n                        <div *ngIf=\"historique\">\r\n                            <label for=\"descriptionModif\">Description :</label>\r\n                            <input type=\"text\" name=\"descriptionModif\" id=\"descriptionModif\" class=\"form-control\" placeholder=\"Expliquer la modification\"\r\n                                [(ngModel)]=\"descriptionModif\" required />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button class=\"btn btn-danger\" [disabled]=\"!modalForm.form.valid\" (click)=\"onDelete(devis)\" data-dismiss=\"modal\">Supprimer</button>\r\n                        <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Add/Update Devis-DetailsDevis form -->\r\n    <div class=\"container-fluid\" *ngIf=\"mode\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <h4>Devis</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\" [formGroup]=\"devisForm\" (submit)=\"addDevis()\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (devisForm.controls.ref_devis.errors && devisForm.controls.ref_devis.dirty) \r\n          || (validationRef && devisForm.controls.ref_devis.dirty),\r\n          'has-success': (!devisForm.controls.ref_devis.errors && !validationRef)}\">\r\n                        <label class=\"control-label\" for=\"ref_devis\">Ref :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"ref_devis\" id=\"ref_devis\" formControlName=\"ref_devis\" value=\"{{devis.ref_devis}}\"\r\n                            (blur)=\"verifRef()\" autofocus required />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.ref_devis.errors?.required && devisForm.controls.ref_devis.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationRef\">\r\n                                Ref déjà utilisée\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n                        <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{devis.date_creation}}\"\r\n                        />\r\n                    </div>\r\n                    <!-- =========================================================== -->\r\n                    <!-- Details Devis -->\r\n                    <div class=\"form-inline\" [ngClass]=\"{'has-error': (devisForm.controls.montantHt1.errors && devisForm.controls.montantHt1.dirty),\r\n          'has-success': (!devisForm.controls.montantHt1.errors)}\">\r\n                        <span>\r\n                            <h4>Détails devis</h4>\r\n                        </span>\r\n                        <br/>\r\n                        <label class=\"control-label\" for=\"montantHt1\">Montant HT :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantHt1\" id=\"montantHt1\" formControlName=\"montantHt1\" value=\"{{detailsDevis1.montantHt}}\"\r\n                            (blur)=\"calculMontant1()\" (blur)=\"calculMontantHt()\" (blur)=\"calculTauxTva()\" (blur)=\"calculMontantTtc()\"\r\n                            size=\"8\" required />\r\n                        <label class=\"control-label\" for=\"tauxTva1\">Taux TVA (%) :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"tauxTva1\" id=\"tauxTva1\" formControlName=\"tauxTva1\" value=\"{{detailsDevis1.tauxTva}}\"\r\n                            size=\"8\" required />\r\n                        <label class=\"control-label\" for=\"montantTtc1\">Montant TTC :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantTtc1\" id=\"montantTtc1\" formControlName=\"montantTtc1\" value=\"{{detailsDevis1.montantTtc}}\"\r\n                            size=\"8\" />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt1.errors?.required && devisForm.controls.montantHt1.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt1.errors?.isNumber && devisForm.controls.montantHt1.dirty && !devisForm.controls.montantHt1.errors?.required\">\r\n                                Le montant doit être positif et doit posséder au maximum 4 chiffres après la virgule\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <br/>\r\n                    <div class=\"form-inline\" [ngClass]=\"{'has-error': (devisForm.controls.montantHt2.errors && devisForm.controls.montantHt2.dirty),\r\n          'has-success': (!devisForm.controls.montantHt2.errors)}\">\r\n                        <label class=\"control-label\" for=\"montantHt2\">Montant HT :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantHt2\" id=\"montantHt2\" formControlName=\"montantHt2\" value=\"{{detailsDevis2.montantHt}}\"\r\n                            (blur)=\"calculMontant2()\" (blur)=\"calculMontantHt()\" (blur)=\"calculTauxTva()\" (blur)=\"calculMontantTtc()\"\r\n                            size=\"8\" required />\r\n                        <label class=\"control-label\" for=\"tauxTva2\">Taux TVA (%) :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"tauxTva2\" id=\"tauxTva2\" formControlName=\"tauxTva2\" value=\"{{detailsDevis2.tauxTva}}\"\r\n                            size=\"8\" required />\r\n                        <label class=\"control-label\" for=\"montantTtc2\">Montant TTC :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantTtc2\" id=\"montantTtc2\" formControlName=\"montantTtc2\" value=\"{{detailsDevis2.montantTtc}}\"\r\n                            size=\"8\" />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt2.errors?.required && devisForm.controls.montantHt2.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt2.errors?.isNumber && devisForm.controls.montantHt2.dirty && !devisForm.controls.montantHt2.errors?.required\">\r\n                                Ce n'est pas un nombre\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <br/>\r\n                    <div class=\"form-inline\" [ngClass]=\"{'has-error': (devisForm.controls.montantHt3.errors && devisForm.controls.montantHt3.dirty),\r\n          'has-success': (!devisForm.controls.montantHt3.errors)}\">\r\n                        <label class=\"control-label\" for=\"montantHt3\">Montant HT :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantHt3\" id=\"montantHt3\" formControlName=\"montantHt3\" value=\"{{detailsDevis3.montantHt}}\"\r\n                            (blur)=\"calculMontant3()\" (blur)=\"calculMontantHt()\" (blur)=\"calculTauxTva()\" (blur)=\"calculMontantTtc()\"\r\n                            size=\"8\" required />\r\n                        <label class=\"control-label\" for=\"tauxTva3\">Taux TVA (%) :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"tauxTva3\" id=\"tauxTva3\" formControlName=\"tauxTva3\" value=\"{{detailsDevis3.tauxTva}}\"\r\n                            size=\"8\" required />\r\n                        <label class=\"control-label\" for=\"montantTtc3\">Montant TTC :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantTtc3\" id=\"montantTtc3\" formControlName=\"montantTtc3\" value=\"{{detailsDevis3.montantTtc}}\"\r\n                            size=\"8\" />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt3.errors?.required && devisForm.controls.montantHt3.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt3.errors?.isNumber && devisForm.controls.montantHt3.dirty && !devisForm.controls.montantHt3.errors?.required\">\r\n                                Ce n'est pas un nombre\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <!-- =========================================================== -->\r\n                    <!-- Devis input set by blur fonction -->\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"montantHt\">Montant HT :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantHt\" id=\"montantHt\" formControlName=\"montantHt\" value=\"{{devis.montantHt}}\"\r\n                            required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"tauxTva\">Taux TVA (€) :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"tauxTva\" id=\"tauxTva\" formControlName=\"tauxTva\" value=\"{{devis.tauxTva}}\" (blur)=\"calculMontant()\"\r\n                            required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"montantTtc\">Montant TTC :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantTtc\" id=\"montantTtc\" formControlName=\"montantTtc\" value=\"{{devis.montantTtc}}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"client\">Client :</label>\r\n                        <input type=\"text\" name=\"client\" id=\"client\" formControlName=\"client\" value=\"{{client.nom}} {{client.prenom}}\" />\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"updateMode && historique\">\r\n                        <label class=\"control-label\" for=\"descriptionModif\">Description :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"descriptionModif\" id=\"descriptionModif\" placeholder=\"Expliquer la modification\"\r\n                            formControlName=\"descriptionModif\" value=\"{{descriptionModif}}\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                        <button [disabled]=\"!devisForm.valid || processing\" type=\"submit\" class=\"btn btn-success\">Sauver</button>\r\n                        <button [disabled]=\"processing\" class=\"btn btn-default\" (click)=\"onCancel()\">Annuler</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid col-sm-6 col-md-6\">\r\n    <!-- Facture global component -->\r\n    <app-facture-global></app-facture-global>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/devis/devis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_taux_const__ = __webpack_require__("../../../../../src/app/models/taux.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_detailsDevis__ = __webpack_require__("../../../../../src/app/models/detailsDevis.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_details_devis_service__ = __webpack_require__("../../../../../src/app/service/details-devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_config__ = __webpack_require__("../../../../../src/environments/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Models



// Services




// Env const

/**
 *
 * @author Paul GUINARD
 * @export DevisComponent
 * @class DevisComponent
 * @implements {OnInit}
 */
var DevisComponent = (function () {
    /**
     * Creates an instance of DevisComponent.
     * @param {DevisService} devisService devis service
     * @param {DatePipe} datepipe format date
     * @param {ActivatedRoute} activatedRoute request route params
     * @param {FormBuilder} formBuilder reactive forms builder
     * @param {ClientService} clientService client service
     * @param {FlashMessagesService} flashMessages angular flash messages
     * @param {DetailsDevisService} detailsDevisService Details Devis service
     * @param {FactureGlobalService} factureGlobalService Facture global service
     * @param {Router} router router
     * @memberof DevisComponent
     */
    function DevisComponent(devisService, datepipe, activatedRoute, formBuilder, clientService, flashMessages, detailsDevisService, factureGlobalService, router) {
        this.devisService = devisService;
        this.datepipe = datepipe;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.clientService = clientService;
        this.flashMessages = flashMessages;
        this.detailsDevisService = detailsDevisService;
        this.factureGlobalService = factureGlobalService;
        this.router = router;
        /**
         * list devis
         *
         * @type {Devis[]}
         * @memberof DevisComponent
         */
        this.listDevis = [];
        /**
         * devis
         *
         * @type {*}
         * @memberof DevisComponent
         */
        this.devis = {};
        /**
         * DetailsDevis1
         *
         * @type {*}
         * @memberof DevisComponent
         */
        this.detailsDevis1 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1] };
        /**
         * DetailsDevis2
         *
         * @type {*}
         * @memberof DevisComponent
         */
        this.detailsDevis2 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2] };
        /**
         * DetailsDevis3
         *
         * @type {*}
         * @memberof DevisComponent
         */
        this.detailsDevis3 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][3] };
        /**
         * client
         *
         * @memberof DevisComponent
         */
        this.client = new __WEBPACK_IMPORTED_MODULE_5__models_client__["a" /* Client */]();
        /**
         * mode form
         *
         * @memberof DevisComponent
         */
        this.mode = false;
        /**
         * updateMode form group for descriptionModif
         *
         * @memberof DevisComponent
         */
        this.updateMode = false;
        /**
         * on process
         *
         * @memberof DevisComponent
         */
        this.processing = false;
        this.generateForm();
    }
    /**
     * Get ALL Client.
       * Method used for <select options>.
       * Used for Select Option on add/update Devis Form.
     * NOT USED
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getAllClient = function () {
        var _this = this;
        this.clientService.getAllClients()
            .subscribe(function (clients) { return _this.listClient = clients; }, function (error) { return console.log('Erreur :' + error); });
    };
    /**
     * GET ALL DEVIS.
       * Method used when params['id_client'] NOT set into url.
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getAllDevis = function () {
        var _this = this;
        this.devisService.getAllDevis()
            .subscribe(function (devis) { return _this.listDevis = devis; }, function (error) { return console.log('Erreur :' + error); });
    };
    /**
     * GET ALL DEVIS BY CLIENT.
       * Method used when params['id_client'] set into url.
     *
     * @param {number} id client._id
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getAllDevisByClient = function (id) {
        var _this = this;
        this.devisService.getAllDevisByClient(id)
            .subscribe(function (devis) { return _this.listDevis = devis; }, function (error) { return console.log('Erreur :' + error); });
    };
    /**
     * GET ALL VALID DEVIS BY CLIENT:
     * - Method used when params['id_client'] set into url
     * - return seulement Devis valid
     *
     * @param {number} id client._id
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getAllValidDevisByClient = function (id) {
        var _this = this;
        this.listDevis = [];
        this.devisService.getAllDevisByClient(id)
            .subscribe(function (devis) {
            for (var dev in devis) {
                if (devis.hasOwnProperty(dev)) {
                    if (devis[dev].valid) {
                        _this.listDevis.push(devis[dev]);
                    }
                }
            }
        }, function (error) { return console.log('Erreur :' + error); });
    };
    /**
     * GET ONE CLIENT by ID
       * Set current Client informations for view.
     *
     * @param {number} id client._id
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getClient = function (id) {
        var _this = this;
        this.clientService.getOneClient(id)
            .subscribe(function (client) { return _this.client = client; }, function (error) { return console.log('Erreur :' + error); });
    };
    /**
     * GET ONE DEVIS by ID
       * Method not used.
     *
     * @param {number} id devis._id
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getOneDevis = function (id) {
        var _this = this;
        this.devisService.getOneDevis(id)
            .subscribe(function (devis) { return _this.devis = devis; }, function (error) { return console.log('Erreur :' + error); });
    };
    /**
     * ADD/UPDATE DEVIS.
       * - Si this.devis._id exists : update old Devis() and Add new.
       * - Si this.devis._id == null || 0 : addDevis().
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.addDevis = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        // Set Devis data to save
        var newDevis = {
            ref_devis: this.devisForm.get('ref_devis').value,
            date_creation: this.devisForm.get('date_creation').value,
            montantHt: this.devisForm.get('montantHt').value,
            tauxTva: this.devisForm.get('tauxTva').value,
            montantTtc: this.devisForm.get('montantTtc').value,
            client: this.id_client,
        };
        // Check si Add ou Update
        if (this.devis._id == null || this.devis._id === 0 || this.devis._id === '') {
            this.devisService.addDevis(newDevis)
                .subscribe(function (data) {
                if (data.success) {
                    _this.flashMessages.show('Devis créé', {
                        classes: ['alert', 'alert-success'],
                        timeout: 3000
                    });
                    _this.addDetailsDevis(data.obj);
                }
                else {
                    _this.flashMessages.show(data.message, {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    _this.processing = false;
                    _this.enableForm();
                }
            }, function (error) {
                console.log('Erreur :' + error);
            });
        }
        else {
            // Si historique true
            if (__WEBPACK_IMPORTED_MODULE_12__environments_config__["a" /* historique */]) {
                // Set new Devis data to add
                var updateDevis = {
                    ref_devis: this.devisForm.get('ref_devis').value,
                    date_creation: this.devisForm.get('date_creation').value,
                    montantHt: this.devisForm.get('montantHt').value,
                    tauxTva: this.devisForm.get('tauxTva').value,
                    montantTtc: this.devisForm.get('montantTtc').value,
                    client: this.id_client
                };
                // Save to database
                this.devisService.addDevis(updateDevis)
                    .subscribe(function (data) {
                }, function (err) { return console.log(err); });
                // Set old devis description & valid
                this.devis.description = this.devisForm.get('descriptionModif').value;
                this.devis.valid = false;
                this.devis.updated_at = new Date();
                this.devisService.updateDevis(this.devis)
                    .subscribe(function (data) {
                    _this.flashMessages.show('Devis modifié', {
                        classes: ['alert', 'alert-success'],
                        timeout: 3000
                    });
                    _this.fetchAnddeleteDetailsDevis(_this.devis._id);
                }, function (error) {
                    console.log('Erreur :' + error);
                    _this.flashMessages.show('Erreur modification devis', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    _this.processing = false;
                    _this.enableForm();
                });
                // Si historique false
            }
            else {
                // Set new Devis data to add
                var updateDevis = {
                    _id: this.devis._id,
                    ref_devis: this.devisForm.get('ref_devis').value,
                    date_creation: this.devisForm.get('date_creation').value,
                    montantHt: this.devisForm.get('montantHt').value,
                    tauxTva: this.devisForm.get('tauxTva').value,
                    montantTtc: this.devisForm.get('montantTtc').value,
                    client: this.id_client
                };
                // Update to database
                this.devisService.updateDevis(updateDevis)
                    .subscribe(function (data) {
                    _this.flashMessages.show('Devis modifié', {
                        classes: ['alert', 'alert-success'],
                        timeout: 3000
                    });
                    _this.updateDetailsDevis(data.obj);
                }, function (error) {
                    console.log('Erreur :' + error);
                    _this.flashMessages.show('Erreur modification devis', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    _this.processing = false;
                    _this.enableForm();
                });
            }
        }
    };
    /**
     * onAddDevis() success :
     * - set detailsDevis.devis = devis._id : get from data.obj
     * - save all DetailsDevis to database
     *
     * @param {any} devis devis data
     * @memberof DevisComponent
     */
    DevisComponent.prototype.addDetailsDevis = function (devis) {
        var _this = this;
        // Set DetailsDevis data from devisForm
        this.detailsDevis1 = {
            tauxTva: this.devisForm.get('tauxTva1').value,
            montantHt: this.devisForm.get('montantHt1').value,
            montantTtc: this.devisForm.get('montantTtc1').value,
            devis: devis._id
        };
        this.detailsDevis2 = {
            tauxTva: this.devisForm.get('tauxTva2').value,
            montantHt: this.devisForm.get('montantHt2').value,
            montantTtc: this.devisForm.get('montantTtc2').value,
            devis: devis._id
        };
        this.detailsDevis3 = {
            tauxTva: this.devisForm.get('tauxTva3').value,
            montantHt: this.devisForm.get('montantHt3').value,
            montantTtc: this.devisForm.get('montantTtc3').value,
            devis: devis._id
        };
        // Save DetailsDevis
        this.detailsDevisService.addDetailsDevis(this.detailsDevis1)
            .subscribe(function (data1) {
            _this.detailsDevis1 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1] };
            _this.detailsDevisService.addDetailsDevis(_this.detailsDevis2)
                .subscribe(function (data2) {
                _this.detailsDevis2 = {};
                _this.detailsDevis2 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2] };
                _this.detailsDevisService.addDetailsDevis(_this.detailsDevis3)
                    .subscribe(function (data3) {
                    _this.detailsDevis3 = {};
                    _this.detailsDevis3 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][3] };
                    _this.onSuccess();
                }, function (err) {
                    console.log(err);
                    _this.enableForm();
                });
            }, function (err) {
                console.log(err);
                _this.enableForm();
            });
        }, function (err) {
            console.log(err);
            _this.enableForm();
        });
    };
    /**
     *update DetailsDevis
     *
     * @param {any} devis devis
     * @memberof DevisComponent
     */
    DevisComponent.prototype.updateDetailsDevis = function (devis) {
        var _this = this;
        // Set DetailsDevis data from devisForm
        this.detailsDevis1.montantHt = this.devisForm.get('montantHt1').value;
        this.detailsDevis1.tauxTva = this.devisForm.get('tauxTva1').value;
        this.detailsDevis1.montantTtc = this.devisForm.get('montantTtc1').value;
        this.detailsDevis2.montantHt = this.devisForm.get('montantHt2').value;
        this.detailsDevis2.tauxTva = this.devisForm.get('tauxTva2').value;
        this.detailsDevis2.montantTtc = this.devisForm.get('montantTtc2').value;
        this.detailsDevis3.montantHt = this.devisForm.get('montantHt3').value;
        this.detailsDevis3.tauxTva = this.devisForm.get('tauxTva3').value;
        this.detailsDevis3.montantTtc = this.devisForm.get('montantTtc3').value;
        // Update DetailsDevis
        this.detailsDevisService.updateDetailsDevis(this.detailsDevis1)
            .subscribe(function (data1) {
            _this.detailsDevis1 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1] };
            _this.detailsDevisService.updateDetailsDevis(_this.detailsDevis2)
                .subscribe(function (data2) {
                _this.detailsDevis2 = {};
                _this.detailsDevis2 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2] };
                _this.detailsDevisService.updateDetailsDevis(_this.detailsDevis3)
                    .subscribe(function (data3) {
                    _this.detailsDevis3 = {};
                    _this.detailsDevis3 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][3] };
                    _this.onSuccess();
                }, function (err) {
                    console.log(err);
                    _this.enableForm();
                });
            }, function (err) {
                console.log(err);
                _this.enableForm();
            });
        }, function (err) {
            console.log(err);
            _this.enableForm();
        });
    };
    /**
     * Delete devis and DetailsDevis associé fetch from database by getDetailsDevisByDevis() method SI :
     * - le client ne possède pas de facture global
     *
     * @param {Devis} devis devis body
     * @memberof DevisComponent
     */
    DevisComponent.prototype.onDelete = function (devis) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_12__environments_config__["a" /* historique */]) {
            var devisValid_1 = false;
            this.factureGlobalService.getAllFactureGlobalByDevis(devis._id)
                .subscribe(function (data) {
                if (data.length > 0) {
                    for (var d in data) {
                        if (data.hasOwnProperty(d)) {
                            if (data[d].valid) {
                                devisValid_1 = true;
                            }
                        }
                    }
                }
                if (data.length === 0 || devisValid_1 === false) {
                    devis.valid = false;
                    devis.description = _this.descriptionModif;
                    devis.updated_at = new Date();
                    // Delete Devis
                    _this.devisService.updateDevis(devis)
                        .subscribe(function (msg) {
                        _this.flashMessages.show('Devis supprimé', {
                            classes: ['alert', 'alert-warning'],
                            timeout: 3000
                        });
                        _this.onSuccess();
                        // Fetch DetailsDevis by Devis._id & delete detailsDevis
                        _this.fetchAnddeleteDetailsDevis(devis._id);
                    }, function (error) {
                        console.log(error),
                            _this.flashMessages.show('Erreur : Devis non supprimé', {
                                classes: ['alert', 'alert-danger'],
                                timeout: 3000
                            });
                    });
                }
                else {
                    _this.flashMessages.show('Suppression impossible ! Le devis est associé à des factures.', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    _this.onSuccess();
                }
            }, function (err) { return console.log('Erreur :' + err); });
        }
        else {
            this.factureGlobalService.getAllFactureGlobalByDevis(devis._id)
                .subscribe(function (data) {
                if (data.length === 0) {
                    _this.devisService.deleteDevis(devis._id)
                        .subscribe(function (dev) {
                        _this.flashMessages.show('Devis supprimé', {
                            classes: ['alert', 'alert-warning'],
                            timeout: 3000
                        });
                        _this.onSuccess();
                        // Fetch DetailsDevis by Devis._id & delete detailsDevis
                        _this.fetchAnddeleteDetailsDevis(devis._id);
                    }, function (err) {
                        console.log(err);
                        _this.flashMessages.show('Erreur : Devis non supprimé', {
                            classes: ['alert', 'alert-danger'],
                            timeout: 3000
                        });
                    });
                }
                else {
                    _this.flashMessages.show('Suppression impossible ! Le devis est associé à des factures.', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    _this.onSuccess();
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    /**
     * get DetailsDevis list by devis Id & delete details devis
     *
     * @param {number} id_devis devis ID
     * @memberof DevisComponent
     */
    DevisComponent.prototype.fetchAnddeleteDetailsDevis = function (id_devis) {
        var _this = this;
        // Fetch DetailsDevis by Devis._id
        this.detailsDevisService.getDetailsDevisByDevis(id_devis)
            .subscribe(function (detailsDevisList) {
            // Delete detailsDevis
            detailsDevisList.forEach(function (detailsDevis) {
                _this.detailsDevisService.deleteDetailsDevis(detailsDevis._id)
                    .subscribe(function (data) {
                    _this.onSuccess();
                }, function (err) {
                    console.log('Erreur deleted :' + err);
                });
            });
        });
    };
    /**
     * on close modal
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.closeModal = function () {
        this.devis = {};
    };
    /**
     * Function success for all request to service.
     * Reset table by fetching data from database.
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.onSuccess = function () {
        this.mode = false;
        this.updateMode = false;
        this.descriptionModif = '';
        this.generateForm();
        this.devis = {};
        this.processing = false;
        this.devisForm.controls['montantTtc1'].setValue(0);
        this.devisForm.controls['montantTtc2'].setValue(0);
        this.devisForm.controls['montantTtc3'].setValue(0);
        this.enableForm();
        // Différente route à utiliser une fois le dashboard implémenté
        if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
            if (__WEBPACK_IMPORTED_MODULE_12__environments_config__["a" /* historique */]) {
                this.getAllValidDevisByClient(this.id_client);
            }
            else {
                this.getAllDevisByClient(this.id_client);
            }
        }
        else {
            this.getAllDevis();
        }
    };
    /**
     * Display devisForm
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.onAdd = function () {
        this.mode = true;
        this.updateMode = false;
        this.generateForm();
        this.devis = {};
        this.detailsDevis1 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1] };
        this.detailsDevis2 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2] };
        this.detailsDevis3 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][3] };
        var latest_date = this.datepipe.transform(Date.now(), 'yyyy-MM-dd');
        this.devisForm.get('date_creation').setValue(latest_date);
        this.devis.date_creation = latest_date;
    };
    /**
     * Display devisForm and set devis values to update
     *
     * @param {any} d devis body
     * @memberof DevisComponent
     */
    DevisComponent.prototype.onUpdate = function (d) {
        var _this = this;
        this.getClient(d.client);
        this.devis = d;
        var latest_date = this.datepipe.transform(this.devis.date_creation, 'yyyy-MM-dd');
        this.devis.date_creation = latest_date;
        this.devis.client = this.client._id;
        this.mode = true;
        this.updateMode = true;
        this.devisForm.get('ref_devis').setValue(this.devis.ref_devis);
        this.detailsDevisService.getDetailsDevisByDevis(d._id)
            .subscribe(function (data) {
            // Fetch data from database
            _this.detailsDevis1 = data[0];
            _this.detailsDevis2 = data[1];
            _this.detailsDevis3 = data[2];
            // Si detailsDevis undefined => set new DetailsDevis()
            if (_this.detailsDevis1 === undefined) {
                _this.detailsDevis1 = new __WEBPACK_IMPORTED_MODULE_7__models_detailsDevis__["a" /* DetailsDevis */]({
                    montantHt: 0,
                    tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1],
                    montantTtc: 0
                });
            }
            if (_this.detailsDevis2 === undefined) {
                _this.detailsDevis2 = new __WEBPACK_IMPORTED_MODULE_7__models_detailsDevis__["a" /* DetailsDevis */]({
                    montantHt: 0,
                    tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2],
                    montantTtc: 0
                });
            }
            if (_this.detailsDevis3 === undefined) {
                _this.detailsDevis3 = new __WEBPACK_IMPORTED_MODULE_7__models_detailsDevis__["a" /* DetailsDevis */]({
                    montantHt: 0,
                    tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][3],
                    montantTtc: 0
                });
            }
            // Set devisForm value
            _this.devisForm.get('montantHt1').setValue(_this.detailsDevis1.montantHt);
            _this.devisForm.get('montantHt2').setValue(_this.detailsDevis2.montantHt);
            _this.devisForm.get('montantHt3').setValue(_this.detailsDevis3.montantHt);
            // force le calcul des (blur) montantTTC des Détails Devis
            _this.calculMontant1();
            _this.calculMontant2();
            _this.calculMontant3();
        }, function (err) {
            console.log('Erreur :' + err);
        });
    };
    /**
     * onCancel form
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.onCancel = function () {
        this.mode = false;
        this.generateForm();
        this.devis = {};
        this.detailsDevis1 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1] };
        this.detailsDevis2 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2] };
        this.detailsDevis3 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][3] };
    };
    /**
     * Set devis to delete on confirm
     *
     * @param {Devis} devis devis body
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getDevisToDelete = function (devis) {
        this.devis = devis;
    };
    /**
     * Generate Reactive Form
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.generateForm = function () {
        this.devisForm = this.formBuilder.group({
            ref_devis: [this.devis.ref_devis, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required
                ])],
            date_creation: [Date.now],
            // DetailsDevis data
            montantHt1: [this.detailsDevis1.montantHt, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    this.isNumber
                ])],
            tauxTva1: [{ value: this.detailsDevis1.tauxTva, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            montantTtc1: [{ value: this.detailsDevis1.montantTtc, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            montantHt2: [this.detailsDevis2.montantHt, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    this.isNumber
                ])],
            tauxTva2: [{ value: this.detailsDevis2.tauxTva, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            montantTtc2: [{ value: this.detailsDevis2.montantTtc, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            montantHt3: [this.detailsDevis3.montantHt, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    this.isNumber
                ])],
            tauxTva3: [{ value: this.detailsDevis3.tauxTva, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            montantTtc3: [{ value: this.detailsDevis3.montantTtc, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            // Devis data
            montantHt: [{ value: this.devis.montantHt, disabled: true }],
            tauxTva: [{ value: this.devis.tauxTva, disabled: true }],
            montantTtc: [{ value: this.devis.montantTtc, disabled: true }],
            client: [{ value: this.id_client, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required
                ])],
            descriptionModif: [{ value: this.descriptionModif }],
        });
    };
    /**
     * Enable form controls
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.enableForm = function () {
        this.devisForm.controls['ref_devis'].enable();
        this.devisForm.controls['date_creation'].enable();
        this.devisForm.controls['montantHt1'].enable();
        this.devisForm.controls['montantHt2'].enable();
        this.devisForm.controls['montantHt3'].enable();
    };
    /**
     * Disable form controls
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.disableForm = function () {
        this.devisForm.disable();
    };
    /* (blur) CALCUL MONTANT TTC DetailsDevis & Devis data */
    /**
     * Calcul montantTtc1 using tauxTva1 and montantHt1 values of validerDevisForm and send new montantTtc1
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.calculMontant1 = function () {
        if (!(this.devisForm.controls['montantHt1'].value === '') && !(this.devisForm.controls['tauxTva1'].value === '')) {
            var montantTTC = Number(this.devisForm.get('montantHt1').value) * (1 + Number(this.devisForm.get('tauxTva1').value) / 100);
            this.devisForm.get('montantTtc1').setValue((montantTTC).toFixed(2));
        }
    };
    /**
     * Calcul montantTtc2 using tauxTva2 and montantHt2 values of validerDevisForm and send new montantTtc2
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.calculMontant2 = function () {
        if (!(this.devisForm.controls['montantHt2'].value === '') && !(this.devisForm.controls['tauxTva2'].value === '')) {
            var montantTTC = Number(this.devisForm.get('montantHt2').value) * (1 + Number(this.devisForm.get('tauxTva2').value) / 100);
            this.devisForm.get('montantTtc2').setValue((montantTTC).toFixed(2));
        }
    };
    /**
     * Calcul montantTtc3 using tauxTva3 and montantHt3 values of validerDevisForm and send new montantTtc3
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.calculMontant3 = function () {
        if (!(this.devisForm.controls['montantHt3'].value === '') && !(this.devisForm.controls['tauxTva3'].value === '')) {
            var montantTTC = Number(this.devisForm.get('montantHt3').value) * (1 + Number(this.devisForm.get('tauxTva3').value) / 100);
            this.devisForm.get('montantTtc3').setValue((montantTTC).toFixed(2));
        }
    };
    /**
     * Calcul tauxTva using tauxTva1, tauxTva2 and tauxTva3 values of validerDevisForm and send new tauxTva
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.calculTauxTva = function () {
        var tauxTva = this.devisForm.get('montantHt1').value * this.devisForm.get('tauxTva1').value / 100
            + this.devisForm.get('montantHt2').value * this.devisForm.get('tauxTva2').value / 100
            + this.devisForm.get('montantHt3').value * this.devisForm.get('tauxTva3').value / 100;
        this.devisForm.get('tauxTva').setValue(Number(tauxTva).toFixed(2));
    };
    /**
     * Calcul MontantHt using MontantHt1, MontantHt2 and MontantHt3 values of validerDevisForm and send new MontantHt
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.calculMontantHt = function () {
        if (!(this.devisForm.get('montantHt1').value === '') && !(this.devisForm.get('montantHt2').value === '')
            && !(this.devisForm.get('montantHt3').value === '')) {
            var montantHT = Number(this.devisForm.get('montantHt1').value) + Number(this.devisForm.get('montantHt2').value)
                + Number(this.devisForm.get('montantHt3').value);
            this.devisForm.get('montantHt').setValue(Number(montantHT).toFixed(2));
        }
    };
    /**
     * Calcul MontantTtc using MontantTtc1, MontantTtc2 and MontantTtc3 values of validerDevisForm and send new MontantTtc
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.calculMontantTtc = function () {
        var montantTtc = Number(this.devisForm.get('montantTtc1').value)
            + Number(this.devisForm.get('montantTtc2').value)
            + Number(this.devisForm.get('montantTtc3').value);
        this.devisForm.get('montantTtc').setValue(Number(montantTtc).toFixed(2));
    };
    /**
     * somme montant HT
     *
     * @returns {string} somme
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getSumMontantHt = function () {
        var sum = 0;
        for (var dev in this.listDevis) {
            if (this.listDevis.hasOwnProperty(dev)) {
                sum += this.listDevis[dev].montantHt;
            }
        }
        return sum.toFixed(2);
    };
    /**
     * somme taux TVA
     *
     * @returns {string} somme
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getSumTauxTva = function () {
        var sum = 0;
        for (var dev in this.listDevis) {
            if (this.listDevis.hasOwnProperty(dev)) {
                sum += this.listDevis[dev].tauxTva;
            }
        }
        return sum.toFixed(2);
    };
    /**
     * somme montant TTC
     *
     * @returns {string} somme
     * @memberof DevisComponent
     */
    DevisComponent.prototype.getSumMontantTtc = function () {
        var sum = 0;
        for (var dev in this.listDevis) {
            if (this.listDevis.hasOwnProperty(dev)) {
                sum += this.listDevis[dev].montantTtc;
            }
        }
        return sum.toFixed(2);
    };
    // VALIDATIONS
    /**
     * Validation for number
     *
     * @param {*} n string to check
     * @returns
     * @memberof DevisComponent
     */
    DevisComponent.prototype.isNumber = function (controls) {
        var regExp = new RegExp(/^[0-9]{0,20}(\.[0-9]{0,4})?$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return {
                isNumber: true
            };
        }
    };
    /**
     *
     * (blur) listener : Verification de la ref_devis.
     * - si data.success === true && ref != devis.ref => ref_devis utilisée => validationRef = true,
     * - si data.success === false => ref_devis non utilisée => validationRef = false
     *
     * @memberof ValiderDevisComponent
     */
    DevisComponent.prototype.verifRef = function () {
        var _this = this;
        this.devisService.getOneDevisByRef(this.client._id, this.devisForm.get('ref_devis').value)
            .subscribe(function (data) {
            if (data.success) {
                // onUpdate(devis) : Vérif si ref dans l'input !== ref initial du devis 
                if (_this.devisForm.get('ref_devis').value !== _this.devis.ref_devis) {
                    return _this.validationRef = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
        return this.validationRef = false;
    };
    /*  getAllValidDevis() {
       this.devisService.getAllValidDevis()
         .subscribe(data => this.listDevis = data);
     } */
    /**
     * OnInit :
     * check if params['id_client'] set into url.
     * - set this.id_client = params['id_client'].
     * - get Client using this.id_client.
     *
     * @memberof DevisComponent
     */
    DevisComponent.prototype.ngOnInit = function () {
        // used for <select> client options
        // this.getAllClient();
        // différentes routes à utiliser quand le dashboard sera implémenté
        if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
            this.id_client = this.activatedRoute.snapshot.params['id_client'];
            // this.getAllDevisByClient(this.id_client);
            if (__WEBPACK_IMPORTED_MODULE_12__environments_config__["a" /* historique */]) {
                this.getAllValidDevisByClient(this.id_client);
            }
            else {
                this.getAllDevisByClient(this.id_client);
            }
            this.getClient(this.id_client);
        }
        else {
            this.router.navigate(['/pageNotFound']);
        }
    };
    return DevisComponent;
}());
DevisComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-devis',
        template: __webpack_require__("../../../../../src/app/components/devis/devis.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/devis/devis.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__service_devis_service__["a" /* DevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_devis_service__["a" /* DevisService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_client_service__["a" /* ClientService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__service_details_devis_service__["a" /* DetailsDevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_details_devis_service__["a" /* DetailsDevisService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _j || Object])
], DevisComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=devis.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/facture-accompte/facture-accompte.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/facture-accompte/facture-accompte.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h4>{{factureGlobal.ref_factureGlobal}} {{factureGlobal.montantTtc}}</h4>\r\n    <a class=\"btn btn-default\" [routerLink]=\"['/devis/client/', factureGlobal.client]\">Retour page Devis/Factures</a>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <h4 style=\"text-align: center;\">Factures d'accompte</h4>\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Statut</th>\r\n                <th>Ref</th>\r\n                <th>Date</th>\r\n                <th>Montant facturé TTC</th>\r\n                <th>Règlement client TTC</th>\r\n                <th>Facture</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let f of listFactureAccompte | orderByDate: 'date_creation'\">\r\n                <td *ngIf=\"f.status_factureAccompte\">\r\n                    <img src=\"{{status_true}}\" alt=\"true\">\r\n                </td>\r\n                <td *ngIf=\"!f.status_factureAccompte\">\r\n                    <img src=\"{{status_false}}\" alt=\"false\">\r\n                </td>\r\n                <td>{{f.ref_factureAccompte}}</td>\r\n                <td>{{f.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n                <td>{{f.montantFacture.toFixed(2)}}</td>\r\n                <td>{{f.reglementClient.toFixed(2)}}</td>\r\n                <td>{{factureGlobal.ref_factureGlobal}}</td>\r\n                <td>\r\n                    <div class=\"btn-group-vertical\">\r\n                        <button class=\"btn btn-success\" (click)=\"onAddReglement(f)\">Règlements</button>\r\n                        <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getFactureAccompteToDelete(f)\">Supprimer</button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"color-sum\" *ngIf=\"listFactureAccompte.length > 0\">\r\n                <th>Total</th>\r\n                <th>:</th>\r\n                <th></th>\r\n                <th>{{getSumMontantFacture()}}</th>\r\n                <th>{{getSumReglementClient()}}</th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <button class=\"btn btn-primary\" (click)=\"onAddFactureAccompte()\">Ajouter facture d'accompte</button>\r\n    <br/>\r\n    <br/>\r\n\r\n    <!-- Confirm delete Modal -->\r\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <!-- Modal content-->\r\n            <form #modalForm=\"ngForm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <p>Etes-vous sûr de vouloir supprimer {{factureAccompte.ref_factureAccompte}} ?</p>\r\n                        <div *ngIf=\"historique\">\r\n                            <label for=\"descriptionModif\">Description :</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"descriptionModif\" name=\"descriptionModif\" [(ngModel)]=\"descriptionModif\" placeholder=\"description de la suppression ...\"\r\n                                required />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button class=\"btn btn-danger\" (click)=\"deleteFactureAccompte(factureAccompte)\" [disabled]=\"!modalForm.form.valid\" data-dismiss=\"modal\">Supprimer</button>\r\n                        <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- addFactureAccompte Form -->\r\n    <div class=\"container\" *ngIf=\"mode\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <h4>Facture d'accompte</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\" [formGroup]=\"factureForm\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (factureForm.controls.ref_factureAccompte.errors && factureForm.controls.ref_factureAccompte.dirty)\r\n          || (validationRef && factureForm.controls.ref_factureAccompte.dirty),\r\n          'has-success': (!factureForm.controls.ref_factureAccompte.errors && !validationRef)}\">\r\n                        <label class=\"control-label\" for=\"ref_factureAccompte\">Ref :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"ref_factureAccompte\" id=\"ref_factureAccompte\" formControlName=\"ref_factureAccompte\"\r\n                            (blur)=\"verifRef()\" autofocus required />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"factureForm.controls.ref_factureAccompte.errors?.required && factureForm.controls.ref_factureAccompte.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationRef && factureForm.controls.ref_factureAccompte.dirty\">\r\n                                Ref déjà utilisée\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n                        <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{factureGlobal.date_creation}}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (factureForm.controls.montantFacture.errors && factureForm.controls.montantFacture.dirty)\r\n           || (validationMontantFacture && factureForm.controls.montantFacture.dirty),\r\n          'has-success': (!factureForm.controls.montantFacture.errors && !validationMontantFacture)}\">\r\n                        <label class=\"control-label\" for=\"montantFacture\">Montant facturé :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantFacture\" id=\"montantFacture\" formControlName=\"montantFacture\" (blur)=\"verifMontantFacture()\"\r\n                            required />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"factureForm.controls.montantFacture.errors?.required && factureForm.controls.montantFacture.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"factureForm.controls.montantFacture.errors?.isNumber && factureForm.controls.montantFacture.dirty && !factureForm.controls.montantFacture.errors?.required\">\r\n                                Le montant doit être positif et doit posséder au maximum 4 chiffres après la virgule\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationMontantFacture\">\r\n                                Le montant est supérieur au montant facturé TTC de la facture\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"factureGlobal\">factureGlobal :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"factureGlobal\" id=\"factureGlobal\" formControlName=\"factureGlobal\" value=\"{{factureGlobal.ref_factureGlobal}}\"\r\n                            required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                        <button [disabled]=\"!factureForm.valid || processing || validationMontantFacture\" (click)=\"addFactureAccompte()\" class=\"btn btn-success\">Créer facture d'accompte</button>\r\n                        <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- addReglement form -->\r\n    <div class=\"container\" *ngIf=\"modeAddReglement\">\r\n        <div class=\"panel panel-info col-sm-6\">\r\n            <div class=\"panel-heading\">\r\n                <h4>Ajouter règlement</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\" [formGroup]=\"reglementForm\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"ref_factureAccompte\">Ref Facture d'accompte :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"ref_factureAccompte\" id=\"ref_factureAccompte\" formControlName=\"ref_factureAccompte\"\r\n                            value=\"{{factureAccompte.ref_factureAccompte}}\" required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n                        <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{factureAccompte.date_creation}}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"montantFacture\">Montant facturé :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantFacture\" id=\"montantFacture\" formControlName=\"montantFacture\" value=\"{{factureAccompte.montantFacture.toFixed(2)}}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (reglementForm.controls.reglementTtc.errors && reglementForm.controls.reglementTtc.dirty)\r\n          || (validationReglement && reglementForm.controls.reglementTtc.dirty),\r\n         'has-success': (!reglementForm.controls.reglementTtc.errors && !validationReglement)}\">\r\n                        <label class=\"control-label\" for=\"reglementTtc\">\r\n                            Règlement client :\r\n\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"reglementTtc\" id=\"reglementTtc\" formControlName=\"reglementTtc\" (blur)=\"verifReglement()\"\r\n                            autofocus required />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"reglementForm.controls.reglementTtc.errors?.required && reglementForm.controls.reglementTtc.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"reglementForm.controls.reglementTtc.errors?.isNumber && reglementForm.controls.reglementTtc.dirty && !reglementForm.controls.reglementTtc.errors?.required\">\r\n                                Ce n'est pas un nombre positif\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationReglement\">\r\n                                Le règlement est supérieur au montant facturé\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [ngModel]=\"reglementComplet\" [ngModelOptions]=\"{standalone: true}\" (click)=\"onReglementComplet()\"> Règlement complet\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                        <button [disabled]=\"!reglementForm.valid || processing || validationReglement\" (click)=\"addReglement()\" class=\"btn btn-success\">Ajouter règlement</button>\r\n                        <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Reglement Table -->\r\n        <div class=\"col-sm-6\" *ngIf=\"listReglement.length > 0\">\r\n            <h4 style=\"text-align: center;\">Règlements</h4>\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <th>Date création</th>\r\n                    <th>Règlement client</th>\r\n                    <th>Actions</th>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let r of listReglement\">\r\n                        <td>{{r.date_reglement | date :'dd/MM/yyyy'}}</td>\r\n                        <td>{{r.reglementTtc.toFixed(2)}}</td>\r\n                        <td>\r\n                            <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                            <button [disabled]=\"processing\" class=\"btn btn-danger\" (click)=\"deleteReglement(r._id, r.reglementTtc)\">Supprimer</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/facture-accompte/facture-accompte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureAccompteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_facture_accompte_service__ = __webpack_require__("../../../../../src/app/service/facture-accompte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_reglement_service__ = __webpack_require__("../../../../../src/app/service/reglement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_config__ = __webpack_require__("../../../../../src/environments/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// Models
// Services
/**
 * Component used for facture accompte and reglement
 *
 * @author Paul GUINARD
 * @export
 * @class FactureAccompteComponent
 * @implements {OnInit}
 */
var FactureAccompteComponent = (function () {
    /**
     * Creates an instance of FactureAccompteComponent.
     *
     * @param {ActivatedRoute} activatedRoute request routes param
     * @param {FactureGlobalService} factureGlobalService facture global service
     * @param {FactureAccompteService} factureAccompteService facture Accompte service
     * @param {DatePipe} datePipe format date
     * @param {FormBuilder} formBuilder reactive form builder
     * @param {FlashMessagesService} flashMessages Angular flash messages
     * @param {ClientService} clientService client service
     * @param {ReglementService} reglementService reglement service
     * @param {Router} router router
     * @memberof FactureAccompteComponent
     */
    function FactureAccompteComponent(activatedRoute, factureGlobalService, factureAccompteService, datePipe, formBuilder, flashMessages, clientService, reglementService, router) {
        this.activatedRoute = activatedRoute;
        this.factureGlobalService = factureGlobalService;
        this.factureAccompteService = factureAccompteService;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.flashMessages = flashMessages;
        this.clientService = clientService;
        this.reglementService = reglementService;
        this.router = router;
        /**
         * list factures accomptes
         *
         * @type {FactureAccompte[]}
         * @memberof FactureAccompteComponent
         */
        this.listFactureAccompte = [];
        /**
         * list reglements
         *
         * @type {Reglement[]}
         * @memberof FactureAccompteComponent
         */
        this.listReglement = [];
        /**
         * list factures global
         *
         * @type {FactureGlobal[]}
         * @memberof FactureAccompteComponent
         */
        this.listFactureGlobal = [];
        /**
         * facture global
         *
         * @type {*}
         * @memberof FactureAccompteComponent
         */
        this.factureGlobal = {};
        /**
         * facture accompte
         *
         * @type {*}
         * @memberof FactureAccompteComponent
         */
        this.factureAccompte = {};
        /**
         * reglement
         *
         * @type {*}
         * @memberof FactureAccompteComponent
         */
        this.reglement = {};
        /**
         * on process
         *
         * @memberof FactureAccompteComponent
         */
        this.processing = false;
        // Mode display form
        /**
         * mode form facture accompte
         *
         * @memberof FactureAccompteComponent
         */
        this.mode = false;
        /**
         * mode form reglement
         *
         * @memberof FactureAccompteComponent
         */
        this.modeAddReglement = false;
        // Status images
        /**
         * image status true
         *
         * @memberof FactureAccompteComponent
         */
        this.status_true = '../../assets/images/status_true.png';
        /**
         * image status false
         *
         * @memberof FactureAccompteComponent
         */
        this.status_false = '../../assets/images/status_false.png';
        this.generateForm();
        this.generateReglementForm();
        this.reglementComplet = false;
    }
    /**
     * Get Client to be updated
     *
     * @param {number} id client._id
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getOneClient = function (id) {
        var _this = this;
        // Fetch Client from database
        this.clientService.getOneClient(this.factureGlobal.client)
            .subscribe(function (data) { return _this.client = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get All Facture Global by Client
     *
     * @param {number} id client id
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getAllFactureGlobalByClient = function (id) {
        var _this = this;
        this.factureGlobalService.getAllFactureGlobalByClient(id)
            .subscribe(function (data) { return _this.listFactureGlobal = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get One Facture Global
     *
     * @param {number} id factureGlobal._id
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getOneFactureGlobal = function (id) {
        var _this = this;
        this.factureGlobalService.getOneFactureGlobalById(id)
            .subscribe(function (data) {
            _this.factureGlobal = data;
            _this.getOneClient(data.client);
        }, function (err) { return console.log(err); });
    };
    /**
     * Get All Facture Mois
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getAllFactureAccompte = function () {
        var _this = this;
        this.factureAccompteService.getAllFactureAccompte()
            .subscribe(function (factureAccompte) { return _this.listFactureAccompte = factureAccompte; }, function (err) { return console.log(err); });
    };
    /**
     * Get All Facture Mois By Facture Global
     *
     * @param {number} id factureGlobal._id
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getAllFactureAccompteByFactureGlobal = function (id) {
        var _this = this;
        this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
            .subscribe(function (factureAccompte) {
            _this.listFactureAccompte = factureAccompte;
        }, function (err) { return console.log(err); });
    };
    /**
    * Get All Valid Facture Mois By Facture Global
    *
    * @param {number} id factureGlobal._id
    * @memberof FactureAccompteComponent
    */
    FactureAccompteComponent.prototype.getAllValidFactureAccompteByFactureGlobal = function (id) {
        var _this = this;
        this.listFactureAccompte = [];
        this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
            .subscribe(function (factureAccompte) {
            for (var f in factureAccompte) {
                if (factureAccompte.hasOwnProperty(f)) {
                    if (factureAccompte[f].valid) {
                        _this.listFactureAccompte.push(factureAccompte[f]);
                    }
                }
            }
        }, function (err) { return console.log(err); });
    };
    /**
     * Get All Reglement by factureAccompte
     *
     * @param {number} id factureAccompte._id
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getAllReglementByFactureAccompte = function (id) {
        var _this = this;
        this.reglementService.getReglementByFactureAccompte(id)
            .subscribe(function (listReglements) {
            _this.listReglement = listReglements;
        }, function (err) { return console.log(err); });
    };
    /**
     * Add Facture Accompte
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.addFactureAccompte = function () {
        var _this = this;
        this.processing = true;
        this.disableFactureForm();
        var newFacture = {
            ref_factureAccompte: this.factureForm.get('ref_factureAccompte').value,
            date_creation: this.factureForm.get('date_creation').value,
            montantFacture: this.factureForm.get('montantFacture').value,
            reglementClient: 0,
            factureGlobal: this.factureGlobal._id,
        };
        this.factureAccompteService.addFactureAccompte(newFacture)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show(data.message, {
                    classes: ['alert', 'alert-success'],
                    timeout: 3000
                });
                // Update facture global montantTtcFacture
                _this.updateMontantFactureGlobal(_this.factureGlobal, newFacture.montantFacture);
                // Update facture global status
                _this.updateStatusFactureGlobal(_this.factureGlobal);
                _this.onSuccess();
            }
            else {
                _this.flashMessages.show('data.message', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                _this.processing = false;
                _this.enableFactureForm();
            }
        });
    };
    /**
     * Add reglement
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.addReglement = function () {
        var _this = this;
        this.processing = true;
        this.disableReglementForm();
        // Récupère Reglement data du form
        var newReglement = {
            date_reglement: this.reglementForm.get('date_creation').value,
            reglementTtc: this.reglementForm.get('reglementTtc').value,
            factureAccompte: this.factureAccompte._id
        };
        // add Reglement
        this.reglementService.addReglement(newReglement)
            .subscribe(function (data) {
            _this.flashMessages.show(data.message, {
                classes: ['alert', 'alert-success'],
                timeout: 3000
            });
            // update Facture accompte with new reglementClient
            _this.updateReglementClientFactureAccompte(_this.factureAccompte, newReglement.reglementTtc);
            // update facture Accompte Status
            _this.updateStatusFactureAccompte(_this.factureAccompte);
            // update facture global reglement
            _this.updateReglementClientFactureGlobal(_this.factureGlobal, newReglement.reglementTtc);
            _this.onSuccess();
        }, function (err) {
            _this.flashMessages.show(JSON.parse(err._body).message, {
                classes: ['alert', 'alert-danger'],
                timeout: 3000
            });
            _this.processing = false;
            _this.enableReglementForm();
        });
    };
    /**
     * Delete Facture Accompte si NE possède pas de Reglement
     *
     * @param {number} id factureAccompte._id
     * @param {number} montantFacture factureAccomte montantTtcFacture
     * @param {number} reglementClient factureAccomte montantTtcRegle
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.deleteFactureAccompte = function (factureAccompte) {
        var _this = this;
        this.reglementService.getReglementByFactureAccompte(factureAccompte._id)
            .subscribe(function (data) {
            if (data.length === 0) {
                if (__WEBPACK_IMPORTED_MODULE_9__environments_config__["a" /* historique */]) {
                    // Set value delete
                    factureAccompte.valid = false;
                    factureAccompte.description = _this.descriptionModif;
                    factureAccompte.updated_at = new Date();
                    _this.factureAccompteService.updateFactureAccompte(factureAccompte)
                        .subscribe(function (factureData) {
                        if (factureData.success) {
                            _this.flashMessages.show(factureData.message, {
                                classes: ['alert', 'alert-warning'],
                                timeout: 3000
                            });
                            // Update Facture global montantTtcFacture
                            _this.updateMontantFactureGlobal(_this.factureGlobal, -factureAccompte.montantFacture);
                            // Update facture global reglementTtcTotal
                            _this.updateReglementClientFactureGlobal(_this.factureGlobal, -factureAccompte.reglementClient);
                            _this.onSuccess();
                        }
                        else {
                            _this.flashMessages.show(data.message, {
                                classes: ['alert', 'alert-danger'],
                                timeout: 3000
                            });
                        }
                    });
                }
                else {
                    _this.factureAccompteService.deleteFactureAccompte(factureAccompte._id)
                        .subscribe(function (factureData) {
                        if (factureData.success) {
                            _this.flashMessages.show(factureData.message, {
                                classes: ['alert', 'alert-warning'],
                                timeout: 3000
                            });
                            // Update Facture global montantTtcFacture
                            _this.updateMontantFactureGlobal(_this.factureGlobal, -factureAccompte.montantFacture);
                            // Update facture global reglementTtcTotal
                            _this.updateReglementClientFactureGlobal(_this.factureGlobal, -factureAccompte.reglementClient);
                            _this.onSuccess();
                        }
                        else {
                            _this.flashMessages.show(data.message, {
                                classes: ['alert', 'alert-danger'],
                                timeout: 3000
                            });
                        }
                    });
                }
            }
            else {
                _this.flashMessages.show('Suppression impossible ! La facture d\'accompte est associée à des règlements', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Set facture accompte to delete
     *
     * @param {FactureAccompte} factureAccompte facture accompte body
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getFactureAccompteToDelete = function (factureAccompte) {
        this.factureAccompte = factureAccompte;
    };
    /**
     * on close modal
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.closeModal = function () {
        this.factureAccompte = {};
        this.descriptionModif = '';
    };
    /**
     * Delete reglement :
     * - Update reglementClient facture global
     * - Update status facture global
     * - Update status client
     *
     * @param {number} id reglement._id
     * @param {number} reglementClient reglement.reglementTtc
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.deleteReglement = function (id, reglementClient) {
        var _this = this;
        this.processing = true;
        this.reglementService.deleteReglement(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show(data.message, {
                    classes: ['alert', 'alert-warning'],
                    timeout: 3000
                });
                // Update facture accompte reglementClient
                _this.updateReglementClientFactureAccompte(_this.factureAccompte, -reglementClient);
                // Update facture global reglementTtcTotal
                _this.updateReglementClientFactureGlobal(_this.factureGlobal, -reglementClient);
                // Get all reglement by facture accompte
                _this.getAllReglementByFactureAccompte(_this.factureAccompte._id);
                _this.processing = false;
            }
            else {
                _this.flashMessages.show(data.message, {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                _this.processing = false;
            }
        });
    };
    /**
     * Update reglement client facture accompte si :
     * - réglement créé
     *
     * @param {number} reglementClient reglement client
     * @param {FactureAccompte} factureAccompte facture accompte body
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.updateReglementClientFactureAccompte = function (factureAccompte, reglementClient) {
        var _this = this;
        // Set new reglementClient montant
        this.factureAccompte.reglementClient += Number(reglementClient);
        // Request service
        this.factureAccompteService.updateFactureAccompte(factureAccompte)
            .subscribe(function (data) {
            if (data.success) {
                // Update status facture accompte
                _this.updateStatusFactureAccompte(data.obj);
                // this.onSuccess();
            }
        });
    };
    /**
     * Update status factureAccompte si :
     * - modification reglement == success
     * - factureAccompte.reglementClient === factureAccompte.montantFacture
     * - factureAccompte.status_factureAccompte !== true
     *
     * @param {FactureAccompte} factureAccompte facture accompte body
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.updateStatusFactureAccompte = function (factureAccompte) {
        var status_factureAccompte = false;
        // Check if montantFacture === reglementClient
        if (factureAccompte.reglementClient === factureAccompte.montantFacture) {
            status_factureAccompte = true;
        }
        this.factureAccompteService.updateStatusFactureAccompte(factureAccompte, status_factureAccompte)
            .subscribe(function (data) { return console.log('Status facture accompte'); }, function (err) { return console.log(err); });
        // Get all facture accompte by facture global
        if (__WEBPACK_IMPORTED_MODULE_9__environments_config__["a" /* historique */]) {
            this.getAllValidFactureAccompteByFactureGlobal(this.id_fact);
        }
        else {
            this.getAllFactureAccompteByFactureGlobal(this.id_fact);
        }
    };
    /**
     * Update status factureGlobal si :
     * - each montantFacturé factureAccompte === montantTtcTotal factureGlobal
     * - each status factureAccompte === true
     *
     * @param {FactureGlobal} factureGlobal
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.updateStatusFactureGlobal = function (factureGlobal) {
        var _this = this;
        var status_factureGlobal = false;
        // Check montant facture
        if (factureGlobal.montantTtcFacture === factureGlobal.montantTtcRegle) {
            status_factureGlobal = true;
        }
        this.factureGlobalService.updateStatusFactureGlobal(factureGlobal, status_factureGlobal)
            .subscribe(function (data) {
            console.log('Status facture global updated');
            _this.updateStatusClient();
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Update FactureGlobal montantTtcFacturé si:
     * - FactureAccompte success (add/update/delete).
     *
     * @param {FactureGlobal} factureGlobal
     * @param {number} montantFacture
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.updateMontantFactureGlobal = function (factureGlobal, montantFacture) {
        factureGlobal.montantTtcFacture += Number(montantFacture);
        this.factureGlobalService.updateFactureGlobal(factureGlobal)
            .subscribe(function (data) { return console.log('updateMontantFactureGlobal réussi'); }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Update FactureGlobal montantTtcReglé si:
     * - Reglement success (add/update/delete).
     *
     * @param {FactureGlobal} factureGlobal
     * @param {number} Reglement
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.updateReglementClientFactureGlobal = function (factureGlobal, reglement) {
        var _this = this;
        factureGlobal.montantTtcRegle += Number(reglement);
        this.factureGlobalService.updateFactureGlobal(factureGlobal)
            .subscribe(function (data) {
            console.log('updateReglementClientFactureGlobal réussi');
            // update facture Global Status
            _this.updateStatusFactureGlobal(_this.factureGlobal);
        }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Update Status Client si :
     * - update/delete FactureGlobal => Success.
     * - AllFactureGlobalByClient.status === true
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.updateStatusClient = function () {
        var _this = this;
        // init status_client
        var status_client = true;
        // Fetch Facture Globals from Database
        // this.getAllFactureGlobalByClient(this.client._id);
        this.factureGlobalService.getAllFactureGlobalByClient(this.client._id)
            .subscribe(function (data) {
            // Si list non vide : check each factureGlobal.status dans listFactureGlobal
            if (data.length > 0) {
                for (var factureGlobal in data) {
                    if (data.hasOwnProperty(factureGlobal)) {
                        if (data[factureGlobal].status_factureGlobal === false) {
                            status_client = false;
                        }
                    }
                }
            }
            else {
                status_client = false;
            }
            // Update Status client
            _this.clientService.updateStatus(_this.client, status_client)
                .subscribe(function (clientData) { return console.log('Status client mis à jour'); }, function (err) { return console.log('Erreur' + err); });
        }, function (err) { return console.log('Erreur :' + err); });
        /*  // Si status_client === true && client.status_client === false
         if (status_client && this.client.status_client === false) {
           this.clientService.updateStatus(this.client, status_client)
             .subscribe(
             data => console.log('Status client mis à jour :' + data.obj.status_client),
             err => console.log('Erreur mis à jour status client :' + err)
             );
         }
     
         // Si status_client === false && client.status_client === true
         if (!(status_client) && this.client.status_client === true) {
           this.clientService.updateStatus(this.client, status_client)
             .subscribe(
             data => console.log('Status client mis à jour :' + data.obj.status_client),
             err => console.log('Erreur mis à jour status client :' + err)
             );
         } */
    };
    /**
     * Method to fetch modified data from database and display into table.
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.onSuccess = function () {
        if (__WEBPACK_IMPORTED_MODULE_9__environments_config__["a" /* historique */]) {
            this.getAllValidFactureAccompteByFactureGlobal(this.id_fact);
        }
        else {
            this.getAllFactureAccompteByFactureGlobal(this.id_fact);
        }
        this.mode = false;
        this.modeAddReglement = false;
        this.processing = false;
        this.factureAccompte = {};
        this.reglement = {};
        this.descriptionModif = '';
        this.reglementComplet = false;
        this.generateForm();
        this.generateReglementForm();
    };
    /**
     * onAdd Facture accompte
     * affiche le form seulement si l'ajout d'une facture d'accompte est possible
     * cad somme montant facturé < montantTotalTtc facture global
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.onAddFactureAccompte = function () {
        this.modeAddReglement = false;
        // Calcul la somme montantFacture des facture d'accompte
        var sommeMontantFacture = 0;
        var montantFactureRestant = 0;
        for (var facture in this.listFactureAccompte) {
            if (this.listFactureAccompte.hasOwnProperty(facture)) {
                sommeMontantFacture += this.listFactureAccompte[facture].montantFacture;
            }
        }
        // Vérif si somme des Montants Facturés est égale montant TTC total de la facture
        if (this.factureGlobal.montantTtcTotal > sommeMontantFacture) {
            // Calcul montant facturé max restant
            montantFactureRestant = this.factureGlobal.montantTtcTotal - sommeMontantFacture;
            // Generate form and set values
            this.generateForm();
            var latest_date = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
            this.factureForm.get('ref_factureAccompte').setValue(this.factureGlobal.ref_factureGlobal);
            this.factureForm.get('date_creation').setValue(latest_date);
            this.factureGlobal.date_creation = latest_date;
            this.factureForm.get('montantFacture').setValue(montantFactureRestant.toFixed(2));
            this.factureAccompte.montantFacture = montantFactureRestant;
            this.mode = true;
        }
        else {
            this.flashMessages.show('Création impossible : le montant total de la facture est égal à la somme des montants facturés', {
                classes: ['alert', 'alert-warning'],
                timeout: 6000
            });
        }
    };
    /**
     * onUpdate:
     * - generate ReglementForm
     * - get All reglement by FactureAccompte._id
     *
     * @param {FactureAccompte} factureAccompte FactureAccompte
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.onAddReglement = function (factureAccompte) {
        this.reglementComplet = false;
        this.generateForm();
        this.generateReglementForm();
        this.getAllReglementByFactureAccompte(factureAccompte._id);
        this.reglement = {};
        this.factureAccompte = factureAccompte;
        var latest_date = this.datePipe.transform(this.factureAccompte.date_creation, 'yyyy-MM-dd');
        this.factureAccompte.date_creation = latest_date;
        this.reglementForm.get('date_creation').setValue(latest_date);
        this.modeAddReglement = true;
        this.mode = false;
    };
    FactureAccompteComponent.prototype.onReglementComplet = function () {
        this.reglementComplet = !this.reglementComplet;
        if (this.reglementComplet) {
            var reglementRestant = this.factureAccompte.montantFacture - this.factureAccompte.reglementClient;
            this.reglementForm.get('reglementTtc').setValue(reglementRestant);
            this.validationReglement = false;
        }
        else {
            this.reglementForm.get('reglementTtc').setValue(0);
        }
    };
    /**
     * Cancel button
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.onCancel = function () {
        this.generateForm();
        this.generateReglementForm();
        this.mode = false;
        this.modeAddReglement = false;
        this.validationMontantFacture = false;
        this.validationRef = false;
        this.validationReglement = false;
        this.reglementComplet = false;
        this.factureAccompte = {};
        this.reglement = {};
    };
    /**
     * Generate form add facture accompte
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.generateForm = function () {
        this.factureForm = this.formBuilder.group({
            ref_factureAccompte: [this.factureGlobal.ref_factureGlobal, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            date_creation: [Date.now],
            montantFacture: [this.factureAccompte.montantFacture, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    this.isNumber
                ])],
            factureGlobal: [{ value: this.factureAccompte.factureGlobal, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
    };
    /**
     * Generate form add reglement
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.generateReglementForm = function () {
        this.reglementForm = this.formBuilder.group({
            ref_factureAccompte: [{ value: this.factureAccompte.ref_factureAccompte, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            date_creation: [{ value: this.factureAccompte.date_creation }],
            montantFacture: [{ value: this.factureAccompte.montantFacture, disabled: true }],
            reglementTtc: [this.factureAccompte.reglementClient, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    this.isNumber
                ])]
        });
    };
    /**
     * Disable facture accompte form controls
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.disableFactureForm = function () {
        this.factureForm.disable();
    };
    /**
     * Disable reglement form controls
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.disableReglementForm = function () {
        this.reglementForm.disable();
    };
    /**
     * Enable Facture accompte form controls on error
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.enableFactureForm = function () {
        this.factureForm.controls['ref_factureAccompte'].enable();
        this.factureForm.controls['date_creation'].enable();
        this.factureForm.controls['montantFacture'].enable();
    };
    /**
     * Enable reglement form controls on error
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.enableReglementForm = function () {
        this.reglementForm.controls['date_creation'].enable();
        this.reglementForm.controls['reglementTtc'].enable();
    };
    /**
     * Somme montantFacture
     *
     * @returns {string} somme
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getSumMontantFacture = function () {
        var sum = 0;
        for (var fact in this.listFactureAccompte) {
            if (this.listFactureAccompte.hasOwnProperty(fact)) {
                sum += this.listFactureAccompte[fact].montantFacture;
            }
        }
        return sum.toFixed(2);
    };
    /**
     * Somme reglementClient
     *
     * @returns {string} somme
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.getSumReglementClient = function () {
        var sum = 0;
        for (var fact in this.listFactureAccompte) {
            if (this.listFactureAccompte.hasOwnProperty(fact)) {
                sum += this.listFactureAccompte[fact].reglementClient;
            }
        }
        return sum.toFixed(2);
    };
    // VALIDATIONS
    /**
     * Check if controls.value is a number
     *
     * @param {any} controls value to check
     * @returns
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.isNumber = function (controls) {
        var regExp = new RegExp(/^[0-9]{0,20}(\.[0-9]{0,4})?$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return {
                isNumber: true
            };
        }
    };
    /**
     *
     * (blur) listener : Verification de la ref_factureAccompte.
     * - si data.success === true && ref != factureAccompte.ref => ref_factureAccompte utilisée => validationRef = true,
     * - si data.success === false => ref_factureAccompte non utilisée => validationRef = false
     * @returns {boolean} set validationRef
     * @memberof ValiderDevisComponent
     */
    FactureAccompteComponent.prototype.verifRef = function () {
        var _this = this;
        this.factureAccompteService.getOneFactureAccompteByRef(this.factureGlobal._id, this.factureForm.get('ref_factureAccompte').value)
            .subscribe(function (data) {
            if (data.success) {
                // onUpdate : Vérif si ref dans l'input == ref initial du factureAccompte 
                if (_this.factureForm.get('ref_factureAccompte').value !== _this.factureAccompte.ref_factureAccompte) {
                    return _this.validationRef = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
        return this.validationRef = false;
    };
    /**
     * (blur) listener : Vérification du montantFacturé de la facture accompte
     *
     * @returns {boolean} set validationMontantFacture
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.verifMontantFacture = function () {
        var montantRestant = this.factureGlobal.montantTtcTotal - this.factureGlobal.montantTtcFacture;
        if (this.factureForm.get('montantFacture').value > montantRestant) {
            return this.validationMontantFacture = true;
        }
        return this.validationMontantFacture = false;
    };
    /**
     * (blur) listener : Vérifiaction du reglement de la facture accompte
     *
     * @returns {boolean} set validationReglement
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.verifReglement = function () {
        var reglementRestant = this.factureAccompte.montantFacture - this.factureAccompte.reglementClient;
        if (this.reglementForm.get('reglementTtc').value > reglementRestant) {
            return this.validationReglement = true;
        }
        return this.validationReglement = false;
    };
    /**
     * OnInit :
     * check if params['id_fact'] set into url.
     * - set this.id_fact = params['id_fact'].
     * - get Devis using this.id_fact.
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.ngOnInit = function () {
        if (this.activatedRoute.snapshot.params['id_fact'] !== undefined) {
            this.id_fact = this.activatedRoute.snapshot.params['id_fact'];
            if (__WEBPACK_IMPORTED_MODULE_9__environments_config__["a" /* historique */]) {
                this.getAllValidFactureAccompteByFactureGlobal(this.id_fact);
            }
            else {
                this.getAllFactureAccompteByFactureGlobal(this.id_fact);
            }
            this.getOneFactureGlobal(this.id_fact);
        }
        else {
            this.router.navigate(['/pageNotFound']);
        }
    };
    return FactureAccompteComponent;
}());
FactureAccompteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-facture-accompte',
        template: __webpack_require__("../../../../../src/app/components/facture-accompte/facture-accompte.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/facture-accompte/facture-accompte.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_facture_accompte_service__["a" /* FactureAccompteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_facture_accompte_service__["a" /* FactureAccompteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_client_service__["a" /* ClientService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__service_reglement_service__["a" /* ReglementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_reglement_service__["a" /* ReglementService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _j || Object])
], FactureAccompteComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=facture-accompte.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/facture-global/facture-global.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-factGlobal {\r\n  margin-top: -21px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/facture-global/facture-global.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-factGlobal\">\r\n    <h4 style=\"text-align: center;\">Factures</h4>\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Statut</th>\r\n                <th>Ref</th>\r\n                <th>Date</th>\r\n                <th>Montant total TTC</th>\r\n                <th>Montant facturé TTC</th>\r\n                <th>Montant réglé</th>\r\n                <th>Client</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let f of listFactureGlobals | orderByDate: 'date_creation'\">\r\n                <td *ngIf=\"f.status_factureGlobal\">\r\n                    <img src=\"{{status_true}}\" alt=\"true\">\r\n                </td>\r\n                <td *ngIf=\"!f.status_factureGlobal\">\r\n                    <img src=\"{{status_false}}\" alt=\"false\">\r\n                </td>\r\n                <td>{{f.ref_factureGlobal}}</td>\r\n                <td>{{f.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n                <td>{{f.montantTtcTotal.toFixed(2)}}</td>\r\n                <td>{{f.montantTtcFacture.toFixed(2)}}</td>\r\n                <td>{{f.montantTtcRegle.toFixed(2)}}</td>\r\n                <td>{{client.nom}} {{client.prenom}}</td>\r\n                <td>\r\n                    <div class=\"btn-group-vertical\">\r\n                        <a class=\"btn btn-success\" [routerLink]=\"['/facture/facture-accompte', f._id]\">Consulter</a>\r\n                        <button class=\"btn btn-warning\" (click)=\"onUpdate(f)\">Modifier</button>\r\n                        <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal1\" (click)=\"getFactureGlobalToDelete(f)\">Supprimer</button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"color-sum\" *ngIf=\"listFactureGlobals.length > 0\">\r\n                <th>Total</th>\r\n                <th>:</th>\r\n                <th></th>\r\n                <th>{{getSumMontantTotal()}}</th>\r\n                <th>{{getSumMontantFacture()}}</th>\r\n                <th>{{getSumMontantRegle()}}</th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <br/>\r\n    <br/>\r\n\r\n    <!-- Confirm delete Modal -->\r\n    <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <!-- Modal content-->\r\n            <form #modalForm=\"ngForm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <p>Etes-vous sûr de vouloir supprimer {{factureGlobal.ref_factureGlobal}} ?</p>\r\n                        <div *ngIf=\"historique\">\r\n                            <label for=\"descriptionModif\">Description :</label>\r\n                            <input type=\"text\" name=\"descriptionModif\" id=\"descriptionModif\" class=\"form-control\" placeholder=\"Expliquer la modification\"\r\n                                [(ngModel)]=\"descriptionModif\" required />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button class=\"btn btn-danger\" [disabled]=\"!modalForm.form.valid\" (click)=\"onDelete(factureGlobal)\" data-dismiss=\"modal\">Supprimer</button>\r\n                        <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Update facture global form -->\r\n    <div class=\"container-fluid\" *ngIf=\"mode\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <h4>Facture Global</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\" [formGroup]=\"factureForm\" (submit)=\"updateFacture()\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (factureForm.controls.ref_factureGlobal.errors && factureForm.controls.ref_factureGlobal.dirty) || (validationRef && factureForm.controls.ref_factureGlobal.dirty),\r\n                    'has-success': (!factureForm.controls.ref_factureGlobal.errors && !validationRef)}\">\r\n                        <label class=\"control-label\" for=\"ref_factureGlobal\">Ref :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"ref_factureGlobal\" id=\"ref_factureGlobal\" formControlName=\"ref_factureGlobal\"\r\n                            value=\"{{factureGlobal.ref_factureGlobal}}\" (blur)=\"verifRef()\" autofocus required />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"factureForm.controls.ref_factureGlobal.errors?.required && factureForm.controls.ref_factureGlobal.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationRef\">\r\n                                Ref déjà utilisée\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n                        <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{factureGlobal.date_creation}}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"montantTtcTotal\">Montant TTC :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantTtcTotal\" id=\"montantTtcTotal\" formControlName=\"montantTtcTotal\" value=\"{{factureGlobal.montantTtcTotal.toFixed(2)}}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"client\">Client :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"client\" id=\"client\" formControlName=\"client\" value=\"{{client.nom}} {{client.prenom}}\"\r\n                            required />\r\n                    </div>\r\n                    <div *ngIf=\"historique\" class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"descriptionModif\">Description :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"descriptionModif\" id=\"descriptionModif\" placeholder=\"Expliquer la modification\"\r\n                            formControlName=\"descriptionModif\" value=\"{{descriptionModif}}\" required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                        <button [disabled]=\"!factureForm.valid || processing || validationRef\" type=\"submit\" class=\"btn btn-success\">Modifier</button>\r\n                        <button [disabled]=\"processing\" class=\"btn btn-default\" (click)=\"onCancel()\">Annuler</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/facture-global/facture-global.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureGlobalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_factureGlobal__ = __webpack_require__("../../../../../src/app/models/factureGlobal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_facture_accompte_service__ = __webpack_require__("../../../../../src/app/service/facture-accompte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_config__ = __webpack_require__("../../../../../src/environments/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Models


// Services




/**
 *
 * @author Paul GUINARD
 * @export
 * @class FactureGlobalComponent
 * @implements {OnInit}
 */
var FactureGlobalComponent = (function () {
    /**
     * Creates an instance of FactureGlobalComponent.
     * @param {ActivatedRoute} activatedRoute request routes params
     * @param {FactureGlobalService} factureGlobalService facture global service
     * @param {FactureAccompteService} factureAccompteService facture accompte service
     * @param {ClientService} clientService client service
     * @param {DatePipe} datePipe format date
     * @param {FormBuilder} formBuilder Reactive form builder
     * @param {FlashMessagesService} flashMessages Angular flash message
     * @memberof FactureGlobalComponent
     */
    function FactureGlobalComponent(activatedRoute, factureGlobalService, factureAccompteService, clientService, datePipe, formBuilder, flashMessages) {
        this.activatedRoute = activatedRoute;
        this.factureGlobalService = factureGlobalService;
        this.factureAccompteService = factureAccompteService;
        this.clientService = clientService;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.flashMessages = flashMessages;
        /**
         * facture global
         *
         * @type {*}
         * @memberof FactureGlobalComponent
         */
        this.factureGlobal = {};
        /**
         * list factures globals
         *
         * @type {FactureGlobal[]}
         * @memberof FactureGlobalComponent
         */
        this.listFactureGlobals = [];
        /**
         * client
         *
         * @memberof FactureGlobalComponent
         */
        this.client = new __WEBPACK_IMPORTED_MODULE_5__models_client__["a" /* Client */]();
        /**
         *
         * mode form
         * @memberof FactureGlobalComponent
         */
        this.mode = false;
        /**
         * on process
         *
         * @memberof FactureGlobalComponent
         */
        this.processing = false;
        // Status images
        /**
         * image status true
         *
         * @memberof FactureGlobalComponent
         */
        this.status_true = '../../assets/images/status_true.png';
        /**
         * image status false
         *
         * @memberof FactureGlobalComponent
         */
        this.status_false = '../../assets/images/status_false.png';
        this.generateForm();
        this.validationRef = false;
    }
    /**
     * Get all Facture Global.
     * Method used when no params set into url.
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.getAllFactureGlobal = function () {
        var _this = this;
        this.factureGlobalService.getAllFactureGlobal()
            .subscribe(function (factureGlobal) { return _this.listFactureGlobals = factureGlobal; }, function (error) { return console.log('Error ' + error); });
    };
    /**
     * Get All Valid facture global by client
     *
     * @param {any} client_id client id
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.getAllValidFactureGlobalByClient = function (client_id) {
        var _this = this;
        this.listFactureGlobals = [];
        this.factureGlobalService.getAllFactureGlobalByClient(client_id)
            .subscribe(function (fact) {
            for (var f in fact) {
                if (fact.hasOwnProperty(f)) {
                    if (fact[f].valid) {
                        _this.listFactureGlobals.push(fact[f]);
                    }
                }
            }
        }, function (err) { return console.log('Could not load valid factures'); });
    };
    /**
     * Get All Facture Global By Client._id.
     * Method used when params client._id set into url.
     *
     * @param {number} id client._id
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.getAllFactureGlobalByClient = function (id) {
        var _this = this;
        this.factureGlobalService.getAllFactureGlobalByClient(id)
            .subscribe(function (factureGlobal) { return _this.listFactureGlobals = factureGlobal; }, function (error) { return console.log('Error ' + error); });
    };
    /**
     * Get One Client by Id.
     * Method used to display client.nom, client.prenom in table and form.
     *
     * @param {number} id client._id
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.getClient = function (id) {
        var _this = this;
        this.clientService.getOneClient(id)
            .subscribe(function (client) { return _this.client = client; }, function (error) { return console.log('Error ' + error); });
    };
    /**
     * Display factureForm.
     * Set factureForm.value = facture global data to update.
     *
     * @param {FactureGlobal} facture facture global body
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.onUpdate = function (facture) {
        this.mode = true;
        this.factureGlobal = facture;
        var latest_date = this.datePipe.transform(this.factureGlobal.date_creation, 'yyyy-MM-dd');
        this.factureGlobal.date_creation = latest_date;
        this.factureForm.get('ref_factureGlobal').setValue(this.factureGlobal.ref_factureGlobal);
        this.factureForm.get('date_creation').setValue(latest_date);
        this.factureForm.get('montantTtcTotal').setValue(this.factureGlobal.montantTtcTotal);
        this.factureForm.get('client').setValue(this.factureGlobal.client);
    };
    /**
     * Update Facture global
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.updateFacture = function () {
        var _this = this;
        this.disableForm();
        this.processing = true;
        if (__WEBPACK_IMPORTED_MODULE_10__environments_config__["a" /* historique */]) {
            var newFacture = {
                status_factureGlobal: this.factureGlobal.status_factureGlobal,
                ref_factureGlobal: this.factureForm.get('ref_factureGlobal').value,
                date_creation: this.factureForm.get('date_creation').value,
                montantHt: this.factureGlobal.montantHt,
                tauxTva: this.factureGlobal.tauxTva,
                montantTtcTotal: this.factureGlobal.montantTtcTotal,
                montantTtcFacture: this.factureGlobal.montantTtcFacture,
                montantTtcRegle: this.factureGlobal.montantTtcRegle,
                client: this.factureGlobal.client,
                devis: this.factureGlobal.devis
            };
            this.factureGlobalService.addFactureGlobal(newFacture)
                .subscribe(function (data) {
                _this.flashMessages.show('Facture modifiée', {
                    classes: ['alert', 'alert-success'],
                    timeout: 3000
                });
            }, function (error) {
                console.log('Erreur ' + error);
                _this.flashMessages.show('Erreur : Facture non modifiée', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                _this.processing = false;
                _this.enableForm();
            });
            // Set old facture global data
            this.factureGlobal.description = this.factureForm.get('descriptionModif').value;
            this.factureGlobal.valid = false;
            this.factureGlobalService.updateFactureGlobal(this.factureGlobal)
                .subscribe(function (data) {
                _this.onSuccess();
            }, function (error) {
                console.log('Erreur ' + error);
                _this.flashMessages.show('Erreur : Facture non modifiée', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                _this.processing = false;
                _this.enableForm();
            });
        }
        else {
            var newFacture = new __WEBPACK_IMPORTED_MODULE_6__models_factureGlobal__["a" /* FactureGlobal */]({
                _id: this.factureGlobal._id,
                status_factureGlobal: this.factureGlobal.status_factureGlobal,
                ref_factureGlobal: this.factureForm.get('ref_factureGlobal').value,
                date_creation: this.factureForm.get('date_creation').value,
                montantHt: this.factureGlobal.montantHt,
                tauxTva: this.factureGlobal.tauxTva,
                montantTtcTotal: this.factureGlobal.montantTtcTotal,
                montantTtcFacture: this.factureGlobal.montantTtcFacture,
                montantTtcRegle: this.factureGlobal.montantTtcRegle,
                client: this.factureGlobal.client,
                devis: this.factureGlobal.devis
            });
            this.factureGlobalService.updateFactureGlobal(newFacture)
                .subscribe(function (data) {
                _this.flashMessages.show('Facture modifiée', {
                    classes: ['alert', 'alert-success'],
                    timeout: 3000
                });
                _this.onSuccess();
            }, function (err) {
                console.log('Erreur ' + err);
                _this.flashMessages.show('Erreur : Facture non modifiée', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                _this.processing = false;
                _this.enableForm();
            });
        }
    };
    /**
     * Change param valid facture global to false
     *
     * @param {FactureGlobal} factureGlobal facture global body
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.onDelete = function (factureGlobal) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_10__environments_config__["a" /* historique */]) {
            var factValid_1 = false;
            this.factureAccompteService.getAllFactureAccompteByFactureGlobal(factureGlobal._id)
                .subscribe(function (data) {
                if (data.length > 0) {
                    for (var f in data) {
                        if (data.hasOwnProperty(f)) {
                            if (data[f].valid) {
                                factValid_1 = true;
                            }
                        }
                    }
                }
                if (data.length === 0 || factValid_1 === false) {
                    factureGlobal.valid = false;
                    factureGlobal.updated_at = new Date();
                    factureGlobal.description = _this.descriptionModif;
                    _this.factureGlobalService.updateFactureGlobal(factureGlobal)
                        .subscribe(function (factureData) {
                        _this.flashMessages.show('Facture supprimée', {
                            classes: ['alert', 'alert-warning'],
                            timeout: 3000
                        });
                        _this.onSuccess();
                        _this.descriptionModif = '';
                    }, function (error) {
                        console.log(error);
                        _this.flashMessages.show('Erreur: Facture non supprimée', {
                            classes: ['alert', 'alert-danger'],
                            timeout: 3000
                        });
                        _this.factureGlobal = {};
                    });
                }
                else {
                    _this.flashMessages.show('Suppression impossible ! La facture est associée à des factures d\'accomptes', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    _this.factureGlobal = {};
                    _this.descriptionModif = '';
                }
            }, function (err) { return console.log('Erreur :' + err); });
        }
        else {
            this.factureAccompteService.getAllFactureAccompteByFactureGlobal(factureGlobal._id)
                .subscribe(function (data) {
                if (data.length === 0) {
                    _this.factureGlobalService.deleteFactureGlobal(factureGlobal._id)
                        .subscribe(function (msg) {
                        _this.flashMessages.show('Facture supprimée', {
                            classes: ['alert', 'alert-warning'],
                            timeout: 3000
                        });
                        _this.onSuccess();
                    }, function (error) {
                        console.log(error);
                        _this.flashMessages.show('Erreur: Facture non supprimée', {
                            classes: ['alert', 'alert-danger'],
                            timeout: 3000
                        });
                        _this.factureGlobal = {};
                    });
                }
                else {
                    _this.flashMessages.show('Suppression impossible ! La facture est associée à des factures d\'accomptes', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                    _this.factureGlobal = {};
                }
            }, function (err) { return console.log('Erreur :' + err); });
        }
    };
    /**
     * Store Facture global data to delete.
     * Confirm modal implementation
     *
     * @param {FactureGlobal} factureGlobal facture global body
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.getFactureGlobalToDelete = function (factureGlobal) {
        this.factureGlobal = factureGlobal;
    };
    /**
     * on close modal
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.closeModal = function () {
        this.factureGlobal = {};
    };
    /**
     * Update Status Client si :
     * - update/delete FactureGlobal => Success.
     * - AllFactureGlobalByClient.status === true
     *
     * @param {Client} client
     * @memberof ValiderDevisComponent
     */
    FactureGlobalComponent.prototype.updateStatusClient = function (client) {
        var _this = this;
        var status_client = true;
        // Fetch Facture Globals from Database
        this.factureGlobalService.getAllFactureGlobalByClient(client._id)
            .subscribe(function (FactureGlobals) {
            // Check each factureGlobal.status dans listFactureGlobals
            if (FactureGlobals.length > 0) {
                for (var factureGlobal in FactureGlobals) {
                    if (FactureGlobals.hasOwnProperty(factureGlobal)) {
                        if (FactureGlobals[factureGlobal].status_factureGlobal === false) {
                            status_client = false;
                        }
                    }
                }
            }
            else {
                status_client = false;
            }
            // Check difference entre status_facture et status_client avant de requêter à la database
            // si status_facture === true && status_client !== true || 
            // status_facture === false && status_client !== false
            if ((status_client && _this.client.status_client !== true) || (!status_client && _this.client.status_client === true)) {
                _this.clientService.updateStatus(client, status_client)
                    .subscribe(function (data) { return console.log('Status client mis à jour'); }, function (err) { return console.log('Erreur mis à jour status client :' + err); });
            }
        }, function (err) { return console.log(err); });
    };
    /**
     * Method to fetch modified data from database and display into table.
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.onSuccess = function () {
        this.updateStatusClient(this.client);
        this.generateForm();
        this.mode = false;
        this.factureGlobal = {};
        this.processing = false;
        if (__WEBPACK_IMPORTED_MODULE_10__environments_config__["a" /* historique */]) {
            this.getAllValidFactureGlobalByClient(this.id_client);
        }
        else {
            this.getAllFactureGlobalByClient(this.id_client);
        }
    };
    /**
     * on cancel form
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.onCancel = function () {
        this.mode = false;
        this.processing = false;
        this.generateForm();
        this.factureGlobal = {};
    };
    /**
     * Generate Reactive Form
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.generateForm = function () {
        this.factureForm = this.formBuilder.group({
            ref_factureGlobal: [this.factureGlobal.ref_factureGlobal, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            date_creation: [this.factureGlobal.date_creation],
            montantTtcTotal: [{ value: this.factureGlobal.montantTtc, disabled: true }],
            client: [{ value: this.factureGlobal.client, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            descriptionModif: [this.factureGlobal.description]
        });
    };
    /**
     * Enable form controls
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.enableForm = function () {
        this.factureForm.controls['ref_factureGlobal'].enable();
        this.factureForm.controls['date_creation'].enable();
    };
    /**
     * Disable form controls
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.disableForm = function () {
        this.factureForm.disable();
    };
    /**
     * NOT USED
     * (blur) listenner.
     * Calcul montantTTC using tauxTva and montantHt values of factureForm and send new montantTtc.
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.calculMontant = function () {
        if (!(this.factureForm.controls['montantHt'].value === '') && !(this.factureForm.controls['tauxTva'].value === '')) {
            var montantTTC = this.factureForm.controls['montantHt'].value + this.factureForm.controls['tauxTva'].value;
            this.factureForm.controls['montantTtc'].setValue(Number(montantTTC).toFixed(2));
            this.factureGlobal.montantTtc = Number(montantTTC).toFixed(2);
        }
    };
    /**
     * somme montant total
     *
     * @returns {string} somme
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.getSumMontantTotal = function () {
        var sum = 0;
        for (var fact in this.listFactureGlobals) {
            if (this.listFactureGlobals.hasOwnProperty(fact)) {
                sum += this.listFactureGlobals[fact].montantTtcTotal;
            }
        }
        return sum.toFixed(2);
    };
    /**
     * somme montant facturé
     *
     * @returns {string} somme
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.getSumMontantFacture = function () {
        var sum = 0;
        for (var fact in this.listFactureGlobals) {
            if (this.listFactureGlobals.hasOwnProperty(fact)) {
                sum += this.listFactureGlobals[fact].montantTtcFacture;
            }
        }
        return sum.toFixed(2);
    };
    /**
     * somme montant réglé
     *
     * @returns {string} somme
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.getSumMontantRegle = function () {
        var sum = 0;
        for (var fact in this.listFactureGlobals) {
            if (this.listFactureGlobals.hasOwnProperty(fact)) {
                sum += this.listFactureGlobals[fact].montantTtcRegle;
            }
        }
        return sum.toFixed(2);
    };
    /**
     *
     * (blur) listener : Verification de la ref_factureGlobal.
     * - si data.success === true && ref != factureGlobal.ref => ref_factureGlobal utilisée => validationRef = true,
     * - si data.success === false => ref_factureGlobal non utilisée => validationRef = false
     *
     * @memberof ValiderDevisComponent
     */
    FactureGlobalComponent.prototype.verifRef = function () {
        var _this = this;
        this.validationRef = false;
        this.factureGlobalService.getOneFactureGlobalByRef(this.client._id, this.factureForm.get('ref_factureGlobal').value)
            .subscribe(function (data) {
            if (data.success) {
                // onUpdate : Vérif si ref dans l'input == ref initial de la facture global 
                if (_this.factureForm.get('ref_factureGlobal').value !== _this.factureGlobal.ref_factureGlobal) {
                    return _this.validationRef = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
        return this.validationRef;
    };
    /**
     * OnInit :
     * check if params['id_client'] set into url.
     * - set this.id_client = params['id_client'].
     * - get Devis using this.id_client.
     *
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.ngOnInit = function () {
        // différentes routes à implémenter pour le dashboard
        if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
            this.id_client = this.activatedRoute.snapshot.params['id_client'];
            if (__WEBPACK_IMPORTED_MODULE_10__environments_config__["a" /* historique */]) {
                this.getAllValidFactureGlobalByClient(this.id_client);
            }
            else {
                this.getAllFactureGlobalByClient(this.id_client);
            }
            this.getClient(this.id_client);
        }
        else {
            this.getAllFactureGlobal();
        }
    };
    return FactureGlobalComponent;
}());
FactureGlobalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-facture-global',
        template: __webpack_require__("../../../../../src/app/components/facture-global/facture-global.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/facture-global/facture-global.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__service_facture_accompte_service__["a" /* FactureAccompteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_facture_accompte_service__["a" /* FactureAccompteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_client_service__["a" /* ClientService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _g || Object])
], FactureGlobalComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=facture-global.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed {\r\n    position: fixed;\r\n    margin-top: -120px;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.cursor {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-inverse fixed\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" routerLink=\"client\">\r\n                <img style=\"margin-top: -12px;\" src=\"../../../assets/images/GP.png\" alt=\"G & P\">\r\n            </a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav\">\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"dashboard\">Dashboard</a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"client\">Client</a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"bug\">Bug</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav> -->\r\n\r\n<nav class=\"navbar navbar-inverse fixed\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" routerLink=\"client\">\r\n                <img style=\"margin-top: -12px;\" src=\"../../../assets/images/GP.png\" alt=\"G & P\">\r\n            </a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav\">\r\n            <li *ngIf=\"_authService.loggedIn() && historique\" routerLinkActive=\"active\">\r\n                <a routerLink=\"dashboard\">Dashboard</a>\r\n            </li>\r\n            <li *ngIf=\"_authService.loggedIn()\" routerLinkActive=\"active\">\r\n                <a routerLink=\"client\">Client</a>\r\n            </li>\r\n            <!-- <li routerLinkActive=\"active\"><a routerLink=\"devis\">Devis / Facture</a></li>\r\n            <li routerLinkActive=\"active\"><a [routerLink]=\"['facture/facture-accompte']\">Facture</a></li> -->\r\n            <li *ngIf=\"_authService.loggedIn()\" routerLinkActive=\"active\">\r\n                <a routerLink=\"bug\">Bug</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li *ngIf=\"!_authService.loggedIn()\" routerLinkActive=\"active\">\r\n                <a routerLink=\"login\">\r\n                    <span class=\"glyphicon glyphicon-log-in\"></span> Se connecter</a>\r\n            </li>\r\n            <li *ngIf=\"_authService.loggedIn()\" routerLinkActive=\"active\">\r\n                <a routerLink=\"register\">\r\n                    <span class=\"glyphicon glyphicon-user\"></span> Créer un compte</a>\r\n            </li>\r\n            <li *ngIf=\"_authService.loggedIn()\">\r\n                <a class=\"cursor\" (click)=\"onLogout()\">\r\n                    <span class=\"glyphicon glyphicon-log-out\"></span> Se déconnecter</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 *
 * @author Paul GUINARD
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
var NavbarComponent = (function () {
    function NavbarComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    /**
    * On Logout :
    * - clear token and user on localStorage
    * - navigate HomePage
    * @memberof NavbarComponent
    */
    NavbarComponent.prototype.onLogout = function () {
        this._authService.clearLocalStorage();
        this._router.navigate(['/']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center\">\r\n    <h2>ERREUR : Page Not Found</h2>\r\n    <a routerLink=\"/client\" class=\"btn btn-primary\">Retour</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 *
 * @author Paul GUINARD
 * @export
 * @class PageNotFoundComponent
 * @implements {OnInit}
 */
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/valider-devis/valider-devis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/valider-devis/valider-devis.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"col-sm-3\"></span>\r\n<div class=\"container col-sm-6\">\r\n    <div class=\"panel panel-info\">\r\n        <div class=\"panel-heading\">\r\n            <h4>Valider Devis</h4>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <form class=\"form-horizontal\" [formGroup]=\"validerDevisForm\" (submit)=\"validerDevis()\">\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': (validerDevisForm.controls.ref_factureGlobal.errors && validerDevisForm.controls.ref_factureGlobal.dirty) \r\n                || (validationRef && validerDevisForm.controls.ref_factureGlobal.dirty),\r\n                'has-success': (!validerDevisForm.controls.ref_factureGlobal.errors && !validationRef)}\">\r\n                    <label class=\"control-label\" for=\"ref_factureGlobal\">Ref :</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"ref_factureGlobal\" id=\"ref_factureGlobal\" formControlName=\"ref_factureGlobal\"\r\n                        value=\"{{devis.ref_devis}}\" (blur)=\"verifRef()\" autofocus required />\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationRef\">\r\n                            Ref déjà utilisée\r\n                        </li>\r\n                        <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validerDevisForm.controls.ref_factureGlobal.errors?.required && validerDevisForm.controls.ref_factureGlobal.dirty\">\r\n                            Ce champ est requis\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n                    <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{devis.date_creation}}\"\r\n                    />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"montantHt\">Montant HT :</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"montantHt\" id=\"montantHt\" formControlName=\"montantHt\" value=\"{{devis.montantHt}}\"\r\n                        (blur)=\"calculMontant()\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"tauxTva\">Taux TVA :</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"tauxTva\" id=\"tauxTva\" formControlName=\"tauxTva\" value=\"{{devis.tauxTva}}\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"montantTtcTotal\">Montant Total Facture TTC :</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"montantTtcTotal\" id=\"montantTtcTotal\" formControlName=\"montantTtcTotal\" value=\"{{devis.montantTtc}}\"\r\n                    />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"client\">Client :</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"client\" id=\"client\" formControlName=\"client\" value=\"{{client.nom}} {{client.prenom}}\"\r\n                    />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                    <button [disabled]=\"!validerDevisForm.valid || processing || validationRef\" type=\"submit\" class=\"btn btn-success\">Sauver</button>\r\n                    <button [disabled]=\"processing\" class=\"btn btn-default\" (click)=\"onCancel()\">Annuler</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<span class=\"col-sm-3\"></span>"

/***/ }),

/***/ "../../../../../src/app/components/valider-devis/valider-devis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValiderDevisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_factureGlobal__ = __webpack_require__("../../../../../src/app/models/factureGlobal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Services




/**
 *
 * @author Paul GUINARD
 * @export
 * @class ValiderDevisComponent
 * @implements {OnInit}
 */
var ValiderDevisComponent = (function () {
    /**
     * Creates an instance of ValiderDevisComponent.
     * @param {DatePipe} datePipe format date
     * @param {FormBuilder} formBuilder reactive form builder
     * @param {ActivatedRoute} activatedRoute request routes params
     * @param {Router} router redirect to route
     * @param {DevisService} devisService devis service
     * @param {ClientService} clientService client service
     * @param {FactureGlobalService} factureGlobalService facture global service
     * @param {FlashMessagesService} flashMessages Angular flash messages
     * @memberof ValiderDevisComponent
     */
    function ValiderDevisComponent(datePipe, formBuilder, activatedRoute, router, devisService, clientService, factureGlobalService, flashMessages) {
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.devisService = devisService;
        this.clientService = clientService;
        this.factureGlobalService = factureGlobalService;
        this.flashMessages = flashMessages;
        /**
         * devis
         *
         * @type {*}
         * @memberof ValiderDevisComponent
         */
        this.devis = {};
        /**
         * client
         *
         * @memberof ValiderDevisComponent
         */
        this.client = new __WEBPACK_IMPORTED_MODULE_5__models_client__["a" /* Client */]();
        /**
         * facture global
         *
         * @memberof ValiderDevisComponent
         */
        this.factureGlobal = new __WEBPACK_IMPORTED_MODULE_6__models_factureGlobal__["a" /* FactureGlobal */]();
        /**
         * on process
         *
         * @memberof ValiderDevisComponent
         */
        this.processing = false;
        this.generateForm();
    }
    /**
     * Get ALL Client.
       * Used for Select Option on add/update Devis Form
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.getAllClient = function () {
        var _this = this;
        this.clientService.getAllClients()
            .subscribe(function (clients) { return _this.listClient = clients; }, function (error) { return console.log('Error ' + error); });
    };
    ;
    /**
     * GET ONE CLIENT.
       * Used to display client.nom & client.prenom to the form
     *
     * @param {number} id client._id
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.getOneClient = function (id) {
        var _this = this;
        this.clientService.getOneClient(id)
            .subscribe(function (client) { return _this.client = client; }, function (error) { return console.log('Error ' + error); });
    };
    ;
    /**
     * GET ONE DEVIS.
     * une fois le devis obtenu de la database :
     * - set date_creation au format géré par input type="date".
     * - cherche client à partir de l'id du devis.client.
     *
     * @param {number} id devis._id
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.getOneDevis = function (id) {
        var _this = this;
        this.devisService.getOneDevis(id)
            .subscribe(function (devis) {
            _this.devis = devis;
            // Change devis.date_creation
            var latest_date = _this.datePipe.transform(_this.devis.date_creation, 'yyyy-MM-dd');
            _this.devis.date_creation = latest_date;
            _this.getOneClient(_this.devis.client);
            _this.generateForm();
        }, function (error) { return console.log('Error ' + error); });
    };
    ;
    /**
     * Create Facture Global using this.devis data
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.validerDevis = function () {
        var _this = this;
        this.disableForm();
        this.processing = true;
        // Set newFacture body
        var newFacture = this.validerDevisForm.value;
        newFacture.montantTtcTotal = this.devis.montantTtc;
        newFacture.client = this.devis.client;
        newFacture.montantHt = this.devis.montantHt;
        newFacture.tauxTva = this.devis.tauxTva;
        newFacture.devis = this.devis._id;
        // Send body to addFactureGlobal method in factureGlobalService
        this.factureGlobalService.addFactureGlobal(newFacture)
            .subscribe(function (data) {
            _this.flashMessages.show(data.message, {
                classes: ['alert', 'alert-success'],
                timeout: 3000
            });
            _this.onSuccess();
        }, function (error) {
            _this.processing = false;
            console.log('Error ' + error);
            _this.flashMessages.show('Erreur création facture', {
                classes: ['alert', 'alert-danger'],
                timeout: 3000
            });
            _this.enableForm();
        });
    };
    /**
     * Update Status Client si :
     * - valider Devis => Success.
     * - AllFactureGlobalByClient.status === true
     *
     * @param {Client} client
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.updateStatusClient = function (client) {
        var _this = this;
        var status_facture = true;
        // Fetch Facture Globals from Database
        this.factureGlobalService.getAllFactureGlobalByClient(client._id)
            .subscribe(function (FactureGlobals) {
            // Check each factureGlobal.status dans listFactureGlobals       
            if (FactureGlobals !== null) {
                for (var factureGlobal in FactureGlobals) {
                    if (FactureGlobals.hasOwnProperty(factureGlobal)) {
                        if (FactureGlobals[factureGlobal].status_factureGlobal === false) {
                            status_facture = false;
                        }
                    }
                }
                // Check difference entre status_facture et status_client avant de requêter à la database
                // si status_facture === true && status_client !== true || 
                // status_facture === false && status_client !== false
                if ((status_facture && _this.client.status_client !== true) || (!status_facture && _this.client.status_client === true)) {
                    _this.clientService.updateStatus(client, status_facture)
                        .subscribe(function (data) { return console.log('Status client mis à jour'); }, function (err) { return console.log('Erreur mis à jour status client'); });
                }
            }
        }, function (err) { return console.log(err); });
    };
    /**
     *
     * (blur) listener : Verification de la ref_factureGlobal.
     * - si data.success === true => ref_factureGlobal utilisée => validationRef = true,
     * - si data.success === false => ref_factureGlobal non utilisée => validationRef = false
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.verifRef = function () {
        var _this = this;
        this.factureGlobalService.getOneFactureGlobalByRef(this.client._id, this.validerDevisForm.get('ref_factureGlobal').value)
            .subscribe(function (data) {
            if (data.success) {
                return _this.validationRef = true;
            }
        }, function (error) {
            console.log(error);
        });
        return this.validationRef = false;
    };
    /**
     * function success after request to service.
     * Redirect to route path '/devis/client/:id_client'
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.onSuccess = function () {
        var _this = this;
        this.updateStatusClient(this.client);
        setTimeout(function () {
            _this.processing = false;
            // this.enableForm();
            _this.generateForm();
            _this.router.navigate(['/devis/client/:id_client', { id_client: _this.devis.client }]);
        }, 1000);
    };
    /**
     * on cancel form
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.onCancel = function () {
        this.router.navigate(['/devis/client/:id_client', { id_client: this.devis.client }]);
    };
    /**
     * NOT USED
     *
     * Calcul montantTTC using tauxTva and montantHt values of validerDevisForm and send new montantTtc
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.calculMontant = function () {
        if (!(this.validerDevisForm.controls['montantHt'].value === '') && !(this.validerDevisForm.controls['tauxTva'].value === '')) {
            var montantTTC = this.validerDevisForm.controls['montantHt'].value * (1 + this.validerDevisForm.controls['tauxTva'].value / 100);
            this.validerDevisForm.controls['montantTtc'].setValue(Number(montantTTC).toFixed(2));
            this.devis.montantTtc = Number(montantTTC).toFixed(2);
        }
    };
    ;
    /**
     * Generate Reactive form
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.generateForm = function () {
        this.validerDevisForm = this.formBuilder.group({
            ref_factureGlobal: [this.devis.ref_devis, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ])],
            date_creation: [this.devis.date_creation],
            montantHt: [{ value: this.devis.montantHt, disabled: true }],
            tauxTva: [{ value: this.devis.tauxTva, disabled: true }],
            montantTtcTotal: [{ value: this.devis.montantTtc, disabled: true }],
            client: [{ value: this.devis.client, disabled: true }]
        });
    };
    /**
     * Enable form
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.enableForm = function () {
        this.validerDevisForm.controls['ref_factureGLobal'].enable();
        this.validerDevisForm.controls['date_creation'].enable();
    };
    /**
     * Disable form
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.disableForm = function () {
        this.validerDevisForm.disable();
    };
    /**
     * OnInit :
     * check if params['id_devis'] set into url.
     * - set this.id_devis = params['id_devis'].
     * - get Devis using this.id_devis.
     *
     * @memberof ValiderDevisComponent
     */
    ValiderDevisComponent.prototype.ngOnInit = function () {
        // this.getAllClient();
        // this.onValiderDevis();
        /* if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
          this.id_client = this.activatedRoute.snapshot.params['id_client'];
          this.getOneClient(this.id_client);
        } */
        // Recupère devis by id if set into url
        // Set id_client and client data
        if (this.activatedRoute.snapshot.params['id_devis'] !== undefined) {
            this.id_devis = this.activatedRoute.snapshot.params['id_devis'];
            this.getOneDevis(this.id_devis);
        }
    };
    return ValiderDevisComponent;
}());
ValiderDevisComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-valider-devis',
        template: __webpack_require__("../../../../../src/app/components/valider-devis/valider-devis.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/valider-devis/valider-devis.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_devis_service__["a" /* DevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_devis_service__["a" /* DevisService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_client_service__["a" /* ClientService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _h || Object])
], ValiderDevisComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=valider-devis.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/models/bug.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bug; });
/**
 * Bug Model
 *
 * @export
 * @class Bug
 */
var Bug = (function () {
    /**
     * Creates an instance of Bug.
     * @param {Object} [value={}]
     * @memberof Bug
     */
    function Bug(value) {
        if (value === void 0) { value = {}; }
        Object.assign(this, value);
    }
    return Bug;
}());

//# sourceMappingURL=bug.js.map

/***/ }),

/***/ "../../../../../src/app/models/civilite.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CIVILITE; });
/**
 * Enum Civilite for client
 *
 * @export
 * @enum {number}
 */
/**
 * Enum Civilite for client
 *
 * @export
 * @enum {number}
 */ var CIVILITE;
(function (CIVILITE) {
    CIVILITE[CIVILITE["null"] = 0] = "null";
    CIVILITE[CIVILITE["Mr"] = 1] = "Mr";
    CIVILITE[CIVILITE["Mme/Mlle"] = 2] = "Mme/Mlle";
})(CIVILITE || (CIVILITE = {}));
//# sourceMappingURL=civilite.enum.js.map

/***/ }),

/***/ "../../../../../src/app/models/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
/**
 * Client model
 *
 * @export
 * @class Client
 */
var Client = (function () {
    /**
     * Creates an instance of Client.
     * @param {Object} [value={}]
     * @memberof Client
     */
    function Client(value) {
        if (value === void 0) { value = {}; }
        Object.assign(this, value);
    }
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../../../../src/app/models/criticite.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CRITICITE; });
/**
 * Enum CRITICITE for Bug Model
 *
 * @export
 * @enum {number}
 */
/**
 * Enum CRITICITE for Bug Model
 *
 * @export
 * @enum {number}
 */ var CRITICITE;
(function (CRITICITE) {
    CRITICITE[CRITICITE["null"] = 0] = "null";
    CRITICITE[CRITICITE["Bloquant"] = 1] = "Bloquant";
    CRITICITE[CRITICITE["Amelioration"] = 2] = "Amelioration";
    CRITICITE[CRITICITE["Mineur"] = 3] = "Mineur";
})(CRITICITE || (CRITICITE = {}));
//# sourceMappingURL=criticite.enum.js.map

/***/ }),

/***/ "../../../../../src/app/models/detailsDevis.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsDevis; });
/**
 * DetailsDevis model
 *
 * @export
 * @class DetailsDevis
 */
var DetailsDevis = (function () {
    /**
     * Creates an instance of DetailsDevis.
     * @param {Object} [value={}]
     * @memberof DetailsDevis
     */
    function DetailsDevis(value) {
        if (value === void 0) { value = {}; }
        Object.assign(this, value);
    }
    return DetailsDevis;
}());

//# sourceMappingURL=detailsDevis.js.map

/***/ }),

/***/ "../../../../../src/app/models/factureGlobal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureGlobal; });
/**
 * FactureGlobal model
 *
 * @export
 * @class FactureGlobal
 */
var FactureGlobal = (function () {
    /**
     * Creates an instance of FactureGlobal.
     * @param {Object} [value={}]
     * @memberof FactureGlobal
     */
    function FactureGlobal(value) {
        if (value === void 0) { value = {}; }
        Object.assign(this, value);
    }
    return FactureGlobal;
}());

//# sourceMappingURL=factureGlobal.js.map

/***/ }),

/***/ "../../../../../src/app/models/status-bug.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATUS; });
/**
 * Enum Bug status
 *
 * @export
 * @enum {number}
 */
/**
 * Enum Bug status
 *
 * @export
 * @enum {number}
 */ var STATUS;
(function (STATUS) {
    STATUS[STATUS["null"] = 0] = "null";
    STATUS[STATUS["Ouvert"] = 1] = "Ouvert";
    STATUS[STATUS["Corrig\u00E9"] = 2] = "Corrig\u00E9";
    STATUS[STATUS["Annul\u00E9"] = 3] = "Annul\u00E9";
})(STATUS || (STATUS = {}));
//# sourceMappingURL=status-bug.enum.js.map

/***/ }),

/***/ "../../../../../src/app/models/taux.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONST_TAUX; });
/**
 * Const TAUX TVA
 */
/**
 * Const TAUX TVA
 */ var CONST_TAUX = {
    1: 5.5,
    2: 10.0,
    3: 20.0
};
//# sourceMappingURL=taux.const.js.map

/***/ }),

/***/ "../../../../../src/app/models/template-email.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = forgotPassword;
/* unused harmony export validateAccount */
/**
 * Forgot password template
 *
 * @param {User} User User Object
 * @returns {string} mail message
 */
function forgotPassword(user) {
    var mailMessage = "\n  <h3>Bonjour " + user.nom + " " + user.prenom + ".</h3>\n  Cliquez sur le lien suivant pour r\u00E9initialiser votre mot de passe : <br/>\n  <a href=\"http://localhost:4200/init-password/" + user._id + "\">R\u00E9initialiser le mot de passe.</a>\n  ";
    return mailMessage;
}
/**
 * Validate account template
 *
 * @param {User} User User object
 * @returns {string} mail message
 */
function validateAccount(user) {
    var mailMessage = "\n  <h3>Bonjour " + user.nom + " " + user.prenom + ".</h3>\n  Merci de vous \u00EAtre enregistrer sur #NOM APPLI#. <br/>\n  Plus qu'une \u00E9tape avant d'utiliser votre compte. <br/> <br/>\n  Cliquez sur le lien suivant pour valider votre compte :\n  <a href=\"http://localhost:4200/user-valide/" + user._id + "\">Validation du Compte.</a>\n  ";
    return mailMessage;
}
//# sourceMappingURL=template-email.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/order-by-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByDatePipe = (function () {
    function OrderByDatePipe() {
    }
    OrderByDatePipe.prototype.transform = function (array, args) {
        if (!array) {
            return null;
        }
        else {
            array.sort(function (a, b) {
                if (new Date(a[args]).getTime() < new Date(b[args]).getTime()) {
                    return -1;
                }
                else if (new Date(a[args]).getTime() > new Date(b[args]).getTime()) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
    };
    return OrderByDatePipe;
}());
OrderByDatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'orderByDate'
    })
], OrderByDatePipe);

//# sourceMappingURL=order-by-date.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sort-number.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortNumberPipe = (function () {
    function SortNumberPipe() {
    }
    SortNumberPipe.prototype.transform = function (array, args) {
        if (!array) {
            return null;
        }
        else {
            array.sort(function (a, b) {
                if (Number(a[args]) < Number(b[args])) {
                    return -1;
                }
                else if (Number(a[args]) > Number(b[args])) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
    };
    return SortNumberPipe;
}());
SortNumberPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sortNumber'
    })
], SortNumberPipe);

//# sourceMappingURL=sort-number.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sort-string.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortStringPipe = (function () {
    function SortStringPipe() {
    }
    SortStringPipe.prototype.transform = function (value, args) {
        return null;
    };
    return SortStringPipe;
}());
SortStringPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sortString'
    })
], SortStringPipe);

//# sourceMappingURL=sort-string.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/routing/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._authService.loggedIn()) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/routing/not-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__ = __webpack_require__("../../../../../src/app/authentication/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    NotAuthGuard.prototype.canActivate = function (next, state) {
        if (!this._authService.loggedIn()) {
            return true;
        }
        return false;
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var _a, _b;
//# sourceMappingURL=not-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/service/bugs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BugsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 *
 * @author Paul GUINARD
 * @export
 * @class BugsService
 */
var BugsService = (function () {
    /**
     * Creates an instance of BugsService.
     * @param {Http} http http module
     * @memberof BugsService
     */
    function BugsService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url;
    }
    /**
     * Get All Bugs
     *
     * @returns
     * @memberof BugsService
     */
    BugsService.prototype.getAllBugs = function () {
        return this.http.get(this.url + "/bugs")
            .map(function (res) { return res.json(); });
    };
    /**
     * Get One Bug
     *
     * @param {number} id bug._id
     * @returns
     * @memberof BugsService
     */
    BugsService.prototype.getOneBug = function (id) {
        return this.http.get(this.url + "/bugs/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Add Bug
     *
     * @param {*} bug bug body
     * @returns
     * @memberof BugsService
     */
    BugsService.prototype.addBug = function (bug) {
        return this.http.post(this.url + "/bugs", bug)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update Bug
     *
     * @param {Bug} bug bug body
     * @returns
     * @memberof BugsService
     */
    BugsService.prototype.updateBug = function (bug) {
        return this.http.put(this.url + "/bugs/" + bug._id, bug)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete Bug
     *
     * @param {number} id bug._id
     * @returns
     * @memberof BugsService
     */
    BugsService.prototype.deleteBug = function (id) {
        return this.http.delete(this.url + "/bugs/" + id)
            .map(function (res) { return res.json(); });
    };
    return BugsService;
}());
BugsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BugsService);

var _a;
//# sourceMappingURL=bugs.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 *
 * @author Paul GUINARD
 * @export ClientService
 * @class ClientService
 */
var ClientService = (function () {
    /**
     * Creates an instance of ClientService.
     * @param {Http} http http module
     * @memberof ClientService client service
     */
    function ClientService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url;
    }
    /**
     * Get all clients.
     *
     * @returns
     * @memberof ClientService
     */
    ClientService.prototype.getAllClients = function () {
        return this.http.get(this.url + "/clients")
            .map(function (res) { return res.json(); });
    };
    /**
     * Get one client.
     *
     * @param {number} id client._id
     * @returns
     * @memberof ClientService
     */
    ClientService.prototype.getOneClient = function (id) {
        return this.http.get(this.url + "/clients/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Vérification sur l'unicité du numéro d'affaire
     *
     * @param {string} numAffaire N° affaire
     * @memberof ClientService
     */
    ClientService.prototype.verifUniciteNumAffaire = function (numAffaire) {
        return this.http.get(this.url + "/clients/numAffaire/" + numAffaire)
            .map(function (res) { return res.json(); });
    };
    /**
     * Save client.
     *
     * @param {Client} client client body
     * @returns
     * @memberof ClientService
     */
    ClientService.prototype.addClient = function (client) {
        return this.http.post(this.url + "/clients", client)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update client.
     *
     * @param {Client} client client body
     * @returns
     * @memberof ClientService
     */
    ClientService.prototype.updateClient = function (client) {
        return this.http.put(this.url + "/clients/" + client._id, client)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete client.
     *
     * @param {number} id client._id
     * @returns
     * @memberof ClientService
     */
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete(this.url + "/clients/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update Status Client
     *
     * @param {Client} client client body
     * @param {boolean} status status_client
     * @returns
     * @memberof ClientService
     */
    ClientService.prototype.updateStatus = function (client, status) {
        // Set status_client
        client.status_client = status;
        // PUT request
        return this.http.put(this.url + "/clients/" + client._id, client)
            .map(function (res) { return res.json(); });
    };
    return ClientService;
}());
ClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/details-devis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsDevisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 *
 * @author Paul GUINARD
 * @export
 * @class DetailsDevisService
 */
var DetailsDevisService = (function () {
    /**
     * Creates an instance of DetailsDevisService.
     * @param {Http} http http module
     * @memberof DetailsDevisService
     */
    function DetailsDevisService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url;
    }
    /**
     * Get All DetailsDevis By Devis
     *
     * @param {number} id_dev devis._id
     * @returns
     * @memberof DetailsDevisService
     */
    DetailsDevisService.prototype.getDetailsDevisByDevis = function (id_dev) {
        return this.http.get(this.url + "/details-devis/" + id_dev)
            .map(function (res) { return res.json(); });
    };
    /**
     * Create DetailsDevis
     *
     * @param {*} detailsDevis DetailsDevis body
     * @returns
     * @memberof DetailsDevisService
     */
    DetailsDevisService.prototype.addDetailsDevis = function (detailsDevis) {
        return this.http.post(this.url + "/details-devis", detailsDevis)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update DetailsDevis
     *
     * @param {DetailsDevis} detailsDevis  DetailsDevis body
     * @returns
     * @memberof DetailsDevisService
     */
    DetailsDevisService.prototype.updateDetailsDevis = function (detailsDevis) {
        return this.http.put(this.url + "/details-devis/" + detailsDevis._id, detailsDevis)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete DetailsDevis
     *
     * @param {number} id detailsDevis._id
     * @returns
     * @memberof DetailsDevisService
     */
    DetailsDevisService.prototype.deleteDetailsDevis = function (id) {
        return this.http.delete(this.url + "/details-devis/" + id)
            .map(function (res) { return res.json(); });
    };
    return DetailsDevisService;
}());
DetailsDevisService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DetailsDevisService);

var _a;
//# sourceMappingURL=details-devis.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/devis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 *
 * @author Paul GUINARD
 * @export DevisService
 * @class DevisService
 */
var DevisService = (function () {
    /**
     * Creates an instance of DevisService.
     * @param {Http} http http module
     * @memberof DevisService devis service
     */
    function DevisService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].url;
    }
    /**
     * Get All Devis.
     *
     * @returns devis
     * @memberof DevisService
     */
    DevisService.prototype.getAllDevis = function () {
        return this.http.get(this.url + "/devis")
            .map(function (res) { return res.json(); });
    };
    /* getAllValidDevis(): Observable<Devis> {
      return this.http.get(devUrl)
        .flatMap(res => res.json())
        .filter(dev => dev[1].valid)
        .map(dev => dev.json());
    } */
    /**
     * Get All Devis By Client.
     *
     * @param {number} client_id client._id
     * @returns
     * @memberof DevisService
     */
    DevisService.prototype.getAllDevisByClient = function (client_id) {
        return this.http.get(this.url + "/devis/client/" + client_id)
            .map(function (res) { return res.json(); });
    };
    ;
    /**
     * Get one devis.
     *
     * @param {number} id devis._id
     * @returns
     * @memberof DevisService
     */
    DevisService.prototype.getOneDevis = function (id) {
        return this.http.get(this.url + "/devis/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get One Devis by ref.
       * Method to check unique key of ref_devis.
     *
     * @param {number} id_client client id
     * @param {number} ref_devis ref devis
     * @returns
     * @memberof DevisService
     */
    DevisService.prototype.getOneDevisByRef = function (id_client, ref_devis) {
        return this.http.get(this.url + "/devis/client/" + id_client + "/ref/" + ref_devis)
            .map(function (res) { return res.json(); });
    };
    /**
     * Add Devis.
     *
     * @param {any} devis devis body
     * @returns
     * @memberof DevisService
     */
    DevisService.prototype.addDevis = function (devis) {
        return this.http.post(this.url + "/devis", devis)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update Devis.
     *
     * @param {any} devis devis body
     * @param {number} id_dev devis._id
     * @returns
     * @memberof DevisService
     */
    DevisService.prototype.updateDevis = function (devis) {
        return this.http.put(this.url + "/devis/" + devis._id, devis)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete devis.
     *
     * @param {number} id_dev devis._id
     * @returns
     * @memberof DevisService
     */
    DevisService.prototype.deleteDevis = function (id_dev) {
        return this.http.delete(this.url + "/devis/" + id_dev)
            .map(function (res) { return res.json(); });
    };
    return DevisService;
}());
DevisService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _a || Object])
], DevisService);

var _a;
//# sourceMappingURL=devis.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/facture-accompte.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureAccompteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 *
 * @author Paul GUINARD
 * @export FactureAccompteService
 * @class FactureAccompteService
 */
var FactureAccompteService = (function () {
    /**
     * Creates an instance of FactureAccompteService.
     * @param {Http} http http module
     * @memberof FactureAccompteService factureAccompte service
     */
    function FactureAccompteService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url;
    }
    /**
     * Get All Facture Accompte.
     *
     * @returns
     * @memberof FactureAccompteService
     */
    FactureAccompteService.prototype.getAllFactureAccompte = function () {
        return this.http.get(this.url + "/facture-accompte")
            .map(function (res) { return res.json(); });
    };
    /**
     * Get All Facture Accompte by factureGlobal.
     *
     * @param {number} id_fact factureGlobal._id
     * @returns
     * @memberof FactureAccompteService
     */
    FactureAccompteService.prototype.getAllFactureAccompteByFactureGlobal = function (id_fact) {
        return this.http.get(this.url + "/facture-accompte/facture-global/" + id_fact)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get One Facture Accompte by Id.
     *
     * @param {number} id factureAccompte._id
     * @returns
     * @memberof FactureAccompteService
     */
    FactureAccompteService.prototype.getOneFactureAccompte = function (id) {
        return this.http.get(this.url + "/facture-accompte/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get One Facture accompte by ref.
       * Method to check unique key of ref_factureAccompte.
     *
     * @param {number} id_factureGlobal facture global id
     * @param {any} ref_factureAccompte facture accompte ref
     * @returns
     * @memberof FactureAccompteService
     */
    FactureAccompteService.prototype.getOneFactureAccompteByRef = function (id_factureGlobal, ref_factureAccompte) {
        return this.http.get(this.url + "/facture-accompte/facture-global/" + id_factureGlobal + "/ref/" + ref_factureAccompte)
            .map(function (res) { return res.json(); });
    };
    /**
     * Add Facture Accompte.
     *
     * @param {*} factureAccompte factureAccompte body
     * @returns
     * @memberof FactureAccompteService
     */
    FactureAccompteService.prototype.addFactureAccompte = function (factureAccompte) {
        return this.http.post(this.url + "/facture-accompte", factureAccompte)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update Facture Accompte.
     *
     * @param {FactureAccompte} factureAccompte factureAccompte body
     * @returns
     * @memberof FactureAccompteService
     */
    FactureAccompteService.prototype.updateFactureAccompte = function (factureAccompte) {
        return this.http.put(this.url + "/facture-accompte/" + factureAccompte._id, factureAccompte)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update Facture Accompte status
     *
     * @param {FactureAccompte} factureAccompte facture Accompte body
     * @returns
     * @memberof FactureAccompteService
     */
    FactureAccompteService.prototype.updateStatusFactureAccompte = function (factureAccompte, status_factureAccompte) {
        // Set status facture accompte
        factureAccompte.status_factureAccompte = status_factureAccompte;
        // PUT request
        return this.http.put(this.url + "/facture-accompte/" + factureAccompte._id, factureAccompte)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete Facture Accompte.
     *
     * @param {number} id factureAccompte._id
     * @returns
     * @memberof FactureAccompteService
     */
    FactureAccompteService.prototype.deleteFactureAccompte = function (id) {
        return this.http.delete(this.url + "/facture-accompte/" + id)
            .map(function (res) { return res.json(); });
    };
    return FactureAccompteService;
}());
FactureAccompteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FactureAccompteService);

var _a;
//# sourceMappingURL=facture-accompte.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/facture-global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureGlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 *
 * @author Paul GUINARD
 * @export FactureGlobalService
 * @class FactureGlobalService
 */
var FactureGlobalService = (function () {
    /**
     * Creates an instance of FactureGlobalService.
     * @param {Http} http http module
     * @memberof FactureGlobalService facture global service
     */
    function FactureGlobalService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url;
    }
    /**
     * GET ALL FACTURE GLOBAL.
     *
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.getAllFactureGlobal = function () {
        return this.http.get(this.url + "/facture-global")
            .map(function (res) { return res.json(); });
    };
    /**
     * Get One Facture Global by ID
     *
     * @param {number} id factureGlobal._id
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.getOneFactureGlobalById = function (id) {
        return this.http.get(this.url + "/facture-global/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get All Facture Global by Client.
     *
     * @param {number} id_client client._id
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.getAllFactureGlobalByClient = function (id_client) {
        return this.http.get(this.url + "/facture-global/client/" + id_client)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get All Facture Global by Devis
     *
     * @param {number} id Devis id
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.getAllFactureGlobalByDevis = function (id) {
        return this.http.get(this.url + "/facture-global/devis/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get One Facture Global by ref.
       * Method to check unique key of ref_factureGlobal.
     *
     * @param {number} id_client client id
     * @param {string} ref ref facture global
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.getOneFactureGlobalByRef = function (id_client, ref) {
        return this.http.get(this.url + "/facture-global/client/" + id_client + "/ref/" + ref)
            .map(function (res) { return res.json(); });
    };
    /**
     * Add Facture Global.
     *
     * @param {FactureGlobal} factureGlobal factureGlobal body
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.addFactureGlobal = function (factureGlobal) {
        return this.http.post(this.url + "/facture-global", factureGlobal)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update Facture Global.
     *
     * @param {FactureGlobal} factureGlobal factureGlobal body
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.updateFactureGlobal = function (factureGlobal) {
        return this.http.put(this.url + "/facture-global/" + factureGlobal._id, factureGlobal)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update Facture Global status
     *
     * @param {FactureGlobal} factureGlobal facture Global body
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.updateStatusFactureGlobal = function (factureGlobal, status_factureGlobal) {
        // Set Status facture Global
        factureGlobal.status_factureGlobal = status_factureGlobal;
        // PUT Request
        return this.http.put(this.url + "/facture-global/" + factureGlobal._id, factureGlobal)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete Facture Global.
     *
     * @param {number} id_fact factureGlobal._id
     * @returns
     * @memberof FactureGlobalService
     */
    FactureGlobalService.prototype.deleteFactureGlobal = function (id_fact) {
        return this.http.delete(this.url + "/facture-global/" + id_fact)
            .map(function (res) { return res.json(); });
    };
    return FactureGlobalService;
}());
FactureGlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FactureGlobalService);

var _a;
//# sourceMappingURL=facture-global.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/reglement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 *
 * @author Paul GUINARD
 * @export
 * @class ReglementService
 */
var ReglementService = (function () {
    /**
     * Creates an instance of ReglementService.
     * @param {Http} http http module
     * @memberof ReglementService
     */
    function ReglementService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url;
    }
    /**
     * Get All Reglement by FactureAccompte._id
     *
     * @param {number} id FactureAccompte._id
     * @returns
     * @memberof ReglementService
     */
    ReglementService.prototype.getReglementByFactureAccompte = function (id) {
        return this.http.get(this.url + "/reglements/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Save Reglement
     *
     * @param {*} reglement body
     * @returns
     * @memberof ReglementService
     */
    ReglementService.prototype.addReglement = function (reglement) {
        return this.http.post(this.url + "/reglements", reglement)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update reglement
     *
     * @param {Reglement} reglement body
     * @returns
     * @memberof ReglementService
     */
    ReglementService.prototype.updateReglement = function (reglement) {
        return this.http.put(this.url + "/reglements/" + reglement._id, reglement)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete reglement
     *
     * @param {number} id reglement._id
     * @returns
     * @memberof ReglementService
     */
    ReglementService.prototype.deleteReglement = function (id) {
        return this.http.delete(this.url + "/reglements/" + id)
            .map(function (res) { return res.json(); });
    };
    return ReglementService;
}());
ReglementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ReglementService);

var _a;
//# sourceMappingURL=reglement.service.js.map

/***/ }),

/***/ "../../../../../src/environments/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return historique; });
var historique = false;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    url: '/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map