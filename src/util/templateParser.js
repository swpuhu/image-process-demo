const test = `
    <div class="wrapper">
        <div class="child-1">
            hello
        </div>
        <div class="child-2">
            world
        </div>
    </div>
`

class Token {
    constructor (type, value) {
        this.type = type;
        this.value = value;
    }
}

class TokenArray extends Array {
    constructor () {
        super();
    }

    peek() {
        return this[0];
    }

    read() {
        this.shift();
    }
}

function tokenParser(str) {

    function isPlainText(c) {
        return /[^<>]/.test(c);
    }

    function isAlphabet(c) {
        return /[a-zA-Z]/.test(c);
    }

    function isQuote(c) {
        return c === '"' || c === '\'';
    }

    function isSlash(c) {
        return c === '\/';
    }

    function isLt(c) {
        return c === '<';
    }

    function isGt(c) {
        return c === '>';
    }

    function isSpace(c) {
        return c === ' ' || c === '\t';
    }

    function isReturn(c) {
        return c === '\n';
    }
    const STATE = {
        INIT: 'INIT',
        TAG_START: 'TAG_START',
        TAG_IN: 'TAG_IN',
        TAG_END: 'TAG_END',
        ATTR_KEY: 'ATTR_KEY',
        ATTR_VAL: 'ATTR_VAL',
        PLAIN_TXT: 'PLAIN_TXT',
        SPACE: 'SPACE',
        LT: 'LT',
        GT: 'GT',
        RETURN: 'RETURN',
        OTHER: 'OTHER'
    }

    let currentState = STATE.INIT;
    let result = new TokenArray();
    let tokenStr = '';

    function initState(c) {
        tokenStr = c;
        if (isLt(c)) {
            currentState = STATE.TAG_START;
        } else if (isPlainText(c)) {
            currentState = STATE.PLAIN_TXT;
        }
    }


    function transferState(c) {    
        if (currentState === STATE.INIT) {
            initState(c);
        } else if (currentState === STATE.LT) {
            if (isSlash(c)) {
                tokenStr += c;
                currentState = STATE.TAG_END;
            } else if (isAlphabet(c)) {
                tokenStr += c;
                currentState = STATE.TAG_START;
            } else if (isSpace(c)) {

            } else {
                let token = new Token(STATE.LT, tokenStr);
                initState(c);
            }
        } else if (currentState === STATE.GT) {
            let token = new Token(STATE.TAG_END, tokenStr);
            initState(c);
        } else if (currentState === STATE.TAG_START) {
            if (isAlphabet(c)) {
                tokenStr += c;
            } else if (isSpace(c)) {
                let token = new Token(STATE.TAG_START, tokenStr);
                initState(c);
            }
        }
    }

    for (let c of str) {
        transferState(c);
    }   
    transferState();
}

function parse(str) {
    
    console.log(str);
}

parse(test)