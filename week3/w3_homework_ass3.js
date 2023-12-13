"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.render = function () {
        console.log("The posts render for a social media platform application");
    };
    Post.prototype.handleEvent = function () {
        console.log("The posts handle event for a social media platform application");
    };
    Post.prototype.sharePost = function () {
        console.log("The share posts in a social media platform application");
    };
    return Post;
}());
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.render = function () {
        console.log("The posts render in social media platform application for comments");
    };
    Comment.prototype.handleEvent = function () {
        console.log("The posts handle event in social media platform application for comments");
    };
    Comment.prototype.sharePost = function () {
        console.log("The share posts in a social media platform application for comments");
    };
    return Comment;
}());
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.render = function () {
        console.log("The posts render for a social media platform application for Like");
    };
    Like.prototype.handleEvent = function () {
        console.log("The posts handle event for a social media platform application for Like");
    };
    Like.prototype.sharePost = function () {
        console.log("The share posts in a social media platform application for Like");
    };
    return Like;
}());
var post = new Post();
var comments = new Comment();
var like = new Like();
comments.handleEvent();
comments.render();
comments.sharePost();
like.handleEvent();
like.render();
like.sharePost();
post.handleEvent();
post.render();
post.sharePost();
