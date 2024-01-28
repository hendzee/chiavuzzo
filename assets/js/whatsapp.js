$(document).ready(() => {
    askingUnit();
});

const askingUnit = () => {
    const productList = [
        'AVANZA',
        'Innova E',
        'Innova Reborn',
        'Innova Zenix Hybrid',
        'Alphard',
        'Alphard Transformer',
        'Mercedes E Class'
    ];

    const whatsappNumber = '6282331613281';

    $('.product-action .btn-primary').each((index, obj) => {
        var index = index;

        $(obj).on('click', (e) => {
            e.preventDefault();

            // Aborting if number didn't exist
            if (!whatsappNumber) {
                console.log('Set the number first.');
                return
            };

            const message = setMessage(productList[index]);

            const url = 'https://wa.me/' 
                + whatsappNumber 
                + '?text=' 
                + message;

            window.open(url);
        })
    })
}

const setMessage = (unit) => {
    return 'Hai, apakah ' + unit + ' tersedia ? terimakasih.';
}