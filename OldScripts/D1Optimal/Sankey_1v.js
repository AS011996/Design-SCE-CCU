let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.002, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7142, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0002, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0026, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":0.0001, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0153, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7017, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.01, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.002, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0012, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0004, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0016, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0006, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0009, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0002, "optimal":"yes"} ]}; 
