import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Create 1 company user
  const companyUser = await prisma.user.create({
    data: {
      name: faker.company.name(),
      email: faker.internet.email(),
      jobseeker: false,
      onboarding: true,
      company: {
        create: {
          companyLogo: 'https://picsum.photos/200',
          companyName: faker.company.name(),
          companyEmail: faker.internet.email(),
          companyAbout: faker.lorem.paragraph(),
          companyLinkedin: faker.internet.url(),
          companyWebsite: faker.internet.url(),
          companyAddress: faker.location.streetAddress(),
          companyCountry: faker.location.country(),
        },
      },
    },
    include: {
      company: true,
    },
  });

  // Create 5 jobs (3 ACTIVE, 2 INACTIVE)
  const jobs = [];
  for (let i = 0; i < 5; i++) {
    const job = await prisma.job.create({
      data: {
        title: faker.person.jobTitle(),
        description: faker.lorem.paragraphs(3),
        salary: `$${faker.number.int({ min: 40000, max: 150000 })} per year`,
        location: faker.location.city(),
        status: i < 3 ? 'ACTIVE' : 'INACTIVE',
        companyId: companyUser.company.id,
      },
    });
    jobs.push(job);
  }

  // Create 10 job seeker users
  const jobSeekers = [];
  for (let i = 0; i < 10; i++) {
    const jobSeekerUser = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        jobseeker: true,
        onboarding: true,
        employee: {
          create: {
            photo: 'https://picsum.photos/200',
            resume: faker.internet.url(),
            achievements: faker.lorem.paragraphs(2),
            skills: faker.lorem.words(5),
          },
        },
      },
      include: {
        employee: true,
      },
    });
    jobSeekers.push(jobSeekerUser);
  }

  // Assign 5 applicants to each job
  for (const job of jobs) {
    const applicants = faker.helpers.shuffle(jobSeekers).slice(0, 5);
    for (const applicant of applicants) {
      await prisma.applicant.create({
        data: {
          jobId: job.id,
          userId: applicant.id,
          image: 'https://picsum.photos/200',
          name: applicant.name,
          email: applicant.email,
          skills: applicant.employee.skills,
          achievements: applicant.employee.achievements,
          resume: applicant.employee.resume,
          status: Math.random() > 0.7,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
