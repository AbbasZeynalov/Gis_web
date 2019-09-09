import React from "react";

export const tryRequire = (path: string, placeholder: React.ReactNode = null) => {
    try {
console.log(`../../src/${path}`);
        return require(`../../${path}`).default;

    } catch (err) {

        console.log(err);
        return () => placeholder;
    }
};