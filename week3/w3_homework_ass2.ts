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

import {UIComponent} from "./w3_ass2_interface";

class Button implements UIComponent {

      render(): void {
         
         console.log("The button rendered successfully")
      }

      handleEvent(): void {
         
         console.log("The button handle events trigerred")
      }
}

class Textfield implements UIComponent {

   render(): void {
      
      console.log("The Testfield rendered successfully")
   }

   handleEvent(): void {
      
      console.log("The Textfield handle events trigerred")
   }
}

class Checkbox implements UIComponent {

   render(): void {
      
      console.log("The Checkbox rendered successfully")
   }

   handleEvent(): void {
      
      console.log("The Checkbox handle events trigerred")
   }
}


const button = new Button()
const textfield = new Textfield()
const checkbox = new Checkbox()

button.handleEvent()
button.render()
textfield.handleEvent()
textfield.render()
checkbox.handleEvent()
checkbox.render()
