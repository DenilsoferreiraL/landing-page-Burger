const listburger = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonDiscountValue = document.querySelector('.discount-value')
const buttonsumAll = document.querySelector('.sum-all')
const buttonfilterAll = document.querySelector('.filter-all')

function showAll(productArray) {
    let newListBurger = ''
    productArray.forEach((product) => {
        newListBurger += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <span>${formatValue(product.price)}</span>
            </li>
        `
    })
    listburger.innerHTML = newListBurger
}

function valueDiscount() {
    const discount = menuOptions.map((product) => ({
        ...product,
        price: formatValue(product.price * 0.9),
    }))
    showAll(discount)
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    listburger.innerHTML = `
<li>    
    <span> O valor total de todos os hamburguers ${formatValue(totalValue)}</span>
</li>
`
}

function filterAll() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

function formatValue(value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscountValue.addEventListener('click', valueDiscount)
buttonsumAll.addEventListener('click', sumAllItens)
buttonfilterAll.addEventListener('click', filterAll)
