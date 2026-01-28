import './Blog.css';

const blogPosts = [
  {
    id: 1,
    category: 'Bathroom',
    title: 'Turn your bathroom into a spa without breaking the bank',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&q=80'
  },
  {
    id: 2,
    category: 'Improvement',
    title: 'Homeowners must-ask questions before renovating',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80'
  },
  {
    id: 3,
    category: 'Kitchen',
    title: 'Kitchen Colors You\'ll Never Regret Choosing',
    image: 'https://images.unsplash.com/photo-1556912172-45b7fa8ef810?w=400&q=80'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog section">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-title">Stories and tips about beautiful living spaces</h2>
          <button className="btn-read-blog">Read blog</button>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
