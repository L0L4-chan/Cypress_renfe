import { Purchase } from '../actions/purchase';
import { Homepage } from '../actions/homepage';
import { Lenguages } from '../actions/lenguajes';
import { Login} from   '../actions/login';
import { Navigation } from '../actions/navigation';
import { Payment } from '../actions/payment';

export class User {

    shopping = new Purchase();
    languages = new Lenguages();
    goToHomepage = new Homepage();
    forLogin = new Login();
    forSurfing= new Navigation(); 
    forPayment = new Payment();
}