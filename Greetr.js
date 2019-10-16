(function(global, $) {

    var Greetr = function(firstN, lastN, language) {
        return new Greetr.init(firstN, lastN, language);
    }

    var supportedLangs = ['en', 'es','kor'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
        kor: '안녕'
    }

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        kor: '안녕하세요'
    }
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
        kor: '로그인'
    }

    Greetr.prototype = {
        fullN: function() {
            return this.firstN + ' ' + this.lastN;
        },
        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw `Not supported language!`;
            }
        },
        greeting: function() {
            return `${greetings[this.language]}, ${this.firstN}`;
        },
        formalGreeting: function() {
            return `${formalGreetings[this.language]}, ${this.fullN()}`;
        },
        greet: function(formal) {
            var msg;

            if(formal) {
                msg = this.formalGreeting();
            }else {
                msg = this.greeting();
            }
            if(console) {
                console.log(msg);
            }
            return this;
        },
        log: function() {
            if(console) {
                console.log(`${logMessages[this.language]}: ${this.fullN()}`);
            }
            return this;
        },
        setLang: function(newL) {
            this.language = newL;
            this.validate();
            return this;
        },
        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw `jQuery not loaded`;
            }
            if(!selector) {
                throw `selector not loaded`;
            }

            var msg;

            if(formal) {
                msg = this.formalGreeting();
            }else {
                msg = this.greeting();
            }

            $(selector).html(msg);
            
            return this;
        }
    };

    Greetr.init = function(firstN, lastN, language) {
        var self = this;
        self.firstN = firstN || '';
        self.lastN = lastN || '';
        self.language = language || 'en';

        self.validate();
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
}(window, jQuery));