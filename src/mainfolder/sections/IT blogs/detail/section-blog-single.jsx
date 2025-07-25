'use client';
import Link from "next/link";
import { useParams } from 'next/navigation';
import { blogPosts } from "../../../components/IT blogs/blog-grid"; // Adjust path as needed
import ItodoImage from "../../../elements/itodo-img";

function BlogGridPage() {
  const { id } = useParams();
  console.log(id)
  const post = blogPosts.find((item) => item.id === parseInt(id));
  console.log(post);
  if (!post) return <p>Blog post not found.</p>;

  return (
    <>
      <div className="blog-single-space">
        <div className="sx-post-media sx-img-effect img-reflection m-b30">
          <ItodoImage src={post.image} alt={post.title} />
        </div>
        <div className="single-blog-post blog-detail m-b30">
          <div className="sx-post-meta">
            <ul>
              <li className="post-date">
                <i className="fa fa-calendar" /> {post.date}
              </li>
              <li className="post-author">
                <i className="fa fa-comments" /> {post.comments} Comments
              </li>
            </ul>
          </div>
          <div className="sx-post-title">
            <h2 className="post-title">{post.title}</h2>
          </div>
          <div className="sx-post-text">
            <p>{post.para}</p>
          </div>
          <div className="autor-post-tag-share">
            <div className="row">
              <div className="col-md-6">
                <div className="widget_tag_cloud single-post-tag">
                  <h6 className="tagcloud">Tags: sd</h6>
                  <div className="tagcloud">
                    {post.tags?.map((tag, index) => (
                      <Link key={index} to="/services">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="widget_social_inks sx-social-icons ">
                  <ul className="d-flex">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogGridPage;
