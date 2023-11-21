// ItemList.tsx
import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  createItem,
  deleteItem,
  getItems,
  updateItem,
} from "../../services/posts.service";
import { Button } from "antd";
import { Post } from "../../model/Post";

const PostsList: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: items } = useQuery("items", getItems);

  const createMutation = useMutation(createItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });

  const updateMutation = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });

  const deleteMutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });

  const handleCreate = async () => {
    await createMutation.mutateAsync({
      id: 101,
      title: "Test",
    });
  };

  const handleUpdate = async (id: number) => {
    await updateMutation.mutateAsync(id, {});
  };

  const handleDelete = async (id: number) => {
    await deleteMutation.mutateAsync(id);
  };

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button onClick={handleCreate}>Create Item</Button>
      <ul>
        {Array.isArray(items.data)
          ? items.data.map((item: Post) => (
              <li key={item.id}>
                {item.title}
                <Button onClick={() => handleUpdate(item.id)}>Update</Button>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </li>
            ))
          : "No item"}
      </ul>
    </div>
  );
};

export default PostsList;
