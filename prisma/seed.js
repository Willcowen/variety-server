const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  await createShoes();
  process.exit(0);
}

async function createShoes() {
  const rawShoes = [
    {
      model: 'Pink Crep',
      price: 35.99,
      imgUrl:
        'https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwfdfd3b42/22H226FO043-4007-640_1_main.jpg?sw=475&sh=633&q=100',
      color: 'Pink',
      size: 6,
    },
    {
      model: 'Blue Crep',
      price: 39.99,
      imgUrl:
        'https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw61b34aab/22H226FO043-4007-320_1_main.jpg?sw=475&sh=633&q=100',
      color: 'Blue',
      size: 4,
    },
    {
      model: 'Pale Crep',
      price: 39.99,
      imgUrl:
        'https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwc00285d7/22H226FO043-4007-150_1_main.jpg?sw=475&sh=633&q=100',
      color: 'Pale',
      size: 8,
    },
    {
      model: 'Yellow Crep',
      price: 35.99,
      imgUrl:
        'https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwfdaecd45/22H226FO043-4007-530_1_main.jpg?sw=475&sh=633&q=100',
      color: 'Yellow',
      size: 9,
    },
    {
      model: 'Cream Crep',
      price: 35.99,
      imgUrl:
        'https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwacfd4e5b/22H226FO041-4007-910_1_main.jpg?sw=475&sh=633&q=100',
      color: 'Cream',
      size: 7,
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
