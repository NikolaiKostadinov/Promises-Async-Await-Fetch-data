const app = async () => {
    const endPoint = "https://swapi.dev/api/"
    const films = '/films/'

     const countElement = document.getElementById('count')   
     const filmElement = document.getElementById('films')

     const filmsDirectors = document.getElementById('directors')

   const call = async (url) => {
    console.log(url);
        try {
            if (typeof url !== 'string') {
                throw new Error('Provide URL as a string')
            }
            const respons = await fetch(url)
            console.log(respons);

            if (respons.ok === false) {
                throw new Error(`${respons.status}`)
            }

            const data = await respons.json()
            
            return data
            
        } catch (error) {
            alert(`${error}`)
            console.log(error);
        }
   } 
    const data = await call(endPoint + films)
    countElement.innerText = `Count: ${data.count}`

    data.results.forEach(film => {
        const li = document.createElement('li')

        const p = document.createElement('p')
        const h4 = document.createElement('h4')

        h4.innerText = `Title: ${film.title}`
        p.innerText = `Release Date: ${film.release_date}`
     
       li.appendChild(p)
       li.appendChild(h4)

       filmElement.appendChild(li)


        const li2 = document.createElement('li')

        const h3 = document.createElement('h3')
        h3.innerText = `Directors: ${film.director}`

        li2.appendChild(h3)

        filmsDirectors.appendChild(li2)

    });
 
    console.log(data);
 }
window.addEventListener('load', app)