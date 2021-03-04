(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Column{width:50px;display: inline-block;}\r\n.Tile{position: relative; height: 50px;width: 50px;display: inline-block;border: 1px solid white;vertical-align: top;line-height: 50px;text-align: center;}\r\n.CenterDiv{position: absolute;width: 100%;text-align: center;top:calc(50% - 200px);}\r\n.TileID{height:45px;width:45px;line-height: 50px;text-align: center;border:1px solid black;display: inline-block;margin:2px;}\r\n.Tile{overflow: hidden;}\r\n.ButtonsClass{width: 100%;text-align: center;top: calc(50% - 250px);}\r\n.ButtonsClass input{margin:0px 20px;width: 80px;height: 40px;}\r\n.innerDiv{height:200px;width:200px;overflow: hidden;position: absolute;background-size: contain;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxXQUFXLHNCQUFzQixDQUFDO0FBQzFDLE1BQU0sbUJBQW1CLENBQUMsYUFBYSxZQUFZLHNCQUFzQix3QkFBd0Isb0JBQW9CLGtCQUFrQixtQkFBbUIsQ0FBQztBQUMzSixXQUFXLG1CQUFtQixZQUFZLG1CQUFtQixzQkFBc0IsQ0FBQztBQUNwRixRQUFRLFlBQVksV0FBVyxrQkFBa0IsbUJBQW1CLHVCQUF1QixzQkFBc0IsV0FBVyxDQUFDO0FBQzdILE1BQU0saUJBQWlCLENBQUM7QUFDeEIsY0FBYyxZQUFZLG1CQUFtQix1QkFBdUIsQ0FBQztBQUNyRSxvQkFBb0IsZ0JBQWdCLFlBQVksYUFBYSxDQUFDO0FBQzlELFVBQVUsYUFBYSxZQUFZLGlCQUFpQixtQkFBbUIseUJBQXlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db2x1bW57d2lkdGg6NTBweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uVGlsZXtwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogNTBweDt3aWR0aDogNTBweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7dmVydGljYWwtYWxpZ246IHRvcDtsaW5lLWhlaWdodDogNTBweDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uQ2VudGVyRGl2e3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTt0ZXh0LWFsaWduOiBjZW50ZXI7dG9wOmNhbGMoNTAlIC0gMjAwcHgpO31cclxuLlRpbGVJRHtoZWlnaHQ6NDVweDt3aWR0aDo0NXB4O2xpbmUtaGVpZ2h0OiA1MHB4O3RleHQtYWxpZ246IGNlbnRlcjtib3JkZXI6MXB4IHNvbGlkIGJsYWNrO2Rpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46MnB4O31cclxuLlRpbGV7b3ZlcmZsb3c6IGhpZGRlbjt9XHJcbi5CdXR0b25zQ2xhc3N7d2lkdGg6IDEwMCU7dGV4dC1hbGlnbjogY2VudGVyO3RvcDogY2FsYyg1MCUgLSAyNTBweCk7fVxyXG4uQnV0dG9uc0NsYXNzIGlucHV0e21hcmdpbjowcHggMjBweDt3aWR0aDogODBweDtoZWlnaHQ6IDQwcHg7fVxyXG4uaW5uZXJEaXZ7aGVpZ2h0OjIwMHB4O3dpZHRoOjIwMHB4O292ZXJmbG93OiBoaWRkZW47cG9zaXRpb246IGFic29sdXRlO2JhY2tncm91bmQtc2l6ZTogY29udGFpbjt9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta property=\"og:image\" content=\"/Tile-app/asspts/ogImage.png\" />\n\n<div class=\"CenterDiv\">\n  <div *ngIf='this.ArraysOfArrays'>\n    <div class=\"Column\" *ngFor='let itm of this.ArraysOfArrays'>\n      <div class=\"Tile\" *ngFor='let tile of itm'>\n        <span *ngIf=\"!this.BackgroundImage\" class=\"TileID\">{{tile.ID}}</span>\n        <div *ngIf='!tile.isEmpty' [ngStyle]=\"tile.Img\" class=\"innerDiv\" (click)=\"this.TileClick(tile)\"></div>\n      </div>\n    </div>\n  </div>\n  <br />\n  <div class=\"ButtonsClass\">\n      <input type=\"button\" value=\"Solve\" (click)='this.SolvePuzzle()' />\n      <input type=\"button\" value=\"Shuffle\" (click)='this.Shuffle()' />\n    </div>\n  <label>\n    <h2>Paste Image URL below</h2>\n    <input type=\"text\" placeholder=\"Bakcground Image Location\" [(ngModel)]='this.BackgroundImage' (ngModelChange)='this.getArrayOfArrays()' />\n  </label>\n\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, SingleTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTile", function() { return SingleTile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tile-app';
        this.TopLeftTile = new SingleTile;
        this.BackgroundImage = 'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/45000274_10155623833461922_164377830166102016_n.jpg?_nc_cat=101&_nc_ohc=drIRxdy5JzwAQlW6njXiCtVigAd9IKLY3h_a0T84i52gwtgl8XGfJ2big&_nc_ht=scontent.fewr1-6.fna&oh=59ba93d0d1b6ed8d57f1212da208e023&oe=5E892B94';
        this.shuffleOrder = [];
        this.BlankTile = this.TopLeftTile;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.CreateTiles();
        this.getArrayOfArrays();
    };
    AppComponent.prototype.Shuffle = function (numberOfMovesToShuffle) {
        if (!numberOfMovesToShuffle) {
            numberOfMovesToShuffle = 100;
        }
        for (var i = 0; i < numberOfMovesToShuffle; i++) {
            var allDriections = Object.keys(this.BlankTile.Links);
            var selectedDirection = allDriections[this.getRandomDirection()];
            while (!this.BlankTile.Links[selectedDirection]) {
                selectedDirection = allDriections[this.getRandomDirection()];
            }
            this.TileClick(this.BlankTile.Links[selectedDirection]);
        }
    };
    AppComponent.prototype.getRandomDirection = function () { return Math.floor(Math.random() * 5); };
    AppComponent.prototype.SolvePuzzle = function () {
        // this is kinda cheating, but its the simple way  to solve the puzzle,
        // we will just play it backwards.
        while (this.shuffleOrder.length > 0) {
            this.TileClick(this.shuffleOrder.pop(), false);
        }
    };
    AppComponent.prototype.TileClick = function (tile, log) {
        if (log === void 0) { log = true; }
        var swpWith;
        //checks to see if we can swap and finds the approprate tile to swap
        if (tile.Links.Bottom && tile.Links.Bottom.isEmpty) {
            swpWith = tile.Links.Bottom;
        }
        if (tile.Links.Top && tile.Links.Top.isEmpty) {
            swpWith = tile.Links.Top;
        }
        if (tile.Links.Left && tile.Links.Left.isEmpty) {
            swpWith = tile.Links.Left;
        }
        if (tile.Links.Right && tile.Links.Right.isEmpty) {
            swpWith = tile.Links.Right;
        }
        //next we swap the info in the tiles... 
        // yes technically its cheating, but i wont tell =D
        if (swpWith) {
            var tmpID = swpWith.ID;
            var tmpImg = swpWith.Img;
            var tmpisEmpty = swpWith.isEmpty;
            swpWith.isEmpty = tile.isEmpty;
            swpWith.Img = tile.Img;
            swpWith.ID = tile.ID;
            tile.ID = tmpID;
            tile.Img = tmpImg;
            tile.isEmpty = tmpisEmpty;
            this.BlankTile = tile;
            if (log) {
                this.shuffleOrder.push(swpWith);
            }
            this.getArrayOfArrays(); // update the display....
        }
    };
    AppComponent.prototype.getArrayOfArrays = function () {
        var _this = this;
        var rtn = [];
        var rw = this.TopLeftTile;
        while (rw) {
            rtn.push([rw]);
            rw.Img['background-image'] = 'url("' + this.BackgroundImage + '")';
            rw = rw.Links.Right;
        }
        rtn.forEach(function (itm) {
            var downWard = itm[0].Links.Bottom;
            while (downWard) {
                itm.push(downWard);
                downWard.Img['background-image'] = 'url("' + _this.BackgroundImage + '")';
                downWard = downWard.Links.Bottom;
            }
        });
        window['DN'] = rtn;
        this.ArraysOfArrays = undefined;
        this.ArraysOfArrays = rtn;
    };
    AppComponent.prototype.counter = function () { var a = 0; return function () { a = a + 1; return a; }; };
    AppComponent.prototype.CreateTiles = function () {
        this.TopLeftTile.isEmpty = true;
        this.GenerateTiles(4, 4, this.TopLeftTile);
        window['TopLeft'] = this.TopLeftTile;
    };
    AppComponent.prototype.jumpDownXTiles = function (distance, startTile) {
        var rtn = startTile;
        for (var j = 0; j < distance; j++) {
            if (distance > 0) {
                rtn = rtn.Links.Bottom || rtn;
            }
        }
        return rtn;
    };
    AppComponent.prototype.GenerateTiles = function (width, length, TopLeftTile) {
        var cnt = this.counter();
        //first we will link all the tiles across the top.
        //next we will link all the tiles across the bottom.
        var currentTile = TopLeftTile;
        for (var w = 1; w < width; w++) {
            var newTile = new SingleTile;
            newTile.ID = cnt();
            newTile.Img.left = (-50 * (w)).toString() + 'px';
            newTile.Img.top = '0px';
            newTile.Img['background-image'] = 'url("' + this.BackgroundImage + '")';
            newTile.Links.Left = currentTile;
            currentTile.Links.Right = newTile;
            currentTile = newTile;
        }
        //now to link all the tiles across the bottom
        var InitalcurrentTile = TopLeftTile;
        currentTile = InitalcurrentTile;
        for (var w = 0; w < width; w++) {
            for (var l = 0; l < length - 1; l++) {
                var newTile = new SingleTile;
                newTile.ID = cnt();
                newTile.Img.left = (-50 * (w)).toString() + 'px';
                newTile.Img.top = (-50 * (l + 1)).toString() + 'px';
                newTile.Img['background-image'] = 'url("' + this.BackgroundImage + '")';
                newTile.Links.Top = currentTile;
                currentTile.Links.Bottom = newTile;
                //since we now have a function to jump in the list we can now link across from here
                //we only need if the inital link has a left
                if (InitalcurrentTile.Links.Left) {
                    var crossLinkTile = this.jumpDownXTiles(l + 1, InitalcurrentTile.Links.Left);
                    newTile.Links.Right = crossLinkTile;
                    crossLinkTile.Links.Left = newTile;
                }
                currentTile = newTile;
            }
            currentTile = InitalcurrentTile.Links.Right;
            InitalcurrentTile = InitalcurrentTile.Links.Right;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var SingleTile = /** @class */ (function () {
    function SingleTile() {
        this.Img = new ImagePart;
        this.Links = new Link;
        this.isEmpty = false;
    }
    return SingleTile;
}());

var ImagePart = /** @class */ (function () {
    function ImagePart() {
    }
    return ImagePart;
}());
var Link = /** @class */ (function () {
    function Link() {
        this.Top = undefined;
        this.Right = undefined;
        this.Bottom = undefined;
        this.Left = undefined;
    }
    return Link;
}());


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ishey4\tile-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map