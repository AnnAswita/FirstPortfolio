/*
Represent a single blog post 
defining the structure and required fields for blog content

*/
export interface BlogPost {
    id: number, //unique identifier
    title: string, //title of the blog post
    date: string, //publication date
    content: string //blog post text content
}
/*
Represents the complete blog data 
with each post stored inside a collection 
*/
export interface BlogData {
    posts: BlogPost[];
}