import { useState } from 'react';
import { Link }     from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES, FEATURED_POST } from '../data/blogData';
import SectionLabel from '../components/ui/SectionLabel';
import CtaBanner    from '../components/ui/CtaBanner';

function PostCard({ post }) {
  return (
    <div className="blog-card">
      <div className="blog-card__img-wrap">
        <img src={post.imgSrc} alt={post.title} className="blog-card__img" />
        <span className="blog-card__category">{post.category}</span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span><i className="bi bi-calendar3 me-1"></i>{post.date}</span>
          <span><i className="bi bi-clock me-1"></i>{post.readTime}</span>
        </div>
        <h5 className="blog-card__title">{post.title}</h5>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="blog-card__link">
          Read More <i className="bi bi-arrow-right ms-1"></i>
        </Link>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="blog-hero">
        <div className="container">
          <SectionLabel center>OUR BLOG</SectionLabel>
          <h1 className="fw-bold text-center mb-3">Safety Guides &amp; Landlord Resources</h1>
          <p className="text-center text-muted mb-0 mx-auto" style={{ maxWidth: 600 }}>
            Expert advice on electrical safety, gas certificates, fire compliance, asbestos, EPC ratings, and everything landlords and property owners need to stay legally compliant.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-5" style={{ background: '#f4f6f8' }}>
        <div className="container">
          <SectionLabel>FEATURED ARTICLE</SectionLabel>
          <div className="blog-featured">
            <div className="row align-items-center g-0">
              <div className="col-lg-6">
                <div className="blog-featured__img-wrap">
                  <img src={FEATURED_POST.imgSrc} alt={FEATURED_POST.title} className="blog-featured__img" />
                  <span className="blog-card__category">{FEATURED_POST.category}</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-featured__body">
                  <div className="blog-card__meta mb-3">
                    <span><i className="bi bi-calendar3 me-1"></i>{FEATURED_POST.date}</span>
                    <span><i className="bi bi-clock me-1"></i>{FEATURED_POST.readTime}</span>
                  </div>
                  <h2 className="fw-bold mb-3">{FEATURED_POST.title}</h2>
                  <p className="text-muted mb-4">{FEATURED_POST.excerpt}</p>
                  <div className="mb-4">
                    {FEATURED_POST.tags.map((tag, i) => (
                      <span key={i} className="badge bg-light text-dark border me-2 mb-2">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${FEATURED_POST.slug}`} className="btn-green">
                    Read Article <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-5">
        <div className="container">
          {/* Category Filter */}
          <div className="blog-filter mb-5">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`blog-filter__btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="row g-4">
            {filtered.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-5 text-muted">
              <i className="bi bi-search fs-1 d-block mb-3"></i>
              No posts found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="blog-newsletter__inner">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <SectionLabel>STAY UPDATED</SectionLabel>
                <h2 className="fw-bold mb-2">Get Landlord Safety Tips Direct to Your Inbox</h2>
                <p className="text-muted mb-0">We send monthly guides on compliance, safety regulations, and cost-saving tips for landlords and property managers.</p>
              </div>
              <div className="col-lg-6">
                <form className="blog-newsletter__form" onSubmit={e => e.preventDefault()}>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email address"
                    />
                    <button className="btn-green px-4" type="submit">Subscribe</button>
                  </div>
                  <small className="text-muted mt-2 d-block">
                    <i className="bi bi-lock-fill me-1"></i>No spam. Unsubscribe at any time.
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to Book a Safety Certificate? Get an Instant Quote Today!" />
    </>
  );
}
