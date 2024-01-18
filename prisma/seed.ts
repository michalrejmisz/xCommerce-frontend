const { PrismaClient } = require('@prisma/client')
const faker = require('@faker-js/faker')
const prisma = new PrismaClient()

async function main() {
  const categories = [
    { name: 'Kategoria 1' },
    { name: 'Kategoria 2', parentId: 1 },
    { name: 'Kategoria 3', parentId: 2 },
    { name: 'Kategoria 4', parentId: 3 },
  ]

  for (let category of categories) {
    await prisma.category.create({ data: category })
  }

  const products = [
    { name: 'Produkt 1' },
    { name: 'Produkt 2' },
    { name: 'Produkt 3' },
  ]

  for (let product of products) {
    const createdProduct = await prisma.product.create({ data: product })

    await prisma.productOnCategory.create({
      data: {
        productId: createdProduct.id,
        categoryId: Math.floor(Math.random() * categories.length) + 1,
      },
    })
  }
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })