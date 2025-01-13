import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Blogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<{ id: number; author: { name: string }; title: string; content: string }[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setBlogs([
                {
                    id: 1,
                    author: { name: "Emma Johnson" },
                    title: "Exploring the Beauty of Nature",
                    content: "Nature has always been a source of inspiration and solace for many people. From the towering mountains to the serene oceans, the earth offers an incredible array of landscapes that provide peace and joy. In this blog, we will dive into some of the most breathtaking natural wonders around the world. From the lush Amazon rainforest to the frozen beauty of Antarctica, these places offer a sense of awe and wonder that is hard to find elsewhere. The importance of preserving these natural wonders cannot be overstated, as they provide essential ecological services, such as oxygen production, climate regulation, and biodiversity conservation. It is crucial that we work together to protect these treasures for future generations to enjoy.",
                },
                {
                    id: 2,
                    author: { name: "Liam Smith" },
                    title: "The Impact of Technology on Education",
                    content: "Technology has revolutionized every field, and education is no exception. The advent of the internet, smartphones, and digital tools has transformed the way we teach and learn. Online learning platforms like Coursera and Khan Academy offer access to education from anywhere in the world, democratizing learning for millions of students. Interactive whiteboards, virtual classrooms, and digital textbooks have made learning more engaging and effective. However, there are challenges as well. The digital divide still exists, with some students lacking access to the necessary technology, and the over-reliance on screens may lead to issues like decreased attention spans and social isolation. As technology continues to shape education, it’s important to strike a balance that maximizes its benefits while minimizing its drawbacks.",
                },
                {
                    id: 3,
                    author: { name: "Sophia Lee" },
                    title: "Mindfulness and Mental Health",
                    content: "In today's fast-paced world, mental health issues such as stress, anxiety, and depression are becoming increasingly common. Amidst the hustle and bustle of daily life, many people struggle to maintain a sense of calm and balance. This is where mindfulness practices come into play. Mindfulness, which involves paying attention to the present moment without judgment, has been shown to have numerous benefits for mental health. Research suggests that regular mindfulness practice can reduce stress, improve focus, and even alleviate symptoms of anxiety and depression. By simply focusing on our breath, body, and surroundings, we can learn to manage our thoughts and emotions more effectively. Additionally, mindfulness encourages a greater sense of self-awareness, helping individuals recognize the early signs of mental health challenges before they escalate. This blog explores the power of mindfulness and how incorporating it into daily life can contribute to better mental well-being.",
                },
                {
                    id: 4,
                    author: { name: "James Brown" },
                    title: "How to Build a Successful Startup",
                    content: "Starting a business can be both exciting and daunting. The idea of bringing your vision to life is thrilling, but the reality of building a sustainable company requires hard work, strategy, and perseverance. First and foremost, it's crucial to conduct thorough market research. Understanding the needs of your target audience, identifying gaps in the market, and analyzing competitors can help you create a product or service that addresses a real problem. The next step is assembling the right team. A strong, diverse team with complementary skills will be essential in achieving your goals. Securing funding is another significant challenge for many startups, but with a solid business plan and clear vision, you can attract investors or explore alternative funding options like crowdfunding. Once you have the foundation in place, it's important to continuously iterate and adapt to changing market conditions. A successful startup is one that can evolve with the times while staying true to its core values. In this blog, we will explore these essential elements of building a successful startup and how to overcome the obstacles that come with entrepreneurship.",
                },
                {
                    id: 5,
                    author: { name: "Olivia Taylor" },
                    title: "The Future of Remote Work",
                    content: "Remote work has become increasingly popular in recent years, but the global pandemic of 2020 accelerated this trend to unprecedented levels. Companies and employees alike have discovered the benefits of working from home, such as increased flexibility, better work-life balance, and reduced commuting time. But what does the future hold for remote work? As organizations adapt to the changing landscape, hybrid models are becoming more common, where employees split their time between the office and home. Technology will play a central role in supporting remote teams, with advancements in communication tools, project management software, and virtual collaboration platforms. However, the shift to remote work also brings challenges. Companies will need to find new ways to maintain company culture, ensure productivity, and foster collaboration among remote teams. As we look ahead, it’s clear that the future of remote work will involve a more flexible, inclusive, and technology-driven approach to work.",
                },
                {
                    id: 6,
                    author: { name: "William Harris" },
                    title: "The Importance of Sustainability in Fashion",
                    content: "The fashion industry has long been associated with trends and fast production cycles, often leading to unsustainable practices. However, there has been a growing movement toward sustainable fashion in recent years. Consumers are becoming more conscious of the environmental impact of their clothing choices, from the use of natural resources to the pollution caused by textile manufacturing. Brands are responding by embracing eco-friendly materials, reducing waste, and committing to ethical labor practices. Sustainable fashion is not only about producing eco-friendly garments; it’s also about encouraging consumers to buy less and invest in high-quality, timeless pieces. The rise of second-hand fashion, upcycling, and clothing swaps has also gained momentum, offering alternatives to the traditional “buy and discard” culture. This blog explores the role of sustainability in the fashion industry and how individuals and companies can make a positive impact on the planet through conscious fashion choices.",
                },
            ]);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading && blogs.length === 0) {
            alert("You are not logged in. Please log in first.");
            navigate("/signin");
        }
    }, [loading, blogs, navigate]);

    if (loading) {
        return (
            <div className="flex justify-center">
                <div className="w-screen max-w-screen-md">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="w-screen max-w-screen-md">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id.toString()}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                        publishedDate={new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
