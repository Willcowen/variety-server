const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  await createShoes();
  process.exit(0);
}

async function createShoes() {
  const rawShoes = [
    {
      model: 'Loafer Black',
      price: 35.99,
      imgUrl:
        'https://media.boohooman.com/i/boohooman/amm13903_black_xl?$product_image_tile$&fmt=webp',
      color: 'Black',
      size: 6,
    },
    {
      model: 'Loafer Brown',
      price: 39.99,
      imgUrl:
        'https://media.boohooman.com/i/boohooman/amm13897_tan_xl?$product_image_tile$&fmt=webp',
      color: 'Brown',
      size: 4,
    },
    {
      model: 'Loafer Tan',
      price: 39.99,
      imgUrl:
        'https://media.boohooman.com/i/boohooman/amm13900_tan_xl?$product_image_tile$&fmt=webp',
      color: 'Tan',
      size: 8,
    },
    {
      model: 'Loafer Black Faux',
      price: 35.99,
      imgUrl:
        'https://media.boohooman.com/i/boohooman/amm13898_black_xl?$product_image_tile$&fmt=webp',
      color: 'Black',
      size: 9,
    },
    {
      model: 'Loafer Faux Suede',
      price: 35.99,
      imgUrl:
        'https://media.boohooman.com/i/boohooman/bmm10151_navy_xl?$product_image_category_page$&fmt=webp',
      color: 'Blue',
      size: 7,
    },
    {
      model: 'Loafer Textured',
      price: 35.99,
      imgUrl:
        'https://media.boohooman.com/i/boohooman/bmm10160_light%20blue_xl?$product_image_category_page$&fmt=webp',
      color: 'Black',
      size: 4,
    },
    {
      model: 'Loafer Gum',
      price: 35.99,
      imgUrl:
        'https://media.boohooman.com/i/boohooman/bmm10146_tan_xl?$product_image_category_page$&fmt=webp',
      color: 'Stone',
      size: 9,
    },
  ];

  const shoes = [];

  for (const rawShoe of rawShoes) {
    const shoe = await prisma.shoe.create({ data: rawShoe });
    shoes.push(shoe);
  }

  console.log('Shoes created', shoes);

  return shoes;
}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(() => process.exit(1));
