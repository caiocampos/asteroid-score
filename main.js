/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(5);
const scores_module_1 = __webpack_require__(6);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }),
            scores_module_1.ScoresModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoresModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(5);
const score_entity_1 = __webpack_require__(7);
const scores_controller_1 = __webpack_require__(8);
const scores_service_1 = __webpack_require__(9);
let ScoresModule = class ScoresModule {
};
ScoresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Score', schema: score_entity_1.ScoreSchema }]),
        ],
        providers: [scores_service_1.ScoresService],
        controllers: [scores_controller_1.ScoresController],
        exports: [],
    })
], ScoresModule);
exports.ScoresModule = ScoresModule;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoreSchema = exports.Score = void 0;
const mongoose_1 = __webpack_require__(5);
let Score = class Score {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Score.prototype, "playerName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    __metadata("design:type", Number)
], Score.prototype, "score", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Score.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Score.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    __metadata("design:type", Object)
], Score.prototype, "difficulty", void 0);
Score = __decorate([
    (0, mongoose_1.Schema)({ collection: 'scores' })
], Score);
exports.Score = Score;
exports.ScoreSchema = mongoose_1.SchemaFactory.createForClass(Score);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoresController = void 0;
const common_1 = __webpack_require__(1);
const scores_service_1 = __webpack_require__(9);
const score_add_request_dto_1 = __webpack_require__(14);
let ScoresController = class ScoresController {
    constructor(scoresService) {
        this.scoresService = scoresService;
    }
    findAll(playerName) {
        return this.scoresService.findAll(playerName);
    }
    count() {
        return this.scoresService.count();
    }
    add(requestDto) {
        return this.scoresService.add(requestDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('playerName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ScoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ScoresController.prototype, "count", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof score_add_request_dto_1.default !== "undefined" && score_add_request_dto_1.default) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ScoresController.prototype, "add", null);
ScoresController = __decorate([
    (0, common_1.Controller)('score'),
    __metadata("design:paramtypes", [typeof (_a = typeof scores_service_1.ScoresService !== "undefined" && scores_service_1.ScoresService) === "function" ? _a : Object])
], ScoresController);
exports.ScoresController = ScoresController;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ScoresService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoresService = void 0;
const common_1 = __webpack_require__(1);
const score_response_dto_1 = __webpack_require__(10);
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(11);
const utils_1 = __webpack_require__(12);
let ScoresService = ScoresService_1 = class ScoresService {
    constructor(scoreModel) {
        this.scoreModel = scoreModel;
        this.logger = new common_1.Logger(ScoresService_1.name);
    }
    async findAll(playerName) {
        try {
            let query = this.scoreModel.find();
            if (playerName) {
                query = query.where('playerName').regex(new RegExp(playerName, 'i'));
            }
            const scores = await query.sort('-score').exec();
            return scores.map(score_response_dto_1.default.from);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao buscar as pontuações', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async count() {
        try {
            return await this.scoreModel.count().exec();
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao contar as pontuações', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async add(requestDto) {
        if (!(0, utils_1.testHash)(requestDto)) {
            throw new common_1.HttpException('O hash não é válido', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const newScore = new this.scoreModel();
            newScore.playerName = requestDto.playerName;
            newScore.score = requestDto.score;
            newScore.startTime = new Date(requestDto.startTime);
            newScore.endTime = new Date(requestDto.endTime);
            newScore.difficulty = requestDto.difficulty;
            const score = await newScore.save();
            return score_response_dto_1.default.from(score);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao gravar a pontuação', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
ScoresService = ScoresService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Score')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ScoresService);
exports.ScoresService = ScoresService;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ScoreResponseDTO {
    constructor(id, playerName, score, creationDate, difficulty) {
        this.id = id;
        this.playerName = playerName;
        this.score = score;
        this.creationDate = creationDate;
        this.difficulty = difficulty;
    }
}
ScoreResponseDTO.from = ({ _id, playerName, score, endTime, difficulty, }) => new ScoreResponseDTO(_id.toHexString(), playerName, score, endTime, difficulty);
exports["default"] = ScoreResponseDTO;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.forceNumber = exports.testHash = void 0;
const crypto_1 = __webpack_require__(13);
const saltHash = (object, num, text) => {
    const _a = Object.assign({}, object), { _n, _h } = _a, origin = __rest(_a, ["_n", "_h"]);
    const o = origin;
    o._n = calcSalt((0, exports.forceNumber)(_n || 249));
    o._ns = calcSalt(num || 47);
    o._ts = text || '';
    const hash = (0, crypto_1.createHash)('sha256');
    hash.update(JSON.stringify(o));
    return hash.digest('hex');
};
const coefficient = 1000000;
const calcSalt = (n) => {
    const x = Math.trunc(Math.sin(n) * coefficient);
    const ac = n > -1 && n < 1 ? Math.acos(n) : Math.acos(1 / n);
    const aci = Math.trunc(ac * coefficient);
    return (x + aci).toString();
};
const testHash = (object) => object._h ===
    saltHash(object, (0, exports.forceNumber)(process.env.S_NUM), process.env.S_TEXT);
exports.testHash = testHash;
const forceNumber = (num) => Number(num) || 0;
exports.forceNumber = forceNumber;


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(15);
const validation_messages_constants_1 = __webpack_require__(16);
class ScoreAddRequestDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "playerName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsInt)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_NUMBER }),
    __metadata("design:type", Number)
], ScoreAddRequestDTO.prototype, "score", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsDateString)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_DATE }),
    __metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsDateString)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_DATE }),
    __metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "endTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsInt)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_NUMBER }),
    __metadata("design:type", Number)
], ScoreAddRequestDTO.prototype, "difficulty", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], ScoreAddRequestDTO.prototype, "_h", void 0);
exports["default"] = ScoreAddRequestDTO;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationMessages = void 0;
exports.ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
    IS_NOT_NUMBER: 'Campo $property não é um número válido.',
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    await app.listen(3000);
};
bootstrap();

})();

/******/ })()
;