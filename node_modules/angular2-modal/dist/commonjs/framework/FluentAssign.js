"use strict";
var PRIVATE_PREFIX = '$$';
var RESERVED_REGEX = /^(\$\$).*/;
function validateMethodName(name) {
    if (!name) {
        throw new Error("Illegal method name. Empty method name is not allowed");
    }
    else if (name in this) {
        throw new Error("A member name '" + name + "' already defined.");
    }
}
/**
 * Returns a list of assigned property names (non private)
 * @param subject
 * @returns {string[]}
 */
function getAssignedPropertyNames(subject) {
    return Object.getOwnPropertyNames(subject)
        .filter(function (name) { return RESERVED_REGEX.test(name); })
        .map(function (name) { return name.substr(2); });
}
function privateKey(name) {
    return PRIVATE_PREFIX + name;
}
/**
 * Create a function for setting a value for a property on a given object.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param writeOnce If true will allow writing once (default: false)
 */
function setAssignMethod(obj, propertyName, writeOnce) {
    if (writeOnce === void 0) { writeOnce = false; }
    validateMethodName.call(obj, propertyName);
    Object.defineProperty(obj, propertyName, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (value) {
            var key = privateKey(propertyName);
            if (writeOnce && this.hasOwnProperty(key)) {
                throw new Error("Overriding config property '" + propertyName + "' is not allowed.");
            }
            this[key] = value;
            return this;
        }
    });
}
exports.setAssignMethod = setAssignMethod;
/**
 * Represent a fluent API factory wrapper for defining FluentAssign instances.
 */
var FluentAssignFactory = (function () {
    function FluentAssignFactory(fluentAssign) {
        this._fluentAssign =
            fluentAssign instanceof FluentAssign ? fluentAssign : new FluentAssign();
    }
    /**
     * Create a setter method on the FluentAssign instance.
     * @param name The name of the setter function.
     * @param defaultValue If set (not undefined) set's the value on the instance immediately.
     * @returns {FluentAssignFactory}
     */
    FluentAssignFactory.prototype.setMethod = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        setAssignMethod(this._fluentAssign, name);
        if (defaultValue !== undefined) {
            this._fluentAssign[name](defaultValue);
        }
        return this;
    };
    Object.defineProperty(FluentAssignFactory.prototype, "fluentAssign", {
        /**
         * The FluentAssign instance.
         * @returns {FluentAssign<T>}
         */
        get: function () {
            return this._fluentAssign;
        },
        enumerable: true,
        configurable: true
    });
    return FluentAssignFactory;
}());
exports.FluentAssignFactory = FluentAssignFactory;
/**
 * Represent an object where every property is a function representing an assignment function.
 * Calling each function with a value will assign the value to the object and return the object.
 * Calling 'toJSON' returns an object with the same properties but this time representing the
 * assigned values.
 *
 * This allows setting an object in a fluent API manner.
 * Example:
 let fluent = new FluentAssign<any>(undefined, ['some', 'went']);
 fluent.some('thing').went('wrong').toJSON();
 // { some: 'thing', went: 'wrong' }
 */
