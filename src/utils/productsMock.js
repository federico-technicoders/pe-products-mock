import { faker } from '@faker-js/faker'

const categories = ['Diseño', 'Desarrollo', 'Marca Personal', 'Creación de contenidos', 'Marketing']

function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

export const getCursoMock = () => ({
    // id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.technics(),
    duration: parseInt(faker.number.int()),
    author: faker.person.fullName(),
    created_by: faker.database.mongodbObjectId(),
    created_at: faker.date.past(),
    updated_at: faker.date.recent(),
    category: getRandomCategory(),
    digital: true,
    active: true
})