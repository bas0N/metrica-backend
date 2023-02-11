"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const app_config_1 = __importDefault(require("./app.config"));
exports.jwtConfig = {
    useFactory: () => {
        return { secret: (0, app_config_1.default)().jwtSecret, signOptions: { expiresIn: '1h' } };
    },
};
//# sourceMappingURL=jwt.config.js.map