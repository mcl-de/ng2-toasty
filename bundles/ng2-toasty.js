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
    var ToastyConfig, ToastyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toasty_utils_1_1) {
                toasty_utils_1 = toasty_utils_1_1;
            }],
        execute: function() {
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
                ToastyConfig.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                ToastyConfig.ctorParameters = [];
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
                ToastyService.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                ToastyService.ctorParameters = [
                    { type: ToastyConfig, },
                ];
                return ToastyService;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3R5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2FzdHkuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBUVcsWUFBWSxFQXlCWixhQUFhOzs7Ozs7Ozs7O1lBNUJ4Qjs7ZUFFRztZQUNRLDBCQUFBLFlBQVksR0FBRyxDQUFDO2dCQUN2QjtvQkFDSSw2Q0FBNkM7b0JBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNmLGtEQUFrRDtvQkFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLCtEQUErRDtvQkFDL0QsMkZBQTJGO29CQUMzRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztvQkFDL0IsNkZBQTZGO29CQUM3RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsc0NBQXNDO29CQUN0QyxpQ0FBaUM7b0JBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2dCQUMzQixDQUFDO2dCQUNELFlBQVksQ0FBQyxVQUFVLEdBQUc7b0JBQ3RCLEVBQUUsSUFBSSxFQUFFLGlCQUFVLEVBQUU7aUJBQ3ZCLENBQUM7Z0JBQ0Ysa0JBQWtCO2dCQUNsQixZQUFZLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztnQkFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDTDs7ZUFFRztZQUNRLDJCQUFBLGFBQWEsR0FBRyxDQUFDO2dCQUN4Qix1QkFBdUIsTUFBTTtvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLDBCQUEwQjtvQkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDeEMsc0JBQXNCO29CQUN0QixJQUFJLENBQUMs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
System.register("src/toasty.component", ["node_modules/@angular/core", "src/toasty.utils", "src/toasty.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, toasty_utils_1, toasty_service_1;
    var ToastyComponent;
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
                ToastyComponent.decorators = [
                    { type: core_1.Component, args: [{
                                selector: 'ng2-toasty',
                                template: "\n    <div id=\"toasty\" [ngClass]=\"[position]\">\n        <ng2-toast *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n    </div>"
                            },] },
                ];
                /** @nocollapse */
                ToastyComponent.ctorParameters = [
                    { type: toasty_service_1.ToastyConfig, },
                    { type: toasty_service_1.ToastyService, },
                ];
                ToastyComponent.propDecorators = {
                    'position': [{ type: core_1.Input },],
                };
                return ToastyComponent;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvYXN0eS5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVNXLGVBQWU7Ozs7Ozs7Ozs7Ozs7WUFIMUI7O2VBRUc7WUFDUSw2QkFBQSxlQUFlLEdBQUcsQ0FBQztnQkFDMUIseUJBQXlCLE1BQU0sRUFBRSxhQUFhO29CQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7b0JBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNwQiwwQkFBMEI7b0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixzQkFBc0I7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUU7b0JBQ3pELEdBQUcsRUFBRTt3QkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDMUIsQ0FBQztvQkFDRCxnRUFBZ0U7b0JBQ2hFLGtEQUFrRDtvQkFDbEQsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsR0FBRyxFQUFFLFVBQVUsS0FBSzt3QkFDaEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDUixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7NEJBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQ0FDeEQsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMs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
System.register("src/toast.component", ["node_modules/@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var ToastComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
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
                ToastComponent.decorators = [
                    { type: core_1.Component, args: [{
                                selector: 'ng2-toast',
                                template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\">{{toast.title}}</span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\">{{toast.msg}}</span>\n            </div>\n        </div>"
                            },] },
                ];
                /** @nocollapse */
                ToastComponent.ctorParameters = [];
                ToastComponent.propDecorators = {
                    'toast': [{ type: core_1.Input },],
                    'closeToastEvent': [{ type: core_1.Output, args: ['closeToast',] },],
                };
                return ToastComponent;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9hc3QuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFPVyxjQUFjOzs7Ozs7O1lBSHpCOztlQUVHO1lBQ1EsNEJBQUEsY0FBYyxHQUFHLENBQUM7Z0JBQ3pCO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBQzlDLENBQUM7Z0JBQ0Q7OzttQkFHRztnQkFDSCxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLE1BQU07b0JBQzdDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLENBQUM7Z0JBQ0YsY0FBYyxDQUFDLFVBQVUsR0FBRztvQkFDeEIsRUFBRSxJQUFJLEVBQUUsZ0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQ0FDZCxRQUFRLEVBQUUsV0FBVztnQ0FDckIsUUFBUSxFQUFFLHFnQkFBcWdCOzZCQUNsaEIsRUFBRSxFQUFFO2lCQUNoQixDQUFDO2dCQUNGLGtCQUFrQjtnQkFDbEIsY0FBYyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLGNBQWMsQ0FBQyxjQUFjLEdBQUc7b0JBQzVCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxFQUFFO29CQUMzQixpQkFBaUIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFO2lCQUNoRSxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDMUIsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDOzs7O0FBQ0wsMkNBQTJDIn0=
System.register("index", ["node_modules/@angular/core", "node_modules/@angular/common", "src/toasty.service", "src/toasty.component", "src/toast.component"], function(exports_1, context_1) {
    // Copyright (C) 2016 Sergey Akopkokhyants
    // This project is licensed under the terms of the MIT license.
    // https://github.com/akserg/ng2-toasty
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, toasty_component_1, toast_component_1, toasty_service_1;
    var ToastyModule;
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
                ToastyModule.decorators = [
                    { type: core_1.NgModule, args: [{
                                imports: [common_1.CommonModule],
                                declarations: [toast_component_1.ToastComponent, toasty_component_1.ToastyComponent],
                                exports: [toast_component_1.ToastComponent, toasty_component_1.ToastyComponent]
                            },] },
                ];
                /** @nocollapse */
                ToastyModule.ctorParameters = [];
                return ToastyModule;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsMENBQTBDO0lBQzFDLCtEQUErRDtJQUMvRCx1Q0FBdUM7SUFDdkMsWUFBWSxDQUFDOzs7UUFZRixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSnZCLG9CQUFlO2dCQUNYLFNBQVMsRUFBRSxDQUFDLDZCQUFZLEVBQUUsOEJBQWEsQ0FBQztnQkFDeEMsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSxnQ0FBYyxDQUFDO2FBQ2hELEVBQUM7WUFDUywwQkFBQSxZQUFZLEdBQUcsQ0FBQztnQkFDdkI7Z0JBQ0EsQ0FBQztnQkFDRCxZQUFZLENBQUMsT0FBTyxHQUFHO29CQUNuQixNQUFNLENBQUM7d0JBQ0gsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFNBQVMsRUFBRSxDQUFDLDZCQUFZLEVBQUUsOEJBQWEsQ0FBQztxQkFDM0MsQ0FBQztnQkFDTixDQUFDLENBQUM7Z0JBQ0YsWUFBWSxDQUFDLFVBQVUsR0FBRztvQkFDdEIsRUFBRSxJQUFJLEVBQUUsZUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUNiLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7Z0NBQ3ZCLFlBQVksRUFBRSxDQUFDLGdDQUFjLEVBQUUsa0NBQWUsQ0FBQztnQ0FDL0MsT0FBTyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxrQ0FBZSxDQUFDOzZCQUM3QyxFQUFFLEVBQUU7aUJBQ2hCLENBQUM7Z0JBQ0Ysa0JBQWtCO2dCQUNsQixZQUFZLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztnQkFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7Ozs7QUFDTCxpQ0FBaUMifQ==