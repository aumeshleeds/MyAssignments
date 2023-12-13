"use strict";
/*
### Assignment 2: UI Component Library
 
Objective:
Practice creating interfaces and implementing them in classes for a UI component library.
 
Instructions:
1. Create a TypeScript interface named `UIComponent` with methods `render()` and `handleEvent()`.
2. Create classes `Button`, `TextField`, and `Checkbox` that implement the `UIComponent` interface.
3. Implement the methods in each class to simulate rendering and handling events for UI components.
4. Create instances of all UI components  and call all the methods
 
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        console.log("The button rendered successfully");
    };
    Button.prototype.handleEvent = function () {
        console.log("The button handle events trigerred");
    };
    return Button;
}());
var Textfield = /** @class */ (function () {
    function Textfield() {
    }
    Textfield.prototype.render = function () {
        console.log("The Testfield rendered successfully");
    };
    Textfield.prototype.handleEvent = function () {
        console.log("The Textfield handle events trigerred");
    };
    return Textfield;
}());
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.render = function () {
        console.log("The Checkbox rendered successfully");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("The Checkbox handle events trigerred");
    };
    return Checkbox;
}());
var button = new Button();
var textfield = new Textfield();
var checkbox = new Checkbox();
button.handleEvent();
button.render();
textfield.handleEvent();
textfield.render();
checkbox.handleEvent();
checkbox.render();
