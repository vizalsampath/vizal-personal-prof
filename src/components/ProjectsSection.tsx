import { useState } from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  type: 'Personal' | 'Professional' | 'MVP';
  status: 'Completed' | 'In Progress';
  links?: {
    demo?: string;
    github?: string;
    medium?: string;
  };
}

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI Analytics Dashboard',
      year: '2024',
      description: 'AI-powered analytics dashboard for healthcare data processing and predictive modeling.',
      longDescription: 'Built a comprehensive healthcare analytics platform using Python, integrating OpenAI APIs for data cleaning and analysis. Features real-time dashboards, predictive modeling for patient outcomes, and automated ETL pipelines processing 100K+ records daily.',
      tags: ['Python', 'AI', 'Healthcare', 'ETL'],
      type: 'Professional',
      status: 'Completed',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 'llm-embeddings',
      title: 'LLM Text Embeddings System',
      year: '2024',
      description: 'Advanced text embedding system using large language models for semantic search and analysis.',
      longDescription: 'Developed a sophisticated text embedding pipeline using OpenAI and custom LLMs. Implemented semantic search capabilities with 95% accuracy, processing diverse document types and enabling intelligent content discovery.',
      tags: ['LLM', 'AI', 'Python', 'Embeddings'],
      type: 'Personal',
      status: 'Completed',
      links: {
        github: '#',
        medium: '#'
      }
    },
    {
      id: 'etl-automation',
      title: 'Automated ETL Pipeline',
      year: '2024',
      description: 'Scalable ETL pipeline for processing multi-source data with AWS S3 integration.',
      longDescription: 'Designed and implemented a robust ETL system handling data from multiple sources including MySQL, APIs, and flat files. Automated data validation, transformation, and loading processes with comprehensive error handling and monitoring.',
      tags: ['Python', 'ETL', 'AWS', 'MySQL'],
      type: 'Professional',
      status: 'Completed'
    },
    {
      id: 'predictive-analytics',
      title: 'Customer Behavior Prediction Model',
      year: '2024',
      description: 'Machine learning model for predicting customer behavior patterns and churn analysis.',
      longDescription: 'Built predictive models using Python and scikit-learn to analyze customer behavior patterns. Achieved 87% accuracy in churn prediction, enabling proactive customer retention strategies and improved business outcomes.',
      tags: ['Python', 'ML', 'Analytics', 'Side Project'],
      type: 'Personal',
      status: 'In Progress'
    }
  ];

  const filters = ['All', 'Python', 'LLM', 'AI', 'Healthcare', 'Personal', 'Side Project', 'ETL'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.includes(selectedFilter) || project.type === selectedFilter
      );

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on in analytics, AI, and data engineering.
          </p>
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-card-foreground hover:bg-card-hover border border-border'
              }`}
            >
              <Tag size={14} className="inline mr-1" />
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card p-6 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Type Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  project.type === 'Personal' 
                    ? 'bg-primary text-primary-foreground'
                    : project.type === 'Professional'
                    ? 'bg-success text-success-foreground'
                    : 'bg-accent text-accent-foreground'
                }`}>
                  {project.type}
                </span>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <button className="text-primary font-medium text-sm hover:underline">
                  Know More
                </button>
                <div className="flex space-x-2">
                  {project.links?.github && (
                    <Github size={16} className="text-muted-foreground hover:text-primary cursor-pointer" />
                  )}
                  {project.links?.demo && (
                    <ExternalLink size={16} className="text-muted-foreground hover:text-primary cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-card rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-card-foreground">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {selectedProject.links && (
                  <div className="flex space-x-4 pt-4">
                    {selectedProject.links.demo && (
                      <a
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center space-x-2"
                      >
                        <ExternalLink size={16} />
                        <span>View Demo</span>
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center space-x-2"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;