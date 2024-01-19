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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostImage = void 0;
var typeorm_1 = require("typeorm");
//@Entity()
var PostImage = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _postUuid_decorators;
    var _postUuid_initializers = [];
    var _imageUrl_decorators;
    var _imageUrl_initializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    return _a = /** @class */ (function () {
            function PostImage() {
                this.postUuid = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _postUuid_initializers, void 0));
                this.imageUrl = __runInitializers(this, _imageUrl_initializers, void 0);
                this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
            }
            return PostImage;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _postUuid_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
            _imageUrl_decorators = [(0, typeorm_1.Column)()];
            _createdAt_decorators = [(0, typeorm_1.Column)()];
            __esDecorate(null, null, _postUuid_decorators, { kind: "field", name: "postUuid", static: false, private: false, access: { has: function (obj) { return "postUuid" in obj; }, get: function (obj) { return obj.postUuid; }, set: function (obj, value) { obj.postUuid = value; } }, metadata: _metadata }, _postUuid_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: function (obj) { return "imageUrl" in obj; }, get: function (obj) { return obj.imageUrl; }, set: function (obj, value) { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PostImage = PostImage;
