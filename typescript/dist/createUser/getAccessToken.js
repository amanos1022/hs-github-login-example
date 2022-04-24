"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.post('https://github.com/login/oauth/access_token', {
        client_id: 'Iv1.8fb41a270ee0fd0d',
        client_secret: '52df2e4abf3754eae30430e9995897589b88ea1a',
        redirect_uri: 'https://7314-150-220-74-84.ngrok.io',
        code,
    }, { headers: { 'Accept': 'application/json' } });
    if (data.error)
        return Promise.reject(data.error);
    return Promise.resolve(data.access_token);
});
//# sourceMappingURL=getAccessToken.js.map