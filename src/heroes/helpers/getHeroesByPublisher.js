import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
  const validPublisher = [ 'DC Comics', 'Marvel Comics' ];
  if(validPublisher.includes(publisher)){
    return heroes.filter( heroe => heroe.publisher === publisher );
  } else {
    throw new Error(`${ publisher } is not a valid publisher`);
  }
}