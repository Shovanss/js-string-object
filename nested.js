const mobile = {
    brand: 'samsung',
    model: 22,
    price: 76000,
    processor:{
        type: 'qualcom',
        gen: '10th',
    },
    size:{
        ram: '8gb',
        rom: '256gb'
    },
    benefit:['camera', 'battery', 'ram'],
    }
    mobile.brand = 'nokia';
    console.log(mobile);


    console.log(mobile.size.ram);

    mobile.size.rom = '128gb';

    console.log(mobile.size.rom);

    console.log(mobile.benefit[0]);
    
    delete mobile.processor;
    console.log(mobile);
