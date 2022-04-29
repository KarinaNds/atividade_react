import './App.css';
import imagem1 from "./doctorwhoflux.jpg";
import imagem2 from "./legends-of-tomorrow-season-7-poster.jpg";
import imagem3 from "./orphan-black.jpg";
import imagem4 from "./sisyphus.jpg";
import imagem5 from "./wynonnaearp.jpg";
import imagem6 from "./vincenzo.jpg";
import imagem7 from "./killingeve.jpg";
import imagem8 from "./batwoman.jpg";
import imagem9 from "./arrow.jpg";
import imagem10 from "./supergirl.jpg";
import imagem11 from "./the_flash.jpg";


function App() {
  return (
    <div className="App"> 
       <div className="Main">
         <div className="cabecalho"> 
         

        

         <a href="https://doctorwhobrasil.com.br/">Login</a>
         <a href="https://doctorwhobrasil.com.br/">Cadatro</a>"
         
         
         </div>

           <div className="menu">
             <a href="https://doctorwhobrasil.com.br/">Menu</a>
             <a href="https://www.adorocinema.com/series/serie-19136/">Conteudo</a>
             <a href="https://www.adorocinema.com/series/serie-19566/">Galeria de Fotos</a>
           </div>

           <div className="conteudo">
             <h1>Series</h1>
             <p>Uma série de televisão pode ser ficcional ou documental, possui um número preestabelecido
                de episódios por temporada. O modelo padrão estadunidense é de cerca de 13 capítulos por 
                temporada,[5][6] que iniciam num mesmo período todo ano: o outono (primavera, no hemisfério Sul) 
                para grandes estreias, e o midseason, para estreias menores. Se a temporada agrada o espectador
                e traz retorno de audiência para a emissora de TV, é contratada uma nova temporada e são 
                feitas pequenas alterações na trama a fim de melhorar a aceitação e manter o espectador 
                interessado. Essas mudanças, contudo, nunca são profundas. Se uma temporada não agrada
                o espectador ou os donos da emissora, assim como a novela, a série é cancelada, muitas vezes 
                sob o protesto dos fãs.


                No Brasil, as séries foram amplamente produzidas desde a criação da TV, até 1963, quando as 
                telenovelas passaram a ser diárias. Exemplos dessa fase são: Alô, Doçura, com Eva Wilma e John Herbert,
                maior êxito desta fase, inspirado no americano I Love Lucy. Outros sucessos da época são Vigilante 
                Rodoviário na Tupi e Capitão 7 na Record.

                Apesar de a Rede Globo produzir seriados como A Grande Família, Ciranda, cirandinha e o Caso Especial,
                uma espécie de teleteatro, as séries só ganhariam força com a extinção da "novela das 22h", onde, 
                depois da reexibição de Gabriela, o horário foi ocupado por séries como Malu Mulher, Carga Pesada 
                e Plantão de Polícia. Depois desta fase, mais e mais seriados foram produzidos, e outras emissoras 
                também aderiram.
                
             </p>


              
              
              
           </div>

           <div className="galeria_de_fotos">
             
           <a href="https://doctorwhobrasil.com.br/"><img src={imagem1} /> </a>
           <a href="https://www.imdb.com/title/tt4532368/?ref_=nv_sr_srsg_3"><img src={imagem2} /> </a>
           <a href="https://www.imdb.com/title/tt2234222/?msclkid=1b06f108c7d011ec95971c40452429b3"><img src={imagem3} /> </a>
           <a href="https://observatoriodocinema.uol.com.br/series-e-tv/2021/06/saiba-tudo-sobre-a-serie-de-suspense-que-esta-fazendo-o-maior-sucesso-na-netflix#:~:text=O%20Mito%20de%20S%C3%ADsifo%20%C3%A9%20uma%20s%C3%A9rie%20coreana,entre%2017%20de%20fevereiro%20e%208%20de%20abril.?msclkid=a63aaf27c7d011ec87d71538699b85bb"><img src={imagem4} /></a>
           <a href="https://www.syfy.com/wynonna-earp?msclkid=fa528031c7d011ec893c17e2adaba48e"><img src={imagem5} /></a>
           <a href="https://meubias.com.br/vincenzo/?msclkid=562d9c32c7d111ec87da3e58ad5f7122"><img src={imagem6} /></a>
           <a href="https://www.imdb.com/title/tt7016936/?msclkid=eaf12493c7df11ecba21ace4ffb185f7"><img src={imagem7} /></a>
           <a href="https://www.imdb.com/title/tt8712204/?msclkid=ddc4e49ac7e011ec89ae17a5f2d2fa63"><img src={imagem8} /></a>
           <a href="https://www.imdb.com/title/tt2193021/?msclkid=6f3845afc7e111ecae3917f7b1d546f3"><img src={imagem9} /></a>
           <a href="https://www.imdb.com/title/tt4016454/?msclkid=e78c8014c7e111ec96706eb40eda8ff5"><img src={imagem10} /></a>
           <a href="https://www.imdb.com/title/tt3107288/?msclkid=2c6c6f0ec7e211eca3890dd15a75d72d"><img src={imagem11} /></a>
            
             
          
           </div>


           <div className="rodape">
          
           </div>


    
      </div>
    
    </div>

  );
}

export default App;
