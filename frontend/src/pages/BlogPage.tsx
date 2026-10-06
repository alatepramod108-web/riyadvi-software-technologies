import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, Tag, BookOpen, Sparkles } from 'lucide-react';
import { blogData } from '../data/blogData';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', '3D & WebGL', 'Architecture', 'AI & Machine Learning', 'Mobile Dev'];

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogData.find((p) => p.featured) || blogData[0];

  return (
    <div className="pt-32 pb-24 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="badge-gold">Engineering & Thought Leadership</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            The Riyadvi <span className="gold-gradient-text">Tech Journal</span>
          </h1>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            Deep technical investigations, 3D WebGL optimization patterns, distributed systems architecture, and modern product strategies.
          </p>
        </div>

        {/* Featured Post Hero */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <div className="mb-16">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="glass-panel overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 group hover:border-amber-400/50 transition-all p-6 md:p-8"
            >
              <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="badge-gold">Featured Article</span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-amber-400/40"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{featuredPost.author.name}</div>
                      <div className="text-[10px] text-neutral-400 font-mono">{featuredPost.date}</div>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 h-64 lg:h-auto rounded-xl overflow-hidden bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-white/10 flex items-center justify-center p-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/30">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-mono text-amber-200">Interactive Spatial Case</div>
                  <div className="text-xs text-neutral-400">WebGL & Real-Time Performance Benchmarks</div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`text-xs px-3.5 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === c
                    ? 'bg-amber-400 text-black font-semibold border-amber-300'
                    : 'bg-white/5 text-neutral-400 border-white/10 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900/80 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="glass-panel p-6 flex flex-col justify-between group hover:border-amber-400/40 hover:-translate-y-1 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span className="text-amber-400">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div className="text-[11px] text-neutral-300 font-medium">
                    {post.author.name}
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
