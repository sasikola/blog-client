import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  const posts = [
    {
      id: 1,
      category: "Technology",
      title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
      author: "David Grzyb",
      date: "April 25th, 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
      imageUrl: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
    },
    {
      id: 2,
      category: "Automotive, Finance",
      title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
      author: "David Grzyb",
      date: "January 12th, 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
      imageUrl: "https://source.unsplash.com/collection/1346951/1000x500?sig=2",
    },
    {
      id: 3,
      category: "Sports",
      title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
      author: "David Grzyb",
      date: "October 22nd, 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
      imageUrl: "https://source.unsplash.com/collection/1346951/1000x500?sig=3",
    },
  ];

  return (
    <div className="container mx-auto flex flex-wrap py-6">
      {/* Posts Section */}
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        {posts.map((post) => (
          <article className="flex flex-col shadow my-4" key={post.id}>
            {/* Article Image */}
            <a href="# " className="hover:opacity-75">
              <img src={post.imageUrl} alt={`Post ${post.id}`} />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="# "
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                {post.category}
              </a>
              <a
                href="# "
                className="text-3xl font-bold hover:text-gray-700 pb-4"
              >
                {post.title}
              </a>
              <p className="text-sm pb-3">
                By
                <a href="# " className="font-semibold hover:text-gray-800">
                  {post.author}
                </a>
                , Published on {post.date}
              </p>
              <p className="pb-6">{post.description}</p>
              <a href="# " className="uppercase text-gray-800 hover:text-black">
               <div className="flex items-center gap-2">
               Continue Reading <FaArrowRight />
               </div>
              </a>
            </div>
          </article>
        ))}

        {/* Pagination */}
        <div className="flex items-center py-8">
          <a
            href="# "
            className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
          >
            1
          </a>
          <a
            href="# "
            className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
          >
            2
          </a>
          <a
            href="# "
            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
          >
            Next <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      {/* Sidebar Section */}
      <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
          <p className="text-xl font-semibold pb-5">About Us</p>
          <p className="pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
            hac habitasse platea dictumst.
          </p>
          <a
            href="# "
            className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
          >
            Get to know us
          </a>
        </div>

      </aside>
    </div>
  );
};

export default Home;
