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
exports.Post = void 0;
var typeorm_1 = require("typeorm");
var Post = function () {
    var _classDecorators = [(0, typeorm_1.Entity)("post")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _uuid_decorators;
    var _uuid_initializers = [];
    var _text_decorators;
    var _text_initializers = [];
    var _mainPostUuid_decorators;
    var _mainPostUuid_initializers = [];
    var _userUuid_decorators;
    var _userUuid_initializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _deletedAt_decorators;
    var _deletedAt_initializers = [];
    var Post = _classThis = /** @class */ (function () {
        function Post_1() {
            this.uuid = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _uuid_initializers, void 0));
            this.text = __runInitializers(this, _text_initializers, void 0);
            this.mainPostUuid = __runInitializers(this, _mainPostUuid_initializers, void 0);
            this.userUuid = __runInitializers(this, _userUuid_initializers, void 0);
            this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
            this.updatedAt = __runInitializers(this, _updatedAt_initializers, void 0);
            this.deletedAt = __runInitializers(this, _deletedAt_initializers, void 0);
        }
        return Post_1;
    }());
    __setFunctionName(_classThis, "Post");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _uuid_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _text_decorators = [(0, typeorm_1.Column)({ type: "varchar", length: 200, unique: false })];
        _mainPostUuid_decorators = [(0, typeorm_1.Column)()];
        _userUuid_decorators = [(0, typeorm_1.Column)()];
        _createdAt_decorators = [(0, typeorm_1.Column)()];
        _updatedAt_decorators = [(0, typeorm_1.Column)({ nullable: false, default: new Date() })];
        _deletedAt_decorators = [(0, typeorm_1.Column)({ nullable: true, default: new Date() })];
        __esDecorate(null, null, _uuid_decorators, { kind: "field", name: "uuid", static: false, private: false, access: { has: function (obj) { return "uuid" in obj; }, get: function (obj) { return obj.uuid; }, set: function (obj, value) { obj.uuid = value; } }, metadata: _metadata }, _uuid_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _text_decorators, { kind: "field", name: "text", static: false, private: false, access: { has: function (obj) { return "text" in obj; }, get: function (obj) { return obj.text; }, set: function (obj, value) { obj.text = value; } }, metadata: _metadata }, _text_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainPostUuid_decorators, { kind: "field", name: "mainPostUuid", static: false, private: false, access: { has: function (obj) { return "mainPostUuid" in obj; }, get: function (obj) { return obj.mainPostUuid; }, set: function (obj, value) { obj.mainPostUuid = value; } }, metadata: _metadata }, _mainPostUuid_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _userUuid_decorators, { kind: "field", name: "userUuid", static: false, private: false, access: { has: function (obj) { return "userUuid" in obj; }, get: function (obj) { return obj.userUuid; }, set: function (obj, value) { obj.userUuid = value; } }, metadata: _metadata }, _userUuid_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _deletedAt_decorators, { kind: "field", name: "deletedAt", static: false, private: false, access: { has: function (obj) { return "deletedAt" in obj; }, get: function (obj) { return obj.deletedAt; }, set: function (obj, value) { obj.deletedAt = value; } }, metadata: _metadata }, _deletedAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Post = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Post = _classThis;
}();
exports.Post = Post;
