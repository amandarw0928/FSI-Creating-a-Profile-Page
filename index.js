let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.append('Rizzo')
header.setAttribute('class', 'dog-name')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let header1 = document.createElement('h3')
header1.append('Description:')
dogDetails.append(header1)