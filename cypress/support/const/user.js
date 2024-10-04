import { Compras } from '../actions/compras';
import { Homepage } from '../actions/homepage';
import { Lenguajes } from '../actions/lenguajes';
import { Login} from   '../actions/login';

export class User {

    paraComprar = new Compras();
    paraLenguajes = new Lenguajes();
    paraIrHomepage = new Homepage();
    paraLogin = new Login();


}