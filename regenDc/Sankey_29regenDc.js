let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"rPaper"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.4823, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0022, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0402, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0013, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.3441, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":8.5099, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":7.7992, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0423, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.0563, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":2.4019, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":3.1649, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.9528, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.6275, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0124, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Landfill", "value":0.0163, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0049, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0048, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.16899999999999998, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0235, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0036, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0305, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.7543, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0001, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.002, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0012, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0001, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0238, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0046, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0021, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.7437, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0098, "optimal":"yes"} ]}; 
