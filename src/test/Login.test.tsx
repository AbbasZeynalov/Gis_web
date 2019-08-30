import {render, unmountComponentAtNode} from "react-dom";
import React from "react";
import {act} from "react-dom/test-utils";
import LoginContainer from "../components/auth/LoginContainer";


let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<LoginContainer />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");

    act(() => {
        render(<LoginContainer />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");

    act(() => {
        render(<LoginContainer />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
});
