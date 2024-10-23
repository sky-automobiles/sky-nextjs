"use client";
import { useState, useEffect } from "react";

// Define a type for the review
interface Review {
  title: string;
  content: string;
}

const BlogsForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [conclusion, setConclusion] = useState<string>("");
  const [publishDate, setPublishDate] = useState<string>("");

  useEffect(() => {
    // Set the publish date when the component mounts
    const formattedDate = new Date().toLocaleDateString();
    setPublishDate(formattedDate);
  }, []);

  useEffect(() => {
    // Split content into passages whenever content changes
    const passages = content.split(/\d+\.\s+/).filter(Boolean);
    console.log(passages);

    const formattedReviews = passages.map((passage, index) => {
      const [passageTitle, ...contentParts] = passage.split("\n");
      const reviewContent = contentParts.join("\n").trim();

      console.log(passageTitle, reviewContent);

      return {
        title: passageTitle.trim() || `Passage ${index + 1}`,
        content: reviewContent,
      };
    });

    setReviews(formattedReviews);
  }, [content]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, desc, conclusion }), // Include conclusions
    });

    if (response.ok) {
      alert("Blog uploaded successfully!");
      setTitle("");
      setContent("");
      setDesc("");
      setConclusion(""); // Reset to empty array with one placeholder
      setReviews([]); // Clear reviews after submission
    } else {
      alert("Failed to upload blog");
    }
  };

  //   const handleConclusionChange = (index: number, value: string) => {
  //     const newConclusions = [...conclusions];
  //     newConclusions[index] = value;
  //     setConclusions(newConclusions);
  //   };

  //   const addConclusion = () => {
  //     setConclusions([...conclusions, ""]); // Add a new empty conclusion
  //   };

  return (
    <div className="h-[85vh] flex gap-4">
      <div className="w-[calc(100%-500px)] h-full rounded-lg py-4">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="title" className="text-primaryBlue pl-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Your Blog Title Here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-2 p-2 bg-transparent border-b-2 appearance-none focus:outline-none border-b-primaryBlue"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="text-primaryBlue pl-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Enter Your Blog Description Here"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full p-2 mb-2 bg-transparent border-b-2 appearance-none focus:outline-none border-b-primaryBlue"
              required
            />
          </div>
          <div className="col-span-2 mb-2">
            <label htmlFor="content" className="text-primaryBlue pl-2">
              Content
            </label>
            <textarea
              placeholder="Blog Content (e.g., 1. Title\nContent)"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full p-2 bg-transparent border-b-2 appearance-none focus:outline-none border-b-primaryBlue min-h-56 max-h-72"
            />
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="conclusion" className="text-primaryBlue pl-2">
              Conclusion
            </label>
            <input
              type="text"
              id="conclusion"
              placeholder="Enter Your Conclusion Here"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              className="w-full p-2 mb-2 bg-transparent border-b-2 appearance-none focus:outline-none border-b-primaryBlue"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 appearance-none focus:outline-none bg-primaryBlue text-white"
          >
            Post Now
          </button>
        </form>
      </div>
      <div className="w-[500px] bg-secondaryGray4 h-full p-4 max-h-[85vh] overflow-scroll">
        {title && <h4 className="font-medium text-xl min-h-4 mb-3">{title}</h4>}
        {desc && <h5 className="min-h-4 mb-1">{desc}</h5>}
        <p className="text-sm text-gray-500 mb-4">
          Published on{" "}
          <time dateTime={new Date().toISOString().split("T")[0]}>
            {publishDate}
          </time>{" "}
          by Sky Automobiles
        </p>
        {reviews.length > 0 && (
          <div>
            {reviews.map((review, index) => (
              <div key={index} className="mb-4 p-4 border rounded">
                <h4 className="font-bold">{review.title}</h4>
                <p className="text-sm pl-2">{review.content}</p>
              </div>
            ))}
          </div>
        )}
        {conclusion && <p className="text-sm pb-4">{conclusion}</p>}
        {/* {conclusions.length > 0 && (
          <div>
            {conclusions.map((conclusion, index) => (
              <p key={index} className="text-sm pb-4">
                {conclusion}
              </p>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default BlogsForm;
