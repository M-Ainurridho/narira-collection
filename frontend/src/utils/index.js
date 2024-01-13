import { postData } from "../api";

export const rupiah = (price, K = false) => {
    let currency = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(price);

    if (K) {
        currency = currency.split(".")[0].split("Rp")[1];
        currency = `${currency}k`;
    } else {
        currency = currency.split(",")[0];
    }

    return currency;
};

export const translate = (letter) => {
    switch (letter) {
        case "shirt":
            letter = "baju";
            break;
        case "pants":
            letter = "celana";
            break;
    }

    return letter;
};

export const firstUppercase = (word) => {
    let newWord;

    newWord = word.split(" ").map((w, i) => {
        const firstWord = w.slice(0, 1).toUpperCase();

        return firstWord + w.slice(1);
    });

    return newWord.join(" ");
};

export const exchangeToken = async () => {
    const token = localStorage.getItem("nariratoken");

    if (token) {
        const sendToken = await postData(
            "http://localhost:3000/auth/exchangetoken"
        );

        return sendToken;
    } else {
        delete axios.defaults.headers.common["auth-token"];
        return "Not found token";
    }
};

export const mergeSize = (item) => {
    let arr = [];

    arr = item.availableItems.map((item) => item.availableSizes).flat();

    const newSizes = new Set();

    arr.map((item, i, array) => {
        newSizes.add(item.size);
    });

    return Array.from(newSizes);
};

export const kebabCase = (word, cond) => {
    if (cond) {
        word = word.toLowerCase().split(" ");
        return word.join("-");
    } else {
        word = word.toLowerCase().split("-");
        return word.join(" ");
    }
};

export const setTitle = (title) => {
    document.title = title + " | Narira Collection";
};
