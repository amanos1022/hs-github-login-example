"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (userData, githubToken) => {
    const { login, email, } = userData;
    const createdAt = new Date;
    return {
        githubToken,
        githubUsername: login,
        email,
        updatedAt: createdAt,
        createdAt,
    };
};
//# sourceMappingURL=formatGitHubResponseData.js.map