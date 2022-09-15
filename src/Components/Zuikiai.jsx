/*Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. 
Spalva tekstui nurodoma komponento viduje naudojant style.*/

function Zuikiai({spalva, darVienas, das})

{
    return(<div> <h1 style={{color:spalva}}>LABAS, ZUIKI!{darVienas} {das}</h1>

    </div>
        
        )
}
export default Zuikiai;


