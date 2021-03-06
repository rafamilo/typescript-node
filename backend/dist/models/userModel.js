"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'First name are required'
    },
    lastName: {
        type: String,
        required: 'Last name are required'
    },
    passWord: {
        type: String,
        select: false,
        required: 'Password are required'
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: 'E-mail are required'
    },
    phone: {
        type: Number
    },
}, { timestamps: true });
exports.UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const hash = yield bcrypt.hash(this.passWord, 10);
        this.passWord = hash;
        next();
    });
});
//# sourceMappingURL=userModel.js.map