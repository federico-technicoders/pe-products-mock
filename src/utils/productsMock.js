import { faker } from '@faker-js/faker'

const categories = ['disenio', 'desarrollo', 'marca-personal', 'creacion-contenidos', 'marketing']

function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

export const getCursoMock = () => ({
    // id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    // image: faker.image.technics(),
    image: 'https://cronuts.digital/wp-content/uploads/2023/12/CDi5rCVYkPYvkpZ9qKf6WGD5I8mzyDfA3D.png',
    duration: parseInt(faker.number.int()),
    author: faker.person.fullName(),
    created_by: faker.database.mongodbObjectId(),
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
    category: getRandomCategory(),
    digital: true,
    active: true
})