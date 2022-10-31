import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";

import "./Blogs.css";

const Blogs = () => {
  window.scrollTo(0, 0);
  const blog = useSelector((state) => state.blogs.blog);
  const { publishedOn, author, heading, body, image } = blog;
  const imageUrl = image.imageUrl;
  const bodyContent = body.split("\n");

  return (
    <>
      <Navbar />
      <div className="blog-post">
        <h1 style={{ textAlign: "center" }}>{heading}</h1>
        <div className="blog-post__header-info">
          <div>
            <b>Author: </b>
            {author}
          </div>
          <div>
            <b>Published On: </b>
            {publishedOn}
          </div>
        </div>

        <br />
        <br />
        <img src={imageUrl} alt="blog-post-img" className="blog-post__img" />
        <br />
        <div className="blog-post__content">
          {bodyContent.map((para) => (
            <p>
              {para}
              <br />
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
