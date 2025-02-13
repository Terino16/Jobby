interface User {
    name: string | null;
    email: string | null;
    image: string | null;
    employee: {
      photo: string;
      resume: string;
      achievements: string;
      skills: string[];
    } | null;  // Also making employee optional since it might be null
}
  
  interface Job {
    title: string;
  }
  
export interface Application {
        id: string;
        jobId: string;
        userId: string;
        status: boolean;
        createdAt: Date | string;
        user: User;
        job: Job;
}