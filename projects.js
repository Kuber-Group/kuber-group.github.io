// Projects data file
// Add new projects by adding objects to this array
// Each project should include: title, description, techStack (array), category, and demoUrl

const featuredProjects = [
    {
        title: "E-Commerce Dashboard",
        description: "Full-featured admin dashboard for managing products, orders, and customer data with real-time analytics and reporting.",
        techStack: ["Angular", "TypeScript", ".NET Core", "SQL Server"],
        category: "Dashboard",
        demoUrl: "https://example.com/ecommerce-demo"
    },
    {
        title: "Inventory Management System",
        description: "Comprehensive inventory tracking system with barcode scanning, stock alerts, and automated reordering capabilities.",
        techStack: ["React", "Node.js", "MongoDB", "Redis"],
        category: "Admin System",
        demoUrl: "https://example.com/inventory-demo"
    },
    {
        title: "Customer Portal",
        description: "Self-service customer portal with account management, support ticketing, and document access.",
        techStack: ["Vanilla JS", "HTML5", "CSS3", "Supabase"],
        category: "Web App",
        demoUrl: "https://example.com/portal-demo"
    },
    {
        title: "Marketing Landing Page",
        description: "High-converting landing page with animated sections, lead capture forms, and A/B testing integration.",
        techStack: ["HTML5", "CSS3", "Vanilla JS"],
        category: "Website",
        demoUrl: "https://example.com/landing-demo"
    },
    {
        title: "Analytics Dashboard",
        description: "Business intelligence dashboard with interactive charts, custom reports, and data export capabilities.",
        techStack: ["React", "D3.js", ".NET", "PostgreSQL"],
        category: "Dashboard",
        demoUrl: "https://example.com/analytics-demo"
    },
    {
        title: "Booking System",
        description: "Appointment scheduling system with calendar integration, automated reminders, and payment processing.",
        techStack: ["Angular", "TypeScript", "Firebase"],
        category: "Web App",
        demoUrl: "https://example.com/booking-demo"
    }
];

// Example of how to add a new project:
// Simply add a new object to the array above:
/*
{
    title: "Your Project Name",
    description: "Brief description of what the project does and its key features.",
    techStack: ["Technology1", "Technology2", "Technology3"],
    category: "Web App", // Options: "Web App", "Dashboard", "Website", "Admin System", "Landing Page"
    demoUrl: "https://your-demo-url.com"
}
*/
