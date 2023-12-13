/*
### Assignment 3: Social Media Platform Features (TypeScript)
 
Objective:
Practice using interfaces with multiple implementation
 
Instructions:
1. create an interface `SocialMediaFeature` with a method `sharePost()`.
2. Export the both SocialMediaFeature and UIComponent (From Assignment2)
2. Create `Post`, `Comment`, and `Like` classes and implement the `SocialMediaFeature` interface 
   and UIcomponent
4. Create instances of `Post`, `Comment`, and `Like` and Call the methods to render, handle events, 
   and share posts in a social media platform application.
 * 
  */

import {UIComponent} from "./w3_ass2_interface" ;
import {SocialMediaFeature} from "./w3_ass3_interface" ;

class Post implements UIComponent, SocialMediaFeature {
   render(): void {
      console.log("The posts render for a social media platform application")
   }
   handleEvent(): void {
      console.log("The posts handle event for a social media platform application")
   }
   sharePost(): void {
      console.log("The share posts in a social media platform application")
   }
}

class Comment implements UIComponent, SocialMediaFeature {
   render(): void {
      console.log("The posts render in social media platform application for comments")
   }
   handleEvent(): void {
      console.log("The posts handle event in social media platform application for comments")
   }
   sharePost(): void {
      console.log("The share posts in a social media platform application for comments")
   }
}

class Like implements UIComponent, SocialMediaFeature {
   render(): void {
      console.log("The posts render for a social media platform application for Like")
   }
   handleEvent(): void {
      console.log("The posts handle event for a social media platform application for Like")
   }
   sharePost(): void {
      console.log("The share posts in a social media platform application for Like")
   }
}

const post = new Post()
const comments = new Comment()
const like = new Like()

comments.handleEvent()
comments.render()
comments.sharePost()

like.handleEvent()
like.render()
like.sharePost()

post.handleEvent()
post.render()
post.sharePost()
