webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_client_client_component__ = __webpack_require__("../../../../../src/app/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_devis_devis_component__ = __webpack_require__("../../../../../src/app/components/devis/devis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_valider_devis_valider_devis_component__ = __webpack_require__("../../../../../src/app/components/valider-devis/valider-devis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_facture_accompte_facture_accompte_component__ = __webpack_require__("../../../../../src/app/components/facture-accompte/facture-accompte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_bugs_bugs_component__ = __webpack_require__("../../../../../src/app/components/bugs/bugs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * routes definition
 */
var routes = [
    // uncomment dashboard when implemented
    //{ path: 'dashboard', component: DashboardComponent },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_2__components_client_client_component__["a" /* ClientComponent */] },
    //{ path: 'devis', component: DevisComponent },
    // path Devis by client._id
    { path: 'devis/client/:id_client', component: __WEBPACK_IMPORTED_MODULE_3__components_devis_devis_component__["a" /* DevisComponent */] },
    // { path: 'facture', component: FactureComponent },
    // path valider Devis into facture global
    { path: 'devis/client/valider-devis/:id_devis', component: __WEBPACK_IMPORTED_MODULE_4__components_valider_devis_valider_devis_component__["a" /* ValiderDevisComponent */] },
    // path facture d'accompte / facture mois
    { path: 'facture/facture-accompte/:id_fact', component: __WEBPACK_IMPORTED_MODULE_5__components_facture_accompte_facture_accompte_component__["a" /* FactureAccompteComponent */] },
    // path bugs
    { path: 'bug', component: __WEBPACK_IMPORTED_MODULE_6__components_bugs_bugs_component__["a" /* BugsComponent */] },
    { path: 'pageNotFound', component: __WEBPACK_IMPORTED_MODULE_7__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
    // default path redirect to 'client'
    { path: '', redirectTo: 'client', pathMatch: 'full' },
    // Undefined page path
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-fluid\">\r\n    <ngx-flash-messages></ngx-flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_client_client_component__ = __webpack_require__("../../../../../src/app/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_devis_devis_component__ = __webpack_require__("../../../../../src/app/components/devis/devis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_facture_global_facture_global_component__ = __webpack_require__("../../../../../src/app/components/facture-global/facture-global.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_valider_devis_valider_devis_component__ = __webpack_require__("../../../../../src/app/components/valider-devis/valider-devis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_facture_accompte_facture_accompte_component__ = __webpack_require__("../../../../../src/app/components/facture-accompte/facture-accompte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_bugs_bugs_component__ = __webpack_require__("../../../../../src/app/components/bugs/bugs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_facture_accompte_service__ = __webpack_require__("../../../../../src/app/service/facture-accompte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_details_devis_service__ = __webpack_require__("../../../../../src/app/service/details-devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_reglement_service__ = __webpack_require__("../../../../../src/app/service/reglement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_bugs_service__ = __webpack_require__("../../../../../src/app/service/bugs.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Angular Flash messages

// Routing Module

// import Components










// import Services







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_devis_devis_component__["a" /* DevisComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_facture_global_facture_global_component__["a" /* FactureGlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_valider_devis_valider_devis_component__["a" /* ValiderDevisComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_facture_accompte_facture_accompte_component__["a" /* FactureAccompteComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_bugs_bugs_component__["a" /* BugsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_flash_messages__["a" /* FlashMessagesModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatProgressSpinnerModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__service_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_20__service_devis_service__["a" /* DevisService */],
            __WEBPACK_IMPORTED_MODULE_22__service_facture_accompte_service__["a" /* FactureAccompteService */],
            __WEBPACK_IMPORTED_MODULE_21__service_facture_global_service__["a" /* FactureGlobalService */],
            __WEBPACK_IMPORTED_MODULE_23__service_details_devis_service__["a" /* DetailsDevisService */],
            __WEBPACK_IMPORTED_MODULE_24__service_reglement_service__["a" /* ReglementService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_25__service_bugs_service__["a" /* BugsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_10__components_client_client_component__["a" /* ClientComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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

module.exports = "<div class=\"container\">\r\n  <h2>Reporter un Bug</h2>\r\n  <h4>Pour reporter un bug ou proposer une amélioration, suivez la démarche suivante :</h4>\r\n  <ul>\r\n    <li>Cliquer sur le bouton \"Reporter un Bug\" pour ouvrir la page Issues du projet</li>\r\n    <li>Cliquer sur new Issue</li>\r\n    <li>Se connecter (Sign in) ou créer un compte (Sign up) sur le site github</li>\r\n    <li>Remplir les différents champs en décrivant le problème</li>\r\n    <!-- <li>Assigner un label correspondant à la demande en cliquant sur Labels à droite du texte (bug, amélioration, ...)</li> -->\r\n    <li class=\"italic\">Conseil : Essayer d'être précis dans la description du bug en décrivant l'action effectuée et si possible la démarche\r\n      pour reproduire le problème</li>\r\n  </ul>\r\n  <br>\r\n  <a class=\"btn btn-primary btn-lg\" target=\"_blank\" href=\"https://github.com/guinardpaul/GPAssocies-MEAN-App/milestone/2\">Reporter un Bug</a>\r\n\r\n</div>\r\n\r\n\r\n<!-- ============================================= -->\r\n<!-- NOT USED -->\r\n<!-- ============================================= -->\r\n<!-- <div class=\"container-fluid\">\r\n  <h4 style=\"text-align: center;\">Bugs</h4>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Statut</th>\r\n        <th>Date création</th>\r\n        <th>Description</th>\r\n        <th>Criticité</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let b of listBugs\">\r\n        <td>{{b.status_correction}}</td>\r\n        <td>{{b.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{b.description}}</td>\r\n        <td>{{b.criticite}}</td>\r\n        <td>\r\n          <div class=\"btn-group-vertical\">\r\n            <button class=\"btn btn-success\" (click)=\"onUpdateBug(b)\">Modifier</button>\r\n            <button class=\"btn btn-danger\" (click)=\"deleteBug(b._id)\">Supprimer</button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-primary\" (click)=\"onAdd()\">Ajouter Bug</button>\r\n  <br/><br/> -->\r\n\r\n<!-- Add Bug form -->\r\n<!-- <div class=\"container-fluid\" *ngIf=\"mode\">\r\n    <span class=\"col-sm-3\"></span>\r\n    <div class=\"panel panel-info col-sm-6\">\r\n      <div class=\"panel-heading\">\r\n        <h4>Bug</h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"bugForm\" (submit)=\"addBug()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{currentDate | date: 'yyyy-MM-dd'}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"description\">Description :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" formControlName=\"description\" value=\"{{bug.description}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"criticite\">Criticité :</label>\r\n            <select class=\"form-control\" name=\"criticite\" id=\"criticite\" formControlName=\"criticite\" required>\r\n              <option *ngFor=\"let key of keys\" [value]=\"key\">{{criticite[key]}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button [disabled]=\"!bugForm.valid || processing\" type=\"submit\" class=\"btn btn-success\">Ajouter Bug</button>\r\n            <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <span class=\"col-sm-3\"></span>\r\n  </div> -->\r\n\r\n<!-- Update Bug form -->\r\n<!--   <div class=\"container-fluid\" *ngIf=\"modeUpdate\">\r\n    <span class=\"col-sm-3\"></span>\r\n    <div class=\"panel panel-info col-sm-6\">\r\n      <div class=\"panel-heading\">\r\n        <h4>Bug</h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"bugFormUpdate\" (submit)=\"updateBug()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"status_correction\">Statut :</label>\r\n            <select class=\"form-control\" name=\"status_correction\" id=\"status_correction\" formControlName=\"status_correction\" required>\r\n                  <option *ngFor=\"let number of numbers\" ([value])=\"number\">{{status_bug[number]}}</option>\r\n                </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{currentDate | date: 'yyyy-MM-dd'}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"description\">Description :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\" formControlName=\"description\" value=\"{{bug.description}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"criticite\">Criticité :</label>\r\n            <select class=\"form-control\" name=\"criticite\" id=\"criticite\" formControlName=\"criticite\" required>\r\n              <option *ngFor=\"let key of keys\" ([value])=\"key\">{{criticite[key]}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button [disabled]=\"!bugFormUpdate.valid || processing\" type=\"submit\" class=\"btn btn-success\">Modifier Bug</button>\r\n            <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n          </div>\r\n        </form>\r\n        <p>{{bug | json}}</p>\r\n      </div>\r\n    </div>\r\n    <span class=\"col-sm-3\"></span>\r\n  </div> -->"

/***/ }),

/***/ "../../../../../src/app/components/bugs/bugs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BugsComponent; });
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
 * @class BugsComponent
 * @implements {OnInit}
 */
var BugsComponent = (function () {
    function BugsComponent() {
    }
    BugsComponent.prototype.ngOnInit = function () {
    };
    return BugsComponent;
}());
BugsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-bugs',
        template: __webpack_require__("../../../../../src/app/components/bugs/bugs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bugs/bugs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BugsComponent);

//# sourceMappingURL=bugs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Statut</th>\r\n                <th>Nom</th>\r\n                <th>Prénom</th>\r\n                <th>Adresse Facturation</th>\r\n                <th>Adresse Chantier</th>\r\n                <th>Email</th>\r\n                <th>Tél</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let client of listClient\">\r\n                <td *ngIf=\"client.status_client\"><img src=\"{{status_true}}\" alt=\"true\"></td>\r\n                <td *ngIf=\"!client.status_client\"><img src=\"{{status_false}}\" alt=\"false\"></td>\r\n                <td>{{client.nom}}</td>\r\n                <td>{{client.prenom}}</td>\r\n                <td>{{client.adresseFact}} {{client.complAdresseFact}} <br/> {{client.cpFact}} {{client.villeFact}}</td>\r\n                <td>{{client.adresseChantier}} {{client.complAdresseChantier}} <br/> {{client.cpChantier}} {{client.villeChantier}}</td>\r\n                <td>{{client.email}}</td>\r\n                <td>{{client.numTel}}</td>\r\n                <td>\r\n                    <div class=\"btn-group-vertical\">\r\n                        <a class=\"btn btn-success\" [routerLink]=\"['/devis/client', client._id]\">Consulter</a>\r\n                        <button class=\"btn btn-warning\" (click)=\"onUpdate(client)\">Modifier</button>\r\n                        <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getClientToDelete(client)\">Supprimer</button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <button class=\"btn btn-primary\" (click)=\"onAdd()\">Ajouter client</button>\r\n</div>\r\n<br/>\r\n\r\n<!-- Confirm delete Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Etes-vous sûr de vouloir supprimer {{client.nom}} {{client.prenom}} ?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-danger\" (click)=\"onDelete(client._id)\" data-dismiss=\"modal\">Supprimer</button>\r\n                <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Add/Update Client form -->\r\n<div class=\"container\" *ngIf=\"mode\">\r\n    <div class=\"panel-group\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"clientForm\" (submit)=\"addClient()\">\r\n            <div class=\"panel-info col-sm-4\">\r\n                <div class=\"panel-heading\">Client</div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"civilite\">Civilité :</label>\r\n                        <select class=\"form-control\" name=\"civilite\" id=\"civilite\" formControlName=\"civilite\">\r\n                            <option>Civilité...</option>\r\n                            <option *ngFor=\"let key of keys\" ([ngValue])=\"key\">{{civilite[key]}}</option>\r\n                          </select>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (clientForm.controls.nom.errors && clientForm.controls.nom.dirty),\r\n              'has-success': (!clientForm.controls.nom.errors)}\">\r\n                        <label for=\"nom\">Nom :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"nom\" value=\"{{client.nom}}\" id=\"nom\" formControlName=\"nom\" autofocus required\r\n                        />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.nom.errors?.required && clientForm.controls.nom.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.nom.errors?.nomPrenomValidation && clientForm.controls.nom.dirty\r\n                && !clientForm.controls.nom.errors?.required\">\r\n                                Le nom doit être composé uniquement de lettres\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (clientForm.controls.prenom.errors && clientForm.controls.prenom.dirty),\r\n          'has-success': (!clientForm.controls.prenom.errors)}\">\r\n                        <label for=\"prenom\">Prénom :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"prenom\" value=\"{{client.prenom}}\" id=\"prenom\" formControlName=\"prenom\" required\r\n                        />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.prenom.errors?.required && clientForm.controls.prenom.dirty\">Ce champ est requis</li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.prenom.errors?.nomPrenomValidation && clientForm.controls.prenom.dirty\r\n            && !clientForm.controls.prenom.errors?.required\">\r\n                                Le prénom doit être composé uniquement de lettres\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (clientForm.controls.email.errors && clientForm.controls.email.dirty),\r\n      'has-success': (!clientForm.controls.email.errors)}\">\r\n                        <label for=\"email\">Email :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"email\" value=\"{{client.email}}\" id=\"email\" formControlName=\"email\" required\r\n                        />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.email.errors?.required && clientForm.controls.email.dirty\">Ce champ est requis</li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.email.errors?.emailValidation && clientForm.controls.email.dirty\r\n        && !clientForm.controls.email.errors?.required\">\r\n                                L'email n'est pas valide\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (clientForm.controls.numTel.errors && clientForm.controls.numTel.dirty), 'has-success': (!clientForm.controls.numTel.errors)}\">\r\n                        <label for=\"numTel\">Tél :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"numTel\" value=\"{{client.numTel}}\" id=\"numTel\" formControlName=\"numTel\" />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.numTel.errors?.numTelValidation && clientForm.controls.numTel.dirty\">Le tel doit être composé de chiffre, '-' ou '.'</li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"clientForm.controls.numTel.errors?.minlength && clientForm.controls.numTel.dirty\r\n      && !clientForm.controls.numTel.errors?.numTelValidation\">\r\n                                Le tel doit être composé de 10 chiffres\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                        <button [disabled]=\"!clientForm.valid || processing\" type=\"submit\" class=\"btn btn-success\">Sauver</button>\r\n                        <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-info col-sm-4\">\r\n                <div class=\"panel-heading\">Adresse Facturation</div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"adresseFact\">Adresse :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"adresseFact\" value=\"{{client.adresseFact}}\" id=\"adresseFact\" formControlName=\"adresseFact\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"complAdresseFact\">Complément adresse :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"complAdresseFact\" value=\"{{client.complAdresseFact}}\" id=\"complAdresseFact\"\r\n                            formControlName=\"complAdresseFact\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cpFact\">Code postal :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"cpFact\" value=\"{{client.cpFact}}\" id=\"cpFact\" formControlName=\"cpFact\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"villeFact\">Ville :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"villeFact\" value=\"{{client.villeFact}}\" id=\"villeFact\" formControlName=\"villeFact\"\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-info col-sm-4\">\r\n                <div class=\"panel-heading\">Adresse Chantier</div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"adresseChantier\">Adresse :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"adresseChantier\" value=\"{{client.adresseChantier}}\" id=\"adresseChantier\" formControlName=\"adresseChantier\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"complAdresseChantier\">Complément adresse :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"complAdresseChantier\" value=\"{{client.complAdresseChantier}}\" id=\"complAdresseChantier\"\r\n                            formControlName=\"complAdresseChantier\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cpChantier\">Code postal :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"cpChantier\" value=\"{{client.cpChantier}}\" id=\"cpChantier\" formControlName=\"cpChantier\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"villeChantier\">Ville :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"villeChantier\" value=\"{{client.villeChantier}}\" id=\"villeChantier\" formControlName=\"villeChantier\"\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_civilite_enum__ = __webpack_require__("../../../../../src/app/models/civilite.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
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
        this.civilite = __WEBPACK_IMPORTED_MODULE_2__models_civilite_enum__["a" /* CIVILITE */];
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
        this.keys = Object.keys(this.civilite).filter(Number);
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
        console.log(this.client);
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
                    console.log('Client saved' + data);
                    _this.onSuccess();
                }
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
                    console.log('Client updated' + data);
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
            console.log(data.length);
            if (data.length === 0) {
                _this.clientService.deleteClient(id)
                    .subscribe(function () {
                    console.log('Client deleted');
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
                console.log('Client non supprimé');
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
            civilite: '',
            nom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                    this.nomPrenomValidation
                ])],
            prenom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                    this.nomPrenomValidation
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                    this.emailValidation
                ])],
            numTel: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                    this.numTelValidation,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10)
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-client',
        template: __webpack_require__("../../../../../src/app/components/client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client/client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_devis_service__["a" /* DevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_devis_service__["a" /* DevisService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _d || Object])
], ClientComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "rowColor {\r\n  color: coral\r\n};", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"annulerSelection()\">Voir tous les clients</button>\r\n<br>\r\n<div class=\"container-fluid col-sm-6 col-md-6\">\r\n  <h4 style=\"text-align: center;\">Client</h4>\r\n  <!-- Client table -->\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Statut</th>\r\n        <th>Nom</th>\r\n        <th>Prénom</th>\r\n        <th>Email</th>\r\n        <th>Tél</th>\r\n        <th>Sélection</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let client of listClient\" [ngClass]=\"{'rowColor' : activeClient}\">\r\n        <td *ngIf=\"client.status_client\"><img src=\"{{status_true}}\" alt=\"true\"></td>\r\n        <td *ngIf=\"!client.status_client\"><img src=\"{{status_false}}\" alt=\"false\"></td>\r\n        <td>{{client.nom}}</td>\r\n        <td>{{client.prenom}}</td>\r\n        <td>{{client.email}}</td>\r\n        <td>{{client.numTel}}</td>\r\n        <td>\r\n          <div class=\"btn-group-vertical\">\r\n            <a class=\"btn btn-success\" (click)=\"onSelect(client)\">Selectionnez</a>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <br>\r\n\r\n  <!-- Facture global table -->\r\n  <div class=\"container-fluid\">\r\n    <h4 style=\"text-align: center;\">Factures</h4>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>Statut</th>\r\n          <th>Ref</th>\r\n          <th>Date</th>\r\n          <th>Montant total TTC</th>\r\n          <th>Montant facturé TTC</th>\r\n          <th>Montant réglé</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let fg of listFactureGlobal\">\r\n          <td *ngIf=\"fg.status_factureGlobal\"><img src=\"{{status_true}}\" alt=\"true\"></td>\r\n          <td *ngIf=\"!fg.status_factureGlobal\"><img src=\"{{status_false}}\" alt=\"false\"></td>\r\n          <td>{{fg.ref_factureGlobal}}</td>\r\n          <td>{{fg.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n          <td>{{fg.montantTtcTotal}}</td>\r\n          <td>{{fg.montantTtcFacture}}</td>\r\n          <td>{{fg.montantTtcRegle}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!-- Devis table -->\r\n<div class=\"container-fluid col-sm-6 col-md-6\">\r\n  <h4 style=\"text-align: center;\">Devis</h4>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Ref</th>\r\n        <th>Date</th>\r\n        <th>Montant HT</th>\r\n        <th>Taux TVA €</th>\r\n        <th>Montant TTC</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let d of listDevis\">\r\n        <td>{{d.ref_devis}}</td>\r\n        <td>{{d.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{d.montantHt}}</td>\r\n        <td>{{d.tauxTva}}</td>\r\n        <td>{{d.montantTtc}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <br>\r\n  <br><br>\r\n\r\n  <!-- Facture accompte table -->\r\n  <div class=\"container-fluid\">\r\n    <h4 style=\"text-align: center;\">Factures d'accompte</h4>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>Statut</th>\r\n          <th>Ref</th>\r\n          <th>Date</th>\r\n          <th>Montant facturé TTC</th>\r\n          <th>Règlement client TTC</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let f of listFactureAccompte\">\r\n          <td *ngIf=\"f.status_factureAccompte\"><img src=\"{{status_true}}\" alt=\"true\"></td>\r\n          <td *ngIf=\"!f.status_factureAccompte\"><img src=\"{{status_false}}\" alt=\"false\"></td>\r\n          <td>{{f.ref_factureAccompte}}</td>\r\n          <td>{{f.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n          <td>{{f.montantFacture}}</td>\r\n          <td>{{f.reglementClient}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_facture_accompte_service__ = __webpack_require__("../../../../../src/app/service/facture-accompte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
        this.listClient = [];
        this.listDevis = [];
        this.listFactureGlobal = [];
        this.listFactureAccompte = [];
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
    }
    /**
     * on Select client
     *
     * @param {Client} client
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.onSelect = function (client) {
        this.activeClient = true;
        this.selectedClient = client;
        this.getDevisByClient(client._id);
        this.getAllFactureGlobalbyClient(client._id);
    };
    /**
     * Cancel select client
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.annulerSelection = function () {
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */]();
        this.getAllDevis();
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
        this.devisService.getAllDevis()
            .subscribe(function (data) { return _this.listDevis = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * Get All Devis by Client
     *
     * @param {number} id client._id
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.getDevisByClient = function (id) {
        var _this = this;
        this.devisService.getAllDevisByClient(id)
            .subscribe(function (data) { return _this.listDevis = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    DashboardComponent.prototype.getAllFactureGlobal = function () {
        var _this = this;
        this.factureGlobalService.getAllFactureGlobal()
            .subscribe(function (data) { return _this.listFactureGlobal = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    DashboardComponent.prototype.getAllFactureGlobalbyClient = function (id) {
        var _this = this;
        this.factureGlobalService.getAllFactureGlobalByClient(id)
            .subscribe(function (data) {
            _this.listFactureGlobal = data;
            if (_this.listFactureGlobal.length > 0) {
                _this.getAllFactureAccomptebyFactureGlobal(data[0]._id);
            }
            else {
                _this.listFactureAccompte = [];
            }
        }, function (err) { return console.log('Erreur :' + err); });
    };
    DashboardComponent.prototype.getAllFactureAccompte = function () {
        var _this = this;
        this.factureAccompteService.getAllFactureAccompte()
            .subscribe(function (data) { return _this.listFactureAccompte = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    DashboardComponent.prototype.getAllFactureAccomptebyFactureGlobal = function (id) {
        var _this = this;
        this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
            .subscribe(function (data) { return _this.listFactureAccompte = data; }, function (err) { return console.log('Erreur :' + err); });
    };
    /**
     * onInit:
     * - Get All Devis
     *
     * @memberof DashboardComponent
     */
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAllClients();
        this.getAllDevis();
        this.getAllFactureGlobal();
        this.getAllFactureAccompte();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
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

module.exports = "<div class=\"container-fluid\">\r\n  <h4>{{client.nom}} {{client.prenom}}</h4>\r\n  <a class=\"btn btn-default\" [routerLink]=\"['/client']\">Retour page client</a>\r\n</div>\r\n<div class=\"container-fluid col-sm-6 col-md-6\">\r\n  <h4 style=\"text-align: center;\">Devis</h4>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Ref</th>\r\n        <th>Date</th>\r\n        <th>Montant HT</th>\r\n        <th>Taux TVA €</th>\r\n        <th>Montant TTC</th>\r\n        <th>Client</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let d of listDevis\">\r\n        <td>{{d.ref_devis}}</td>\r\n        <td>{{d.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{d.montantHt}}</td>\r\n        <td>{{d.tauxTva}}</td>\r\n        <td>{{d.montantTtc}}</td>\r\n        <td>{{client.nom}} {{client.prenom}}</td>\r\n        <td>\r\n          <div class=\"btn-group-vertical\">\r\n            <a class=\"btn btn-success\" [routerLink]=\"['/devis/client/valider-devis', d._id]\">Valider</a>\r\n            <button class=\"btn btn-warning\" (click)=\"onUpdate(d)\">Modifier</button>\r\n            <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getDevisToDelete(d)\">Supprimer</button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"color-sum\" *ngIf=\"listDevis.length > 0\">\r\n        <th>Total</th>\r\n        <th>:</th>\r\n        <th>{{getSumMontantHt()}}</th>\r\n        <th>{{getSumTauxTva()}}</th>\r\n        <th>{{getSumMontantTtc()}}</th>\r\n        <th></th>\r\n        <th></th>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-primary\" (click)=\"onAdd()\">Ajouter devis</button>\r\n\r\n  <br/><br/>\r\n\r\n  <!-- Confirm delete Modal -->\r\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Etes-vous sûr de vouloir supprimer {{devis.ref_devis}} ?</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-danger\" (click)=\"onDelete(devis)\" data-dismiss=\"modal\">Supprimer</button>\r\n          <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Add/Update Devis-DetailsDevis form -->\r\n  <div class=\"container-fluid\" *ngIf=\"mode\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <h4>Devis</h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"devisForm\" (submit)=\"addDevis()\">\r\n          <div class=\"form-group\" [ngClass]=\"{'has-error': (devisForm.controls.ref_devis.errors && devisForm.controls.ref_devis.dirty) \r\n          || (validationRef && devisForm.controls.ref_devis.dirty),\r\n          'has-success': (!devisForm.controls.ref_devis.errors && !validationRef)}\">\r\n            <label class=\"control-label\" for=\"ref_devis\">Ref :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"ref_devis\" id=\"ref_devis\" formControlName=\"ref_devis\" value=\"{{devis.ref_devis}}\"\r\n              (blur)=\"verifRef()\" autofocus required />\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.ref_devis.errors?.required && devisForm.controls.ref_devis.dirty\">\r\n                Ce champ est requis\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationRef\">\r\n                Ref déjà utilisée\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{devis.date_creation}}\"\r\n            />\r\n          </div>\r\n          <!-- =========================================================== -->\r\n          <!-- Details Devis -->\r\n          <div class=\"form-inline\" [ngClass]=\"{'has-error': (devisForm.controls.montantHt1.errors && devisForm.controls.montantHt1.dirty),\r\n          'has-success': (!devisForm.controls.montantHt1.errors)}\">\r\n            <span><h4>Détails devis</h4></span><br/>\r\n            <label class=\"control-label\" for=\"montantHt1\">Montant HT :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantHt1\" id=\"montantHt1\" formControlName=\"montantHt1\" value=\"{{detailsDevis1.montantHt}}\"\r\n              (blur)=\"calculMontant1()\" (blur)=\"calculMontantHt()\" (blur)=\"calculTauxTva()\" (blur)=\"calculMontantTtc()\" size=\"8\"\r\n              required />\r\n            <label class=\"control-label\" for=\"tauxTva1\">Taux TVA (%) :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"tauxTva1\" id=\"tauxTva1\" formControlName=\"tauxTva1\" value=\"{{detailsDevis1.tauxTva}}\"\r\n              size=\"8\" required />\r\n            <label class=\"control-label\" for=\"montantTtc1\">Montant TTC :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantTtc1\" id=\"montantTtc1\" formControlName=\"montantTtc1\" value=\"{{detailsDevis1.montantTtc}}\"\r\n              size=\"8\" />\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt1.errors?.required && devisForm.controls.montantHt1.dirty\">\r\n                Ce champ est requis\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt1.errors?.isNumber && devisForm.controls.montantHt1.dirty && !devisForm.controls.montantHt1.errors?.required\">\r\n                Le montant doit être positif et doit posséder au maximum 4 chiffres après la virgule\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <br/>\r\n          <div class=\"form-inline\" [ngClass]=\"{'has-error': (devisForm.controls.montantHt2.errors && devisForm.controls.montantHt2.dirty),\r\n          'has-success': (!devisForm.controls.montantHt2.errors)}\">\r\n            <label class=\"control-label\" for=\"montantHt2\">Montant HT :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantHt2\" id=\"montantHt2\" formControlName=\"montantHt2\" value=\"{{detailsDevis2.montantHt}}\"\r\n              (blur)=\"calculMontant2()\" (blur)=\"calculMontantHt()\" (blur)=\"calculTauxTva()\" (blur)=\"calculMontantTtc()\" size=\"8\"\r\n              required />\r\n            <label class=\"control-label\" for=\"tauxTva2\">Taux TVA (%) :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"tauxTva2\" id=\"tauxTva2\" formControlName=\"tauxTva2\" value=\"{{detailsDevis2.tauxTva}}\"\r\n              size=\"8\" required />\r\n            <label class=\"control-label\" for=\"montantTtc2\">Montant TTC :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantTtc2\" id=\"montantTtc2\" formControlName=\"montantTtc2\" value=\"{{detailsDevis2.montantTtc}}\"\r\n              size=\"8\" />\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt2.errors?.required && devisForm.controls.montantHt2.dirty\">\r\n                Ce champ est requis\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt2.errors?.isNumber && devisForm.controls.montantHt2.dirty && !devisForm.controls.montantHt2.errors?.required\">\r\n                Ce n'est pas un nombre\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <br/>\r\n          <div class=\"form-inline\" [ngClass]=\"{'has-error': (devisForm.controls.montantHt3.errors && devisForm.controls.montantHt3.dirty),\r\n          'has-success': (!devisForm.controls.montantHt3.errors)}\">\r\n            <label class=\"control-label\" for=\"montantHt3\">Montant HT :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantHt3\" id=\"montantHt3\" formControlName=\"montantHt3\" value=\"{{detailsDevis3.montantHt}}\"\r\n              (blur)=\"calculMontant3()\" (blur)=\"calculMontantHt()\" (blur)=\"calculTauxTva()\" (blur)=\"calculMontantTtc()\" size=\"8\"\r\n              required />\r\n            <label class=\"control-label\" for=\"tauxTva3\">Taux TVA (%) :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"tauxTva3\" id=\"tauxTva3\" formControlName=\"tauxTva3\" value=\"{{detailsDevis3.tauxTva}}\"\r\n              size=\"8\" required />\r\n            <label class=\"control-label\" for=\"montantTtc3\">Montant TTC :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantTtc3\" id=\"montantTtc3\" formControlName=\"montantTtc3\" value=\"{{detailsDevis3.montantTtc}}\"\r\n              size=\"8\" />\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt3.errors?.required && devisForm.controls.montantHt3.dirty\">\r\n                Ce champ est requis\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"devisForm.controls.montantHt3.errors?.isNumber && devisForm.controls.montantHt3.dirty && !devisForm.controls.montantHt3.errors?.required\">\r\n                Ce n'est pas un nombre\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <!-- =========================================================== -->\r\n          <!-- Devis input set by blur fonction -->\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"montantHt\">Montant HT :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantHt\" id=\"montantHt\" formControlName=\"montantHt\" value=\"{{devis.montantHt}}\"\r\n              required />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"tauxTva\">Taux TVA (€) :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"tauxTva\" id=\"tauxTva\" formControlName=\"tauxTva\" value=\"{{devis.tauxTva}}\" (blur)=\"calculMontant()\"\r\n              required />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"montantTtc\">Montant TTC :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantTtc\" id=\"montantTtc\" formControlName=\"montantTtc\" value=\"{{devis.montantTtc}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"client\">Client :</label>\r\n            <input type=\"text\" name=\"client\" id=\"client\" formControlName=\"client\" value=\"{{client.nom}} {{client.prenom}}\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n            <button [disabled]=\"!devisForm.valid || processing\" type=\"submit\" class=\"btn btn-success\">Sauver</button>\r\n            <button [disabled]=\"processing\" class=\"btn btn-default\" (click)=\"onCancel()\">Annuler</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid col-sm-6 col-md-6\">\r\n  <!-- Facture global component -->\r\n  <app-facture-global></app-facture-global>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/devis/devis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevisComponent; });
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
     * - return Devis valid
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
        console.log(this.listDevis);
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
       * - Si this.devis._id exists : updateDevis().
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
                    console.log('Devis saved' + data);
                    _this.flashMessages.show('Devis créé', {
                        classes: ['alert', 'alert-success'],
                        timeout: 3000
                    });
                    _this.addDetailsDevis(data.obj);
                }
                else {
                    console.log(data.message);
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
            // Set Devis data to update
            var udpateDevis = {
                _id: this.devis._id,
                ref_devis: this.devisForm.get('ref_devis').value,
                date_creation: this.devisForm.get('date_creation').value,
                montantHt: this.devisForm.get('montantHt').value,
                tauxTva: this.devisForm.get('tauxTva').value,
                montantTtc: this.devisForm.get('montantTtc').value,
                client: this.id_client,
            };
            this.devisService.updateDevis(udpateDevis)
                .subscribe(function (data) {
                console.log('Devis updated' + data);
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
        /* for (var detailsDevis in this.listDetailsDevis) {
          if (this.listDetailsDevis.hasOwnProperty(detailsDevis)) {
            var element = this.listDetailsDevis[ detailsDevis ];
            this.detailsDevisService.addDetailsDevis(this.listDetailsDevis[detailsDevis])
            .subscribe(
              data => {
                console.log('Details Devis saved ' + this.detailsDevis1);
                this.onSuccess();
              }, (err) => {
                console.log(err);
                this.enableForm();
              }
            );
          }
        } */
        // Save DetailsDevis
        this.detailsDevisService.addDetailsDevis(this.detailsDevis1)
            .subscribe(function (data) {
            console.log('Details Devis saved :' + _this.detailsDevis1);
            _this.detailsDevis1 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1] };
            _this.detailsDevisService.addDetailsDevis(_this.detailsDevis2)
                .subscribe(function (data) {
                console.log('Details Devis saved :' + _this.detailsDevis2);
                _this.detailsDevis2 = {};
                _this.detailsDevis2 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2] };
                _this.detailsDevisService.addDetailsDevis(_this.detailsDevis3)
                    .subscribe(function (data) {
                    console.log('Details Devis saved :' + _this.detailsDevis3);
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
     *
     * update DetailsDevis
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
            .subscribe(function (data) {
            console.log('Details Devis update :' + _this.detailsDevis1);
            _this.detailsDevis1 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1] };
            _this.detailsDevisService.updateDetailsDevis(_this.detailsDevis2)
                .subscribe(function (data) {
                console.log('Details Devis update :' + _this.detailsDevis2);
                _this.detailsDevis2 = {};
                _this.detailsDevis2 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2] };
                _this.detailsDevisService.updateDetailsDevis(_this.detailsDevis3)
                    .subscribe(function (data) {
                    console.log('Details Devis update :' + _this.detailsDevis3);
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
     * @param {Devis} devis devis data
     * @memberof DevisComponent
     */
    DevisComponent.prototype.onDelete = function (devis) {
        var _this = this;
        this.factureGlobalService.getAllFactureGlobalByDevis(devis._id)
            .subscribe(function (data) {
            console.log(data);
            if (data.length === 0) {
                // Delete Devis
                _this.devisService.deleteDevis(devis._id)
                    .subscribe(function (msg) {
                    console.log('Devis deleted');
                    _this.flashMessages.show('Devis supprimé', {
                        classes: ['alert', 'alert-warning'],
                        timeout: 3000
                    });
                    _this.onSuccess();
                    // Fetch DetailsDevis by Devis._id
                    _this.detailsDevisService.getDetailsDevisByDevis(devis._id)
                        .subscribe(function (data) {
                        // Delete detailsDevis
                        _this.detailsDevisService.deleteDetailsDevis(data[0]._id)
                            .subscribe(function (data) {
                            console.log('detailsDevis1 deleted' + data);
                        }, function (err) {
                            console.log('Erreur deleted :' + err);
                        });
                        _this.detailsDevisService.deleteDetailsDevis(data[1]._id)
                            .subscribe(function (data) {
                            console.log('detailsDevis2 deleted' + data);
                        }, function (err) {
                            console.log('Erreur deleted :' + err);
                        });
                        _this.detailsDevisService.deleteDetailsDevis(data[2]._id)
                            .subscribe(function (data) {
                            console.log('detailsDevis3 deleted' + data);
                        }, function (err) {
                            console.log('Erreur deleted :' + err);
                        });
                    });
                }, function (error) {
                    console.log(error),
                        _this.flashMessages.show('Erreur : Devis non supprimé', {
                            classes: ['alert', 'alert-danger'],
                            timeout: 3000
                        });
                });
            }
            else {
                console.log('Impossible de supprimer'),
                    _this.flashMessages.show('Suppression impossible ! Le devis est associé à des factures.', {
                        classes: ['alert', 'alert-danger'],
                        timeout: 3000
                    });
                _this.onSuccess();
            }
        }, function (err) { return console.log('Erreur :' + err); });
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
        this.generateForm();
        this.devis = {};
        this.processing = false;
        this.devisForm.controls['montantTtc1'].setValue(0);
        this.devisForm.controls['montantTtc2'].setValue(0);
        this.devisForm.controls['montantTtc3'].setValue(0);
        this.enableForm();
        // Différente route à utiliser une fois le dashboard implémenté
        if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
            this.getAllDevisByClient(this.id_client);
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
        this.generateForm();
        this.devis = {};
        this.detailsDevis1 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][1] };
        this.detailsDevis2 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][2] };
        this.detailsDevis3 = { tauxTva: __WEBPACK_IMPORTED_MODULE_6__models_taux_const__["a" /* CONST_TAUX */][3] };
        // Set controls['client'] touched for Validators.required
        this.devisForm.controls['client'].markAsTouched;
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
        this.devisForm.get('ref_devis').setValue(this.devis.ref_devis);
        this.detailsDevisService.getDetailsDevisByDevis(d._id)
            .subscribe(function (data) {
            console.log(data);
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
            ref_devis: [this.devis.ref_devis, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ])],
            date_creation: [Date.now],
            // DetailsDevis data
            montantHt1: [this.detailsDevis1.montantHt, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    this.isNumber
                ])],
            tauxTva1: [{ value: this.detailsDevis1.tauxTva, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            montantTtc1: [{ value: this.detailsDevis1.montantTtc, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            montantHt2: [this.detailsDevis2.montantHt, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    this.isNumber
                ])],
            tauxTva2: [{ value: this.detailsDevis2.tauxTva, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            montantTtc2: [{ value: this.detailsDevis2.montantTtc, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            montantHt3: [this.detailsDevis3.montantHt, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    this.isNumber
                ])],
            tauxTva3: [{ value: this.detailsDevis3.tauxTva, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            montantTtc3: [{ value: this.detailsDevis3.montantTtc, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            // Devis data
            montantHt: [{ value: this.devis.montantHt, disabled: true }],
            tauxTva: [{ value: this.devis.tauxTva, disabled: true }],
            montantTtc: [{ value: this.devis.montantTtc, disabled: true }],
            client: [{ value: this.id_client, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ])],
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
                if (_this.devisForm.get('ref_devis').value != _this.devis.ref_devis) {
                    return _this.validationRef = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
        return this.validationRef = false;
    };
    /* getAllValidDevis() {
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
        //this.getAllClient();
        // différentes routes à utiliser quand le dashboard sera implémenté
        if (this.activatedRoute.snapshot.params['id_client'] !== undefined) {
            this.id_client = this.activatedRoute.snapshot.params['id_client'];
            this.getAllDevisByClient(this.id_client);
            this.getClient(this.id_client);
        }
        else {
            this.router.navigate(['/pageNotFound']);
        }
    };
    return DevisComponent;
}());
DevisComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Component */])({
        selector: 'app-devis',
        template: __webpack_require__("../../../../../src/app/components/devis/devis.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/devis/devis.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__service_devis_service__["a" /* DevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_devis_service__["a" /* DevisService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* DatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_client_service__["a" /* ClientService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__service_details_devis_service__["a" /* DetailsDevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_details_devis_service__["a" /* DetailsDevisService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _j || Object])
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

module.exports = "<div class=\"container-fluid\">\r\n  <h4>{{factureGlobal.ref_factureGlobal}} {{factureGlobal.montantTtc}}</h4>\r\n  <a class=\"btn btn-default\" [routerLink]=\"['/devis/client/', factureGlobal.client]\">Retour page Devis/Factures</a>\r\n</div>\r\n<div class=\"container-fluid\">\r\n  <h4 style=\"text-align: center;\">Factures d'accompte</h4>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Statut</th>\r\n        <th>Ref</th>\r\n        <th>Date</th>\r\n        <th>Montant facturé TTC</th>\r\n        <th>Règlement client TTC</th>\r\n        <th>Facture</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let f of listFactureAccompte\">\r\n        <td *ngIf=\"f.status_factureAccompte\"><img src=\"{{status_true}}\" alt=\"true\"></td>\r\n        <td *ngIf=\"!f.status_factureAccompte\"><img src=\"{{status_false}}\" alt=\"false\"></td>\r\n        <td>{{f.ref_factureAccompte}}</td>\r\n        <td>{{f.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n        <td>{{f.montantFacture}}</td>\r\n        <td>{{f.reglementClient}}</td>\r\n        <td>{{factureGlobal.ref_factureGlobal}}</td>\r\n        <td>\r\n          <div class=\"btn-group-vertical\">\r\n            <button class=\"btn btn-success\" (click)=\"onAddReglement(f)\">Règlements</button>\r\n            <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getFactureAccompteToDelete(f)\">Supprimer</button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"color-sum\" *ngIf=\"listFactureAccompte.length > 0\">\r\n        <th>Total</th>\r\n        <th>:</th>\r\n        <th></th>\r\n        <th>{{getSumMontantFacture()}}</th>\r\n        <th>{{getSumReglementClient()}}</th>\r\n        <th></th>\r\n        <th></th>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-primary\" (click)=\"onAddFactureAccompte()\">Ajouter facture d'accompte</button>\r\n  <br/><br/>\r\n\r\n  <!-- Confirm delete Modal -->\r\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Etes-vous sûr de vouloir supprimer {{factureAccompte.ref_factureAccompte}} ?</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-danger\" (click)=\"deleteFactureAccompte(factureAccompte._id, factureAccompte.montantFacture, factureAccompte.reglementClient)\"\r\n            data-dismiss=\"modal\">Supprimer</button>\r\n          <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- addFactureAccompte Form -->\r\n  <div class=\"container\" *ngIf=\"mode\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <h4>Facture d'accompte</h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"factureForm\">\r\n          <div class=\"form-group\" [ngClass]=\"{'has-error': (factureForm.controls.ref_factureAccompte.errors && factureForm.controls.ref_factureAccompte.dirty)\r\n          || (validationRef && factureForm.controls.ref_factureAccompte.dirty),\r\n          'has-success': (!factureForm.controls.ref_factureAccompte.errors && !validationRef)}\">\r\n            <label class=\"control-label\" for=\"ref_factureAccompte\">Ref :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"ref_factureAccompte\" id=\"ref_factureAccompte\" formControlName=\"ref_factureAccompte\"\r\n              (blur)=\"verifRef()\" autofocus required />\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"factureForm.controls.ref_factureAccompte.errors?.required && factureForm.controls.ref_factureAccompte.dirty\">\r\n                Ce champ est requis\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationRef && factureForm.controls.ref_factureAccompte.dirty\">\r\n                Ref déjà utilisée\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{factureGlobal.date_creation}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'has-error': (factureForm.controls.montantFacture.errors && factureForm.controls.montantFacture.dirty)\r\n           || (validationMontantFacture && factureForm.controls.montantFacture.dirty),\r\n          'has-success': (!factureForm.controls.montantFacture.errors && !validationMontantFacture)}\">\r\n            <label class=\"control-label\" for=\"montantFacture\">Montant facturé :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantFacture\" id=\"montantFacture\" formControlName=\"montantFacture\" (blur)=\"verifMontantFacture()\"\r\n              required />\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"factureForm.controls.montantFacture.errors?.required && factureForm.controls.montantFacture.dirty\">\r\n                Ce champ est requis\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"factureForm.controls.montantFacture.errors?.isNumber && factureForm.controls.montantFacture.dirty && !factureForm.controls.montantFacture.errors?.required\">\r\n                Le montant doit être positif et doit posséder au maximum 4 chiffres après la virgule\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationMontantFacture\">\r\n                Le montant est supérieur au montant facturé TTC de la facture\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"factureGlobal\">factureGlobal :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"factureGlobal\" id=\"factureGlobal\" formControlName=\"factureGlobal\" value=\"{{factureGlobal.ref_factureGlobal}}\"\r\n              required />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n            <button [disabled]=\"!factureForm.valid || processing || validationMontantFacture\" (click)=\"addFactureAccompte()\" class=\"btn btn-success\">Créer facture d'accompte</button>\r\n            <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- addReglement form -->\r\n  <div class=\"container\" *ngIf=\"modeAddReglement\">\r\n    <div class=\"panel panel-info col-sm-6\">\r\n      <div class=\"panel-heading\">\r\n        <h4>Ajouter règlement</h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" [formGroup]=\"reglementForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"ref_factureAccompte\">Ref Facture d'accompte :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"ref_factureAccompte\" id=\"ref_factureAccompte\" formControlName=\"ref_factureAccompte\"\r\n              value=\"{{factureAccompte.ref_factureAccompte}}\" required />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{factureAccompte.date_creation}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"montantFacture\">Montant facturé :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"montantFacture\" id=\"montantFacture\" formControlName=\"montantFacture\" value=\"{{factureAccompte.montantFacture}}\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'has-error': (reglementForm.controls.reglementTtc.errors && reglementForm.controls.reglementTtc.dirty)\r\n          || (validationReglement && reglementForm.controls.reglementTtc.dirty),\r\n         'has-success': (!reglementForm.controls.reglementTtc.errors && !validationReglement)}\">\r\n            <label class=\"control-label\" for=\"reglementTtc\">Règlement client :</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"reglementTtc\" id=\"reglementTtc\" formControlName=\"reglementTtc\" (blur)=\"verifReglement()\"\r\n              autofocus required />\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"reglementForm.controls.reglementTtc.errors?.required && reglementForm.controls.reglementTtc.dirty\">\r\n                Ce champ est requis\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"reglementForm.controls.reglementTtc.errors?.isNumber && reglementForm.controls.reglementTtc.dirty && !reglementForm.controls.reglementTtc.errors?.required\">\r\n                Ce n'est pas un nombre positif\r\n              </li>\r\n              <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationReglement\">\r\n                Le règlement est supérieur au montant facturé\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n            <button [disabled]=\"!reglementForm.valid || processing || validationReglement\" (click)=\"addReglement()\" class=\"btn btn-success\">Ajouter règlement</button>\r\n            <button [disabled]=\"processing\" (click)=\"onCancel()\" class=\"btn btn-default\">Annuler</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Reglement Table -->\r\n    <div class=\"col-sm-6\" *ngIf=\"listReglement.length > 0\">\r\n      <h4 style=\"text-align: center;\">Règlements</h4>\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <th>Date création</th>\r\n          <th>Règlement client</th>\r\n          <th>Actions</th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let r of listReglement\">\r\n            <td>{{r.date_reglement | date :'dd/MM/yyyy'}}</td>\r\n            <td>{{r.reglementTtc}}</td>\r\n            <td>\r\n              <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n              <button [disabled]=\"processing\" class=\"btn btn-danger\" (click)=\"deleteReglement(r._id, r.reglementTtc)\">Supprimer</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/facture-accompte/facture-accompte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_facture_accompte_service__ = __webpack_require__("../../../../../src/app/service/facture-accompte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_reglement_service__ = __webpack_require__("../../../../../src/app/service/reglement.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureAccompteComponent; });
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
            console.log(_this.factureGlobal);
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
            console.log(factureAccompte);
            _this.listFactureAccompte = factureAccompte;
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
        console.log(newFacture);
        this.factureAccompteService.addFactureAccompte(newFacture)
            .subscribe(function (data) {
            if (data.success) {
                console.log(data.message);
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
                console.log('Erreur creation facture accompte :' + data.err);
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
            if (data.success) {
                console.log(data.message);
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
            }
            else {
                console.log('Erreur creation facture accompte :' + data.err);
                _this.flashMessages.show('data.message', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                _this.processing = false;
                _this.enableReglementForm();
            }
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
    FactureAccompteComponent.prototype.deleteFactureAccompte = function (id, montantFacture, reglementClient) {
        var _this = this;
        this.reglementService.getReglementByFactureAccompte(id)
            .subscribe(function (data) {
            if (data.length === 0) {
                _this.factureAccompteService.deleteFactureAccompte(id)
                    .subscribe(function (data) {
                    if (data.success) {
                        console.log(data.message);
                        _this.flashMessages.show(data.message, {
                            classes: ['alert', 'alert-warning'],
                            timeout: 3000
                        });
                        // Update Facture global montantTtcFacture
                        _this.updateMontantFactureGlobal(_this.factureGlobal, -montantFacture);
                        // Update facture global reglementTtcTotal
                        _this.updateReglementClientFactureGlobal(_this.factureGlobal, -reglementClient);
                        _this.onSuccess();
                    }
                    else {
                        console.log(data.message + ' :' + data.err);
                        _this.flashMessages.show(data.message, {
                            classes: ['alert', 'alert-danger'],
                            timeout: 3000
                        });
                    }
                });
            }
            else {
                console.log('Impossible de supprimer la facture accompte');
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
                console.log(data.message);
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
                console.log(data.message + ' :' + data.err);
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
                console.log(data.message);
                // Update status facture accompte
                _this.updateStatusFactureAccompte(data.obj);
                //this.onSuccess();
            }
            else {
                console.log(data.message + ' :' + data.err);
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
            .subscribe(function (data) { return console.log('Status facture accompte = ' + data.obj.status_factureAccompte); }, function (err) { return console.log(err); });
        // Get all facture accompte by facture global
        this.getAllFactureAccompteByFactureGlobal(this.id_fact);
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
        if ((factureGlobal.montantTtcFacture === factureGlobal.montantTtcTotal) && (factureGlobal.montantTtcFacture === factureGlobal.montantTtcRegle)) {
            status_factureGlobal = true;
        }
        this.factureGlobalService.updateStatusFactureGlobal(factureGlobal, status_factureGlobal)
            .subscribe(function (data) {
            console.log('Status facture global updated :' + data.obj.status_factureGlobal);
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
            .subscribe(function (data) { return console.log('updateMontantFactureGlobal réussi : ' + data.obj.montantTtcTotal); }, function (err) { return console.log('Erreur :' + err); });
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
            console.log('updateReglementClientFactureGlobal réussi :' + data.obj.montantTtcRegle);
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
        //this.getAllFactureGlobalByClient(this.client._id);
        this.factureGlobalService.getAllFactureGlobalByClient(this.client._id)
            .subscribe(function (data) {
            console.log(data);
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
                .subscribe(function (data) { return console.log('Status client mis à jour :' + data.obj.status_client); }, function (err) { return console.log('Erreur' + err); });
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
        this.getAllFactureAccompteByFactureGlobal(this.id_fact);
        this.mode = false;
        this.modeAddReglement = false;
        this.processing = false;
        this.factureAccompte = {};
        this.reglement = {};
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
        this.getAllReglementByFactureAccompte(factureAccompte._id);
        this.reglement = {};
        this.generateReglementForm();
        this.factureAccompte = factureAccompte;
        var latest_date = this.datePipe.transform(this.factureAccompte.date_creation, 'yyyy-MM-dd');
        this.factureAccompte.date_creation = latest_date;
        this.reglementForm.get('date_creation').setValue(latest_date);
        this.modeAddReglement = true;
        this.mode = false;
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
            ref_factureAccompte: [this.factureGlobal.ref_factureGlobal, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            date_creation: [Date.now],
            montantFacture: [this.factureAccompte.montantFacture, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    this.isNumber
                ])],
            factureGlobal: [{ value: this.factureAccompte.factureGlobal, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
    };
    /**
     * Generate form add reglement
     *
     * @memberof FactureAccompteComponent
     */
    FactureAccompteComponent.prototype.generateReglementForm = function () {
        this.reglementForm = this.formBuilder.group({
            ref_factureAccompte: [{ value: this.factureAccompte.ref_factureAccompte, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            date_creation: [{ value: this.factureAccompte.date_creation }],
            montantFacture: [{ value: this.factureAccompte.montantFacture, disabled: true }],
            reglementTtc: [this.factureAccompte.reglementClient, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
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
                if (_this.factureForm.get('ref_factureAccompte').value != _this.factureAccompte.ref_factureAccompte) {
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
            this.getAllFactureAccompteByFactureGlobal(this.id_fact);
            this.getOneFactureGlobal(this.id_fact);
        }
        else {
            this.router.navigate(['/pageNotFound']);
        }
    };
    return FactureAccompteComponent;
}());
FactureAccompteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Component */])({
        selector: 'app-facture-accompte',
        template: __webpack_require__("../../../../../src/app/components/facture-accompte/facture-accompte.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/facture-accompte/facture-accompte.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_facture_accompte_service__["a" /* FactureAccompteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_facture_accompte_service__["a" /* FactureAccompteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* DatePipe */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_client_service__["a" /* ClientService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__service_reglement_service__["a" /* ReglementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_reglement_service__["a" /* ReglementService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _j || Object])
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

module.exports = "<div class=\"container-fluid  container-factGlobal\">\r\n    <h4 style=\"text-align: center;\">Factures</h4>\r\n    <table class=\"table table-striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>Statut</th>\r\n                <th>Ref</th>\r\n                <th>Date</th>\r\n                <th>Montant total TTC</th>\r\n                <th>Montant facturé TTC</th>\r\n                <th>Montant réglé</th>\r\n                <th>Client</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let f of listFactureGlobals\">\r\n                <td *ngIf=\"f.status_factureGlobal\">\r\n                    <img src=\"{{status_true}}\" alt=\"true\">\r\n                </td>\r\n                <td *ngIf=\"!f.status_factureGlobal\">\r\n                    <img src=\"{{status_false}}\" alt=\"false\">\r\n                </td>\r\n                <td>{{f.ref_factureGlobal}}</td>\r\n                <td>{{f.date_creation | date: 'dd/MM/yyyy'}}</td>\r\n                <td>{{f.montantTtcTotal}}</td>\r\n                <td>{{f.montantTtcFacture}}</td>\r\n                <td>{{f.montantTtcRegle}}</td>\r\n                <td>{{client.nom}} {{client.prenom}}</td>\r\n                <td>\r\n                    <div class=\"btn-group-vertical\">\r\n                        <a class=\"btn btn-success\" [routerLink]=\"['/facture/facture-accompte', f._id]\">Consulter</a>\r\n                        <button class=\"btn btn-warning\" (click)=\"onUpdate(f)\">Modifier</button>\r\n                        <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal1\" (click)=\"getFactureGlobalToDelete(f)\">Supprimer</button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"color-sum\" *ngIf=\"listFactureGlobals.length > 0\">\r\n                <th>Total</th>\r\n                <th>:</th>\r\n                <th></th>\r\n                <th>{{getSumMontantTotal()}}</th>\r\n                <th>{{getSumMontantFacture()}}</th>\r\n                <th>{{getSumMontantRegle()}}</th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <br/>\r\n    <br/>\r\n\r\n    <!-- Confirm delete Modal -->\r\n    <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Confirmer suppression</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>Etes-vous sûr de vouloir supprimer {{factureGlobal.ref_factureGlobal}} ?</p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-danger\" (click)=\"onDelete(factureGlobal._id)\" data-dismiss=\"modal\">Supprimer</button>\r\n                    <button class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Annuler</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Update facture global form -->\r\n    <div class=\"container-fluid\" *ngIf=\"mode\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <h4>Facture Global</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\" [formGroup]=\"factureForm\" (submit)=\"updateFacture()\">\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (factureForm.controls.ref_factureGlobal.errors && factureForm.controls.ref_factureGlobal.dirty) || (validationRef && factureForm.controls.ref_factureGlobal.dirty),\r\n                    'has-success': (!factureForm.controls.ref_factureGlobal.errors && !validationRef)}\">\r\n                        <label class=\"control-label\" for=\"ref_factureGlobal\">Ref :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"ref_factureGlobal\" id=\"ref_factureGlobal\" formControlName=\"ref_factureGlobal\"\r\n                            value=\"{{factureGlobal.ref_factureGlobal}}\" (blur)=\"verifRef()\" autofocus required />\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"factureForm.controls.ref_factureGlobal.errors?.required && factureForm.controls.ref_factureGlobal.dirty\">\r\n                                Ce champ est requis\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-danger\" *ngIf=\"validationRef\">\r\n                                Ref déjà utilisée\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"date_creation\">Date création :</label>\r\n                        <input type=\"date\" class=\"form-control\" name=\"date_creation\" id=\"date_creation\" formControlName=\"date_creation\" value=\"{{factureGlobal.date_creation}}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"montantTtcTotal\">Montant TTC :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"montantTtcTotal\" id=\"montantTtcTotal\" formControlName=\"montantTtcTotal\" value=\"{{factureGlobal.montantTtcTotal}}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"client\">Client :</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"client\" id=\"client\" formControlName=\"client\" value=\"{{client.nom}} {{client.prenom}}\"\r\n                            required />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <md-spinner *ngIf=\"processing\" style=\"float: left;width: 24px;height: 24px;\"></md-spinner>\r\n                        <button [disabled]=\"!factureForm.valid || processing || validationRef\" type=\"submit\" class=\"btn btn-success\">Modifier</button>\r\n                        <button [disabled]=\"processing\" class=\"btn btn-default\" (click)=\"onCancel()\">Annuler</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/facture-global/facture-global.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_facture_accompte_service__ = __webpack_require__("../../../../../src/app/service/facture-accompte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureGlobalComponent; });
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
        var newFacture = {
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
            devis: this.factureGlobal.devis,
            valid: true,
            updated_at: new Date(),
            description: ''
        };
        this.factureGlobalService.updateFactureGlobal(newFacture)
            .subscribe(function (data) {
            _this.onSuccess();
            console.log('Facture Modifiée');
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
    };
    /**
     * Delete Facture Global by Id.
     *
     * @param {number} id factureGlobal._id
     * @memberof FactureGlobalComponent
     */
    FactureGlobalComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.factureAccompteService.getAllFactureAccompteByFactureGlobal(id)
            .subscribe(function (data) {
            if (data.length === 0) {
                _this.factureGlobalService.deleteFactureGlobal(id)
                    .subscribe(function (data) {
                    console.log('Facture Global deleted');
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
                console.log('Suppression impossible');
                _this.flashMessages.show('Suppression impossible ! La facture est associée à des factures d\'accomptes', {
                    classes: ['alert', 'alert-danger'],
                    timeout: 3000
                });
                _this.factureGlobal = {};
            }
        }, function (err) { return console.log('Erreur :' + err); });
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
        console.log(this.factureGlobal);
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
                    .subscribe(function (data) { return console.log('Status client mis à jour :' + data.obj.status_client); }, function (err) { return console.log('Erreur mis à jour status client :' + err); });
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
        this.getAllFactureGlobalByClient(this.id_client);
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
            ref_factureGlobal: [this.factureGlobal.ref_factureGlobal, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            date_creation: [this.factureGlobal.date_creation],
            montantTtcTotal: [{ value: this.factureGlobal.montantTtc, disabled: true }],
            client: [{ value: this.factureGlobal.client, disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
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
        this.factureGlobalService.getOneFactureGlobalByRef(this.client._id, this.factureForm.get('ref_factureGlobal').value)
            .subscribe(function (data) {
            if (data.success) {
                // onUpdate : Vérif si ref dans l'input == ref initial de la facture global 
                if (_this.factureForm.get('ref_factureGlobal').value != _this.factureGlobal.ref_factureGlobal) {
                    return _this.validationRef = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
        return this.validationRef = false;
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
            this.getAllFactureGlobalByClient(this.id_client);
            this.getClient(this.id_client);
        }
        else {
            this.getAllFactureGlobal();
        }
    };
    return FactureGlobalComponent;
}());
FactureGlobalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Component */])({
        selector: 'app-facture-global',
        template: __webpack_require__("../../../../../src/app/components/facture-global/facture-global.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/facture-global/facture-global.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__service_facture_accompte_service__["a" /* FactureAccompteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_facture_accompte_service__["a" /* FactureAccompteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_client_service__["a" /* ClientService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* DatePipe */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _g || Object])
], FactureGlobalComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=facture-global.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" routerLink=\"client\"><img style=\"margin-top: -12px;\" src=\"../../../assets/images/GP.png\" alt=\"G & P\"></a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav\">\r\n            <!-- <li routerLinkActive=\"active\"><a routerLink=\"dashboard\">Dashboard</a></li> -->\r\n            <li routerLinkActive=\"active\"><a routerLink=\"client\">Client</a></li>\r\n            <!-- <li routerLinkActive=\"active\"><a routerLink=\"devis\">Devis / Facture</a></li>\r\n            <li routerLinkActive=\"active\"><a [routerLink]=\"['facture/facture-accompte']\">Facture</a></li> -->\r\n            <li routerLinkActive=\"active\"><a routerLink=\"bug\">Bug</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_factureGlobal__ = __webpack_require__("../../../../../src/app/models/factureGlobal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_devis_service__ = __webpack_require__("../../../../../src/app/service/devis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_client_service__ = __webpack_require__("../../../../../src/app/service/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__ = __webpack_require__("../../../../../src/app/service/facture-global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValiderDevisComponent; });
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
            console.log('Devis Validé' + data);
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
                        .subscribe(function (data) { return console.log('Status client mis à jour :' + data.obj.status_client); }, function (err) { return console.log('Erreur mis à jour status client :' + err); });
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
            ref_factureGlobal: [this.devis.ref_devis, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
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
        //this.getAllClient();
        //this.onValiderDevis();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-valider-devis',
        template: __webpack_require__("../../../../../src/app/components/valider-devis/valider-devis.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/valider-devis/valider-devis.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_devis_service__["a" /* DevisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_devis_service__["a" /* DevisService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__service_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_client_service__["a" /* ClientService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__["a" /* FactureGlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_facture_global_service__["a" /* FactureGlobalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10_ngx_flash_messages__["b" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_ngx_flash_messages__["b" /* FlashMessagesService */]) === "function" && _h || Object])
], ValiderDevisComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=valider-devis.component.js.map

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

/***/ "../../../../../src/app/service/bugs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BugsService; });
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
 * Set dev url accessing app/routes/ url
 */
var devUrl = 'http://localhost:3001/api/bugs/';
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
    }
    /**
     * Get All Bugs
     *
     * @returns
     * @memberof BugsService
     */
    BugsService.prototype.getAllBugs = function () {
        return this.http.get(devUrl)
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
        return this.http.get(devUrl + id)
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
        return this.http.post(devUrl, bug)
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
        return this.http.put(devUrl + bug._id, bug)
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
        return this.http.delete(devUrl + id)
            .map(function (res) { return res.json(); });
    };
    return BugsService;
}());
BugsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BugsService);

var _a;
//# sourceMappingURL=bugs.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
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
 * Set dev url accessing app/routes/ url
 */
var devUrl = '/api/clients/';
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
    }
    /**
     * Get all clients.
     *
     * @returns
     * @memberof ClientService
     */
    ClientService.prototype.getAllClients = function () {
        return this.http.get(devUrl)
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
        return this.http.get(devUrl + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Save client.
     *
     * @param {*} client client body
     * @returns
     * @memberof ClientService
     */
    ClientService.prototype.addClient = function (client) {
        return this.http.post(devUrl, client)
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
        return this.http.put(devUrl + client._id, client)
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
        return this.http.delete(devUrl + id)
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
        return this.http.put(devUrl + client._id, client)
            .map(function (res) { return res.json(); });
    };
    return ClientService;
}());
ClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/details-devis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsDevisService; });
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
 * Set dev url accessing app/routes/ url
 */
var devUrl = '/api/details-devis/';
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
    }
    /**
     * Get All DetailsDevis By Devis
     *
     * @param {number} id_dev devis._id
     * @returns
     * @memberof DetailsDevisService
     */
    DetailsDevisService.prototype.getDetailsDevisByDevis = function (id_dev) {
        return this.http.get(devUrl + id_dev)
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
        return this.http.post(devUrl, detailsDevis)
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
        return this.http.put(devUrl + detailsDevis._id, detailsDevis)
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
        return this.http.delete(devUrl + id)
            .map(function (res) { return res.json(); });
    };
    return DetailsDevisService;
}());
DetailsDevisService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DetailsDevisService);

var _a;
//# sourceMappingURL=details-devis.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/devis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevisService; });
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
/**
 * Set dev url accessing app/routes/ url
 */
var devUrl = '/api/devis/';
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
    }
    /**
   * Get All Devis.
   *
   * @returns devis
   * @memberof DevisService
   */
    DevisService.prototype.getAllDevis = function () {
        return this.http.get(devUrl)
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
        return this.http.get(devUrl + 'client/' + client_id)
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
        return this.http.get(devUrl + id)
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
        return this.http.get(devUrl + 'client/' + id_client + '/ref/' + ref_devis)
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
        return this.http.post(devUrl, devis)
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
        return this.http.put(devUrl + devis._id, devis)
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
        return this.http.delete(devUrl + id_dev)
            .map(function (res) { return res.json(); });
    };
    return DevisService;
}());
DevisService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DevisService);

var _a;
//# sourceMappingURL=devis.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/facture-accompte.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureAccompteService; });
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
 * Set dev url accessing app/routes/ url
 */
var devUrl = '/api/facture-accompte/';
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
    }
    /**
   * Get All Facture Accompte.
   *
   * @returns
   * @memberof FactureAccompteService
   */
    FactureAccompteService.prototype.getAllFactureAccompte = function () {
        return this.http.get(devUrl)
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
        return this.http.get(devUrl + 'facture-global/' + id_fact)
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
        return this.http.get(devUrl + id)
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
        return this.http.get(devUrl + 'facture-global/' + id_factureGlobal + '/ref/' + ref_factureAccompte)
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
        return this.http.post(devUrl, factureAccompte)
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
        return this.http.put(devUrl + factureAccompte._id, factureAccompte)
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
        return this.http.put(devUrl + factureAccompte._id, factureAccompte)
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
        return this.http.delete(devUrl + id)
            .map(function (res) { return res.json(); });
    };
    return FactureAccompteService;
}());
FactureAccompteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FactureAccompteService);

var _a;
//# sourceMappingURL=facture-accompte.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/facture-global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactureGlobalService; });
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
* Set dev url accessing app/routes/ url
*/
var devUrl = '/api/facture-global/';
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
    }
    /**
   * GET ALL FACTURE GLOBAL.
   *
   * @returns
   * @memberof FactureGlobalService
   */
    FactureGlobalService.prototype.getAllFactureGlobal = function () {
        return this.http.get(devUrl)
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
        return this.http.get(devUrl + id)
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
        return this.http.get(devUrl + 'client/' + id_client)
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
        return this.http.get(devUrl + 'devis/' + id)
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
        return this.http.get(devUrl + 'client/' + id_client + '/ref/' + ref)
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
        return this.http.post(devUrl, factureGlobal)
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
        return this.http.put(devUrl + factureGlobal._id, factureGlobal)
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
        return this.http.put(devUrl + factureGlobal._id, factureGlobal)
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
        return this.http.delete(devUrl + id_fact)
            .map(function (res) { return res.json(); });
    };
    return FactureGlobalService;
}());
FactureGlobalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FactureGlobalService);

var _a;
//# sourceMappingURL=facture-global.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/reglement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglementService; });
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
 * Set dev url accessing app/routes/ url
 */
var devUrl = '/api/reglements/';
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
    }
    /**
     * Get All Reglement by FactureAccompte._id
     *
     * @param {number} id FactureAccompte._id
     * @returns
     * @memberof ReglementService
     */
    ReglementService.prototype.getReglementByFactureAccompte = function (id) {
        return this.http.get(devUrl + id)
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
        return this.http.post(devUrl, reglement)
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
        return this.http.put(devUrl + reglement._id, reglement)
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
        return this.http.delete(devUrl + id)
            .map(function (res) { return res.json(); });
    };
    return ReglementService;
}());
ReglementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReglementService);

var _a;
//# sourceMappingURL=reglement.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map