"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:3002',
            'http://localhost:3000',
            'http://localhost:3001',
            'https://metrica-app.vercel.app',
            'https://www.metrica-app.vercel.app',
            'https://metrica-landing.vercel.app/',
            'https://www.metrica-landing.vercel.app/',
        ],
        credentials: true,
    });
    await app.listen(process.env.PORT || 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map