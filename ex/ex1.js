var langues = document.createElement('div')
langues.id = "langues"
var body = document.querySelector('body')

body.appendChild(langues)

var p = document.createElement('p')
p.appendChild(document.createTextNode('Langages basés sur ECMAScript :'))


langues.appendChild(p)


var ul = document.createElement('ul')
langues.appendChild(ul)


function createLi(text){
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(text))

    return li
}

ul.appendChild(createLi('JavaScript'))
ul.appendChild(createLi('JScript'))
ul.appendChild(createLi('ActionScript'))
ul.appendChild(createLi('EX4'))


console.log(document.getElementById('langues'))
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByTagName('p')[0].innerHTML)





















/*var langues = document.createElement('div')
langues.id = "langues"
document.body.appendChild(langues)

var p = document.createElement('p')
p.appendChild(document.createTextNode('Langages basés sur ECMAScript :'))
langues.appendChild(p)

var ul = document.createElement('ul')

function createLi(text){
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(text))

    return li
}

ul.appendChild(createLi('JavaScript'))
ul.appendChild(createLi('JScript'))
ul.appendChild(createLi('ActionScript'))
ul.appendChild(createLi('EX4'))

langues.appendChild(ul)


console.log(langues)*/