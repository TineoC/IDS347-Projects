"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ssn_validator_1 = require("../src/ssn-validator");
describe("Validate SSN", () => {
    test("TU01. Validate SSN 01-01-01", () => {
        expect(() => (0, ssn_validator_1.validSSN)("01-01-01")).toThrowError("Invalid SSN");
    });
    test("TU02. Validate SSN 001-65-7251", () => {
        expect((0, ssn_validator_1.validSSN)("001-65-7251")).toBe(true);
    });
    test("TU03. Validate SSN 001-65-0000", () => {
        expect(() => (0, ssn_validator_1.validSSN)("001-65-0000")).toThrowError("Invalid SSN");
    });
    test("TU04. Validate SSN 001650000", () => {
        expect(() => (0, ssn_validator_1.validSSN)("001650000")).toThrow("Invalid SSN");
    });
    test("TU05. Validate SSN 001657251", () => {
        expect((0, ssn_validator_1.validSSN)("001657251")).toBe(true);
    });
    test("TU06. Validate SSN 00112233", () => {
        expect(() => (0, ssn_validator_1.validSSN)("00112233")).toThrowError("Invalid SSN");
    });
    test("TU07. Validate SSN 001122333", () => {
        expect((0, ssn_validator_1.validSSN)("001122333")).toBe(true);
    });
    test("TU08. Validate SSN 000-15-5562", () => {
        expect(() => (0, ssn_validator_1.validSSN)("000-15-5562")).toThrowError("Invalid SSN");
    });
    test("TU09. Validate no input", () => {
        expect(() => (0, ssn_validator_1.validSSN)("")).toThrowError("No SSN Received");
    });
    test("TU10. Validate 'Christopher'", () => {
        expect(() => (0, ssn_validator_1.validSSN)("Christopher")).toThrowError("Invalid SSN");
    });
});
