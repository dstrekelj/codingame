function encode(array) {
    var code = "";

    for (var i = 0; i < array.length; i++) {
        var binary = array[i].charCodeAt(0).toString(2).split("");

        var norris = "0000000".split("");

        for (var j = 0; j < binary.length; j++) {
            norris[norris.length - 1 - j] = binary[binary.length -1 - j];
        }

        code += norris.join("");
    }

    return code;
}

var MESSAGE = readline().split("");

var binary = encode(MESSAGE).split("");
var norris = "";

var index = 0;

while(index < binary.length) {
    if (binary[index] == 1) {
        norris += "0 ";

        while(true) {
            if (binary[index] == 1) {
                norris += "0";
                index += 1;
            } else {
                norris += " ";
                break;
            }
        }
    }

    if (binary[index] == 0) {
        norris += "00 ";

        while (true) {
            if (binary[index] == 0) {
                norris += "0";
                index +=1;
            } else {
                norris += " ";
                break;
            }
        }
    }
}

print(norris.trim());
