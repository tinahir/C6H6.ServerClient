import {Stomp} from './stomp'

const serverUrl = "ws://localhost:8011/stomp"

export default class StompClient
{
    constructor(){
    }

    static initClient(){
        this.handlers = [];
        this.client = Stomp.client(serverUrl);
    }

    static subscribe(fn){
            this.handlers.push(fn);
    }

    static unSubscribe(fn){
           this.handlers = this.handlers.filter((item) =>{
                if (item !== fn) {
                    return item;
                }
           }
        );
    }

    static execute(argument, thisObj){
            const scope = thisObj || window;
            this.handlers.forEach((item) => {
            item.call(scope, o);
        });
    }

    static connect() {
        return new Promise((resolve, reject) => {
           this.client.connect({}, () =>{
                resolve(true);
            },
            (error) =>{
                reject(false);
                console.error(error);
            });
        });
    }

    static getData(header) {
        return new Promise((resolve, reject) => {
            this.client.subscribe(header, (message) => {
                execute(JSON.parse(header.body));
                resolve(true);
            },
            (error) =>{
                resolve(false);
            });
        });
    }
}