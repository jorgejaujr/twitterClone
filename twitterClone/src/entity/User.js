"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _uuid_decorators;
    var _uuid_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _country_decorators;
    var _country_initializers = [];
    var _profilePhotoUrl_decorators;
    var _profilePhotoUrl_initializers = [];
    var _headerPhotoUrl_decorators;
    var _headerPhotoUrl_initializers = [];
    var _birth_decorators;
    var _birth_initializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.uuid = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _uuid_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.country = __runInitializers(this, _country_initializers, void 0);
            this.profilePhotoUrl = __runInitializers(this, _profilePhotoUrl_initializers, void 0);
            this.headerPhotoUrl = __runInitializers(this, _headerPhotoUrl_initializers, void 0);
            this.birth = __runInitializers(this, _birth_initializers, void 0);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _uuid_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)({ type: "string", length: 200, unique: false })];
        _email_decorators = [(0, typeorm_1.Column)({ type: "string", length: 200, unique: true })];
        _country_decorators = [(0, typeorm_1.Column)({ type: "string", length: 2, unique: false })];
        _profilePhotoUrl_decorators = [(0, typeorm_1.Column)({ type: "string", length: 1000, unique: false })];
        _headerPhotoUrl_decorators = [(0, typeorm_1.Column)({ type: "string", length: 1000, unique: false })];
        _birth_decorators = [(0, typeorm_1.Column)({})];
        __esDecorate(null, null, _uuid_decorators, { kind: "field", name: "uuid", static: false, private: false, access: { has: function (obj) { return "uuid" in obj; }, get: function (obj) { return obj.uuid; }, set: function (obj, value) { obj.uuid = value; } }, metadata: _metadata }, _uuid_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } }, metadata: _metadata }, _country_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profilePhotoUrl_decorators, { kind: "field", name: "profilePhotoUrl", static: false, private: false, access: { has: function (obj) { return "profilePhotoUrl" in obj; }, get: function (obj) { return obj.profilePhotoUrl; }, set: function (obj, value) { obj.profilePhotoUrl = value; } }, metadata: _metadata }, _profilePhotoUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _headerPhotoUrl_decorators, { kind: "field", name: "headerPhotoUrl", static: false, private: false, access: { has: function (obj) { return "headerPhotoUrl" in obj; }, get: function (obj) { return obj.headerPhotoUrl; }, set: function (obj, value) { obj.headerPhotoUrl = value; } }, metadata: _metadata }, _headerPhotoUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _birth_decorators, { kind: "field", name: "birth", static: false, private: false, access: { has: function (obj) { return "birth" in obj; }, get: function (obj) { return obj.birth; }, set: function (obj, value) { obj.birth = value; } }, metadata: _metadata }, _birth_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
