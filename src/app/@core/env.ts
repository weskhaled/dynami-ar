const BACK_URL = 'https://weslati-khaled.herokuapp.com/' ;
// const BACK_URL = 'http://medicallabs.wes/' ;
const BACK_API = BACK_URL + 'api/' ;
const V_API = BACK_API + 'v1/' ;
export class ENV {  
    public static  client_id = 6;
    public static  client_secret = 'v9IB4luyWjebXwVDXjPjGkXav0NgWmGJpplkOYgP';
    // local
    // public static  client_id = 2;
    // public static  client_secret = 'iVnrz73bW0VtqMk4OvJxEpYO5nXYTdHhsgZ8tuhz';

    public static  URL_TOKEN = BACK_URL + 'oauth/token';
    public static  URL_GET_USER = V_API + 'user';
    public static  URL_LOGOUT = V_API + 'logout';
    // client
    public static  URL_CLIENTS = V_API + 'clients';
    public static  FB_APP_ID = '185939708652009';   
 }