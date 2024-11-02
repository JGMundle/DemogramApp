import { create } from "zustand";

interface Activity {
  user: string;
  likedPost: () => void
  
}

const useActivityStore = create<Activity>((set) => ({
  user: "",
  likedPost: () => console.log("Liked a post")
}));

export default useActivityStore;
