import { licenseFormatter } from "./licenseFormatter.mjs";


// TestCases
const s1 = "5F3Z-2e-9-w";
const k1 = 4;

console.log(licenseFormatter(s1, k1));
// expected 5F3Z-2E9W

const s2 = "2-5g-3-J";
const k2 = 2;

console.log(licenseFormatter(s2, k2));
// expected 2-5G-3J