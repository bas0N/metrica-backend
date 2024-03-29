"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let User = class User {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', required: false }),
    __metadata("design:type", String)
], User.prototype, "Name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', required: false }),
    __metadata("design:type", String)
], User.prototype, "choosenPlan", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', required: false }),
    __metadata("design:type", String)
], User.prototype, "avatarUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date(), required: false }),
    __metadata("design:type", Date)
], User.prototype, "createdDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "paymentNeeded", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date(0), required: false }),
    __metadata("design:type", Date)
], User.prototype, "lastPayment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date(0), required: false }),
    __metadata("design:type", Date)
], User.prototype, "nextPayment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', required: false }),
    __metadata("design:type", String)
], User.prototype, "companyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', required: false }),
    __metadata("design:type", String)
], User.prototype, "logoUrl", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map