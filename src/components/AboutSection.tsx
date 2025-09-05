import { GraduationCap, Briefcase, Code, Database, Brain, Award } from 'lucide-react';
import dataVisualsImage from '@/assets/data-analytics-hero.jpg';

const AboutSection = () => {
  const skills = [
    {
      category: 'Programming & Data',
      icon: Code,
      items: ['Python', 'SQL', 'MySQL', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      category: 'Data Engineering',
      icon: Database,
      items: ['ETL Pipelines', 'AWS S3', 'Data Warehousing', 'Jupyter Lab']
    },
    {
      category: 'Analytics & BI',
      icon: Award,
      items: ['Power BI', 'Zoho Analytics', 'Statistical Analysis', 'Data Visualization']
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      items: ['OpenAI APIs', 'LLMs', 'Embeddings', 'Predictive Modeling']
    }
  ];

  const experience = [
    {
      role: 'Data Analyst',
      company: 'Cx360',
      period: 'Jan 2025 – Present',
      description: 'Developing ETL processes, predictive modeling, and AI-powered analytics using Python, SQL, MySQL, Jupyter Lab, Zoho Analytics, and AWS S3.',
      achievements: [
        'Built automated ETL pipelines processing 100K+ records daily',
        'Implemented AI-powered data cleaning with 95% accuracy improvement',
        'Created predictive models achieving 87% accuracy in business forecasting'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'Bosch Global Software Technologies',
      period: 'Completed Apr 2024',
      description: 'Gained hands-on experience in software development and data processing systems.',
      achievements: [
        'Contributed to enterprise-level software solutions',
        'Learned industry best practices for code quality and testing',
        'Collaborated on cross-functional development teams'
      ]
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">About Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Data Analyst with a background in Electrical and Electronics Engineering. 
                Currently working at Cx360, I specialize in transforming complex data into actionable insights 
                through Python, SQL, and advanced analytics tools.
              </p>
            </div>

            {/* Education */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-card-foreground">Education</h3>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground">
                  B.E. Electrical and Electronics Engineering
                </h4>
                <p className="text-muted-foreground">Graduated April 2024</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Strong foundation in analytical thinking, problem-solving, and systematic approaches to complex challenges.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Currently Learning</h3>
              <div className="flex flex-wrap gap-2">
                {['AI & Machine Learning', 'Data Science', 'Data Engineering', 'Master Data Management'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative animate-scale-in delay-300">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={dataVisualsImage}
                alt="Data Analytics and AI Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-slide-up">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Skills & Technologies</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <div
                  key={skillGroup.category}
                  className="project-card p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="text-primary mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-card-foreground mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((item) => (
                      <div
                        key={item}
                        className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Professional Experience</span>
          </h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="project-card p-8 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <Briefcase className="text-primary mt-1" size={24} />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground">
                          {exp.role}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;