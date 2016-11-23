System.register("src/toasty.utils", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Check and return true if an object is type of string
     */
    function isString(obj) {
        return typeof obj === "string";
    }
    exports_1("isString", isString);
    /**
     * Check and return true if an object is type of number
     */
    function isNumber(obj) {
        return typeof obj === "number";
    }
    exports_1("isNumber", isNumber);
    /**
     * Check and return true if an object is type of Function
     */
    function isFunction(obj) {
        return typeof obj === "function";
    }
    exports_1("isFunction", isFunction);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3R5LnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9hc3R5LnV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBOztPQUVHO0lBQ0gsa0JBQXlCLEdBQUc7UUFDeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRkQsK0JBRUMsQ0FBQTtJQUNEOztPQUVHO0lBQ0gsa0JBQXlCLEdBQUc7UUFDeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRkQsK0JBRUMsQ0FBQTtJQUNEOztPQUVHO0lBQ0gsb0JBQTJCLEdBQUc7UUFDMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBRkQsbUNBRUMsQ0FBQTs7Ozs7OztBQUNELHdDQUF3QyJ9
System.register("src/toasty.service", ["node_modules/@angular/core", "src/toasty.utils"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, toasty_utils_1;
    var __decorate, __metadata, ToastyConfig, ToastyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toasty_utils_1_1) {
                toasty_utils_1 = toasty_utils_1_1;
            }],
        execute: function() {
            // Copyright (C) 2016 Sergey Akopkokhyants
            // This project is licensed under the terms of the MIT license.
            // https://github.com/akserg/ng2-toasty
            __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            /**
             * Default configuration foa all toats and toasty container
             */
            exports_1("ToastyConfig", ToastyConfig = (function () {
                function ToastyConfig() {
                    // Maximum number of toasties to show at once
                    this.limit = 5;
                    // Whether to show the 'X' icon to close the toast
                    this.showClose = true;
                    // The window position where the toast pops up. Possible values
                    // bottom-right, bottom-left, top-right, top-left, top-center, bottom-center, center-center
                    this.position = 'bottom-right';
                    // How long (in miliseconds) the toasty shows before it's removed. Set to null/0 to turn off.
                    this.timeout = 5000;
                    // What theme to use. Possible values:
                    // default, material or bootstrap
                    this.theme = 'default';
                }
                ToastyConfig = __decorate([
                    core_1.Injectable(),
                    __metadata('design:paramtypes', [])
                ], ToastyConfig);
                return ToastyConfig;
            }()));
            /**
             * Toasty service helps create different kinds of Toasts
             */
            exports_1("ToastyService", ToastyService = (function () {
                function ToastyService(config) {
                    this.config = config;
                    // Init the counter
                    this.uniqueCounter = 0;
                    // ToastData event emitter
                    this.toastsEmitter = new core_1.EventEmitter();
                    // Clear event emitter
                    this.clearEmitter = new core_1.EventEmitter();
                }
                /**
                 * Get list of toats
                 */
                ToastyService.prototype.getToasts = function () {
                    return this.toastsEmitter.asObservable();
                };
                ToastyService.prototype.getClear = function () {
                    return this.clearEmitter.asObservable();
                };
                /**
                 * Create Toast of a default type
                 */
                ToastyService.prototype.default = function (options) {
                    this.add(options, 'default');
                };
                /**
                 * Create Toast of info type
                 * @param  {object} options Individual toasty config overrides
                 */
                ToastyService.prototype.info = function (options) {
                    this.add(options, 'info');
                };
                /**
                 * Create Toast of success type
                 * @param  {object} options Individual toasty config overrides
                 */
                ToastyService.prototype.success = function (options) {
                    this.add(options, 'success');
                };
                /**
                 * Create Toast of wait type
                 * @param  {object} options Individual toasty config overrides
                 */
                ToastyService.prototype.wait = function (options) {
                    this.add(options, 'wait');
                };
                /**
                 * Create Toast of error type
                 * @param  {object} options Individual toasty config overrides
                 */
                ToastyService.prototype.error = function (options) {
                    this.add(options, 'error');
                };
                /**
                 * Create Toast of warning type
                 * @param  {object} options Individual toasty config overrides
                 */
                ToastyService.prototype.warning = function (options) {
                    this.add(options, 'warning');
                };
                // Add a new toast item
                ToastyService.prototype.add = function (options, type) {
                    var toastyOptions;
                    if (toasty_utils_1.isString(options) && options !== '' || toasty_utils_1.isNumber(options)) {
                        toastyOptions = {
                            title: options.toString()
                        };
                    }
                    else {
                        toastyOptions = options;
                    }
                    if (!toastyOptions || !toastyOptions.title && !toastyOptions.msg) {
                        throw new Error('ng2-toasty: No toast title or message specified!');
                    }
                    type = type || 'default';
                    // Set a unique counter for an id
                    this.uniqueCounter++;
                    // Set the local vs global config items
                    var showClose = this._checkConfigItem(this.config, toastyOptions, 'showClose');
                    // If we have a theme set, make sure it's a valid one
                    var theme;
                    if (toastyOptions.theme) {
                        theme = ToastyService.THEMES.indexOf(toastyOptions.theme) > -1 ? toastyOptions.theme : this.config.theme;
                    }
                    else {
                        theme = this.config.theme;
                    }
                    var toast = {
                        id: this.uniqueCounter,
                        title: toastyOptions.title,
                        msg: toastyOptions.msg,
                        showClose: showClose,
                        type: 'toasty-type-' + type,
                        theme: 'toasty-theme-' + theme,
                        onAdd: toastyOptions.onAdd && toasty_utils_1.isFunction(toastyOptions.onAdd) ? toastyOptions.onAdd : null,
                        onRemove: toastyOptions.onRemove && toasty_utils_1.isFunction(toastyOptions.onRemove) ? toastyOptions.onRemove : null
                    };
                    // If there's a timeout individually or globally, set the toast to timeout
                    // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
                    toast.timeout = toastyOptions.hasOwnProperty('timeout') ? toastyOptions.timeout : this.config.timeout;
                    // Push up a new toast item
                    // this.toastsSubscriber.next(toast);
                    this.toastsEmitter.next(toast);
                    // If we have a onAdd function, call it here
                    if (toastyOptions.onAdd && toasty_utils_1.isFunction(toastyOptions.onAdd)) {
                        toastyOptions.onAdd.call(this, toast);
                    }
                };
                // Clear all toasts
                ToastyService.prototype.clearAll = function () {
                    this.clearEmitter.next(null);
                };
                // Clear the specific one
                ToastyService.prototype.clear = function (id) {
                    this.clearEmitter.next(id);
                };
                // Checks whether the local option is set, if not,
                // checks the global config
                ToastyService.prototype._checkConfigItem = function (config, options, property) {
                    if (options[property] === false) {
                        return false;
                    }
                    else if (!options[property]) {
                        return config[property];
                    }
                    else {
                        return true;
                    }
                };
                // Allowed THEMES
                ToastyService.THEMES = ['default', 'material', 'bootstrap'];
                ToastyService = __decorate([
                    core_1.Injectable(),
                    __metadata('design:paramtypes', [ToastyConfig])
                ], ToastyService);
                return ToastyService;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3R5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2FzdHkuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBR0ksVUFBVSxFQU1WLFVBQVUsRUFRSCxZQUFZLEVBd0JaLGFBQWE7Ozs7Ozs7Ozs7WUF6Q3hCLDBDQUEwQztZQUMxQywrREFBK0Q7WUFDL0QsdUNBQXVDO1lBQ25DLFVBQVUsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNqRixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzdILEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDO29CQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvSCxJQUFJO29CQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENB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
System.register("src/toasty.component", ["node_modules/@angular/core", "src/toasty.utils", "src/toasty.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, toasty_utils_1, toasty_service_1;
    var __decorate, __metadata, ToastyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toasty_utils_1_1) {
                toasty_utils_1 = toasty_utils_1_1;
            },
            function (toasty_service_1_1) {
                toasty_service_1 = toasty_service_1_1;
            }],
        execute: function() {
            // Copyright (C) 2016 Sergey Akopkokhyants
            // This project is licensed under the terms of the MIT license.
            // https://github.com/akserg/ng2-toasty
            __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            /**
             * Toasty is container for Toast components
             */
            exports_1("ToastyComponent", ToastyComponent = (function () {
                function ToastyComponent(config, toastyService) {
                    this.config = config;
                    this.toastyService = toastyService;
                    this._position = '';
                    // The storage for toasts.
                    this.toasts = [];
                    // Initialise position
                    this.position = '';
                }
                Object.defineProperty(ToastyComponent.prototype, "position", {
                    get: function () {
                        return this._position;
                    },
                    // The window position where the toast pops up. Possible values:
                    // - bottom-right (default value from ToastConfig)
                    // - bottom-left
                    // - top-right
                    // - top-left
                    // - top-center
                    // - bottom-center
                    // - center-center
                    set: function (value) {
                        if (value) {
                            var notFound = true;
                            for (var i = 0; i < ToastyComponent.POSITIONS.length; i++) {
                                if (ToastyComponent.POSITIONS[i] === value) {
                                    notFound = false;
                                    break;
                                }
                            }
                            if (notFound) {
                                // Position was wrong - clear it here to use the one from config.
                                value = this.config.position;
                            }
                        }
                        else {
                            value = this.config.position;
                        }
                        this._position = 'toasty-position-' + value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
                 * first time, and before any of its children have been checked. It is invoked only once when the
                 * directive is instantiated.
                 */
                ToastyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // We listen our service to recieve new toasts from it
                    this.toastyService.getToasts().subscribe(function (toast) {
                        // If we've gone over our limit, remove the earliest
                        // one from the array
                        if (_this.toasts.length >= _this.config.limit) {
                            _this.toasts.shift();
                        }
                        // Add toasty to array
                        _this.toasts.push(toast);
                        //
                        // If there's a timeout individually or globally,
                        // set the toast to timeout
                        if (toast.timeout) {
                            _this._setTimeout(toast);
                        }
                    });
                    // We listen clear all comes from service here.
                    this.toastyService.getClear().subscribe(function (id) {
                        if (id) {
                            _this.clear(id);
                        }
                        // Lets clear all toasts
                        _this.clearAll();
                    });
                };
                /**
                 * Event listener of 'closeToast' event comes from ToastyComponent.
                 * This method removes ToastComponent assosiated with this Toast.
                 */
                ToastyComponent.prototype.closeToast = function (toast) {
                    this.clear(toast.id);
                };
                /**
                 * Clear individual toast by id
                 * @param id is unique identifier of Toast
                 */
                ToastyComponent.prototype.clear = function (id) {
                    var _this = this;
                    if (id) {
                        this.toasts.forEach(function (value, key) {
                            if (value.id === id) {
                                if (value.onRemove && toasty_utils_1.isFunction(value.onRemove)) {
                                    value.onRemove.call(_this, value);
                                }
                                _this.toasts.splice(key, 1);
                            }
                        });
                    }
                    else {
                        throw new Error('Please provide id of Toast to close');
                    }
                };
                /**
                 * Clear all toasts
                 */
                ToastyComponent.prototype.clearAll = function () {
                    var _this = this;
                    this.toasts.forEach(function (value, key) {
                        if (value.onRemove && toasty_utils_1.isFunction(value.onRemove)) {
                            value.onRemove.call(_this, value);
                        }
                    });
                    this.toasts = [];
                };
                /**
                 * Custom setTimeout function for specific setTimeouts on individual toasts.
                 */
                ToastyComponent.prototype._setTimeout = function (toast) {
                    var _this = this;
                    window.setTimeout(function () {
                        _this.clear(toast.id);
                    }, toast.timeout);
                };
                /**
                 * Set of constants defins position of Toasty on the page.
                 */
                ToastyComponent.POSITIONS = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center', 'center-center'];
                __decorate([
                    core_1.Input(),
                    __metadata('design:type', String),
                    __metadata('design:paramtypes', [String])
                ], ToastyComponent.prototype, "position", null);
                ToastyComponent = __decorate([
                    core_1.Component({
                        selector: 'ng2-toasty',
                        template: "\n    <div id=\"toasty\" [ngClass]=\"[position]\">\n        <ng2-toast *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n    </div>"
                    }),
                    __metadata('design:paramtypes', [toasty_service_1.ToastyConfig, toasty_service_1.ToastyService])
                ], ToastyComponent);
                return ToastyComponent;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvYXN0eS5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUdJLFVBQVUsRUFNVixVQUFVLEVBU0gsZUFBZTs7Ozs7Ozs7Ozs7OztZQWxCMUIsMENBQTBDO1lBQzFDLCtEQUErRDtZQUMvRCx1Q0FBdUM7WUFDbkMsVUFBVSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ2pGLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDN0gsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUM7b0JBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9ILElBQUk7b0JBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7d0JBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxN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
System.register("src/toast.component", ["node_modules/@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var __decorate, __metadata, ToastComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Copyright (C) 2016 Sergey Akopkokhyants
            // This project is licensed under the terms of the MIT license.
            // https://github.com/akserg/ng2-toasty
            __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            /**
             * A Toast component shows message with title and close button.
             */
            exports_1("ToastComponent", ToastComponent = (function () {
                function ToastComponent() {
                    this.closeToastEvent = new core_1.EventEmitter();
                }
                /**
                 * Event handler invokes when user clicks on close button.
                 * This method emit new event into ToastyContainer to close it.
                 */
                ToastComponent.prototype.close = function ($event) {
                    $event.preventDefault();
                    this.closeToastEvent.next(this.toast);
                };
                __decorate([
                    core_1.Input(),
                    __metadata('design:type', Object)
                ], ToastComponent.prototype, "toast", void 0);
                __decorate([
                    core_1.Output('closeToast'),
                    __metadata('design:type', Object)
                ], ToastComponent.prototype, "closeToastEvent", void 0);
                ToastComponent = __decorate([
                    core_1.Component({
                        selector: 'ng2-toast',
                        template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\">{{toast.title}}</span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\">{{toast.msg}}</span>\n            </div>\n        </div>"
                    }),
                    __metadata('design:paramtypes', [])
                ], ToastComponent);
                return ToastComponent;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9hc3QuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFHSSxVQUFVLEVBTVYsVUFBVSxFQU9ILGNBQWM7Ozs7Ozs7WUFoQnpCLDBDQUEwQztZQUMxQywrREFBK0Q7WUFDL0QsdUNBQXVDO1lBQ25DLFVBQVUsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNqRixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzdILEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDO29CQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvSCxJQUFJO29CQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsSixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUM7WUFDRSxVQUFVLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hELEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDO29CQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RyxDQUFDLENBQUM7WUFFRjs7ZUFFRztZQUNRLDRCQUFBLGNBQWMsR0FBRyxDQUFDO2dCQUN6QjtvQkFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUM5QyxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxNQUFNO29CQUM3QyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDO2dCQUNGLFVBQVUsQ0FBQztvQkFDUCxZQUFLLEVBQUU7b0JBQ1AsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7aUJBQ3BDLEVBQUUsY0FBYyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsVUFBVSxDQUFDO29CQUNQLGFBQU0sQ0FBQyxZQUFZLENBQUM7b0JBQ3BCLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO2lCQUNwQyxFQUFFLGNBQWMsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsY0FBYyxHQUFHLFVBQVUsQ0FBQztvQkFDeEIsZ0JBQVMsQ0FBQzt3QkFDTixRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLHFnQkFBcWdCO3FCQUNsaEIsQ0FBQztvQkFDRixVQUFVLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO2lCQUN0QyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQzs7OztBQUNMLDJDQUEyQyJ9
System.register("index", ["node_modules/@angular/core", "node_modules/@angular/common", "src/toasty.service", "src/toasty.component", "src/toast.component"], function(exports_1, context_1) {
    // Copyright (C) 2016 Sergey Akopkokhyants
    // This project is licensed under the terms of the MIT license.
    // https://github.com/akserg/ng2-toasty
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, toasty_component_1, toast_component_1, toasty_service_1;
    var __decorate, __metadata, ToastyModule;
    var exportedNames_1 = {
        'ToastyModule': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (toasty_service_2_1) {
                exportStar_1(toasty_service_2_1);
                toasty_service_1 = toasty_service_2_1;
            },
            function (toasty_component_2_1) {
                exportStar_1(toasty_component_2_1);
                toasty_component_1 = toasty_component_2_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            }],
        execute: function() {
            __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            exports_1("default",{
                providers: [toasty_service_1.ToastyConfig, toasty_service_1.ToastyService],
                directives: [toasty_component_1.ToastyComponent, toast_component_1.ToastComponent]
            });
            exports_1("ToastyModule", ToastyModule = (function () {
                function ToastyModule() {
                }
                ToastyModule.forRoot = function () {
                    return {
                        ngModule: ToastyModule,
                        providers: [toasty_service_1.ToastyConfig, toasty_service_1.ToastyService]
                    };
                };
                ToastyModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule],
                        declarations: [toast_component_1.ToastComponent, toasty_component_1.ToastyComponent],
                        exports: [toast_component_1.ToastComponent, toasty_component_1.ToastyComponent]
                    }),
                    __metadata('design:paramtypes', [])
                ], ToastyModule);
                return ToastyModule;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsMENBQTBDO0lBQzFDLCtEQUErRDtJQUMvRCx1Q0FBdUM7SUFDdkMsWUFBWSxDQUFDOzs7UUFDVCxVQUFVLEVBTVYsVUFBVSxFQWNILFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFwQm5CLFVBQVUsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNqRixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzdILEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDO29CQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvSCxJQUFJO29CQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsSixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUM7WUFDRSxVQUFVLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hELEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDO29CQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RyxDQUFDLENBQUM7WUFRRixvQkFBZTtnQkFDWCxTQUFTLEVBQUUsQ0FBQyw2QkFBWSxFQUFFLDhCQUFhLENBQUM7Z0JBQ3hDLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsZ0NBQWMsQ0FBQzthQUNoRCxFQUFDO1lBQ1MsMEJBQUEsWUFBWSxHQUFHLENBQUM7Z0JBQ3ZCO2dCQUNBLENBQUM7Z0JBQ0QsWUFBWSxDQUFDLE9BQU8sR0FBRztvQkFDbkIsTUFBTSxDQUFDO3dCQUNILFFBQVEsRUFBRSxZQUFZO3dCQUN0QixTQUFTLEVBQUUsQ0FBQyw2QkFBWSxFQUFFLDhCQUFhLENBQUM7cUJBQzNDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDO2dCQUNGLFlBQVksR0FBRyxVQUFVLENBQUM7b0JBQ3RCLGVBQVEsQ0FBQzt3QkFDTCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO3dCQUN2QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLGtDQUFlLENBQUM7d0JBQy9DLE9BQU8sRUFBRSxDQUFDLGdDQUFjLEVBQUUsa0NBQWUsQ0FBQztxQkFDN0MsQ0FBQztvQkFDRixVQUFVLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO2lCQUN0QyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hCLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQzs7OztBQUNMLGlDQUFpQyJ9