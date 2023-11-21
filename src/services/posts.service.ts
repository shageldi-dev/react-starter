import { api } from "../common/api/api";
import { Post } from "../model/Post";

export const createItem = (data: Post) => api.post("/posts", data);
export const getItems = () => api.get<Post[]>("/posts");
export const updateItem = (id: number, data: Post) =>
  api.put(`/posts/${id}`, data);
export const deleteItem = (id: number) => api.delete(`/posts/${id}`);
