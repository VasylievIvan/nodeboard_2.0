import fs from "fs";

type Post = {
    id: number;
    timeStamp: string;
    message: string;
    imageUrl: string;
}
export const getPosts = async (cb: (posts: Post[]) => void) => {
  fs.readFile("./data/posts.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try {
        const posts: Post[] = JSON.parse(jsonString);
        cb(posts)
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
  });
};
