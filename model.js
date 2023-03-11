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

requestAPI()

