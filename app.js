let type = document.getElementById('type')
let btn = document.querySelector('button')

let str = ''
let start = false

function calc(s){
    if(start == true){
        str = ''
        start = false
    }
    switch(s){
        case 'b': 
            let arr = str.split('')
            arr.splice(arr.length-1,1)
            str = arr.join('')
            break 
        case 't': 
            str = Math.pow(str*1,2)
            break
        case 'c':
            str = ''
            break
        
        case 'i':
            str = Math.sqrt(str*1)
            break
        case '*':
        case '/':
        case '+':
        case '-':
            if(str[str.length-1]=='*' || str[str.length-1]=='/' || str[str.length-1]=='+' || str[str.length-1]=='-'){
                let arr = str.split('')
                arr.splice(arr.length-1,1)
                str = arr.join('')
            }
            str += s
            break
        case '=':
            str = eval(str)
            start = true
            break
        default: 
        if(str == '0' || str == '00') str = s
        else str += s
    }
    
    type.innerHTML = str
}