var FluentAssign = (function () {
    /**
     *
     * @param defaultValues An object representing default values for the underlying object.
     * @param initialSetters A list of initial setters for this FluentAssign.
     */
    function FluentAssign(defaultValues, initialSetters) {
        var _this = this;
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (defaultValues) {
            Object.getOwnPropertyNames(defaultValues)
                .forEach(function (name) { return _this[privateKey(name)] = defaultValues[name]; });
        }
        if (Array.isArray(initialSetters)) {
            initialSetters.forEach(function (name) { return setAssignMethod(_this, name); });
        }
    }
    /**
     * Returns a FluentAssignFactory<FluentAssign<T>> ready to define a FluentAssign type.
     * @param defaultValues An object representing default values for the instance.
     * @param initialSetters A list of initial setters for the instance.
     * @returns {FluentAssignFactory<T>}
     */
    FluentAssign.compose = function (defaultValues, initialSetters) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        return FluentAssign.composeWith(new FluentAssign(defaultValues, initialSetters));
    };
    /**
     * Returns a FluentAssignFactory<Z> where Z is an instance of FluentAssign<?> or a derived
     * class of it.
     * @param fluentAssign An instance of FluentAssign<?> or a derived class of FluentAssign<?>.
     * @returns {any}
     */
    FluentAssign.composeWith = function (fluentAssign) {
        return new FluentAssignFactory(fluentAssign);
    };
    FluentAssign.prototype.toJSON = function () {
        var _this = this;
        return getAssignedPropertyNames(this)
            .reduce(function (obj, name) {
            obj[name] = _this[privateKey(name)];
            return obj;
        }, {});
    };
    return FluentAssign;
}());
exports.FluentAssign = FluentAssign;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmx1ZW50QXNzaWduLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYW5ndWxhcjItbW9kYWwvZnJhbWV3b3JrL0ZsdWVudEFzc2lnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUVuQyw0QkFBNEIsSUFBWTtJQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFrQixJQUFJLHVCQUFvQixDQUFDLENBQUM7SUFDaEUsQ0FBQztBQUNMLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsa0NBQWtDLE9BQVk7SUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7U0FDckMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztTQUN6QyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxvQkFBb0IsSUFBWTtJQUM1QixNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUNqQyxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCx5QkFBbUMsR0FBTSxFQUFFLFlBQW9CLEVBQUUsU0FBMEI7SUFBMUIseUJBQTBCLEdBQTFCLGlCQUEwQjtJQUN2RixrQkFBa0IsQ0FBQyxJQUFJLENBQUMs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Q0FBTSxJQUFJLG1CQUFtQixDQUFXLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQUEsaUJBTUM7UUFMRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO2FBQ2hDLE1BQU0sQ0FBQyxVQUFDLEdBQU0sRUFBRSxJQUFZO1lBQ25CLEdBQUksQ0FBQyxJQUFJLENBQUMsR0FBUyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUMsRUFBVSxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBakRELElBaURDO0FBakRZLG9CQUFZLGVBaUR4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBQUklWQVRFX1BSRUZJWCA9ICckJCc7XG5jb25zdCBSRVNFUlZFRF9SRUdFWCA9IC9eKFxcJFxcJCkuKi87XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTWV0aG9kTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIG1ldGhvZCBuYW1lLiBFbXB0eSBtZXRob2QgbmFtZSBpcyBub3QgYWxsb3dlZGApO1xuICAgIH0gZWxzZSBpZiAobmFtZSBpbiB0aGlzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBtZW1iZXIgbmFtZSAnJHtuYW1lfScgYWxyZWFkeSBkZWZpbmVkLmApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBhc3NpZ25lZCBwcm9wZXJ0eSBuYW1lcyAobm9uIHByaXZhdGUpXG4gKiBAcGFyYW0gc3ViamVjdFxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5mdW5jdGlvbiBnZXRBc3NpZ25lZFByb3BlcnR5TmFtZXMoc3ViamVjdDogYW55KTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzdWJqZWN0KVxuICAgICAgICAuZmlsdGVyKG5hbWUgPT4gUkVTRVJWRURfUkVHRVgudGVzdChuYW1lKSlcbiAgICAgICAgLm1hcChuYW1lID0+IG5hbWUuc3Vic3RyKDIpKTtcbn1cblxuZnVuY3Rpb24gcHJpdmF0ZUtleShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBQUklWQVRFX1BSRUZJWCArIG5hbWU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gZm9yIHNldHRpbmcgYSB2YWx1ZSBmb3IgYSBwcm9wZXJ0eSBvbiBhIGdpdmVuIG9iamVjdC5cbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBhcHBseSB0aGUga2V5ICYgc2V0dGVyIG9uLlxuICogQHBhcmFtIHByb3BlcnR5TmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgb24gdGhlIG9iamVjdFxuICogQHBhcmFtIHdyaXRlT25jZSBJZiB0cnVlIHdpbGwgYWxsb3cgd3JpdGluZyBvbmNlIChkZWZhdWx0OiBmYWxzZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFzc2lnbk1ldGhvZDxUPihvYmo6IFQsIHByb3BlcnR5TmFtZTogc3RyaW5nLCB3cml0ZU9uY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHZhbGlkYXRlTWV0aG9kTmFtZS5jYWxsKG9iaiwgcHJvcGVydHlOYW1lKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3BlcnR5TmFtZSwgPGFueT57XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsdWU6IGFueSkge1xuICAgICAgICAgICAgbGV0IGtleSA9IHByaXZhdGVLZXkocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIGlmICh3cml0ZU9uY2UgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBPdmVycmlkaW5nIGNvbmZpZyBwcm9wZXJ0eSAnJHtwcm9wZXJ0eU5hbWV9JyBpcyBub3QgYWxsb3dlZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKipcbiAqIERlc2NyaWJlcyBhIGZsdWVudCBhc3NpZ24gbWV0aG9kLlxuICogQSBmdW5jdGlvbiB0aGF0IGdldHMgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgaW5zdGFuY2UgaXQgd29ya3Mgb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmx1ZW50QXNzaWduTWV0aG9kPFQsIFo+IHtcbiAgICAvL1RPRE86IFNldHRpbmcgJ3RoaXMnIGluc3RlYWQgb2YgWiBkb2VzIG5vdCB3b3JrLCB0aGlzPUNvbmZpZ1NldHRlciBoZXJlLi4uXG4gICAgKHZhbHVlOiBUKTogWjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIElGbHVlbnRBc3NpZ25GYWN0b3J5PFo+IHtcbiAgICBmbHVlbnRBc3NpZ246IFo7XG4gICAgc2V0TWV0aG9kKG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogSUZsdWVudEFzc2lnbkZhY3Rvcnk8Wj47XG59XG5cbi8qKlxuICogUmVwcmVzZW50IGEgZmx1ZW50IEFQSSBmYWN0b3J5IHdyYXBwZXIgZm9yIGRlZmluaW5nIEZsdWVudEFzc2lnbiBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbHVlbnRBc3NpZ25GYWN0b3J5PFQ+IHtcbiAgICBwcml2YXRlIF9mbHVlbnRBc3NpZ246IEZsdWVudEFzc2lnbjxUPjtcblxuICAgIGNvbnN0cnVjdG9yKGZsdWVudEFzc2lnbj86IEZsdWVudEFzc2lnbjxUPikge1xuICAgICAgICB0aGlzLl9mbHVlbnRBc3NpZ24gPVxuICAgICAgICAgICAgZmx1ZW50QXNzaWduIGluc3RhbmNlb2YgRmx1ZW50QXNzaWduID8gZmx1ZW50QXNzaWduIDogPGFueT5uZXcgRmx1ZW50QXNzaWduKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc2V0dGVyIG1ldGhvZCBvbiB0aGUgRmx1ZW50QXNzaWduIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXR0ZXIgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBJZiBzZXQgKG5vdCB1bmRlZmluZWQpIHNldCdzIHRoZSB2YWx1ZSBvbiB0aGUgaW5zdGFuY2UgaW1tZWRpYXRlbHkuXG4gICAgICogQHJldHVybnMge0ZsdWVudEFzc2lnbkZhY3Rvcnl9XG4gICAgICovXG4gICAgc2V0TWV0aG9kKG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiBGbHVlbnRBc3NpZ25GYWN0b3J5PFQ+IHtcbiAgICAgICAgc2V0QXNzaWduTWV0aG9kKHRoaXMuX2ZsdWVudEFzc2lnbiwgbmFtZSk7XG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKDxhbnk+dGhpcy5fZmx1ZW50QXNzaWduKVtuYW1lXShkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBGbHVlbnRBc3NpZ24gaW5zdGFuY2UuXG4gICAgICogQHJldHVybnMge0ZsdWVudEFzc2lnbjxUPn1cbiAgICAgKi9cbiAgICBnZXQgZmx1ZW50QXNzaWduKCk6IEZsdWVudEFzc2lnbjxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbHVlbnRBc3NpZ247XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudCBhbiBvYmplY3Qgd2hlcmUgZXZlcnkgcHJvcGVydHkgaXMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgYW4gYXNzaWdubWVudCBmdW5jdGlvbi5cbiAqIENhbGxpbmcgZWFjaCBmdW5jdGlvbiB3aXRoIGEgdmFsdWUgd2lsbCBhc3NpZ24gdGhlIHZhbHVlIHRvIHRoZSBvYmplY3QgYW5kIHJldHVybiB0aGUgb2JqZWN0LlxuICogQ2FsbGluZyAndG9KU09OJyByZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHByb3BlcnRpZXMgYnV0IHRoaXMgdGltZSByZXByZXNlbnRpbmcgdGhlXG4gKiBhc3NpZ25lZCB2YWx1ZXMuXG4gKlxuICogVGhpcyBhbGxvd3Mgc2V0dGluZyBhbiBvYmplY3QgaW4gYSBmbHVlbnQgQVBJIG1hbm5lci5cbiAqIEV4YW1wbGU6XG4gbGV0IGZsdWVudCA9IG5ldyBGbHVlbnRBc3NpZ248YW55Pih1bmRlZmluZWQsIFsnc29tZScsICd3ZW50J10pO1xuIGZsdWVudC5zb21lKCd0aGluZycpLndlbnQoJ3dyb25nJykudG9KU09OKCk7XG4gLy8geyBzb21lOiAndGhpbmcnLCB3ZW50OiAnd3JvbmcnIH1cbiAqL1xuZXhwb3J0IGNsYXNzIEZsdWVudEFzc2lnbjxUPiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWZhdWx0VmFsdWVzIEFuIG9iamVjdCByZXByZXNlbnRpbmcgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gaW5pdGlhbFNldHRlcnMgQSBsaXN0IG9mIGluaXRpYWwgc2V0dGVycyBmb3IgdGhpcyBGbHVlbnRBc3NpZ24uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGVmYXVsdFZhbHVlczogVCA9IHVuZGVmaW5lZCwgaW5pdGlhbFNldHRlcnM6IHN0cmluZ1tdID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWVzKSB7XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0VmFsdWVzKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKG5hbWUgPT4gKDxhbnk+dGhpcylbcHJpdmF0ZUtleShuYW1lKV0gPSAoPGFueT5kZWZhdWx0VmFsdWVzKVtuYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbml0aWFsU2V0dGVycykpIHtcbiAgICAgICAgICAgIGluaXRpYWxTZXR0ZXJzLmZvckVhY2gobmFtZSA9PiBzZXRBc3NpZ25NZXRob2QodGhpcywgbmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgRmx1ZW50QXNzaWduRmFjdG9yeTxGbHVlbnRBc3NpZ248VD4+IHJlYWR5IHRvIGRlZmluZSBhIEZsdWVudEFzc2lnbiB0eXBlLlxuICAgICAqIEBwYXJhbSBkZWZhdWx0VmFsdWVzIEFuIG9iamVjdCByZXByZXNlbnRpbmcgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gaW5pdGlhbFNldHRlcnMgQSBsaXN0IG9mIGluaXRpYWwgc2V0dGVycyBmb3IgdGhlIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm5zIHtGbHVlbnRBc3NpZ25GYWN0b3J5PFQ+fVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlPFQ+KGRlZmF1bHRWYWx1ZXM6IFQgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNldHRlcnM6IHN0cmluZ1tdID0gdW5kZWZpbmVkKTogRmx1ZW50QXNzaWduRmFjdG9yeTxUPiB7XG5cbiAgICAgICAgcmV0dXJuIDxhbnk+Rmx1ZW50QXNzaWduLmNvbXBvc2VXaXRoPEZsdWVudEFzc2lnbjxUPj4oXG4gICAgICAgICAgICBuZXcgRmx1ZW50QXNzaWduPFQ+KGRlZmF1bHRWYWx1ZXMsIGluaXRpYWxTZXR0ZXJzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEZsdWVudEFzc2lnbkZhY3Rvcnk8Wj4gd2hlcmUgWiBpcyBhbiBpbnN0YW5jZSBvZiBGbHVlbnRBc3NpZ248Pz4gb3IgYSBkZXJpdmVkXG4gICAgICogY2xhc3Mgb2YgaXQuXG4gICAgICogQHBhcmFtIGZsdWVudEFzc2lnbiBBbiBpbnN0YW5jZSBvZiBGbHVlbnRBc3NpZ248Pz4gb3IgYSBkZXJpdmVkIGNsYXNzIG9mIEZsdWVudEFzc2lnbjw/Pi5cbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlV2l0aDxaPihmbHVlbnRBc3NpZ246IFopOiBJRmx1ZW50QXNzaWduRmFjdG9yeTxaPiB7XG4gICAgICAgIHJldHVybiA8YW55Pm5ldyBGbHVlbnRBc3NpZ25GYWN0b3J5PGFueT4oPGFueT5mbHVlbnRBc3NpZ24pO1xuICAgIH1cblxuICAgIHRvSlNPTigpOiBUIHtcbiAgICAgICAgcmV0dXJuIGdldEFzc2lnbmVkUHJvcGVydHlOYW1lcyh0aGlzKVxuICAgICAgICAgICAgLnJlZHVjZSgob2JqOiBULCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAoPGFueT5vYmopW25hbWVdID0gKDxhbnk+dGhpcylbcHJpdmF0ZUtleShuYW1lKV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH0sIDxUPjxhbnk+e30pO1xuICAgIH1cbn1cbiJdfQ==