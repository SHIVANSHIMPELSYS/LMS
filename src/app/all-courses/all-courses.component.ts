import { Component } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {
   courses = [
    { 
        name: 'Mastering React JS', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'John Doe', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'Angular Essentials', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'Jane Smith', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'Introduction to Generative AI', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'Alice Johnson', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'DevOps Fundamentals', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'John Doe', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'React for Beginners', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'Jane Smith', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'Advanced Angular Techniques', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'Alice Johnson', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'Generative AI Deep Dive', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'John Doe', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'DevOps Practices and Tools', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'Jane Smith', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'React Component Mastery', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'Alice Johnson', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'Building Apps with Angular', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'John Doe', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'AI in Modern Applications', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'Jane Smith', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'Continuous Integration with DevOps', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'Alice Johnson', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'React Hooks and State Management', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'John Doe', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'Angular Routing and Navigation', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'Jane Smith', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'Ethics in AI Development', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'Alice Johnson', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'DevOps for Cloud Computing', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'John Doe', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'React Performance Optimization', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'Jane Smith', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'Angular Forms and Validation', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'Alice Johnson', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'AI in Healthcare', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'John Doe', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'DevOps for Agile Development', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'Jane Smith', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'React Server-Side Rendering', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'Alice Johnson', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'Angular Animations and Transitions', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'John Doe', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'AI in Finance', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'Jane Smith', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'DevOps for Security', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'Alice Johnson', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'React Context API', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'John Doe', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'Angular Services and Dependency Injection', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'Jane Smith', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'AI in Education', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'Alice Johnson', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'DevOps for Continuous Delivery', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'John Doe', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'React Redux and State Management', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'Jane Smith', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'Angular HTTP Client and API', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'Alice Johnson', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'AI in Marketing', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'John Doe', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'DevOps for Cloud Native Applications', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'Jane Smith', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'React Webpack and Optimization', 
        image: 'assets/professional wallpaper for React.js.png', 
        link: '/react', 
        instructor: 'Alice Johnson', 
        fee: 300, 
        duration: '4 weeks', 
        difficulty: 'Intermediate' 
    },
    { 
        name: 'Angular Material Design', 
        image: 'assets/professional wallpaper featuring AngularJS.png', 
        link: '/angular', 
        instructor: 'John Doe', 
        fee: 250, 
        duration: '5 weeks', 
        difficulty: 'Beginner' 
    },
    { 
        name: 'AI in Robotics', 
        image: 'assets/Gen AI in professional font.png', 
        link: '/genai', 
        instructor: 'Jane Smith', 
        fee: 350, 
        duration: '6 weeks', 
        difficulty: 'Advanced' 
    },
    { 
        name: 'DevOps for Microservices Architecture', 
        image: 'assets/professional wallpaper for DevOps.png', 
        link: '/devops', 
        instructor: 'Alice Johnson', 
        fee: 400, 
        duration: '8 weeks', 
        difficulty: 'Intermediate' 
    },
];
filteredCourses = [...this.courses];
instructorFilter: string = '';
courseNameFilter: string = '';
difficultyFilter: string = '';

constructor() {
  this.filterCourses(); 
}

filterCourses() {
  this.filteredCourses = this.courses.filter(course => {
    return (
      (this.instructorFilter ? course.instructor.toLowerCase().includes(this.instructorFilter.toLowerCase()) : true) &&
      (this.courseNameFilter ? course.name.toLowerCase().includes(this.courseNameFilter.toLowerCase()) : true) &&
      (this.difficultyFilter ? course.difficulty.toLowerCase() === this.difficultyFilter.toLowerCase() : true)
    );
  });
}
}
