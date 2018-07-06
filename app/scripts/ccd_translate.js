var fs = require("fs");

console.log(process.argv[2]);
//file = fs.open(process.argv[1]);

fileContent = fs.readFileSync(process.argv[2]);

file_json =  JSON.parse(fileContent);

rows = file_json.rows;
for (row of rows) {
    if (row['ParameterValueHEX'].slice(0,2) == '0x') {
        console.log(row['ParameterValueHEX']);
        let rowno = parseInt(row['ParameterValueHEX'],16)
        
        let rowno_sign = 0;
        if ((rowno & 0x80) > 0) {
            rowno_sign = rowno - 0x100;
        }
        console.log('rowno : ',rowno,"; rowno_sign:",rowno_sign);
        row['ParameterValueDEC'] = rowno.toString() + ((rowno_sign == 0) ? '': (' or ' + rowno_sign.toString()))
    }
}

//file_new = fs.open(process.argv[1]+".new","w");
fs.writeFileSync(process.argv[2]+".new",JSON.stringify(file_json));
//file_new.close();