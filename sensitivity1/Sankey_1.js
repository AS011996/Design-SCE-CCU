let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0019, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0363, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.8868, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.045, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.8781, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0404, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0036, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0404, "optimal":"yes"} ]}; 
