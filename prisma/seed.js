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

async function createDresses () {

  const rawDresses = [
    {
      model: 'White Dress',
      price: 99.99,
      imgUrl:
        'https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw409ab3d0/22H223DR017-1107-1CT_1_main.jpg?sw=475&sh=633&q=100',
      color: 'White',
      size: 8,
    },
    {
      model: 'Blazer Dress',
      price: 89.99,
      imgUrl:
        'https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandwarehttps://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw7107ae7e/22H221DR016-1029-150_5.jpg?sw=475&sh=633&q=100.static/-/Sites-master-jacquemus/default/dw409ab3d0/22H223DR017-1107-1CT_1_main.jpg?sw=475&sh=633&q=100',
      color: 'Tan',
      size: 10,
    },
    {
      model: 'Black Dress',
      price: 69.99,
      imgUrl:
        'https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandwarehttpshttps://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwe863d0f5/22H213DR106-1020-990_4.jpg?sw=475&sh=633&q=100://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw7107ae7e/22H221DR016-1029-150_5.jpg?sw=475&sh=633&q=100.static/-/Sites-master-jacquemus/default/dw409ab3d0/22H223DR017-1107-1CT_1_main.jpg?sw=475&sh=633&q=100',
      color: 'Black',
      size: 10,
    },
    {
      model: 'Green Dress',
      price: 59.99,
      imgUrl:
        'https://www.jacquemus.com/dw/imagehttps://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw118758b4/22H223KN097-2157-580_1_main.jpg?sw=475&sh=633&q=100/v2/BJFJ_PRD/on/demandwarehttpshttps://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwe863d0f5/22H213DR106-1020-990_4.jpg?sw=475&sh=633&q=100://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw7107ae7e/22H221DR016-1029-150_5.jpg?sw=475&sh=633&q=100.static/-/Sites-master-jacquemus/default/dw409ab3d0/22H223DR017-1107-1CT_1_main.jpg?sw=475&sh=633&q=100',
      color: 'Green',
      size: 10,
    },
  ]

  const dresses = []

  for (const rawDress of rawDresses) {
    const dress = await prisma.dress.create({ data: rawDress });
    dresses.push(dress);
  }

  console.log('dresses created', dresses)

  return dresses

}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(() => process.exit(1));
