import ImgTeste from "../components/Imagem";
import LinkGenerico from "../components/LinkGenerico/LinkGenerico";
import LinkSegundo from "../components/LinkSegundo";
import leao from "../leao.jpeg"



const Primeiro = () => {
    const dados = [

        ["https://www.ibmec.br/" , "Ibmec"],

        ["https://botafogo.com.br/", "botafogo"],

        ["https://estude.ibmec.br/ibmec-hubs", "IbmecHubs"],

        ["https://blog.trello.com/br/trello-para-empresas", "Trello"],

        ["https://color.adobe.com/pt/create/color-wheel", "Color"]

    ];

    const links = dados.map( (ele, i) => (
        <LinkGenerico 
        key={i}
        texto={ele[1]} 
        endereco={ele[0]} 
        />
    
    ))


    

 return (<div>
            <h5>Leão</h5>
            <img src={leao} alt="Imagem do leao" />
            <p>Meu texto</p>
             
             <p1>Links: </p1>
           {links}
    
        </div>);
};

export default Primeiro;