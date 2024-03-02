const axios=require("axios");
const cheerio=require("cheerio");


async function fetchData(){

    const response = await axios.get("https://scrapeme.live/shop/Squirtle/");
    const html = response.data;
    //console.log(html);
    const $ = cheerio.load(html);

    const container = $("#primary")

    const _name = ".product_title.entry-title";
    const _price = "p.price > span";
    const _description = ".woocommerce-product-details__short-description";
    const _stock = "p.stock";
    const _sku = ".sku_wrapper .sku";
    const _categories = ".posted_in a";


    for (const c of container) {
        const extractData = {
            name: $(c).find(_name).text(),
            price: $(c).find(_price).text(),
            description: $(c).find(_description).text().trim(),
            stock: $(c).find(_stock).text(),
            sku: $(c).find(_sku).text(),
            categories: $(c).find(_categories).text()
        };

        console.log(extractData);

    }


}

fetchData();