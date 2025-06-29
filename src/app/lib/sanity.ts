import { createClient } from "@sanity/client";

// export const sanity = createClient({
//     projectId: "s9o383vq",
//     dataset: "production",
//     useCdn: true,
//     apiVersion: "2023-06-01",
// });

// import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "s9o383vq",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});