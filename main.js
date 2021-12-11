const API = 'https://jsonplaceholder.typicode.com/users'
const div = document.getElementById('div')
async function getResponse() {
    let req = await fetch(API)
    let response = await req.json()
    console.log(response)
    response.forEach(el => {


        const id = document.createElement('h3')
        const name = document.createElement('p')
        const username = document.createElement('h3')
        const phone = document.createElement('p')
        const website = document.createElement('p')
        const address=document.createElement('p')
        const company=document.createElement('p')
       
        
        id.innerHTML = el.id
        name.innerHTML = el.name
        phone.innerHTML = el.phone
        username.innerHTML = el.username
        website.innerHTML = el.website
        address.innerHTML = JSON.stringify(el.address)
        company.innerHTML = JSON.stringify(el.company)
       

        div.append(id,name,username,phone,website,address,company)
        document.body.append(div)
    });
   
}
getResponse()


