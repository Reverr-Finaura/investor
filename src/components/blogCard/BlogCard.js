import "./BlogCard.css";

const BlogCard = ({ data }) => {
  const body = data.body;
  const imageUrl = data.image.imageUrl;
  const bodySliced = body.slice(0, 100);
  return (
    <>
      <div className="blog-card">
        <img src={imageUrl} width="100%" height="200px" alt="blog" />
        <br />
        <h3 style={{ textAlign: "center" }}>{data.heading}</h3>
        <p className="blog-body">{bodySliced}...</p>
        <br />
        <div className="blog-card__read-more">Read More</div>
      </div>
    </>
  );
};

export default BlogCard;
