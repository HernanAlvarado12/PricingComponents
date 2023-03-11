
document.addEventListener('click', event => {
    if(event.target.matches('#toggleButton')) {
        event.target.classList.toggle('justify-end')
        changePlan(event.target.classList.contains('justify-end'))
    }else if(event.target.matches('#toggleButton > span')) {
        event.target.parentElement.classList.toggle('justify-end')
        changePlan(event.target.parentElement.classList.contains('justify-end'))
    }
})


/**
 * 
 */
const requestAPI = async () => {
    const planTemplate = document.getElementById('planTemplate').content
    const documentFragment = document.createDocumentFragment()
    const request = await fetch('./data.json')
    const json = await request.json()
    const list = await json.cards;
    list.forEach(element => {
        const cloneNode = document.importNode(planTemplate, true)
        const { title, price, details } = element
        cloneNode.querySelector('h2').textContent = title
        cloneNode.querySelector('p').textContent = `$ ${price}`
        deepDetails(details, cloneNode)
        documentFragment.append(cloneNode)
    })
    document.getElementById('sectionPlanTemplate').append(documentFragment);
}


/**
 * 
 * @param {Array<String>} details 
 * @param {Element} parentNode
 */
async function deepDetails(details, parentNode) {
    const detailTemplate = parentNode.getElementById('detailTemplate').content
    const documentFragment = document.createDocumentFragment()
    details.forEach(detail => {
        const cloneNode = document.importNode(detailTemplate, true)
        cloneNode.querySelector('span.w-full').textContent = detail
        documentFragment.append(cloneNode)
    })
    parentNode.getElementById('planDetails').append(documentFragment)
}


/**
 * 
 * @param {Boolean} state 
 */
function changePlan(state) {
    const plans = document.querySelectorAll('#sectionPlanTemplate > article.max-w-3xl > h2 + p')
    plans.forEach(price => {
        const strs = price.textContent.split('.')
        if(state) 
            price.textContent = `${strs[0].slice(0, -1)}.${strs[1]}`
        else 
            price.textContent = `${strs[0]}9.${strs[1]}`
    })
}
requestAPI()
