"use strict";

const itemsDB = [
    {
        id: 123456,
        url: "#1",
        jpgUrl: "img/item1.jpg",
        webpUrl: "img/item1.webp",
        title: "Front-end Developer Maksym Kushnirov 2002",
        price: 16000,
        oldPrice: 17000,
        tags: {
            sale: true,
            best: true
        }
    },
    {
        id: 123457,
        url: "#2",
        jpgUrl: "img/item1.jpg",
        webpUrl: "img/item1.webp",
        title: "Python Developer Maksym Kushnirov 2002",
        price: 20000,
        oldPrice: 25000,
        tags: {
            sale: true,
            best: true
        }
    },
    {
        id: 123459,
        url: "#3",
        jpgUrl: "img/item1.jpg",
        webpUrl: "img/item1.webp",
        title: "Developer Maksym Kushnirov",
        price: 10000,
        oldPrice: 12000,
        tags: {
            sale: true,
            best: false
        }
    },
    {
        id: 123460,
        url: "#4",
        jpgUrl: "img/item1.jpg",
        webpUrl: "img/item1.webp",
        title: "Developer Maksym Kushnirov",
        price: 10000,
        oldPrice: 12000,
        tags: {
            sale: true,
            best: false
        }
    },
    {
        id: 123461,
        url: "#5",
        jpgUrl: "img/item1.jpg",
        webpUrl: "img/item1.webp",
        title: "Developer Kushnirov",
        price: 14000,
        oldPrice: 16000,
        tags: {
            sale: true,
            best: false
        }
    },
    {
        id: 123462,
        url: "#6",
        jpgUrl: "img/item1.jpg",
        webpUrl: "img/item1.webp",
        title: "Dev Maks Kushnirov",
        price: 3000,
        oldPrice: 12000,
        tags: {
            sale: true,
            best: false
        }
    },
    {
        id: 123463,
        url: "#7",
        jpgUrl: "img/item1.jpg",
        webpUrl: "img/item1.webp",
        title: "Developer Maksym",
        price: 100,
        oldPrice: 1000,
        tags: {
            sale: true,
            best: false
        }
    }
];

class Item{
    constructor(id, url, title, price, oldPrice, tags, jpgUrl, webpUrl){
        this.id = id;
        this.url = url;
        this.title = title;
        this.price = price;
        this.oldPrice = oldPrice;
        this.tags = tags;
        this.jpgUrl =  jpgUrl;
        this.webpUrl = webpUrl;
    }
    getSalePercent(){
        const salePercent = (this.oldPrice - this.price) / this.oldPrice * 100;
        return salePercent;
    }
    
    getTags(){
        const salePercent = this.getSalePercent().toFixed(2);
        return `
            ${this.tags.sale ? `<li class="item__tag" sale>-${salePercent}%</li>` : ''}
            ${this.tags.best ? `<li class="item__tag" best>Best Offer</li>` : ''}
        `
    }

    render(){
        const item = document.createElement("div");
        item.classList.add("catalog__item", "item");
        const tags = this.getTags()
        item.innerHTML = `
            <div class="item__top">
                <a href="${this.url}">
                    <picture class="item__picture">
                        <source srcset="${this.webpUrl}" type="image/svg+xml">
                        <img src="${this.jpgUrl}" alt="Maksym">
                    </picture>
                </a>
                <ul class="item__tags">
                    ${tags}
                </ul>
                <div class="item__title"><a href="#">${this.title}</a></div>
            </div>
            <div class="item__bottom">
                <div class="item__price">
                    <div class="item__price-actual">${this.price} ₴</div>
                    <div class="item__price-old">${this.oldPrice} ₴</div>
                </div>
                <a href="${this.url}" class="item__button">Hire</a>
                <div class="item__id">Item ID: ${this.id}</div>
            </div>
        `
        return item;
    }
}

class Catalog{
    constructor(items){
        this.items = items;
    }

    render(){
        const catalog = document.createElement("div");
        catalog.classList.add("catalog__items")
        this.items.forEach(item => catalog.insertAdjacentElement("beforeend", item));
        return catalog;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let items = [];
    itemsDB.forEach(value => {
        const itemElement = new Item(
            value.id, 
            value.url, 
            value.title, 
            value.price, 
            value.oldPrice, 
            value.tags, 
            value.jpgUrl, 
            value.webpUrl).render();
        items.push(itemElement);
    });
    const catalogItems = new Catalog(items).render();
    const catalog = document.querySelector(".catalog");
    catalog.insertAdjacentElement("beforeend",catalogItems) ;
});