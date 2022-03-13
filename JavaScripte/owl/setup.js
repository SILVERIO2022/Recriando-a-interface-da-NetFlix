$('.owl-carousel').owlCarousel({/*código pegado do site - https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html / 
usado para ativar o carrossel na página  */
    loop:true,/* defini a navegação com false (navegação limitada) e tru (navegação infinita, que segue rodando) */
    margin:5,/* margem entre uma imagem de filme e outra */
    nav:true,/* botões de navegação na parte de baixo das imagens de filmes para rolar o corrossel (false ou true) */
    responsive:{/* adaptação dos elementos em diferentes tamanhos de tela */
        0:{/* quando tiver de 0 a 599 pxs será mostrado 1 item do carrossel */
            items:1
        },
        600:{/* entre 600 a 999 pxs mostrará 3 itens */
            items:3
        },
        1000:{/* mais de 1000 pxs mostrará 5 itens */
            items:5
        }
    }
})