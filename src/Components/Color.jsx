/*Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props,
 kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.*/

 function Color({spalva, darVienas, das})

{
    return(<div> <h1 style={{color:spalva=1}}>GYVŪNŲ SĄRAŠAS SU APRAŠYMAIS</h1>

    </div>
        
        )
}
export default Color;

