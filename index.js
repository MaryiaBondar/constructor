
const $site = document.getElementById('site')
const $sidebar = document.getElementById('sidebar')

const components = [
    {name: 'h1', header: 'Header'},
    {name: 'p', header: 'Paragraph'},
    {name: 'a', header: 'Link'},
]

components.forEach(form => {
    const href = form.name === 'a'
    $sidebar.insertAdjacentHTML('beforeend', `
         <form name="${form.name}" id="header" class="mt-5">
            <h1>${form.header}</h1>
            <div class="form-group">
                <label for="exampleInputEmail1">Content</label>
                <input type="text" name="content" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Style</label>
                <input type="text" name="styles"  class="form-control" id="exampleInputPassword1">
            </div>
            ${href ? '<div class="form-group">\n                <label for="exampleInputPassword1">Link</label>\n                <input type="text" name="href"  class="form-control" id="exampleInputPassword1">\n            </div>' : ''}
            <button type="submit" class="btn btn-primary">Create</button>
        </form>
    `)
})

const $forms = document.querySelectorAll('form')

const createElement = (type, content, styles, href) => {
    // debugger
    return  href ? `<${type} style="${styles}" href="${href}"> ${content} </${type}>`
    :
    `<${type} style="${styles}"> ${content} </${type}>`

}

const renderElement = (element) => {
    $site.insertAdjacentHTML('beforeend', element)
}

$forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let type = event.target.name
        let styles = event.target.styles.value
        event.target.styles.value = ''
        let content = event.target.content.value
        let href = event.target.href.value
        event.target.content.value = ''

        const element = createElement(type, content, styles, href)
        renderElement(element)
    })
})




