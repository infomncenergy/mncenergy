import { useState, useEffect } from 'react';
import { Link }     from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES, FEATURED_POST } from '../data/blogData';
import SectionLabel from '../components/ui/SectionLabel';
import CtaBanner    from '../components/ui/CtaBanner';

// ── Guardian API — free, no signup needed for the 'test' dev key ─────────────
const GUARDIAN_API = 'https://content.guardianapis.com/search';
const GUARDIAN_KEY = import.meta.env.VITE_GUARDIAN_API_KEY || 'test';

async function fetchLiveNews() {
  const params = new URLSearchParams({
    q:            'landlord safety OR property compliance OR gas safety OR electrical safety OR fire safety',
    'section':    'money,lifeandstyle,society,environment',
    'show-fields': 'trailText,thumbnail,byline',
    'order-by':   'newest',
    'page-size':  '6',
    'api-key':    GUARDIAN_KEY,
  });
  const res  = await fetch(`${GUARDIAN_API}?${params}`);
  const data = await res.json();
  if (data.response?.status !== 'ok') return [];
  return data.response.results.map((a, i) => ({
    id:       `live-${i}`,
    title:    a.webTitle,
    excerpt:  a.fields?.trailText || '',
    imgSrc:   a.fields?.thumbnail || `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`,
    date:     new Date(a.webPublicationDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    readTime: '3 min read',
    category: 'News',
    slug:     null,
    url:      a.webUrl,
    isLive:   true,
  }));
}

function PostCard({ post }) {
  const linkProps = post.isLive
    ? { href: post.url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: `/blog/${post.slug}` };

  return (
    <div className="blog-card">
      <div className="blog-card__img-wrap">
        <img src={post.imgSrc} alt={post.title} className="blog-card__img" />
        <span className="blog-card__category">
          {post.isLive && <i className="bi bi-broadcast me-1" style={{ color: '#67e8f9' }}></i>}
          {post.category}
        </span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span><i className="bi bi-calendar3 me-1"></i>{post.date}</span>
          <span><i className="bi bi-clock me-1"></i>{post.readTime}</span>
        </div>
        <h5 className="blog-card__title">{post.title}</h5>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        {post.isLive ? (
          <a {...linkProps} className="blog-card__link">
            Read on The Guardian <i className="bi bi-box-arrow-up-right ms-1"></i>
          </a>
        ) : (
          <Link to={`/blog/${post.slug}`} className="blog-card__link">
            Read More <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [liveNews,   setLiveNews]   = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  // Fetch live news on mount
  useEffect(() => {
    let cancelled = false;
    fetchLiveNews()
      .then(articles => { if (!cancelled) setLiveNews(articles); })
      .catch(() => {})
      .finally(() => { if (!cancelled) setNewsLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const allPosts = [...BLOG_POSTS, ...liveNews];
  const allCategories = ['All', ...BLOG_CATEGORIES, ...(liveNews.length ? ['News'] : [])];

  const filtered = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(p => p.category === activeCategory);

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
      <section className="py-5 blog-featured-section">
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
                      <span key={i} className="blog-tag me-2 mb-2">{tag}</span>
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
          <div className="blog-filter mb-5 d-flex align-items-center flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                className={`blog-filter__btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'News' && <i className="bi bi-broadcast me-1" style={{ color: '#67e8f9' }}></i>}
                {cat}
              </button>
            ))}
            {newsLoading && (
              <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.4)' }}>
                <span className="spinner-border spinner-border-sm me-1" style={{ width: 12, height: 12 }} />
                Loading live news…
              </span>
            )}
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

      <CtaBanner title="Ready to Book a Safety Certificate? Get an Instant Quote Today!" />
    </>
  );
}
