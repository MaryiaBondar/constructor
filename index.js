const $site = document.getElementById('site')
const $tags = document.getElementById('tags')

const headerFunction = (content, currentHeader, color) => {$site.insertAdjacentHTML('beforeend',  `<${currentHeader} style="color: ${color}"> ${content} </${currentHeader}>`)}
const paragraphFunction = (content) => {return `<p> ${content} </p>`}
const linkFunction = (content, href) => {return `<a href="${href}"> ${content} </a>`}
const imageFunction = (src, alt) => {return `<img src="${src}" alt="${alt}" />`}
const createHeader = () => {
    const el = document.getElementById('createHeader')
    if(!el) {
        $tags.insertAdjacentHTML('afterend', `
        <form id="createHeader">
          <div class="form-group">
            <label for="exampleInputEmail1">Content</label>
            <input name="value" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="color">Color</label>
            <input type="color" name="color" class="form-control" id="color">
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
        </form>
    `)

        const form = document.getElementById('createHeader')
        form.addEventListener('submit', (event) => {
            // debugger
            event.preventDefault()
            components[0].tagFunc(event.target.value.value, 'h1', event.target.color.value)
        })
    }


}
const components = [
    {tagType: 'h1', tagName: 'Header', tagFunc: headerFunction,
        svgImage: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
</svg>`, createFunc: createHeader},
    {tagType: 'p', tagName: 'Paragraph', tagFunc: paragraphFunction,
        svgImage: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
</svg>`},
    {tagType: 'a', tagName: 'Link', tagFunc: linkFunction,
        svgImage: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
</svg>`},
    {tagType: 'img', tagName: 'Image', tagFunc: imageFunction,
        svgImage: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
</svg>`},
]

// console.log(components[0].svgImage)

components.forEach(block => {
    $tags.insertAdjacentHTML('beforeend', `
        <div
        id = "${block.tagType}"
        class="block">
        ${block.tagName}
        ${block.svgImage}
        </div>
    `)

    const el = document.getElementById(block.tagType)
    el.addEventListener('click', block.createFunc)

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
        let href = event.target.href ? event.target.href.value : false
        let color = event.target.color.value
        // debugger
        event.target.content.value = ''

        const element = createElement(type, content, styles, href)
        renderElement(element)
    })
})




