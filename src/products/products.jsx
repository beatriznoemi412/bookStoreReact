const products = [
    {
    id : 1,
    title : "La Sirenita. Libro de arte bajo el mar.",
    author : "Disney",
    price : 6700,
    category : "Libro Infantil/6 a 8 años",
    img : "https://planetadelibrosar4.cdnstatics.com/usuaris/libros/fotos/314/m_libros/portada_la-sirenita-libro-de-arte-bajo-el-mar_disney_202304171630.jpg",
    stock : 15,
    description : "Ariel y sus amigos te acompañarán en la aventura con actividades creativas de todo tipo."
},{
    id : 2,
    title : "Mi primera copa del mundo",
    author : "Martina Fileni",
    price : 2800,
    category : "Libro Infantil/6 a 8 años",
    img : "https://planetadelibrosar7.cdnstatics.com/usuaris/libros/fotos/377/m_libros/portada_mi-primera-copa-del-mundo__202303062041.jpg",
    stock : 15,
    description : "Los campeones del mundo festejamos como queremos. Revivamos Juntos los momentos más épicos de este Mundial"
},{
    id : 3,
    title : "Fechas patrias. 11 de septiembre",
    author : "Felipe Pigna",
    price : 3500,
    category :"Libro Infantil/9 a 12 años",
    img : "https://planetadelibrosar7.cdnstatics.com/usuaris/libros/fotos/337/m_libros/portada_fechas-patrias-11-de-septiembre-planeta-lector_felipe-pigna_202210111930.jpg",
    sotck : 15,
    description : "Cada 11 de septiembre, al celebrar el Día del Maestro, recordamos a Domingo Faustino Sarmiento. De esa forma, lo homenajeamos como educador, pero también como escritor, periodista y político muy polémico."
},{
    id : 4,
    title : "Mi parte favorita de la vida",
    author : "Fabián Sevilla",
    price : 3400,
    category : "Libro Infantil/A partir de 12 años",
    img : "https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/362/original/portada_mi-parte-favorita-de-la-vida_fabian-sevilla_202301022052.jpg",
    stock : 15,
    description : "Cristabel y Miranda  enfrentan la presión socialy la de su entorno para poder construir sus identidades. Y para hacerlo, apuestan a sus emociones.Un taller de arte será su punto de encuentro y, desde allí, se ayudarán"
},{
    id : 5,
    title : "Las mil y una noches",
    author : "Anónimo",
    price : 5200,
    category : "Literatura Clásica",
    img : "https://imagessl3.casadellibro.com/a/l/t7/83/9788423352883.jpg",
    stock : 15,
    description : "Las mil y unas noches no sólo es un mosaico que contiene cuentos de los distintos pueblos que en un momento u otro los acogieron, sino que también es un mosaico de las diversas morales de los mismos"
},{
   id : 6,
   title : "Don Quijote de la Mancha" ,
   author : "Miguel de Cervantes Saavedra",
   price :8900,
   category : "Literatura Clásica",
   img : "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/198/m_libros/portada_don-quijote-de-la-mancha_miguel-de-cervantes_201504281253.png",
   stock : 15,
   description : "Otro clásico, que rompió con todos los esquemas de las novelas de caballería de la época, sale de nuestras tierras. Nos referimos a Don Quijote de la Mancha, conocido alrededor del mundo y, sí, uno de los libros clásicos de la literatura que consideramos imprescindibles. En él se relatan las aventuras de Don Quijote junto a Pedro Sancho."
},{
    id : 7,
    title : "Los tres mosqueteros" ,
    author : "Alejandro Dumas",
    price :8500,
    category : "Literatura Clásica",
    img : "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/372/m_libros/portada_los-tres-mosqueteros_alexandre-dumas_202303101740.jpg",
    stock : 15,
    description :"Una de las mejores novelas de aventuras de todos los tiempos y un clásico indiscutible del género de capa y espada."
   
},{
    id : 8,
    title : "Moby Dick",
    author : "Herman Melville",
    price :6300,
    category : "Literatura Clásica",
    img : "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/191/m_libros/portada_moby-dick_herman-melville_201412151351.jpg",
    stock : 15,
    description : "El lector, sin duda algo aturdido por su larga navegación, se encuentra abrumado en el trágico final: más adelante, cuando vuelva a abrir Moby Dick, por el comienzo o no, aunque ya sepa todo el desarrollo, no dejará de sentirse de nuevo arrastrado por la voz de Melville a navegar de nuevo, páginas y páginas."
},{
    id : 9,
    title : "Sé amable contigo mismo",
    author : "Kristin Neff",
    price :5200,
    category : "Libro Autoayuda",
    img : "https://habilidadsocial.com/wp-content/uploads/2018/04/Se%CC%81-amable-contigo-mismo.jpg",
    stock : 15,
    description : "La búsqueda incansable de una autoestima sana se ha convertido en una religión tiránica. Nuestra cultura ultra competitiva nos indica que tenemos que estar por encima de la media para sentirnos bien con nosotros mismos."
},{
    id : 10,
    title : "Cuestión de confianza",
    author : "Dr. Russ Harris",
    price :6200,
    category : "Libro Autoayuda",
    img : "https://habilidadsocial.com/wp-content/uploads/2018/04/cuestion-de-confianza.jpg",
    stock : 15,
    descripcion : "Un libro imprescindible para cualquier persona que desee liberarse de sus pensamientos y emociones negativas. Se trata de una obra extraordinariamente práctica sobre terapia de compromiso y aceptación, un enfoque que ya ha demostrado su eficacia en multitud de estudios científicos."
},{
    id : 11,
    title : "El poder del ahora",
    author : "Eckhart Tolle",
    price :4800,
    category : "Libro Autoayuda",
    img : "https://habilidadsocial.com/wp-content/uploads/2018/04/el-poder-del-ahora.jpg",
    description : " Se trata de uno de los mayores bestsellers a nivel mundial, en el que Tolle propone varias estrategias para centrarte en el momento presente y aprender a convivir con tu voz interior."
},{
    id : 12,
    title : "El hombre en busca de sentido",
    author : "Viktor Frankl",
    price :5400,
    category : "Libro Autoayuda",
    img : "https://m.media-amazon.com/images/I/413BSRDOlsL._SX324_BO1,204,203,200_.jpg",
    description : "El hombre en busca de sentido es el estremecedor relato en el que Viktor Frankl nos narra su experiencia en los campos de concentración."
}

]
export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}