import { faker } from "@faker-js/faker";

export const generateMedia = (title: string = faker.internet.domainName()) => ({
  title,
  description: faker.lorem.paragraph(1),
  thumbnailUrl: faker.internet.url(),
  videoUrl: faker.internet.url(),
});