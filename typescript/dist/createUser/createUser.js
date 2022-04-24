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
const createDbRecord_1 = __importDefault(require("./createDbRecord/createDbRecord"));
const formatGitHubResponseData_1 = __importDefault(require("./createDbRecord/formatGitHubResponseData"));
const getAccessToken_1 = __importDefault(require("./getAccessToken"));
const getUserData_1 = __importDefault(require("./getUserData"));
exports.default = (code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = yield (0, getAccessToken_1.default)(code);
        const userData = yield (0, getUserData_1.default)(accessToken);
        return yield (0, createDbRecord_1.default)((0, formatGitHubResponseData_1.default)(userData, accessToken));
    }
    catch (e) {
        Promise.reject(e.message);
    }
});
//# sourceMappingURL=createUser.js.map