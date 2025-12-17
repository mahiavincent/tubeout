import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://tubeout.vercel.app",
            lastModified: new Date(),
        },
        {
            url: "https://tubeout.vercel.app/waitlist",
            lastModified: new Date(),
        },
        {
            url: "https://tubeout.vercel.app/signup",
            lastModified: new Date(),
        },
        {
            url: "https://tubeout.vercel.app/login",
            lastModified: new Date(),
        },
        {
            url: "https://tubeout.vercel.app/dashboard",
            lastModified: new Date(),
        },
        {
            url: "https://tubeout.vercel.app/dashboard/creators",
            lastModified: new Date(),
        },
    ]
}