export function contentAbout () {
    const aboutContainer = document.querySelector('.about-container')

    aboutContainer.insertAdjacentHTML("beforeend", `
        <p>Olá! Meu nome é <span>Weslley Higor</span> e sou apaixonado por tecnologia desde que me entendo por gente. Sempre fui fascinado pelo mundo da programação e, desde que comecei a estudar, tenho me dedicado a aprender cada vez mais sobre essa área.
        </p>

        <p>Sou uma pessoa <span>curiosa e criativa</span>, sempre em busca de novos desafios e oportunidades para desenvolver minhas habilidades e conhecimentos. Gosto de trabalhar em equipe, compartilhar ideias e aprender com os outros, pois acredito que essa troca de experiências é essencial para o meu crescimento profissional.
        </p>
        
        <p>Atualmente, estou em busca de uma oportunidade para colocar em prática tudo o que aprendi até aqui e contribuir para o desenvolvimento de soluções tecnológicas inovadoras. Tenho conhecimentos em diversas linguagens de programação e ferramentas, além de estar sempre em busca de aprender novos metodos e tecnologias.
        </p>
        
        <p>Se você está em busca de alguém que seja apaixonado por tecnologia, que ame programação e esteja sempre em busca de novos desafios, então <span>eu sou a pessoa certa!</span> 
        </p>

        <p>Vamos conversar mais sobre como eu posso contribuir para o sucesso do seu projeto?</p>    
    `)
}



