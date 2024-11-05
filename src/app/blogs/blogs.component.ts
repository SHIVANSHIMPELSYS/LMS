import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
 blogs=[
  {
      "title": "The Future of Web Development",
      "author": "John Smith",
      "date": "March 1, 2023",
      "summary": "Explore the latest trends in web development and what the future holds for developers.",
      "link": "/blog/future-of-web-development",
      "image": 'assets/professional wallpaper featuring AngularJS.png', 
  },
  {
      "title": "Understanding JavaScript Closures",
      "author": "Jane Doe",
      "date": "March 5, 2023",
      "summary": "A deep dive into JavaScript closures and how they work.",
      "link": "/blog/javascript-closures",
      "image":  "assets/Gen AI in professional font.png"
  },
  {
      "title": "CSS Grid vs Flexbox: When to Use Each",
      "author": "Emily Johnson",
      "date": "March 10, 2023",
      "summary": "Learn the differences between CSS Grid and Flexbox and when to use each layout technique.",
      "link": "/blog/css-grid-vs-flexbox",
      "image": 'assets/professional wallpaper featuring AngularJS.png', 
  },
  {
      "title": "Getting Started with React",
      "author": "Michael Brown",
      "date": "March 15, 2023",
      "summary": "A beginner's guide to getting started with React and building your first application.",
      "link": "/blog/getting-started-with-react",
      "image":  "assets/Gen AI in professional font.png"
  },
  {
      "title": "Top 10 JavaScript Libraries for 2023",
      "author": "Sarah Wilson",
      "date": "March 20, 2023",
      "summary": "Discover the top 10 JavaScript libraries you should know in 2023.",
      "link": "/blog/top-javascript-libraries-2023",
      "image": 'assets/professional wallpaper featuring AngularJS.png', 
  },
  {
      "title": "The Importance of Responsive Design",
      "author": "David Lee",
      "date": "March 25, 2023",
      "summary": "Understand why responsive design is crucial for modern web development.",
      "link": "/blog/importance-of-responsive-design",
      "image": "assets/Gen AI in professional font.png"
  },
  {
      "title": "Building RESTful APIs with Node.js",
      "author": "Lisa Taylor",
      "date": "March 30, 2023",
      "summary": "Learn how to build a RESTful API using Node.js and Express.",
      "link": "/blog/restful-apis-with-nodejs"
  },
  {
      "title": "Introduction to TypeScript",
      "author": "Chris Martin",
      "date": "April 5, 2023",
      "summary": "An introduction to TypeScript and its benefits over JavaScript.",
      "link": "/blog/introduction-to-typescript"
  },
  {
      "title": "Best Practices for Writing Clean Code",
      "author": "Karen White",
      "date": "April 10, 2023",
      "summary": "Learn best practices for writing clean, maintainable code.",
      "link": "/blog/writing-clean-code"
  },
  {
      "title": "Understanding Asynchronous JavaScript",
      "author": "Tom Harris",
      "date": "April 15, 2023",
      "summary": "A guide to understanding asynchronous programming in JavaScript.",
      "link": "/blog/asynchronous-javascript"
  },
  {
      "title": "The Rise of Progressive Web Apps",
      "author": "Rachel Green",
      "date": "April 20, 2023",
      "summary": "Explore what Progressive Web Apps are and why they are gaining popularity.",
      "link": "/blog/progressive-web-apps"
  },
  {
      "title": "SEO Best Practices for 2023",
      "author": "Mark Thompson",
      "date": "April 25, 2023",
      "summary": "Stay ahead of the curve with these SEO best practices for 2023.",
      "link": "/blog/seo-best-practices-2023"
  },
  {
      "title": "Introduction to GraphQL",
      "author": "Angela Carter",
      "date": "April 30, 2023",
      "summary": "A beginner's guide to understanding GraphQL and its advantages.",
      "link": "/blog/introduction-to-graphql"
  },
  {
      "title": "How to Choose a JavaScript Framework",
      "author": "Steven Adams",
      "date": "May 5, 2023",
      "summary": "Tips for choosing the right JavaScript framework for your project.",
      "link": "/blog/choosing-javascript-framework"
  },
  {
      "title": "Understanding Web Accessibility",
      "author": "Laura Martin",
      "date": "May 10, 2023",
      "summary": "Learn about web accessibility and how to make your website more accessible.",
      "link": "/blog/web-accessibility"
  },
  {
      "title": "Top 5 Front-End Development Trends for 2023",
      "author": "Kevin Brown",
      "date": "May 15, 2023",
      "summary": "Stay ahead of the curve with these top front-end development trends for 2023.",
      "link": "/blog/front-end-development-trends-2023"
  },
  {
      "title": "Building a Real-Time Chat App with WebSockets",
      "author": "Julia Davis",
      "date": "May 20, 2023",
      "summary": "Learn how to build a real-time chat app using WebSockets.",
      "link": "/blog/real-time-chat-app"
  },
  {
      "title": "Understanding CSS Preprocessors",
      "author": "Brian Hall",
      "date": "May 25, 2023",
      "summary": "A guide to understanding CSS preprocessors like Sass and Less.",
      "link": "/blog/css-preprocessors"
  },
  {
      "title": "Top 10 Web Development Tools for 2023",
      "author": "Amanda Lee",
      "date": "May 30, 2023",
      "summary": "Discover the top 10 web development tools you should know in 2023.",
      "link": "/blog/top-web-development-tools-2023"
  },
  {
      "title": "The Benefits of Using a CSS Framework",
      "author": "Daniel Kim",
      "date": "June 5, 2023",
      "summary": "Learn about the benefits of using a CSS framework like Bootstrap or Tailwind CSS.",
      "link": "/blog/benefits-of-css-framework"
  }
]
currentPage: number = 1;
itemsPerPage: number = 6; 

get paginatedBlogs() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.blogs.slice(startIndex, startIndex + this.itemsPerPage);
}

get totalPages() {
  return Math.ceil(this.blogs.length / this.itemsPerPage);
}

goToPage(page: number) {
  this.currentPage = page;
}

}
