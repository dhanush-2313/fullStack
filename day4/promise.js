const checkAge = (age) => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject('You are not eligible to vote');
        } else {
            resolve(age);
        }
    });
}

const checkGender = (age, gender) => {
    return new Promise((resolve, reject) => {
        if (gender === "male") {
            resolve('You are eligible to vote');
        } else {
            reject('You are not eligible to vote');
        }
    });
}

const checkPromise = (age, gender) => {
    return new Promise((resolve, reject) => {
        checkAge(age)
            .then(() => checkGender(age, gender))
            .then(resolve)
            .catch(reject);
    });
}

checkPromise(18, "female").then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.error(err);
});