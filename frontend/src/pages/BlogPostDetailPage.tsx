import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Clock, Share2, Tag, BookOpen, ArrowRight } from 'lucide-react';
import { blogData } from '../data/blogData';

export const BlogPostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogData.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-32 pb-24 relative">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-8">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-amber-400">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amber-300 truncate max-w-xs">{post.title}</span>
        </div>

        {/* Article Header */}
        <header className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge-gold">{post.category}</span>
            <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {post.readTime}
            </span>
            <span className="text-xs font-mono text-neutral-500">• {post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Badge */}
          <div className="flex items-center justify-between pt-6 border-t border-b border-white/10 py-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/40"
              />
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-neutral-400 font-mono">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: post.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article URL copied to clipboard!');
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed font-normal">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-neutral-400 mr-2 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-amber-400" />
            Tags:
          </span>
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Related Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="glass-panel p-6 group hover:border-amber-400/40 transition-colors"
                >
                  <div className="text-xs font-mono text-amber-400 mb-2">{r.category}</div>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {r.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Technical Articles</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
