export const licenseFormatter = (licenseString, k) => {
    let cleanLicense = licenseString.split("-").join("").toUpperCase();
    let firstGroupSize = cleanLicense.length % k || k;
    const result = [cleanLicense.slice(0, firstGroupSize)];

    let index = firstGroupSize;
    do {
        result.push(cleanLicense.slice(index, index + k));
        index += k;
    } while (index < cleanLicense.length);

    return result.join("-");
}
