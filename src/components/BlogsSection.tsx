import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  readTime: string;
  mediumUrl: string;
  category: string;
}

const BlogsSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 'ai-healthcare-analytics',
      title: 'Transforming Healthcare with AI-Powered Analytics',
      summary: 'Exploring how artificial intelligence is revolutionizing healthcare data analysis and improving patient outcomes through predictive modeling.',
      publishDate: '2024-12-15',
      readTime: '8 min read',
      mediumUrl: '#',
      category: 'AI & Healthcare'
    },
    {
      id: 'llm-embeddings-guide',
      title: 'A Complete Guide to LLM Text Embeddings',
      summary: 'Deep dive into large language model embeddings, their applications in semantic search, and practical implementation strategies.',
      publishDate: '2024-11-28',
      readTime: '12 min read',
      mediumUrl: '#',
      category: 'Machine Learning'
    },
    {
      id: 'etl-best-practices',
      title: 'Modern ETL Pipeline Best Practices with Python',
      summary: 'Learn how to build scalable, maintainable ETL pipelines using Python, with real-world examples and performance optimization techniques.',
      publishDate: '2024-11-10',
      readTime: '10 min read',
      mediumUrl: '#',
      category: 'Data Engineering'
    },
    {
      id: 'data-analyst-journey',
      title: 'My Journey from Engineering to Data Analytics',
      summary: 'Personal insights and lessons learned transitioning from electrical engineering to data analytics, including skills development and career advice.',
      publishDate: '2024-10-22',
      readTime: '6 min read',
      mediumUrl: '#',
      category: 'Career'
    },
    {
      id: 'predictive-modeling-tips',
      title: 'Essential Tips for Effective Predictive Modeling',
      summary: 'Practical guide to building robust predictive models, from data preparation to model validation and deployment strategies.',
      publishDate: '2024-10-05',
      readTime: '9 min read',
      mediumUrl: '#',
      category: 'Data Science'
    },
    {
      id: 'zoho-analytics-insights',
      title: 'Maximizing Business Intelligence with Zoho Analytics',
      summary: 'How to leverage Zoho Analytics for comprehensive business intelligence, including advanced features and integration strategies.',
      publishDate: '2024-09-18',
      readTime: '7 min read',
      mediumUrl: '#',
      category: 'Business Intelligence'
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Blogs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, case studies, and learnings shared on Medium. Exploring the intersection of data, AI, and business impact.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="project-card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent text-accent-foreground">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground space-x-1">
                  <Calendar size={14} />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
              </div>

              {/* Blog Content */}
              <h3 className="text-xl font-semibold mb-3 text-card-foreground line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              {/* Meta Info */}
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  {post.readTime}
                </span>
                
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-primary font-medium text-sm hover:underline group"
                >
                  <span>Read on Medium</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs CTA */}
        <div className="text-center animate-fade-in">
          <a
            href="https://medium.com/@vizalsl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <ExternalLink size={18} />
            <span>View All Posts on Medium</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;