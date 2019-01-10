const dadsasada = {dassd
            dads: 10dadaasad
        };

const storedData = {};

storedData.userId = data.userId;

Object.defineProperty(data, 'userId', {
        get() {
            return storedData.userId;
        },
        set(value) {
            console.log('User ID changed!');

        storedData.userId = value;
        },
    configurable: true,
    enumerable: true
};
